---
name: Obsidian Atelier
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e8'
  on-surface-variant: '#d1c5b8'
  inverse-surface: '#e3e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#998f83'
  outline-variant: '#4d463c'
  surface-tint: '#e0c298'
  primary: '#e2c399'
  on-primary: '#402d0f'
  primary-container: '#c5a880'
  on-primary-container: '#513d1d'
  inverse-primary: '#725b38'
  secondary: '#c4c7ca'
  on-secondary: '#2d3134'
  secondary-container: '#46494d'
  on-secondary-container: '#b6b8bc'
  tertiary: '#c1c8d5'
  on-tertiary: '#2a313b'
  tertiary-container: '#a6adb9'
  on-tertiary-container: '#3a414b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fedeb2'
  primary-fixed-dim: '#e0c298'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#584323'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#dce3f0'
  tertiary-fixed-dim: '#c0c7d3'
  on-tertiary-fixed: '#151c25'
  on-tertiary-fixed-variant: '#404752'
  background: '#121317'
  on-background: '#e3e2e8'
  surface-variant: '#343439'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the clinical precision, bespoke luxury, and nocturnal drama of high-end automotive preservation. Tailored for collectors, supercar proprietors, and connoisseurs of hypercar craftsmanship, the visual narrative evokes an ultra-private subterranean atelier: spotlit carbon fiber, flawless paint reflections, and aerospace-grade materials.

The aesthetic philosophy fuses **Minimalism** with **Dark Glassmorphism** and subtle **Tactile Precision**:
- **Atmospheric Chiaroscuro:** Deep, pitch-black canvases create absolute contrast against crisp, liquid typography and razor-sharp metallic micro-accents.
- **Surface Depth:** Multilayered charcoal and smoke glass substrates suggest bespoke studio architecture, using diffuse translucent surfaces rather than heavy solid panels.
- **Restraint & Exclusivity:** Generous negative space balances high-density technical specifications. Interface elements never crowd the stage; they frame automotive assets like art installations in an architectural vault.

## Colors

The palette is engineered around pure light control and metallurgical finishes:

- **Primary (`#C5A880` - Warm Titanium Gold):** Applied with deliberate restraint for key interactive focal points, bespoke service status, luxury accents, and micro-delimiters. Never used for large structural flood fills.
- **Secondary (`#E5E7EB` - Liquid Silver):** Delivers pristine structural contrast for top-tier headings, primary iconography, and prominent state indicators.
- **Tertiary (`#9CA3AF` - Muted Platinum):** Calibrated for secondary information, metadata, table borders, and inactive system states.
- **Neutral Canvas (`#0B0C10` - Deep Obsidian):** The foundational substrate of the application. 
- **Surface Hierarchy:**
  - `Base`: `#0B0C10` (Root canvas)
  - `Layer 1`: `#12141A` (Underlying structural sections & sidebar backdrops)
  - `Layer 2 / Glass Panel`: `#1A1D24` at `70%` alpha with backdrop blur (Floating inspection cards, modals)
  - `Layer 3 / Elevated`: `#222630` at `80%` alpha (Interactive cards, input fields, popovers)
- **Functional Semantics:**
  - `Hairline Accent`: `rgba(197, 168, 128, 0.25)` for hyper-refined dividing lines.
  - `Subtle Border`: `rgba(255, 255, 255, 0.08)` for frosted panel frames.
  - `Success`: `#4ADE80` (Preservation verified, coating cured)
  - `Warning`: `#FBBF24` (Paint correction required)

## Typography

Typography establishes an editorial atmosphere that balances avant-garde automotive prestige with telemetry-grade technical clarity:

- **Display & Headlines (`Syne`):** Imparts dramatic silhouette, sculptural curves, and architectural confidence. Used in title treatments, vehicle marques, and package classifications. All uppercase variants must use increased letter tracking (+0.05em to +0.1em).
- **Body & Editorial (`Hanken Grotesk`):** Provides razor-sharp legibility against dark backdrops without bleeding or visual fuzziness. Optimized for vehicle treatment histories, service reports, and booking steps.
- **Labels, Telemetry & Data (`JetBrains Mono`):** Delivers clinical horological precision for paint-depth measurements (microns), curing timers, pricing, VIN tags, and service tiers. Always styled in uppercase for micro-labels.

## Layout & Spacing

The layout model adheres to an intentional, high-contrast grid engineered for luxury storytelling:

- **Desktop (1440px+):** 12-column responsive fluid grid with generous outer margins (`3rem` / `48px`) and `1.5rem` (`24px`) gutters. Max content bounding box: `1400px` for dense studio operations; `1680px` for cinematic showcase galleries.
- **Tablet (768px - 1024px):** 8-column grid with `2rem` outer margins and `1.25rem` gutters. Two-up arrangement for package tiers and diagnostic cards.
- **Mobile (320px - 767px):** 4-column fluid layout with strict `1.25rem` (`20px`) margins and `1rem` gutters. Complex multi-metric panels stack into vertical swipe-enabled telemetry strips.
- **Vertical Rhythm:** Generous section intervals rely on `space-xl` scaled dynamically (up to `5rem` between major showcase acts) to allow full-bleed photography of mirrors, wheels, and carbon weave to breathe without competitive visual noise.

