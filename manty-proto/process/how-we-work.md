# How We Work — Assistant Instructions for Manty Prototyping

> This file defines the expected AI assistant behavior when collaborating with Colin on Manty UI prototypes.
> Read this at the start of each new prototyping session.

---

## Default behavior

### Clarifying questions
- Ask **1–3 clarifying questions maximum**, only if they are truly blocking (e.g. which product module, which user role, mobile vs desktop).
- If the request is reasonably clear, **propose a solution first** and list assumptions made. Let Colin correct rather than ask upfront.
- Never ask questions about things already documented in this repo (colors, spacing, component names, domain terms).

### Language
- All UI copy in prototypes: **French** unless explicitly asked for English.
- All filenames and code: **English**.
- All assistant responses: match Colin's language (French if he writes in French, English if English).

### Manty consistency
- Always default to components documented in `ui/manty-ui-rules.md`.
- Never invent new visual patterns, colors, or components.
- If a pattern doesn't exist in the design system, use the closest available and call it out explicitly.

---

## Prototype creation workflow

When Colin asks "create a prototype for X":

### 1. Identify the pattern

Before building, identify:
- Which **existing Figma screen** is closest (reference by page name + frame name from the Budget file or design system)
- Which **components** from `manty-ui-rules.md` to reuse
- Which **domain entities** are involved (from `context/manty-budget.md`)

### 2. Create the subfolder

Create a new folder:
```
manty-proto/prototypes/YYYY-MM-DD__short-slug/
```

Slug rules:
- lowercase, hyphens only, no spaces
- max 5 words
- include product prefix if not Budget (e.g. `decision-`, `rh-`)
- Examples: `budget-cadrage-modal`, `budget-inscriptions-table`, `decision-dashboard-home`

### 3. Create the prototype files

Every prototype subfolder contains at minimum:

```
YYYY-MM-DD__short-slug/
├── CHANGELOG.md     ← version history, always at the top
├── spec.md          ← screen description, components used, open questions
└── screen.html      ← (or .tsx / .md / whichever format is appropriate)
```

Add additional files as needed (e.g. `screen-empty-state.html`, `screen-mobile.html`).

### 4. Output a path reference

End the response with a single line:
```
→ Prototype: manty-proto/prototypes/YYYY-MM-DD__short-slug/
```

---

## CHANGELOG.md format

Always write a changelog entry at the top of each prototype's `CHANGELOG.md`. Example:

```markdown
# Changelog

## v1 — 2026-03-03
**Initial prototype**
- Created: cadrage personnalisation modal (desktop)
- Components: General Modals, Text fields, Toggle section, Status pills
- Copy: French
- Role shown: DAF
- Assumptions: chapter-level detail is toggled ON; 5 sample chapters

## v2 — 2026-03-05
**Iteration after review**
- Changed: "Enregistrer" → "Valider le cadrage" (Colin's feedback)
- Added: empty state for 0 chapters
- Fixed: divider was missing below modal header
```

---

## spec.md format

```markdown
# [Screen name]

## Context
- Product: Budget / Décision / Prospective RH
- User role: DAF / Gestionnaire / DRH / ...
- Trigger: What action leads to this screen
- Related Figma: [page name] > [frame name] in "2. Budget" or design system

## What the screen does
[1–3 sentences]

## Components used
- [Component name] from manty-ui-rules.md — [why]
- ...

## Open questions
- [ ] Should this be a modal or a side panel?
- [ ] Is the totals row always visible or only when scrolled past?

## Assumptions
- Desktop only
- DAF role (sees all services)
- 5 sample chapters shown
```

---

## Iteration rules

When Colin asks for changes to an existing prototype:
1. Update the prototype file(s) in place
2. Add a new version entry to `CHANGELOG.md`
3. Do not create a new subfolder unless it's a fundamentally different variant

When Colin says "create a variant" or "new version from scratch":
1. Create a new subfolder with a new date + slug (e.g. `2026-03-05__budget-cadrage-modal-v2`)
2. Reference the original in the new `spec.md`

---

## Prototype output formats

Choose the format based on what Colin asks for:

| Request | Output format |
|---|---|
| "sketch me a screen" | Markdown wireframe (ASCII + annotations) |
| "write the HTML" | `screen.html` with inline Tailwind or plain CSS |
| "give me a React component" | `Screen.tsx` using MUI components |
| "describe the layout" | `spec.md` with detailed layout notes |
| "both design and code" | `spec.md` + `screen.html` or `Screen.tsx` |

Default if not specified: **`spec.md` + ASCII/markdown wireframe**.

---

## HTML prototype conventions (when generating HTML)

If generating an HTML prototype:

- Use **Tailwind CSS** (via CDN) for layout utilities
- Embed **Google Fonts Roboto**: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">`
- Reference **Material Icons** for icons: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
- Use the Manty color variables as CSS custom properties:

```css
:root {
  --color-primary: #1976D2;         /* Primary/Main — inferred MUI blue */
  --color-primary-light: #42A5F5;
  --color-primary-dark: #1565C0;
  --color-primary-bg: #E3F2FD;
  --color-secondary: #9C27B0;       /* Secondary/Main */
  --color-success: #2E7D32;
  --color-success-bg: #E8F5E9;
  --color-error: #C62828;
  --color-error-bg: #FFEBEE;
  --color-warning: #E65100;
  --color-warning-bg: #FFF3E0;
  --color-info: #01579B;
  --color-info-bg: #E1F5FE;
  --color-grey-dark: #212121;
  --color-grey-medium: #757575;
  --color-grey-light: #EEEEEE;
  --color-white: #FFFFFF;

  --spacing-sm: 8px;
  --spacing-reg: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-verylg: 80px;

  --radius-button: 4px;
  --radius-card: 4px;
  --radius-modal: 8px;
  --radius-chip: 16px;

  --shadow-1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08);
  --shadow-8: 0 8px 16px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08);

  --font-family: 'Roboto', sans-serif;
}
```

- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<table>`, `<dialog>`
- Do not use JavaScript frameworks in static prototypes — pure HTML/CSS only unless React is requested

---

## React / MUI conventions (when generating .tsx)

- Use **MUI v5** (`@mui/material`)
- Theme extends MUI defaults with Manty's primary color
- Import only what you use (no wildcard imports)
- Component props should reflect the design system variants (e.g. `variant="outlined"`, `size="medium"`)
- Keep mock data inline (no API calls in prototypes)
- Use `sx` prop for one-off spacing overrides; use `styled()` for reusable elements

---

## What to always include in a prototype response

1. **Path line**: `→ Prototype: manty-proto/prototypes/YYYY-MM-DD__short-slug/`
2. **Brief summary**: what was built, what role/state it shows
3. **Assumptions listed**: role, device, data state (empty / loaded / error)
4. **Next steps** (1–3 suggestions): e.g. "next: add the empty state", "open question: side panel vs modal"

---

## Things to never do

- Never use `DONTUSE_Toggle Controls` (deprecated Figma component)
- Never mix status colors (no Success color for "En attente")
- Never create a prototype without a CHANGELOG.md
- Never put prototype files directly in `manty-proto/prototypes/` root — always in a dated subfolder
- Never assume a color hex without referencing the palette in `manty-ui-rules.md`
- Never write copy in English in a prototype without being asked
- Never use more than one contained primary button per modal footer
