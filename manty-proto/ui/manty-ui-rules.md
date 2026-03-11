# Manty UI Construction Rules

> Actionable guide derived from direct analysis of the 🧩 01.Manty Design System (Figma key: `xiMCYPbsN5lVM2jJd6sQKe`) and the 2. Budget product file.
> Where exact token values are unavailable, consistent rules are inferred and marked with *(inferred)*.

---

## 1. Typography

Typography is documented in the design system ("Text Styles" page) but **not published as local Figma styles**. The system is built on **Material UI's default type scale**, which uses **Roboto** as the base font.

### Type scale (inferred from MUI defaults + Figma documentation)

| Role | Size | Weight | Line height | Usage |
|---|---|---|---|---|
| `h1` | 96px | 300 (Light) | 1.167 | Never used in app screens |
| `h2` | 60px | 300 | 1.2 | Never used in app screens |
| `h3` | 48px | 400 | 1.167 | Large page titles (rare) |
| `h4` | 34px | 400 | 1.235 | Section headers |
| `h5` | 24px | 400 | 1.334 | Card titles, modal titles |
| `h6` | 20px | 500 (Medium) | 1.6 | Sub-section headers, table titles |
| `subtitle1` | 16px | 400 | 1.75 | List item primary text |
| `subtitle2` | 14px | 500 | 1.571 | Table column headers, label text |
| `body1` | 16px | 400 | 1.5 | Default body text |
| `body2` | 14px | 400 | 1.43 | Secondary text, table cell content |
| `button` | 14px | 500, uppercase | 1.75 | Button labels |
| `caption` | 12px | 400 | 1.66 | Metadata, helper text, timestamps |
| `overline` | 12px | 400, uppercase, letter-spacing 1px | 2.66 | Section labels, tags |

### Typography rules
- Table cell content: `body2` (14px/400)
- Table column headers: `subtitle2` (14px/500) — always **bold**
- Modal titles: `h6` (20px/500)
- Button labels: `button` variant (14px/500, uppercase)
- Form labels: `body2` (14px/400) or `subtitle2`
- Helper/error text under inputs: `caption` (12px/400)
- Status pills / chips: `caption` or `overline` (12px)
- Page section titles (e.g. "Cadrage custom — V1"): `h6` or `subtitle1`

---

## 2. Spacing

### Design tokens (from Figma variables — `Spacings` collection)

| Token | Value | Use |
|---|---|---|
| `sm` | **8px** | Tight gaps: icon-to-label, chip padding, input internal |
| `reg` | **16px** | Default padding: card body, form field gap, list item |
| `md` | **24px** | Section padding, modal body padding, card gap |
| `lg` | **40px** | Large section gaps, page-level top padding |
| `verylg` | **80px** | Page-level hero spacing (rare in dense product screens) |

### Applied spacing rules

- **Page content padding**: `lg` (40px) left/right on desktop, `md` (24px) on narrower panels
- **Card internal padding**: `reg` (16px) all sides; `md` (24px) for larger cards
- **Table row height**: 48px (standard MUI dense table — do not go below 40px)
- **Modal body padding**: `md` (24px)
- **Between form fields**: `reg` (16px)
- **Between sections within a page**: `md` (24px) to `lg` (40px)
- **Button group gap**: `sm` (8px)
- **Icon-to-text gap in buttons/rows**: `sm` (8px)
- **Chip padding**: `sm` (8px) horizontal, 4px vertical

### Corner radius *(inferred from design system Corner Radius Rules page)*

| Context | Radius |
|---|---|
| Buttons | 4px |
| Inputs / text fields | 4px |
| Cards / panels | 4px |
| Chips / pills | 16px (fully rounded) |
| Modals / dialogs | 8px |
| Tooltips | 4px |
| Badges | 10px (fully rounded) |

---

## 3. Color System

Based on 46 published paint styles. Full semantic structure:

### Grey scale
| Style | Use |
|---|---|
| `Grey Scale/White` | Page background, card background, modal background |
| `Grey Scale/Light Grey` | Table alternating row bg, dividers, disabled field bg |
| `Grey Scale/Medium Grey` | Placeholder text, disabled text, secondary icons |
| `Grey Scale/Dark Grey` | Primary text, headings |