## Elevation & Depth

Depth in this system is conveyed through luminosity, translucency, and optical refractions rather than muddy drop shadows:

- **Backdrop Diffusion (Glassmorphism):** Floating cards utilize `backdrop-filter: blur(16px)` to `blur(24px)` over `#1A1D24` tinted with `65%` to `80%` opacity. Subtle environmental car silhouettes gently reveal their contours through the UI glass.
- **Hairline Borders (Edge Speculars):** Every elevated surface is defined by a `1px` continuous border composed of `rgba(255, 255, 255, 0.08)` or a directional linear gradient: `linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.02) 100%)`. This replicates light grazing the edge of an architectural glass partition.
- **Bespoke Gold Halo:** Critical CTAs and active vehicle diagnostic states receive an ambient, ultra-wide radial glow: `box-shadow: 0 0 32px rgba(197, 168, 128, 0.12)`.
- **Underbody Shadows:** When floating panels stack over live viewports, use deep, tight falloffs tinted obsidian: `0 16px 40px rgba(0, 0, 0, 0.6)`.

## Shapes

The geometric framework is defined by clean, precision-milled silhouettes. Surfaces employ **Soft (`1`)** corner treatments to communicate technical sophistication, echoing the precision body lines, milled billet aluminum switches, and laser-cut carbon fiber panels of exotic vehicles:

- **Default UI Components (Buttons, Chips, Text Inputs):** `0.25rem` (`4px`) radius. Crisp, tailored, and architectural.
- **Cards, Modals & Inspection Bay Panels (`rounded-lg`):** `0.5rem` (`8px`) radius. Subtle softening that maintains high structural discipline.
- **Cinematic Framing Containers (`rounded-xl`):** `0.75rem` (`12px`) radius for full-canvas viewports and dynamic 3D vehicle configurators.
- **Pill Exceptions:** Restricted entirely to status pills (e.g., "CERAMIC CURED", "ACTIVE BAY") and micro counter badges.

## Components

### Buttons
- **Primary Action (Titanium Atelier):** Solid `#C5A880` background with `#0B0C10` text in `Hanken Grotesk` (Weight 600). Crisp `0.25rem` radius. On hover: luminosity increases to `#D4BC99` with a subtle `0 0 20px rgba(197, 168, 128, 0.25)` ambient glow.
- **Secondary Action (Stealth Glass):** Transparent `#1A1D24` (`60%` opacity) with a `1px` border of `rgba(255, 255, 255, 0.12)` and `#E5E7EB` text. On hover: border transitions to `#C5A880` with background shifting to `#222630`.
- **Ghost/Tertiary:** Zero background, `#9CA3AF` text, uppercase `JetBrains Mono` label with an animated underline accent on hover.

### Cards & Service Tiers
- Built using `#1A1D24` at `70%` alpha, `backdrop-filter: blur(20px)`, and a `1px` edge border of `rgba(255, 255, 255, 0.07)`.
- Hover state elevates the border to a gradient edge and introduces a faint specular highlight across the card header.
- Package cards feature an integrated mono header with package code (e.g., `[PKG-01 // STAGE 3 CORRECTION]`).

### Form Inputs & Selectors
- Background: `#12141A` with a hairline `1px` border of `rgba(255, 255, 255, 0.1)`.
- Typography: `Hanken Grotesk` (`14px`) in `#E5E7EB` with `#9CA3AF` placeholders.
- Focus State: Border transitions instantaneously to `#C5A880` accompanied by a localized inner glow: `box-shadow: inset 0 0 0 1px #C5A880, 0 0 12px rgba(197, 168, 128, 0.15)`.

### Chips & Telemetry Badges
- Strict uppercase `JetBrains Mono` (`10px` or `12px`).
- Inactive: Background `rgba(255, 255, 255, 0.04)`, text `#9CA3AF`, border `1px solid rgba(255, 255, 255, 0.08)`.
- Active/Verified: Background `rgba(197, 168, 128, 0.12)`, text `#C5A880`, border `1px solid rgba(197, 168, 128, 0.4)`.

### Selection Controls (Checkboxes & Radios)
- Square with `2px` micro-radius for checkboxes; strict circular rings for radio controls.
- Base: Unchecked state uses `#12141A` fill with `1px` border `rgba(255, 255, 255, 0.2)`.
- Checked: Fill transitions to `#C5A880` with an obsidian checkmark or solid center node.

### Lists & Technical Tables
- Border-bottom divider: `1px solid rgba(255, 255, 255, 0.05)`.
- List items feature alternating tabular rows with zero heavy zebra stripes, differentiating row levels purely via hover states with `rgba(255, 255, 255, 0.02)`.

### Specialized Automotive Domain Components
- **Vehicle Inspection Diagram:** Interactive wireframe schema rendering micro-damage, paint depth (µm), and PPF coverage zones with pinpoint gold coordinate tags.
- **Before/After Splitter:** Ultra-fine `1px` vertical silver dividing line with a milled circular titanium thumb handle for side-by-side paint correction comparisons.