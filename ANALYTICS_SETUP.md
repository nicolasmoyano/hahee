# Google Analytics Event Guide

## Events implemented

### Booking clicks: `booking_initiated`

Triggered when a visitor clicks a **Boka nu** button.

Parameters:

- `cta_location` — button location, such as `header_desktop`, `hero_home`, or `symptom_ryggsmarta_cta`
- `event_category` — `engagement`
- `event_label` — `Boka nu`

### Phone clicks: `button_click`

Triggered when a visitor clicks **Ring mig** in the homepage hero or a symptom-page CTA.

Parameters:

- `button_name` — `Ring mig`
- `location` — button location

### Symptom engagement

The site also records:

- `symptom_page_view` — a symptom page was viewed
- `symptom_funnel` — navigation through the symptom journey
- `outbound_click` — selected external links

## Recommended GA4 funnel

Goal: compare the two direct conversion paths.

1. Open **Explore > Funnel exploration**.
2. Use a page view as the first step.
3. Use either `booking_initiated` or `button_click` with `button_name = Ring mig` as the conversion step.
4. Break down results by `cta_location` or `location` to compare pages and placements.

## Key metrics

- Booking click rate by page and CTA location
- Phone click rate by page and CTA location
- Total direct conversion-action rate: booking clicks plus phone clicks
- Symptom-page conversion rate
- Landing pages that produce the most conversion actions

Do not add booking clicks and phone clicks together as unique leads unless user-level deduplication is configured; one visitor can click both.

## Testing

1. Open **Reports > Realtime** in GA4.
2. Click a **Boka nu** button and confirm `booking_initiated` appears.
3. Click **Ring mig** on a device or browser that can handle telephone links and confirm `button_click` appears with `button_name = Ring mig`.
4. Confirm the `cta_location` or `location` parameter identifies the correct CTA.

Events may take 24–48 hours to appear in standard GA4 reports, but they should appear quickly in Realtime or DebugView.
