# Budget Timeline — Frise budgétaire (2 variantes)

## Context

- **Product**: Budget
- **User roles**: DAF (admin, edit), Gestionnaires (read-only)
- **Trigger**: Affichage sur la page d'accueil (modal) et sur les pages Budget (bannière)
- **Related**: Diagramme de flux des phases (workflow-phase-preview) — inspiration visuelle

## What this prototype does

2 approches d'affichage de la frise budgétaire (budget timeline) :

1. **V1 — Horizontal scroll** : Défilement horizontal avec édition inline. Flèches entre les phases, indicateur de phase courante (carte surélevée + chevron). Boutons « Éditer » / « Fermer l'édition ».
2. **V5 — Hybrid** : Bannière contextuelle « Où en suis-je ? » (2 avant, courante, 2 après + pill « N phases suivantes → ») + vue d'ensemble en grille 2 colonnes. Édition en panneau latéral. **Approche recommandée.**

## Components used

- Design tokens from `manty-ui-rules.md` and existing prototypes (workflow-phase-preview, budget-cadrage-modal-v2)
- Poppins, Material Icons
- Cards, buttons (outlined, secondary), segmented control (N-1 toggle), pills

## Shared requirements (both versions)

- Variable phases (4–15) from config
- Custom labels with tooltip if truncation
- French date format (range: "29 sep → 31 oct", single: "10 jan", "1er" for 1st)
- Custom title (V1: inline edit, V5: in edit panel)
- N-1 toggle (Afficher l'exercice N-1)
- N-1 section: compact inline pills (label + date range)
- Current phase indicator (badge "Étape en cours", elevated card, chevron)
- Directional arrows between phase cards
- Role-based info banner
- V5: Stress test (15 phases) button

## V1 specifics

- Single horizontal scrollable row
- Fade gradient on right edge when overflow
- Left/right arrow navigation
- Inline edit: click to edit label and dates on card, × to delete, + to add

## V5 specifics

- Top: "Où en suis-je ?" focus window (2 before, current, 2 after)
- Pill "N phases suivantes →" when more phases exist
- Bottom: "Vue d'ensemble" — 2-column card grid, all phases visible, no horizontal scroll
- Edit panel: title, phase list (label, date start, date end / date unique toggle, drag handle, × delete), + add phase, Enregistrer, Annuler, N-1 toggle
- Read-only mode: no edit affordances

## Open questions

- [ ] Intégration réelle : modal vs bannière inline ?
- [ ] Persistance des modifications admin (API) ?
- [ ] Responsive mobile prioritaire ?

## Assumptions

- Desktop 1024–1440px primary
- Pas de break en dessous de 768px
- Vanilla HTML/CSS/JS, pas de build
- Fichiers ouverts directement dans le navigateur
