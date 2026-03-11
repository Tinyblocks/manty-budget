# Manty Prototype Environment

A reusable baseline for generating Manty-consistent UI prototypes without re-analyzing the Figma files each time.

---

## What this is

This folder contains:
- **Context docs** — what Manty is, how the product works, the domain language
- **UI rules** — a strict guide derived from the Manty Design System (Figma) and the Budget product file
- **Process doc** — how to collaborate with the AI assistant when prototyping
- **Prototypes** — each prototype lives in its own dated subfolder

The goal is to go from "I need a screen for X" to a Manty-consistent prototype in one prompt, without explaining the design system or product context each time.

---

## Folder structure

```
manty-proto/
├── README.md                         ← this file
├── context/
│   ├── manty-overview.md             ← Manty products + platform overview
│   └── manty-budget.md               ← Budget-specific context + domain language
├── ui/
│   └── manty-ui-rules.md             ← UI construction rules from the design system
├── process/
│   └── how-we-work.md                ← Assistant behavior + workflow instructions
└── prototypes/
    └── YYYY-MM-DD__short-slug/       ← one subfolder per prototype
```

---

## How to generate a new prototype

### Step 1 — Ask with enough context

Tell the assistant:
- **What screen/flow** you want (be specific about the module: Budget / Décision / Prospective RH)
- **What the user is trying to do**
- Any **constraints or variants** (e.g. empty state, error state, mobile vs desktop)

Example prompt:
> "Create a prototype for the cadrage personnalisation modal in Budget — the user wants to set a custom evolution rate per chapter. Desktop. Include the cancel/confirm footer."

### Step 2 — The assistant will

1. Identify the closest existing pattern from the design system or Budget Figma file
2. Apply `manty-ui-rules.md` for spacing, typography, components
3. Create a new subfolder: `prototypes/YYYY-MM-DD__short-slug/`
4. Output the path + a short changelog

### Step 3 — Iterate

Ask for changes in the same thread. The assistant will update the prototype files in place and append to the changelog.

---

## What "good" output looks like

A valid Manty prototype must:

- Use only components documented in `manty-ui-rules.md` (no invented patterns)
- Keep copy in **French** unless explicitly asked for English
- Respect the spacing scale: `sm=8px`, `reg=16px`, `md=24px`, `lg=40px`, `verylg=80px`
- Use the semantic color system (Primary, Secondary, Error, Warning, Success, Info, Grey Scale)
- Use MUI-style component conventions (contained/outlined/text buttons, standard/outlined text fields)
- Follow table conventions: header bold, 48px rows, checkbox on left, totals row at bottom
- Modal structure: title header + optional divider + scrollable body + fixed footer with actions

---

## Figma sources (analyzed, do not re-analyze)

| File | Key | Status |
|---|---|---|
| 2. Budget | `2Mr4FfB929eJdXDd7HR4gJ` | Analyzed — 21 pages, 8 components, 8 styles |
| 🧩 01.Manty Design System | `xiMCYPbsN5lVM2jJd6sQKe` | Analyzed — 58 pages, 35 component sets, 182 variants, 46 color styles |

See `context/` and `ui/` docs for extracted knowledge — no need to re-open Figma for standard prototyping work.
