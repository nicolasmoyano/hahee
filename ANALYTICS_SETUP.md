# Google Analytics Funnel Setup Guide

## Events Implemented

All tracking events are now active on your site. Here's what's being tracked:

### 1. **Booking Funnel Events**

Track users from landing to booking completion:

**Event Name:** `booking_initiated`
**Locations tracked:**

- `header_desktop` - Desktop header "Boka nu" button
- `header_mobile` - Mobile header "Boka nu" button
- `hero_home` - Homepage hero "Boka nu" button
- `symptom_ryggsmarta_hero` - Ryggsmärta page hero button
- `symptom_ryggsmarta_cta` - Ryggsmärta page CTA button
- `symptom_nacksmarta_hero` - Nacksmärta page hero button
- `symptom_nacksmarta_cta` - Nacksmärta page CTA button
- `symptom_ischias_hero` - Ischias page hero button
- `symptom_ischias_cta` - Ischias page CTA button
- `symptom_huvudvark_hero` - Huvudvärk page hero button
- `symptom_huvudvark_cta` - Huvudvärk page CTA button
- `symptom_idrottsskador_hero` - Idrottsskador page hero button
- `symptom_idrottsskador_cta` - Idrottsskador page CTA button

**Parameters:**

- `source` - Where the button was clicked
- `event_category` - "engagement"
- `event_label` - "Boka nu"

---

### 2. **Consultation Form Funnel Events**

Track consultation form engagement:

**Event Name:** `consultation_form_view`
**Locations tracked:**

- `hero_home` - Homepage hero "Konsultation" button
- `symptom_ryggsmarta_hero` - Ryggsmärta page hero button
- `symptom_ryggsmarta_cta` - Ryggsmärta page CTA button
- `symptom_nacksmarta_hero` - Nacksmärta page hero button
- `symptom_nacksmarta_cta` - Nacksmärta page CTA button
- `symptom_ischias_hero` - Ischias page hero button
- `symptom_ischias_cta` - Ischias page CTA button
- `symptom_huvudvark_hero` - Huvudvärk page hero button
- `symptom_huvudvark_cta` - Huvudvärk page CTA button
- `symptom_idrottsskador_hero` - Idrottsskador page hero button
- `symptom_idrottsskador_cta` - Idrottsskador page CTA button

**Event Name:** `consultation_submit`
**Triggered:** When user successfully submits consultation form

**Parameters:**

- `problem_areas` - Selected problem areas (comma-separated)
- `event_category` - "conversion"
- `event_label` - "Form Submission"

---

## Setting Up Funnels in Google Analytics 4

### Funnel 1: Booking Conversion

**Goal:** Track users clicking "Boka nu" buttons

1. Go to Google Analytics 4
2. Navigate to **Admin > Data display > Events**
3. Find `booking_initiated` event (may take 24-48 hours to appear)
4. Navigate to **Explore > Funnel exploration**
5. Create funnel:
   - **Step 1:** Page view (any page)
   - **Step 2:** `booking_initiated` event
   - **Step 3:** External booking page view (if trackable via referrer)

**Use the `source` parameter to segment:**

- Header clicks vs page content clicks
- Home page vs symptom pages
- Hero vs CTA button performance

---

### Funnel 2: Consultation Form Conversion

**Goal:** Track form engagement and submissions

1. Navigate to **Explore > Funnel exploration**
2. Create funnel:
   - **Step 1:** Page view (any page)
   - **Step 2:** `consultation_form_view` event
   - **Step 3:** Scroll to consultation section (optional)
   - **Step 4:** `consultation_submit` event

**Analyze:**

- Drop-off rates between steps
- Which pages drive most form views
- Problem areas most commonly selected

---

### Funnel 3: Symptom Discovery Journey

**Goal:** Track user journey through symptom pages

1. Navigate to **Explore > Funnel exploration**
2. Create funnel:
   - **Step 1:** Homepage view
   - **Step 2:** `/symptomer` page view
   - **Step 3:** Any symptom page view
   - **Step 4:** `booking_initiated` OR `consultation_form_view`

**Analyze:**

- Symptom page conversion rates
- Which symptoms drive most bookings
- User path through content

---

## Key Metrics to Monitor

### Conversion Rates

- **Booking Click Rate:** % of visitors who click "Boka nu"
- **Form Submission Rate:** % of form viewers who submit
- **Page-to-Booking:** Conversion rate by landing page

### Engagement Metrics

- **Button Click Distribution:** Which buttons get most clicks
- **Problem Area Popularity:** Most selected consultation topics
- **Symptom Page Performance:** Which pages convert best

### User Journey Insights

- **Entry Pages:** Where users start their journey
- **Exit Pages:** Where users leave without converting
- **Multi-touch Attribution:** How many touchpoints before conversion

---

## Custom Reports to Create

### 1. Booking Source Report

- **Dimension:** Event parameter `source`
- **Metric:** Event count for `booking_initiated`
- **Goal:** Identify highest-converting button locations

### 2. Symptom Page Performance

- **Dimension:** Page path
- **Metrics:**
  - Page views
  - `booking_initiated` count
  - `consultation_form_view` count
- **Goal:** Compare symptom page effectiveness

### 3. Consultation Problem Areas

- **Dimension:** Event parameter `problem_areas`
- **Metric:** Event count for `consultation_submit`
- **Goal:** Understand patient needs and pain points

---

## Testing Your Setup

To verify tracking is working:

1. **Real-time Reports:** Go to Reports > Realtime
2. Click various buttons on your site
3. Watch for events appearing in real-time view
4. Check event parameters are being captured

Expected events in real-time:

- `booking_initiated` (when clicking Boka nu)
- `consultation_form_view` (when clicking Konsultation)
- `consultation_submit` (when submitting form)

---

## Next Steps

1. ✅ **Wait 24-48 hours** for data collection
2. ✅ **Verify events** in GA4 Events report
3. ✅ **Create funnels** as outlined above
4. ✅ **Set up alerts** for conversion drops
5. ✅ **Create dashboard** with key metrics
6. ✅ **Review weekly** to optimize conversion paths

---

## Tips for Optimization

- **A/B test button placement** using source parameter data
- **Improve low-performing pages** based on conversion rates
- **Adjust content** on symptom pages that show high bounce
- **Streamline form** if drop-off is high between view and submit
- **Add more CTAs** to pages with high engagement but low conversion

---

## Support

If events aren't showing up:

1. Check browser console for JavaScript errors
2. Verify Google Analytics tag is loading (use GA Debugger extension)
3. Test in incognito mode
4. Check that G-EFEE7H5TD7 is the correct measurement ID
