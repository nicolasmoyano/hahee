# AI-search visibility — implementation note

Last reviewed: 2026-09-01

## What the TikTok gets right

People increasingly receive direct answers and recommendations without visiting a traditional results page. Hanna's business therefore needs to be easy for search and answer systems to crawl, identify, locate and describe consistently.

The practical recommendations worth adopting are:

- make the site crawlable in both Google and Bing ecosystems;
- keep business identity, location, services and booking path explicit;
- answer common patient questions directly and concisely;
- support claims with appropriate evidence and external trust signals;
- notify participating search engines when important URLs change.

## What not to repeat as a claim

- SEO is not dead; answer visibility depends heavily on the same crawlability, relevance, authority and entity consistency that support search visibility.
- A broad “80% of Google searches” statistic should not be used without a clearly defined primary study and methodology.
- IndexNow does not guarantee indexing, ranking, citation or recommendation.
- ChatGPT, Gemini and Claude do not all use one fixed search index in every product or mode.
- Concise copy helps extraction, but it cannot replace accurate information, reputation, reviews, citations or useful service pages.

## Current strengths

- `robots.txt` allows crawling and points to the sitemap.
- The sitemap lists the site's eight public pages.
- Site metadata and structured data identify Hanna, her profession, location and services.
- The Odenplan landing page contains direct local information and visible FAQs.
- Booking is presented as the primary action.

## Implemented in this branch

- A public IndexNow verification key.
- A dependency-free submission script that reads the production sitemap and submits only canonical `naprapat-hanna.se` URLs.
- Automated submission after changes reach `main`, with time for the Vercel production deployment to propagate.
- Tests for sitemap parsing, host restrictions and the exact IndexNow payload.

## Next priorities outside this code change

1. Verify or establish Bing Webmaster Tools and Bing Places ownership.
2. Keep Google Business Profile, Bing Places, Apple Business Connect, ClinicBuddy, Rehabkliniken and professional listings consistent.
3. Continue adding four to six useful, visible questions to high-impression service pages rather than publishing generic AI-written articles.
4. Use short answer-first passages for questions patients actually ask, followed by the necessary medical nuance and 1177/112 guidance.
5. Monitor whether AI assistants cite or mention Hanna for a small fixed set of local, non-personalized prompts. Treat results as directional because answers vary by model, location and session.
6. Measure organic visibility and booking clicks; do not present AI mentions as confirmed appointments.
