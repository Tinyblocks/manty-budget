# Manty Budget — Prototype Context

> Practical reference for designing Budget screens. Based on direct analysis of the "2. Budget" Figma file (key: `2Mr4FfB929eJdXDd7HR4gJ`).

---

## What Budget is

Manty Budget replaces spreadsheet-based budget preparation for French public sector administrations. It orchestrates the full budget cycle: campaign opening, data entry by gestionnaires, DAF review, arbitration, and final export.

The product is used by:
- **DAF** (Direction des Affaires Financières) — configure campaigns, set framing rules, arbitrate, export
- **Gestionnaires** — heads of service who fill in budget requests for their perimeter
- **DGS** — oversight and summary views
- **Élus** — read-only validation at the end of the cycle

---

## Budget cycle phases

```
BP (Budget Primitif)     → initial annual budget
DM (Décision Modificative) → mid-year amendments
Arbitrage                → DAF/DGS review and adjustment round
Vote                     → final approval
```

Each phase can be **open or closed** per service/perimeter. DAF controls the opening/closing. Some gestionnaires may have the saisie (data entry) phase open while others are still closed.

---

## Screens we build

### 1. Toutes les inscriptions (Budget table — main view)

The core gestionnaire/DAF view. A dense AG Grid table listing all budget lines.

- **Rows**: one per inscription (budget line), grouped by chapitre or article
- **Columns** vary by phase: base N-1, montant saisi, taux d'évolution, montant proposé, arbitrage DAF, delta
- **Totals row** pinned at bottom per group and at grand total
- **Actions per row**: comment, cotation (opinion), statut change, delete
- Left-side **status column**: colored pill (En attente / Validé / Refusé / À revoir)
- **Selection** via checkbox column (bulk actions: change status, export)
- Column header has filter/sort affordance
- Top-right: search bar + filter chips + export button + column visibility

### 2. Cadrage (Budget framing configuration)

DAF configures the budget framing rules before gestionnaires start entering data.

Key interactions:
- **Vue d'ensemble du cadrage**: summary cards showing target per chapter, total, delta vs N-1
- **Personnalisation du cadrage**: form-like interface to set:
  - Base de cadrage (reference amount: N-1 CA, N-1 BP, custom)
  - Taux d'évolution global (e.g. +2%)
  - Détail par chapitre toggle — enables chapter-level custom rates
  - Per-chapter: montant personnalisé OR taux d'évolution personnalisé
- **Graph cadrage par chapitre**: bar chart comparing allocated vs target per chapter
- **Modale jauges par chapitre**: gauge visualisation, one gauge per chapter showing usage %
- **Modale pourcentage**: percentage input modal for setting a rate

### 3. Personnalisation du cadrage (modal or side panel)

One of the most complex screens. The DAF sets custom framing per chapter:
- Toggle: "Activer le détail par chapitre" 
- Table rows: one per chapitre
  - Columns: chapitre name, base amount, taux d'évolution (%), montant calculé, override toggle
- Footer: total row + Save / Cancel buttons

### 4. Page d'accueil (Home dashboard)

Landing page after login. Summary of all open campaigns.

- Cards per phase: phase name, open/closed status, % progress, deadline
- Quick-access links to active tasks (inscriptions à compléter, cotations en attente)
- Possibly a summary chart (bar or donut) of budget vs envelope per service

### 5. Gestion des budgets (Budget opening/closing)

DAF manages which services have access open per phase.

- List of services with their phase status: Ouvert / Partiellement ouvert / Fermé
- Bulk open/close actions
- States: `Ouvert complet` (all gestionnaires have access), `Ouvert partiel`, `Aucun accès`

### 6. Phases (Phase parameterisation)

Config screen for setting up phases across multiple client contexts (AMP, Essonne, etc.).

- Phase list (BP, DM1, DM2, Arbitrage, Vote)
- Per phase: saisie window (open date / close date), rights matrix
- Used differently per collectivité type; some have more DM rounds than others

### 7. Historique des modifications (Change history)

Audit trail of all changes made to budget lines.

- Table: date, user, field changed, old value, new value, inscription concerned
- Filters: date range, user, type of change

### 8. PPI (Plan Pluriannuel d'Investissement)

Multi-year investment plan view.

- Table: investment project × years (N, N+1, N+2, N+3...)
- Cells: planned amounts per year
- Grouped by thematic (chapter/programme)
- Summary bar charts per year