### Brand colors
| Style | Use |
|---|---|
| `Primary/Main` | Primary buttons, active tab indicators, links, focused input border |
| `Primary/Light` | Hover state on primary elements |
| `Primary/Dark` | Pressed state |
| `Primary/Background` | Light tint background on primary-themed sections |
| `Primary/Primary 30%` | Disabled primary elements |
| `Primary/Primary 5%` | Very subtle primary tint (e.g. selected row highlight) |
| `Secondary/Main` | Secondary accent, secondary buttons |
| `Secondary/Background` | Tint background for secondary sections |

### Semantic colors
Each semantic color has four variants: Main, Light, Dark, Background.

| Group | When to use |
|---|---|
| `Success/*` | Validated status, positive deltas, success alerts |
| `Error/*` | Refused status, negative deltas, delete confirmations, error alerts |
| `Warning/*` | En attente / à revoir status, caution alerts |
| `Info/*` | Informational alerts, neutral tips |

### Auxiliary colors (for chart series, category tags)
8 colors × 2 weights (full + 30% opacity version):
`Green`, `Red`, `Orange`, `Sky Blue`, `Purple`, `Medium Blue`, `Deep Purple`, `Blue Gray`

Use for chart data series and category differentiation. Never use for semantic status.

### Rules
- **Never use auxiliary colors for status** — use Success/Error/Warning/Info
- **Never invent a color** outside this palette
- Background of app pages: `Grey Scale/White` or very light grey
- Dividers / table borders: `Grey Scale/Light Grey`
- Text on dark backgrounds: `Grey Scale/White`

---

## 4. Layout & Grid

### Page layout (desktop, 1280px+ baseline)

```
┌──────────────────────────────────────────────────────┐
│  App Bar (64px height, full width)                   │
├──────────┬───────────────────────────────────────────┤
│  Side    │  Page content area                        │
│  Nav     │  padding: 40px (lg)                       │
│  (240px) │                                           │
│          │  Page title (h5/h6)                       │
│          │  ─────────────────────────────────────    │
│          │  Toolbar row (search + filters + actions) │
│          │  ─────────────────────────────────────    │
│          │  Main content (table / cards / form)      │
└──────────┴───────────────────────────────────────────┘
```

- **App Bar**: always present, 64px, white background, elevation/1 shadow
- **Side Navigation**: 240px wide, collapsible; uses the `Side Navigation` + `Menu item` component sets
- **Content area max-width**: no hard max; tables fill available width
- **Toolbar row**: horizontally arranged, right-aligned actions (export, add), left-aligned search + filters
- **Page title row**: includes breadcrumb above, h6 title, optional subtitle in caption

### Panels & side panels
- Width: 400–480px *(inferred from Figma Side Pannels component)*
- Opens from the right, overlays content with a scrim
- Has its own header (title + close icon) and footer (action buttons)

---

## 5. Component Rules

### Buttons

Based on `Icon button` (8 variants) and `Icon button group` component sets, plus MUI Buttons.

| Type | When to use | Style |
|---|---|---|
| **Contained (primary)** | Single primary CTA per screen (Save, Confirm, Valider) | `Primary/Main` fill, white text |
| **Contained (error)** | Destructive confirm (Supprimer, Refuser) | `Error/Main` fill, white text |
| **Outlined** | Secondary actions (Cancel, Export, Modifier) | `Primary/Main` border, primary text |
| **Text** | Tertiary / low-emphasis actions (Annuler in modals, Voir plus) | No border, primary text |
| **Icon button** | Compact actions in table rows, toolbars (edit, delete, comment) | Square or rounded, 2 styles (filled / outlined) |
| **Icon button group** | Segmented tool selection (e.g. view mode toggle: list/grid) | Grouped outlined, 2 styles |
| **Round Icon Button** | FAB-like elevated action (10 variants incl. state/style combos) | Circular, elevated |

