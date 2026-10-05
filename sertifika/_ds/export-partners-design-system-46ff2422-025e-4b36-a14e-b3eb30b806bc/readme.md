# Export Partners — Design System

Brand and UI system for **Export Partners Danışmanlık**, an Amazon SPN-certified e-export consultancy based in Istanbul, Türkiye. Export Partners helps SMEs and manufacturers sell abroad end-to-end: Amazon & Etsy consulting, trademark registration, US/UK company formation, export-department support, and Turkish supplier sourcing.

## Sources
- **Brand site:** www.exportpartners.com.tr (TR) and /en/ (EN). Copy and services referenced from the live site (Amazon, Etsy, Marka Tescili, Şirket Açılışı, Export Dept. Support, İhracat).
- **Logos:** provided in `LOGO PHOTOS/` (mounted) and `uploads/` — copied into `assets/`.
- No source codebase or Figma file was provided; components below are an authored standard set sized to the brand.

## The brand in one line
Growth (orange) meets trust (navy). Confident, corporate, partnership-first: *"We are your partner, not your competitor."*

---

## CONTENT FUNDAMENTALS
- **Voice:** first-person plural — "we", "our team", "as Export Partners". Addresses the reader as "you / your business". Warm but corporate.
- **Positioning language:** "solution partner", "long-term partnership", "not just one order", "end to end", "brand owners and sellers too". Emphasizes proof and practical experience over theory.
- **Casing:** Title/sentence case in prose. Uppercase reserved for eyebrows/overlines and the wordmark's "DANIŞMANLIK" line.
- **Tone:** reassuring, data-driven, credential-forward. Frequently cites Amazon SPN certification, 15+ years experience, 24-hour response, 70% cost reduction.
- **Numbers as proof:** concrete stats used as trust signals ("70% lower costs", "since 2018", "within 24 hours").
- **Bilingual:** TR primary, EN secondary. Turkish terms appear verbatim (Marka Tescili = trademark registration, İhracat = export, Danışmanlık = consultancy).
- **Emoji:** not part of the brand voice in prose. (Used only as lightweight service glyphs inside the UI-kit demo where no icon set was provided — see Iconography.)
- **Example copy:** "Your global solution partner." · "We research, evaluate and facilitate your access to reliable Turkish manufacturers." · "Fill out the contact form to make a strong start to e-commerce with the Export Partners difference."

## VISUAL FOUNDATIONS
- **Colors:** primary **orange `#FF7D07`** (energy/growth; the "Partners" wordmark and CTAs) with a hot gradient `#FF8F0A → #FF5C00` taken from the logo mark. **Navy `#232F3E`** (trust; headers, footers, hero) deepening to `#18222E`. A **dark green `#1B7A4B`** as an occasional secondary/success accent. Cool navy-grey neutrals; near-white page background `#F5F7FA`.
- **Type:** display/headings in **Montserrat** (heavy geometric, 800/900 — matches the logo wordmark); body/UI in **Inter**. Tight letter-spacing on headings (`-0.02em`); wide tracking (`0.14em`) on uppercase eyebrows.
- **Backgrounds:** solid white cards on a light-grey page; navy **gradient** hero and dark CTA bands; one full-bleed **orange gradient** CTA. No textures, patterns or photographic hero imagery required by the brand — the growth mark is the recurring motif. Real photography (e.g. trademark certificate) appears in supporting bands.
- **Motion:** restrained. Buttons darken on hover and scale to 0.97 on press; cards lift `translateY(-4px)` with a deepened shadow on hover. Standard easing `cubic-bezier(0.4,0,0.2,1)`, ~140–360ms. No bounces or infinite loops.
- **Hover states:** primary → darker orange (`#E86E00`); secondary → deeper navy; outline → subtle grey fill + navy border; ghost → faint orange tint.
- **Press states:** slight scale-down (0.97), no color inversion.
- **Borders:** 1–1.5px hairlines in `#E3E8EE` / `#CBD4DE`. Inputs use 1.5px, orange on focus.
- **Shadows:** soft, cool, navy-tinted — `xs`→`lg`. A dedicated **orange glow** (`0 8px 22px rgba(255,125,7,0.30)`) lifts primary CTAs. No harsh or neon shadows.
- **Focus:** 3px orange ring at 35% opacity.
- **Transparency/blur:** sticky navbar uses white at 88% + 10px backdrop blur. Otherwise opaque.
- **Corner radii:** moderate and corporate — `sm 8 / md 12 / lg 16`; **pill** buttons and badges (`999px`); small `4px` on checkboxes.
- **Cards:** white surface, `radius-lg (16px)`, soft `shadow-md`; the **feature** variant adds a 3px orange top accent (used for service tiles). A navy-gradient card variant exists for dark contexts.
- **Layout:** max content width 1200px, 24px gutters, ~80px section rhythm. Generous whitespace, grid-based service tiles (3-up desktop).
- **Imagery vibe:** warm where present (orange brand mark), otherwise clean corporate navy/white. No grain, no duotone.

## ICONOGRAPHY
- **No icon set ships with the brand.** The only proprietary mark is the **growth icon** (ascending orange bar chart + rising arrow), available as `assets/icon-mark.png` and inside the wordmark lockups. Use it as the brand symbol; never redraw or recolor it.
- The UI-kit demo uses a few **emoji glyphs** purely as placeholders for service tiles, because no licensed icon set was provided. **This is a flagged substitution** — replace with the brand's real icon set (or a chosen line-icon library such as Lucide/Heroicons at a consistent stroke) before production.
- No built-in icon font, SVG sprite, or unicode-icon convention exists in the source. Emoji are **not** part of the marketing voice.

## Logo assets (in `assets/`)
- `logo-navy.png` — navy + orange wordmark on light backgrounds (primary).
- `logo-black.png` — black + orange wordmark.
- `logo-white.png` / `logo-on-dark.png` — white + orange wordmark for dark/navy backgrounds.
- `icon-mark.png` — standalone growth mark (favicon / app icon).
- `logo-stacked.png` — "EXPORT PARTNERS · DANIŞMANLIK" stacked lockup.
- `logo-footer.png`, `marka-tescil.jpg` (trademark-registration photo).

---

## Index / Manifest
**Foundations (root):** `styles.css` (entry — imports all tokens) → `tokens/{fonts,colors,typography,spacing,effects,base}.css`.

**Components** (`window.ExportPartnersDesignSystem_46ff24`):
- **core/** — `Button`, `Badge`, `Card`, `StatCard`, `SectionHeading`, `ServiceCard`, `Logo`
- **forms/** — `Input`, `Textarea`, `Select`, `Checkbox`

**UI Kits:**
- `ui_kits/website/` — interactive marketing-site recreation (Home, Service detail, Contact form).

**Specimen cards:** `guidelines/*.card.html` (Colors, Type, Spacing, Brand) — render on the Design System tab.

**Intentional additions:** `StatCard`, `SectionHeading`, `ServiceCard`, `Logo` — no source component library was provided, so these compose the site's recurring patterns (metric strips, section intros, service tiles, brand mark) into reusable primitives.

## Caveats
- **Fonts are substituted.** Montserrat + Inter are the nearest Google Fonts to the logo wordmark; no licensed brand font was provided. Swap if one exists.
- **Icons are placeholders.** See Iconography — provide the real icon set for production.
- Preview cards and the UI kit render once the bundle (`_ds_bundle.js`) is compiled.
