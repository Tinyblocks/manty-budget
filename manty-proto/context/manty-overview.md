# Manty — Product Overview

> Practical reference for prototyping. Not marketing copy.

---

## What Manty is

Manty is a **data platform for French public sector administrations** (collectivités territoriales: municipalities, départements, EPCI, etc.).

It centralises data from existing back-office software (ERP, HR, finance, payroll systems) into a unified data lake, then surfaces that data through purpose-built applications. The typical buyer is a DAF (Direction des Affaires Financières), DRH, or DGS at a city or intercommunality.

Key product philosophy:
- **No silos** — one data lake feeds all applications
- **No extra training** — must be immediately usable by non-technical public sector staff
- **Seasonal workflows** — some flows are used once a year (budget vote, salary campaign); discoverability matters more than shortcut density
- **Multi-user, role-based** — gestionnaires, DAF, DGS, élus each have different views and permissions

---

## The three products

---

### 1. Manty Décision

**What it does:** BI/dashboards for public sector KPIs. Connects to all data sources, provides pre-built dashboards, indicators library, and a natural-language query tool.

**Primary users:** DGS, DAF, DRH, elected officials (élus), service managers

**Core flows:**
- Browse a library of pre-built thematic dashboards (finance, HR, waste, pools, etc.)
- View and filter indicator cards (KPIs with trend lines, breakdowns)
- Share dashboards or scheduled reports to services and élus
- Cross-data queries using natural language (requêteur)
- Drill-down from a summary indicator into detail tables

**Key UI patterns:**
- Dashboard home: grid of cards (KPI tiles, chart cards)
- Indicator detail: large chart + metadata + data table below
- Share modal: recipient picker + access level selector + schedule toggle
- Sidebar navigation per thematic domain

**Entities:** indicateur, tableau de bord, thématique, période, fréquence d'envoi, destinataire

---

### 2. Manty Budget

**What it does:** Collaborative budget preparation workflow for the full budget cycle (BP, DM, arbitrage). Replaces spreadsheets for the annual budget preparation campaign.

**Primary users:** DAF, gestionnaires (service managers who input budget data), DGS, élus

**Core flows:**
- Open/close budget campaign per phase (BP = Budget Primitif, DM = Décision Modificative)
- Gestionnaires enter budget requests per chapter/article (inscriptions)
- DAF reviews, cotates (gives an opinion), arbitrates
- Cadrage: DAF sets budget framing rules (base amounts, custom evolution rates, targets per chapter)
- PPI (Plan Pluriannuel d'Investissement): multi-year investment planning
- Export: generate configured budget tables for reporting/printing
- Workflow: manage phase transitions, user rights, notification rules

**Key UI patterns:** See `manty-budget.md` for the full breakdown.

**Entities:** See `manty-budget.md`.

---

### 3. Manty Prospective RH

**What it does:** Salary mass forecasting and GPEEC (Gestion Prévisionnelle des Emplois, des Effectifs et des Compétences). Helps HR teams simulate future payroll costs, model departures/arrivals, and support budget dialogue.

**Primary users:** DRH, chargés de paie, DAF

**Core flows:**
- Simulate salary mass evolution (based on index point, GVT, departures/arrivals)
- Model scenarios (e.g. freeze hiring, add posts, apply pay increases)
- Dashboard view of headcount, FTE, salary cost per service/grade
- Export simulation results to Budget for the HR envelope in BP/DM
- GPEEC: track career paths, competency gaps, retirement forecasts

**Key UI patterns:**
- Scenario builder: parameter form (sliders + inputs) + live result chart
- HR overview dashboard: headcount by service, pyramid of ages, grade breakdowns
- Salary mass table: grouped by service, with simulation delta columns (+/- vs reference)
- Simulation history list: version comparison

**Entities:** poste, agent, grade, échelon, GVT (glissement-vieillesse-technicité), masse salariale, scénario, effectif, ETPT (équivalent temps plein travaillé), cotisation, régime indemnitaire

---

## Cross-product data platform

All three products are fed by the same data lake. Key implications for prototyping:
- Data is always **imported, not entered** except in Budget (gestionnaires enter their own requests) and Prospective RH (simulation parameters)
- **Refresh cadence** matters — users know data may be N days old; timestamps are common
- **Permissions are organisational** — a gestionnaire sees only their service; a DAF sees everything
- The **App Bar** is shared across all products (Manty top nav)
