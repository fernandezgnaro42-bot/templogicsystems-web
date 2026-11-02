# TempLogic Field Noir Implementation Plan

> **For agentic workers:** Execute natively in this session using the approved visual target. Track each bounded task below.

**Goal:** Implement the selected mission-led High-Tech Noir design with the exact owner slogan.
**Architecture:** Preserve the existing static GitHub Pages routes and tool pages. Apply shared theme and navigation, rebuild EN/ES homepages, and add browser-only interactions with Node.js development tooling.
**Tech Stack:** HTML5, CSS, JavaScript ES modules, Node.js 22+, self-contained licensed variable fonts.
**Spec:** `../specs/2026-11-01-field-noir-design.md`

## Global Constraints
- Exact English hero slogan: Better Diagnostics. Better Decisions. Better Lives.
- Exact product spelling: Praecura.
- Existing product tool pages, mail links and language routes must survive.
- Sample data and AI illustration are labeled; no fake performance promises.
- No mandatory JavaScript for basic navigation or contact access.

## Review Focus
- Long English slogan at narrow phone widths must remain readable and uncut.
- Spanish navigation must fit and the EN link must preserve the corresponding route.
- Mobile menu must close on selection and Escape, and expose aria-expanded.
- Reduced-motion preference must suppress reveal transitions without hiding content.
- Local fonts, hero image and relative paths must work on both language roots.

## Tasks
- [x] 1. Inspect existing routes and selected image; generate the separate hero asset.
- [x] 2. Implement fonts, responsive shared CSS, semantic homepage, navigation and disclosure labels.
- [x] 3. Implement ES-module menu/reveal behavior and dependency-free Node preview/check tooling.
- [x] 4. Check all eight pages, desktop/mobile states, keyboard paths and browser console. Compare selected visual to rendered screenshots; resolve actionable differences and save design-qa.md.
- [ ] 5. Commit reviewed source in a separate GitHub branch, preserve existing hosting and verify the delivered result.
