# Paramétrage des phases — Phase preview (Aperçu)

## Context
- **Product**: Budget
- **User role**: DAF / Admin configuring the workflow
- **Trigger**: DAF clicks "Aperçu" on a phase column to see how end-users (gestionnaires) see that phase
- **Figma source**: 👨‍🔬 gestion du workflow → "Paramétrage des phases - Dashboard" (node `4609:8301`)

## What the screen does
Shows the workflow phase configuration as a Kanban board. Each phase is a column showing configured statuses. The new "Aperçu" button on each column lets the DAF simulate what the gestionnaire sees — with different access rights — without leaving the config screen.

## Phase columns (confirmed from Figma)

| # | Name | Column BG | Title color |
|---|---|---|---|
| 1 | 1 - Proposition des services | `#B2D3EA` (Medium Blue 30%) | `#006BBA` |
| 2 | 2 - Arbitrage | `#CCBFE6` (Deep Purple 30%) | `#7B5EA7` |
| 3 | 3 - Vote | `#B8D0BE` (Green 30%) | `#2E7D32` |
| 4 | 4 - Clôturé | `#B9C1D1` (Blue Gray 30%) | `#546E7A` |

## New: "Aperçu" button placement

In the column header row (`row, align-items: center, gap: 16px`):
```
[Phase title (fill)]  [Aperçu btn]  [✓ check icon]
```
Style: small ghost button (`border: 1px solid #BABFC7`, text `#6B7280`, 12px Poppins 600, padding 3px 10px, border-radius 4px)

## Modal: Aperçu

```
┌──────────────────────────────────────────────────────────┐
│  Aperçu — Phase : 1 - Proposition des services       [✕] │
├──────────────────────────────────────────────────────────┤
│  Droits  [Écriture] [Lecture ●] [Désactivé]              │
│                                                          │
│  ┌ Aperçu de la vue gestionnaire ─────────────────────┐  │
│  │ [table with 4 rows + add button]                   │  │
│  └────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────┤
│                                         [Fermer]         │
└──────────────────────────────────────────────────────────┘
```

Modal size: 720px wide, column layout, padding 16px, gap 24px

## Rights states

| Element | Écriture | Lecture | Désactivé |
|---|---|---|---|
| Status field | Outlined select, active chevron | Plain status pill (no chevron) | Greyed pill |
| Montant input | Editable `<input>` | Static text, greyed | Greyed text |
| Ajouter une inscription | Visible, active | Hidden | Hidden |
| Disabled banner | — | — | "Accès désactivé pour ce profil." (warning inline) |
| Table opacity | Normal | Normal | 0.4 (greyed) |

## Sample preview data (Phase 1)
- Charges de personnel | 450 000 € | 462 000 € | Prêt
- Fournitures de bureau | 12 000 € | 12 500 € | À traiter
- Entretien des bâtiments | 85 000 € | 87 000 € | Prêt
- Déplacements et missions | 8 500 € | 8 500 € | À traiter

## Components used
- Phase columns: from `Kanban Box` pattern (319px, padding 24px, gap 16px, border-radius 8px)
- Status cards: from `Kanban card` component (white, padding 16px, gap 16px)
- "Aperçu" btn: constructed from outlined small button style (no dedicated DS component for ghost-small in column headers)
- Modal: `General Modals` pattern (720px, col, padding 16px, gap 24px, border-radius 8px)
- Rights control: segmented control (same pattern as cadrage modal v2)
- Preview table: `Tables templates` pattern (same as inscriptions table)

## Assumptions
- Desktop only
- DAF role (full admin access to workflow config)
- Modal title uses the phase name clicked (dynamic per column)
- Default rights state: Lecture (safest default for preview)
- 4 sample rows shown in preview (constant across all 4 phases for simplicity)