Rules:
- Only **one contained primary button** visible at a time per screen or modal footer
- Destructive confirm button is **contained error**, not outlined
- Always pair a destructive confirm with an Annuler (text or outlined)
- Minimum button height: 36px (MUI default); 40px for prominent CTAs
- Button icons: always left of label, gap = `sm` (8px)

### Text fields / Inputs

Based on MUI Text Fields component page + Budget file usage.

- Default variant: **outlined** (border box)
- Standard size: Medium (56px height)
- Dense size: *(inferred)* ~40px for table inline editing
- Label: always floating (MUI standard)
- Helper text: `caption` below field, `Error/Main` color on error
- Disabled state: `Grey Scale/Light Grey` background
- Focus state: `Primary/Main` border (2px)
- Always include placeholder text where the expected format is non-obvious (e.g. montant, %)

### Select

Based on `Select` component page + Budget usage (inline selects in cadrage).

- Use MUI Select (outlined) for form contexts
- Use inline dropdown (popover) for table-cell selects
- Status change selects always show current status color as prefix dot
- Multi-select: use Autocomplete with chips (not native multi-select)

### Search field

Based on `Search bar` component (3 variants: Default, Focused, Has value).

- Always in toolbar row, left side
- Placeholder: "Rechercher..."
- Includes clear (×) icon when has value
- Width: 240–320px in toolbar; full-width in modals
- On focus: `Primary/Main` border, magnifier icon turns primary color

### Autocomplete

- Use for: gestionnaire selection, service selection, article/chapter lookup
- Always shows dropdown with filtered results
- Supports free text + pre-defined options
- Chips appear inside field for multi-select

---

## 6. Tables (AG Grid — dense data tables)

The core UI pattern in Budget. Based on `Tables templates` component set (4 variants) + Budget Figma screens.

### Table anatomy

```
┌─────────────────────────────────────────────────────────────┐
│  Toolbar: [Search] [Filter chips] [Col visibility] [Export] │
├──┬──────────────────┬──────────┬──────────┬─────────────────┤
│☐ │ Chapitre / Libellé│ Base N-1 │ Proposé  │ Statut          │
├──┼──────────────────┼──────────┼──────────┼─────────────────┤
│☐ │ ▶ Chapitre 011   │          │          │ [group row]     │
│☐ │   Article 6011   │ 45 000 € │ 48 600 € │ ● En attente    │
│☐ │   Article 6012   │ 12 000 € │ 12 500 € │ ✓ Validé        │
│  │   Total 011      │ 57 000 € │ 61 100 € │ [totals row]    │
├──┼──────────────────┼──────────┼──────────┼─────────────────┤
│  │ Grand Total       │ ...      │ ...      │                 │
└──┴──────────────────┴──────────┴──────────┴─────────────────┘
```

### Column conventions
- **Checkbox column**: 48px wide, leftmost, always present for bulk selection
- **Label/name column**: flex-grow, min 200px, left-aligned text
- **Amount columns**: 120–160px, right-aligned, monospace-like rendering
- **Percentage columns**: 80–100px, right-aligned, always show sign (`+2,5 %`)
- **Status column**: 140–160px, contains status pill, rightmost or near-right
- **Action column** (icons): 80–120px, rightmost, shows on row hover

### Row conventions
- **Row height**: 48px standard; 40px for dense/nested
- **Group header row**: slightly darker background (`Primary/Background` or `Grey Scale/Light Grey`), no checkbox, expand/collapse chevron, bold text, no amounts
- **Totals row**: bold text, top border, no checkbox, background same as group header
- **Grand total row**: bold + slightly larger text, distinct top border
- **Selected row**: `Primary/Primary 5%` background
- **Hover row**: very light grey background
- **Alternating rows**: *(optional)* very subtle `Grey Scale/Light Grey` every other row

### Grouping & expand/collapse
- Use the `Expandable Items` component (5 variants: Open states × Level) for expand/collapse
- Groups default to collapsed; expanded on user click
- Nested levels (chapitre → article → sub-article) indent 16px per level