### 9. Exports Globaux et Paramétrables

Configurable export builder.

- Select which columns/rows to include
- Preview of the export table
- Output: PDF or Excel
- Two modes: full export (all data) and custom export (user-selected perimeter)

### 10. Réglages (Settings)

User preferences and notification settings.

- Notification toggle (on/off for email alerts on status changes)
- Profile settings
- V1 vs V2 layout variants exist in Figma

### 11. Modals — recurring patterns

Several modals appear across the product:

| Modal | Trigger | Content |
|---|---|---|
| Modale commentaire | Click comment icon on a row | Text area + submit |
| Modale de suppression | Delete action on row/item | Confirmation text + Cancel/Confirmer rouge |
| Changement de statut | Status pill click | Radio list of statuses + optional comment |
| Confirmation modale | Any destructive action | Warning icon + message + Cancel/Confirmer |
| Modale cotation (Coter) | DAF click "Coter" on inscription | Opinion input + amount override + status |
| Sélection gestionnaires | Budget opening config | Multi-select list of gestionnaires |

---

## Domain language (French — always use these terms)

| Term | Meaning |
|---|---|
| **Inscription** | A single budget line request (a gestionnaire's ask for a chapter/article) |
| **Chapitre** | Budget chapter (e.g. Chapitre 011 — Charges à caractère général) |
| **Article** | Sub-level of a chapitre |
| **Cadrage** | The framing envelope — DAF's envelope/target per chapter |
| **Base de cadrage** | The reference amount used for framing (e.g. CA N-1, BP N-1) |
| **CA N-1** | Compte administratif N-1 — prior year actual spend |
| **BP N-1** | Budget primitif N-1 — prior year voted budget |
| **Montant personnalisé** | A manually overridden amount (deviates from auto-calculated) |
| **Taux d'évolution** | Evolution rate — % change applied to the base (e.g. +2%) |
| **Montant proposé** | The amount proposed by the gestionnaire for this inscription |
| **Arbitrage** | DAF/DGS adjustment of proposed amounts during review round |
| **Cotation** | DAF's qualitative opinion on an inscription (Favorable / Défavorable / Sans avis) |
| **Statut** | Status of an inscription (En attente / Validé / Refusé / À revoir) |
| **Phase** | A named budget cycle step (BP, DM, Arbitrage, Vote) |
| **Saisie** | Data entry period for gestionnaires |
| **Gestionnaire** | Head of service / budget manager who enters inscriptions |
| **DAF** | Direction des Affaires Financières — the finance team |
| **DGS** | Directeur Général des Services |
| **Élu** | Elected official |
| **Service** | An organisational unit of the collectivité |
| **Enveloppe** | Budget envelope — the total allocated for a service/chapter |
| **Détail par chapitre** | Chapter-level breakdown mode in cadrage |
| **PPI** | Plan Pluriannuel d'Investissement |
| **Jauges** | Gauge charts showing % used of an envelope |

---

## UX constraints to always assume

1. **Seasonal use** — gestionnaires use saisie screens intensely for ~2 weeks per year. DAF uses cadrage and arbitrage screens during a concentrated campaign. Settings and phase config are touched even less. **Discoverability beats efficiency** for rare flows.

2. **Dense data, not sparse** — Budget tables have many columns. Users are finance professionals comfortable with spreadsheets. Density is acceptable; just maintain clear visual hierarchy (header bold, alternating row backgrounds, pinned totals).

3. **Role-based visibility** — gestionnaires see only their perimeter. DAF sees everything. When prototyping, default to the DAF view unless specified otherwise. Always note in the prototype which role is represented.

4. **Confirmation on destructive actions** — always use a confirmation modal for delete, close campaign, or overwrite operations. Never single-click destroy.

5. **Montants in euros, French locale** — amounts formatted as `1 234 567,00 €` (space thousands separator, comma decimal). Rates as `+2,5 %` (with + sign and space before %).

6. **Status pills are colored** — use semantic colors consistently:
   - En attente → Grey / Warning
   - Validé → Success/Main
   - Refusé → Error/Main
   - À revoir → Warning/Main
   - Favorable (cotation) → Success
   - Défavorable (cotation) → Error

7. **Offline-unfriendly** — all data is from the server; always show loading states and empty states. Budget tables that fail to load show a skeleton, not a blank page.
