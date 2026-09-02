import { pathToFileURL } from "node:url";

export const SITE_ORIGIN = "https://naprapat-hanna.se";
export const INDEXNOW_KEY = "5fbbc9684ea4578aeb2d3dae25ce1aa0";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${SITE_ORIGIN}/`));
}

export async function waitForKey(fetchImpl, timeoutSeconds = 0) {
  const keyLocation = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;
  const deadline = Date.now() + timeoutSeconds * 1000;

  do {
    try {
      const response = await fetchImpl(keyLocation, { cache: "no-store" });
      if (response.ok && (await response.text()).trim() === INDEXNOW_KEY) {
        return keyLocation;
      }
    } catch {
      // The production deployment may still be propagating.
    }

    if (Date.now() >= deadline) break;
    await new Promise((resolve) => setTimeout(resolve, 15_000));
  } while (true);

  throw new Error(`IndexNow key is not available at ${keyLocation}`);
}

export async function submitIndexNow({
  fetchImpl = fetch,
  urls = [],
  waitForKeySeconds = 0,
} = {}) {
  const keyLocation = await waitForKey(fetchImpl, waitForKeySeconds);
  let urlList = urls;

  if (urlList.length === 0) {
    const sitemapResponse = await fetchImpl(`${SITE_ORIGIN}/sitemap.xml`, {
      cache: "no-store",
    });
    if (!sitemapResponse.ok) {
      throw new Error(`Could not fetch sitemap: HTTP ${sitemapResponse.status}`);
    }
    urlList = parseSitemap(await sitemapResponse.text());
  }

  urlList = [...new Set(urlList)].filter((url) =>
    url.startsWith(`${SITE_ORIGIN}/`),
  );

  if (urlList.length === 0) {
    throw new Error("No naprapat-hanna.se URLs were found for submission");
  }

  const payload = {
    host: "naprapat-hanna.se",
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  const response = await fetchImpl(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (![200, 202].includes(response.status)) {
    const body = await response.text();
    throw new Error(
      `IndexNow rejected the submission: HTTP ${response.status}${body ? ` — ${body}` : ""}`,
    );
  }

  return { status: response.status, submitted: urlList.length, urlList };
}

function parseCliArgs(argv) {
  const urls = argv.filter((arg) => arg.startsWith("https://"));
  const waitArg = argv.find((arg) => arg.startsWith("--wait-for-key="));
  const waitForKeySeconds = waitArg ? Number(waitArg.split("=")[1]) : 0;

  if (!Number.isFinite(waitForKeySeconds) || waitForKeySeconds < 0) {
    throw new Error("--wait-for-key must be a non-negative number of seconds");
  }

  return { urls, waitForKeySeconds };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await submitIndexNow(parseCliArgs(process.argv.slice(2)));
  console.log(
    `IndexNow accepted ${result.submitted} URL${result.submitted === 1 ? "" : "s"} (HTTP ${result.status}).`,
  );
}