### Column header
- `subtitle2` (14px/500) — bold
- Sortable columns show sort icon on hover
- Filtered columns show active filter indicator (colored dot or icon)
- Column resizing: drag handle on right edge

### Delta / evolution badges

For showing budget evolution (e.g. `+5 %`, `−12 000 €`):
- Positive: `Success/Main` colored text, optional `Success/Background` pill
- Negative: `Error/Main` colored text, optional `Error/Background` pill
- Zero: `Grey Scale/Medium Grey`
- Always show the sign explicitly (`+` or `−`), never omit for positive values

---

## 7. Status Pills / Chips

Based on `Status Selector` (10 variants), `Interactive Chip` (2 variants), and Budget status patterns.

### Status pills (read-only)

Fully rounded (`border-radius: 16px`), small padding (`8px` horizontal, `4px` vertical), `caption` text.

| Status | Color | Background |
|---|---|---|
| En attente | `Warning/Dark` | `Warning/Background` |
| À revoir | `Warning/Main` | `Warning/Background` |
| Validé | `Success/Dark` | `Success/Background` |
| Refusé | `Error/Dark` | `Error/Background` |
| Favorable | `Success/Main` | `Success/Background` |
| Défavorable | `Error/Main` | `Error/Background` |
| Sans avis | `Grey Scale/Dark Grey` | `Grey Scale/Light Grey` |
| Brouillon | `Info/Dark` | `Info/Background` |

### Interactive chips (filterable/selectable)

Based on `Interactive Chip` (2 color variants).
- Used in filter toolbars (active filter tags)
- Show label + × icon to remove
- `Primary/Background` fill when active, `Grey Scale/Light Grey` when inactive

### Highlight Boxes

Based on `Highlight Boxes` (10 variants: Type × Color).

Use for KPI summary cards at the top of pages:
- Show: label (caption), value (h5 or h6), optional trend icon
- Colors match semantic palette (use `Primary`, `Success`, `Error`, `Warning`, `Info`, or `Auxiliary`)

---

## 8. Modals / Dialogs

Based on `Confirmation Modals` (8 variants), `Info Modals` (3 variants), `Full-Screen Modals` (1 variant), `General Modals` (6 variants).

### Standard modal structure

```
┌──────────────────────────────────────────────────────┐
│  [Icon] Modal title                          [✕]     │  ← Header: h6, optional icon, close button
├──────────────────────────────────────────────────────┤  ← Divider (optional, use when body scrolls)
│                                                      │
│  Body content (form / text / list)                   │  ← Padding: md (24px)
│                                                      │
├──────────────────────────────────────────────────────┤  ← Divider
│  [Annuler]                  [Action principale]      │  ← Footer: right-aligned, 16px gap
└──────────────────────────────────────────────────────┘
```

### Modal sizing

| Type | Width | Use |
|---|---|---|
| Confirmation | 400–480px | Destructive confirm, simple yes/no |
| Info | 480–560px | Info display, no destructive action |
| General | 560–680px | Forms, multi-field inputs |
| Full-screen | 100vw × 100vh | Complex editors, PPI entry, full table |

### Modal rules
- Always include a **close (×) button** in the top-right of the header
- Header has a **bottom divider** when the body content is scrollable
- Footer has a **top divider** always
- **Single primary action** in footer (right side, contained button)
- **Cancel action** always present (left side or text button), never omit
- Destructive modals: title starts with a warning icon, primary button is `Error/Main`
- No more than **2 text fields** in a confirmation modal — if more, use a General modal
- Body padding: `md` (24px) all sides
- Footer padding: `reg` (16px) all sides
- Scrim behind modal: `rgba(0,0,0,0.5)`
- Modal border-radius: 8px

---

## 9. Segmented Controls / Button Groups

Based on `Icon button group` (2 style variants) and `DONTUSE_Toggle Controls` (deprecated).

- Use **Icon button group** for view-mode toggles (grid/list, chart/table) — max 3 segments
- Use **Radio buttons** for mutually exclusive form choices with visible labels (e.g. base de cadrage selection)
- Use **Tabs** (`Auxiliary Tab Set` / `Auxiliary Tab Item`) for section-level navigation within a page
- **Never use** `DONTUSE_Toggle Controls` (ButtonGroupMUI) — it is deprecated

