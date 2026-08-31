import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3100";
const symptomRoutes = [
  "/ryggsmarta",
  "/nacksmarta",
  "/ischias",
  "/huvudvark",
  "/idrottsskador",
];
const allRoutes = ["/", "/symptomer", "/naprapat-odenplan", ...symptomRoutes];

async function get(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, `${path} should return HTTP 200`);
  return response.text();
}

function titleFrom(html) {
  return html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() ?? "";
}

function jsonLdTypes(html) {
  const types = [];
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const value = JSON.parse(match[1]);
    const visit = (node) => {
      if (Array.isArray(node)) return node.forEach(visit);
      if (!node || typeof node !== "object") return;
      if (node["@type"]) types.push(node["@type"]);
      Object.values(node).forEach(visit);
    };
    visit(value);
  }
  return types.flat();
}

test("homepage targets the local Odenplan and Vasastan search intent", async () => {
  const html = await get("/");
  const title = titleFrom(html);
  assert.match(title, /Naprapat Odenplan/i);
  assert.match(title, /Vasastan/i);
  assert.ok(title.length <= 60, `homepage title is ${title.length} characters`);
});

test("all indexable pages have concise, unique titles", async () => {
  const titles = [];
  for (const route of allRoutes) {
    const title = titleFrom(await get(route));
    assert.ok(title.length > 20, `${route} needs a descriptive title`);
    assert.ok(title.length <= 60, `${route} title is ${title.length} characters`);
    titles.push(title);
  }
  assert.equal(new Set(titles).size, titles.length, "page titles must be unique");
});

test("symptom pages expose connected webpage and breadcrumb schema", async () => {
  for (const route of symptomRoutes) {
    const types = jsonLdTypes(await get(route));
    assert.ok(types.includes("MedicalWebPage"), `${route} lacks MedicalWebPage schema`);
    assert.ok(types.includes("BreadcrumbList"), `${route} lacks BreadcrumbList schema`);
  }
});

test("medical pages avoid unsupported outcome claims and include escalation guidance", async () => {
  const prohibited = [
    "mycket effektiv",
    "grundorsaken",
    "felställda ryggkotor",
    "snabbare återhämtning",
    "många patienter upplever",
    "slipp huvudvärken",
    "slipp ischiassmärtan",
    "lindra och förebygga",
    "få tillbaka din rörlighet",
    "behandla båda för bäst resultat",
    "få lindring från nacksmärtan",
    "hitta orsaken till din huvudvärk",
    "en behandling som fungerar för dig",
    "förebygga återfall",
  ];
  for (const route of symptomRoutes) {
    const html = (await get(route)).toLowerCase();
    for (const phrase of prohibited) {
      assert.ok(!html.includes(phrase), `${route} contains unsupported claim: ${phrase}`);
    }
    assert.match(html, /1177/);
    assert.match(html, /112/);
  }
});

test("homepage includes the Google preferred-source deeplink", async () => {
  const html = await get("/");
  assert.match(
    html,
    /https:\/\/www\.google\.com\/preferences\/source\?q=naprapat-hanna\.se/,
  );
  assert.match(html, /Välj som källa i Google/);
});

test("declared site icon exists", async () => {
  const response = await fetch(new URL("/icon.svg", baseUrl));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /svg/);
});
