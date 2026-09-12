import assert from "node:assert/strict";
import test from "node:test";

import {
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  SITE_ORIGIN,
  parseSitemap,
  submitIndexNow,
} from "../scripts/submit-indexnow.mjs";

test("parseSitemap returns only canonical site URLs", () => {
  const xml = `
    <urlset>
      <url><loc>${SITE_ORIGIN}/</loc></url>
      <url><loc>${SITE_ORIGIN}/naprapat-odenplan</loc></url>
      <url><loc>https://example.com/not-ours</loc></url>
    </urlset>`;

  assert.deepEqual(parseSitemap(xml), [
    `${SITE_ORIGIN}/`,
    `${SITE_ORIGIN}/naprapat-odenplan`,
  ]);
});

test("submitIndexNow verifies the public key and sends explicit URLs", async () => {
  const requests = [];
  const fetchImpl = async (url, options = {}) => {
    requests.push({ url, options });

    if (url === `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`) {
      return new Response(INDEXNOW_KEY, { status: 200 });
    }
    if (url === INDEXNOW_ENDPOINT) {
      return new Response("", { status: 202 });
    }
    throw new Error(`Unexpected request: ${url}`);
  };

  const urls = [`${SITE_ORIGIN}/`, `${SITE_ORIGIN}/naprapat-odenplan`];
  const result = await submitIndexNow({ fetchImpl, urls });

  assert.equal(result.status, 202);
  assert.equal(result.submitted, 2);

  const submission = requests.find(({ url }) => url === INDEXNOW_ENDPOINT);
  const body = JSON.parse(submission.options.body);
  assert.deepEqual(body, {
    host: "naprapat-hanna.se",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });
});

test("submitIndexNow rejects URLs from another host", async () => {
  const fetchImpl = async (url) => {
    if (url === `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`) {
      return new Response(INDEXNOW_KEY, { status: 200 });
    }
    throw new Error(`Unexpected request: ${url}`);
  };

  await assert.rejects(
    submitIndexNow({ fetchImpl, urls: ["https://example.com/"] }),
    /No naprapat-hanna\.se URLs/,
  );
});
