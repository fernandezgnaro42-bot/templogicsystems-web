# Field Noir design QA

**Source visual truth:** `/workspace/scratch/e65552a6ed3b/generated_images/exec-3c73f5e7-fd24-461b-b3bd-78537cf8c267.png` (second displayed ideation image, selected for the exact owner slogan).

**Implementation:** browser-rendered preview at the existing local development endpoint, route `/index.html`, dark theme, home top, English.

**Evidence:**
- Initial desktop screenshot: `/workspace/scratch/templogic-field-noir-desktop.jpg` (1348 × 926 pixels, browser CSS viewport reported 1363 × 936; captures omit browser scrollbar pixels).
- Final target-viewport screenshot: `/workspace/scratch/templogic-field-noir-final-desktop.jpg`.
- Full-view comparison: `/workspace/scratch/e65552a6ed3b/field-noir-final-comparison.jpg`.
- Focused hero/typography comparison: `/workspace/scratch/e65552a6ed3b/field-noir-final-hero-comparison.jpg`.
- Mobile 390 × 844 frame evidence: `/workspace/scratch/templogic-field-noir-mobile.jpg`.
- Narrow-phone post-fix evidence: `/workspace/scratch/templogic-field-noir-narrow-final.jpg`.

**Normalization:** source image 1435 × 1096. Final desktop runs inside a real same-origin iframe sized 1435 × 1096 CSS pixels (1420-pixel content width after native scrollbar). The iframe is displayed at scale .82 to fit the cloud browser. Reference and implementation were normalized to 1177 × 899 pixels and combined side-by-side in the same input before review. Mobile frames run at 390 × 844 and 320 × 844 CSS pixels; content widths after scrollbar are 375 and 305. These are browser responsive checks, not physical-device or mobile-user-agent tests.

## Findings and corrections

1. **[P2, resolved] Hero vertical proportions.** The initial implementation put the method strip farther below the fold than the target. Reduced desktop hero vertical padding from 52/42 to 45/30 pixels; final hero height is 557 CSS pixels. Post-fix full-view comparison retains the selected hierarchy and mission/method sequence.
2. **[P2, resolved] Narrow-phone headline wrapping.** At 320 CSS pixels, the first slogan phrase wrapped into two lines. Reduced the mobile minimum heading size from 35 to 28 pixels. Fresh browser capture confirms the exact slogan in three lines, a 90-pixel heading height, and no horizontal overflow (305-pixel scrollWidth and clientWidth).
3. **[P3, resolved] Mobile supporting-copy rhythm.** Hide the desktop-only line break on small screens so supporting copy wraps naturally.

## Required fidelity surfaces

- **Fonts/typography:** actual Space Grotesk and JetBrains Mono loaded successfully through bundled Latin variable fonts. The exact requested English slogan remains prominent on both EN and ES homepages. Fonts are intentionally actual specified font families rather than the image model's approximate rendering. Spanish accents render correctly.
- **Spacing/layout:** matched hero/mission/method hierarchy, open columns, cyan hairline separators, readable button padding and responsive stacked sections. Native corporate logo replaces the mock's generic diamond intentionally. No actionable layout collision or overflow observed.
- **Colors/tokens:** near-black/navy surfaces, cyan headline/CTA accents, muted readable copy, restrained amber for illustrative investigation notices. No white surface blocks.
- **Image quality:** separate generated raster photo matches technician-on-right, dark-left mechanical-room composition. Closed cabinet is intentional. The optimized WebP is embedded as an image within an SVG container; it is not a vector reconstruction or placeholder drawing. Hero is explicitly labeled illustrative and AI-generated.
- **Copy/content:** owner slogan is verbatim. Mission, field experience, technician authority and evidence-led diagnosis remain. No invented prediction accuracy, customer results or live telemetry claims. Sample panel is explicitly disconnected. Existing product routes are preserved.

## Interaction and technical checks

- `npm run check`: passed; eight corporate pages and 106 local links/assets, exact home headlines, corresponding language routes, anchors and bundled fonts checked.
- `git diff --check`: passed.
- Browser: EN home → Explore Praecura → pilot page → existing email target verified without sending anything.
- Mobile: Menu opens, Close closes, aria-expanded updates, ES selection navigates to Spanish home with closed menu. Spanish Menú/Cerrar controls checked at 320 pixels.
- Browser DOM: desktop and both phone widths have no horizontal overflow; hero and logo load; fonts loaded.
- Console: no application-origin errors found. Existing cloud-browser extension metadata errors were separately identified by their chrome-extension URL and are not site errors.
- Accessibility: semantic main/header/nav/sections, one h1, skip link, native links/buttons, visible focus styles, reduced-motion override and no-JavaScript visible navigation retained. Escape closing is implemented; direct keyboard automation and an OS reduced-motion switch were not available in this browser API, so those two physical interactions remain manual follow-up checks.

## Follow-up polish

- The reference's decorative outline numerals and generic diamond are intentionally replaced by the requested real monospaced type and existing company mark.
- Physical iPhone/Android and screen-reader testing remain useful after release; no claim of physical-device testing is made.

**Implementation checklist:** selected image reviewed; separate hero generated and installed; bilingual pages and core links functional; source/implementation full and focused comparisons inspected; P2 findings corrected and re-captured; no remaining actionable P0/P1/P2 findings.

final result: passed
