# Personnalisation du cadrage — Modal v2

## Context
- **Product**: Budget
- **User role**: DAF (sees all chapters + all gestionnaires)
- **Trigger**: DAF clicks "Personnaliser le cadrage" from the cadrage custom view
- **Related Figma**: ✅ Validated UI > "Personnalisation du cadrage" (node `2489:17484`)
- **Reference screenshot**: `/assets/Screenshot_2026-03-03_at_14.54.32-fb9e6fd6-7c9e-4c37-afac-d0eade62203b.png`

## What the screen does
Allows the DAF to customize per-chapter budget amounts in the context of a given budget envelope. The DAF can set custom evolution amounts for one or more chapters at once, using the bulk "Appliquer un taux d'évolution" action. The view can be regrouped by chapter-first or gestionnaire-first.

## Layout
```
┌──────────────────────────────────────────────────────────────────────┐
│  01 - Budget principal - Fontionnement - Personnaliser le cadrage  ✕ │  ← h5 / Poppins 600 16px
├──────────────────────────────────────────────────────────────────────┤
│  Regrouper par [Chapitre][Gestionnaire]          [% Appliquer un    │  ← controls row
│  Puis par l'autre                                  taux d'évolution] │
│                                             (Sélectionnez une ou... )│
├──────────────────────────────────────────────────────────────────────┤
│  ☑  CHAPITRE       GESTIONNAIRE  BASE DE CADRAGE  MONTANT PERSO.    │  ← table header
│     [Rechercher]   [Rechercher]                                      │  ← column search row
│  ⊟  ∨ 011                        700 000 €  700 000 €     [+5%]     │  ← group row (expanded)
│  □    Affaires cult.              300 000 €  [300 000]     [+5%]     │  ← child row
│  □    Bibliothèque                200 000 €  [200 000]     [+5%]     │
│  □    Cabinet du maire            200 000 €  [200 000]     [+5%]     │
│  □  > 012                       1 780 000 €  1 780 000 €  [−5%]     │  ← group row (collapsed)
│  □  > 65                          340 000 €    340 000 €  [+0%]     │
│     Total                       3 450 000 €  3 450 000 €  [+5%]     │  ← total row
├──────────────────────────────────────────────────────────────────────┤
│                                          [Annuler]  [Confirmer]      │  ← footer
└──────────────────────────────────────────────────────────────────────┘
```

## Components used
- **Modal shell** — `General Modals` component set (996×572, column, padding 16px, gap 24px, border-radius 8px)
- **Segmented control** (B) — constructed from design system button styles (2 segments, outlined group, active = primary fill, `border-radius: 4px`, `border: 1px solid #BABFC7`)
- **Outlined button** (A: "Appliquer un taux d'évolution") — `<Button>` component, Size=Large, Color=Primary, Variant=Outlined; disabled when 0 selection
- **Table** — `Tables templates` component (AG Grid pattern), 4 columns + checkbox
- **Search bar** — `Search bar` component in column header sub-row
- **Checkboxes** — `<Checkbox>` component, indeterminate state on parent when children partially selected
- **Evolution badges** — Status pill pattern: positive=Success fill, negative=Error fill, neutral=grey
- **Inline text input** — MUI outlined text field, dense, for child row amounts
- **Footer buttons** — text button ("Annuler") + contained primary ("Confirmer")

## Interaction spec

### A: Bulk action button
| State | Button | Helper text | Selection badge |
|---|---|---|---|
| 0 rows selected | Disabled, outlined, greyed | "Sélectionnez une ou plusieurs lignes pour appliquer un taux." | Hidden |
| 1 row selected | Enabled, outlined, primary color | Hidden | "1 ligne sélectionnée" |
| N rows selected | Enabled | Hidden | "N lignes sélectionnées" |

### B: Segmented control
| Segment | Meaning |
|---|---|
| Chapitre (active by default) | Table groups by Chapitre first, then Gestionnaire |
| Gestionnaire | Table groups by Gestionnaire first, then Chapitre |

Click switches active segment immediately (no submit needed — view mode toggle).

### Checkboxes
- Individual row checkboxes: toggle row selection
- Group row checkbox: when group is expanded → toggle all children; when collapsed → selects whole group
- Group row shows indeterminate state when some (not all) children are checked
- Master checkbox (header): select/deselect all visible rows

### Expand/collapse
- Click chevron or group label → toggle children visibility
- Chevron rotates 90° when expanded

## Open questions
- [ ] What happens when "Appliquer un taux d'évolution" is clicked (which version of the modal)? → Out of scope for this prototype
- [ ] Should the grouping control affect the table data in the real app immediately or only on confirm? → Prototype treats it as immediate (view mode)
- [ ] The title says "Fontionnement" (possible typo in Figma for "Fonctionnement") — keep as-is or fix?

## Assumptions
- Desktop only (no mobile variant)
- DAF role (full visibility)
- 3 chapters shown (011 expanded, 012 and 65 collapsed)
- Initial state: 0 selections (to demonstrate the disabled state improvement)
- Font: **Poppins** (confirmed via Figma Bridge — corrects earlier Roboto inference in ui-rules.md)
- Primary color: **#4063A5** (confirmed via Figma Bridge fill token)