Segmented control (button group) vs. radios:
- **Button group**: when choice is a *view mode* (doesn't submit a form, toggles immediately)
- **Radio**: when choice is a *form value* that gets saved on submit

---

## 10. App Bar

Based on `App Bar` component (2 variants, 9 slot properties).

- Full width, 64px height, `Grey Scale/White` background, `elevation/1` shadow
- Left: Manty logo + product name
- Center: (optional) search or breadcrumb
- Right slots: configurable — includes Share, Download, Send, Edit, Menu, Chip buttons
- Always present on every screen; never hide or modify in prototypes

---

## 11. Side Navigation

Based on `Side Navigation` (6 variants) and `Menu item` (6 variants: Focused × Type).

- 240px wide, full-height, `Grey Scale/White` background, right border `Grey Scale/Light Grey`
- Active item: `Primary/Background` fill, `Primary/Main` text + left accent bar
- Hover item: `Grey Scale/Light Grey` fill
- Item height: 48px
- Icon (left, 24px) + label text (`subtitle2`)
- Nested items: indent 16px, smaller font
- Collapsible on mobile/narrow viewport

---

## 12. Accordion

Based on `Accordion` (4 variants: Type × Expanded).

- Use for: collapsible sections in config screens (e.g. phase settings, parameterization blocks)
- Two types: Standard (with divider) and Outlined (card-like border)
- Expanded state shows content below the header row
- Header: `subtitle1` label + optional secondary text (caption) + chevron icon (right)
- Do not nest accordions more than 1 level deep

---

## 13. Cards

Based on `Category Cards` (6 variants), `Dashboard Card` (5 variants), `Composante de paye` (2 variants).

- All cards: `Grey Scale/White` background, `elevation/1` shadow, 4px border-radius
- **Dashboard Card**: metric value (h5) + label (caption) + optional trend indicator + hover/edit states
- **Category Cards**: icon + label + optional count badge; used for navigation tiles
- Internal padding: `reg` (16px)
- Card grid gap: `reg` (16px) or `md` (24px)

---

## 14. Elevation / Shadows

Effect styles are documented in the Budget file but sourced from a linked library. Two levels:

| Level | CSS equivalent | Use |
|---|---|---|
| `elevation/1` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` | Cards, App Bar, side panels |
| `elevation/8` | `0 8px 16px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)` | Modals, dropdowns, popovers |
| Soft shadow | Subtle, diffuse | Tooltip, chip hover |

Rules:
- **No shadow** on table rows, dividers, plain text areas
- **elevation/1** on all cards, panels, the App Bar
- **elevation/8** on all floating layers (modals, dropdowns, tooltips)

---

## 15. Filters

Based on `Filter states` (6 variants), `Filter Suggestion Field` (6 variants), `Expandable Items` (5 variants).

- Filter chips in toolbar: `Interactive Chip` pattern — one chip per active filter
- Filter panel (expanded): full-width dropdown or side panel listing all filter options
- Filter suggestion field: autocomplete input for searching within a filter dimension
- Always show a "Reset filters" text button when any filter is active
- Filter chips use `body2` text, `Primary/Main` border when active

---

## Quick reference — do's and don'ts

| Do | Don't |
|---|---|
| Use `Primary/Main` for the single primary action | Use two contained primary buttons side by side |
| Use `Error/Main` for destructive confirm buttons | Use outlined or text buttons for deletes |
| Keep copy in French | Mix French and English labels in the same screen |
| Show loading skeleton on data tables | Show blank/empty table while loading |
| Use status pill colors from the semantic palette | Invent custom colors for status |
| Right-align all numeric/amount columns | Centre-align numbers |
| Show `+` sign on positive deltas | Omit sign on positive values |
| Use `caption` (12px) for metadata, timestamps | Use body text for secondary metadata |
| Confirm destructive actions with a modal | Single-click delete |
| Use `Auxiliary colors` for chart series | Use `Auxiliary colors` for status |
