# Changelog

## v1 — 2026-03-03

**New feature: Phase preview (Aperçu) for end-user view**

- Added "Aperçu" button to each phase column header in "Paramétrage des phases - Dashboard"
- New modal: "Aperçu — Phase : [nom]" with segmented control Écriture / Lecture / Désactivé
- Preview table shows realistic gestionnaire view that updates live per rights state:
  - **Écriture**: inputs editable, status dropdown active, "Ajouter une inscription" visible
  - **Lecture**: inputs and status become read-only, "Ajouter une inscription" hidden
  - **Désactivé**: entire preview greyed, inline message "Accès désactivé pour ce profil."
- Existing phase column layout, colors, status cards, and connectors unchanged

### Figma source
- Page: 👨‍🔬 gestion du workflow (id `2814:2`)
- Frame: Paramétrage des phases - Dashboard (node `4609:8301`, 1776×1359px)
- Phase column structure from node `4609:8361` (Kanban Box, first column)
