# Changelog

## v4 — 2026-03-11

**Prototype v2 — 2 versions only, reworked**

- **Suppression** : v2, v3, v4 supprimés. Conservation de V1 et V5 uniquement.
- **Suppression** : Section « État des budgets » retirée de toutes les pages.
- **V1** : Flèches directionnelles entre cartes ; indicateur phase courante (carte surélevée + chevron) ; N-1 en pills compactes ; boutons « Éditer » / « Fermer l'édition ».
- **V5** : Bannière « Où en suis-je ? » (2 avant, courante, 2 après + pill « N phases suivantes → ») ; grille 2 colonnes pour « Vue d'ensemble » ; flèches entre cartes ; édition en panneau latéral (titre, phases avec label, dates, date unique, drag, delete, + ajouter, Enregistrer/Annuler, N-1) ; stress test conservé.
- **Index** : 2 versions uniquement, descriptions mises à jour.

## v3 — 2026-03-11

**Manty UI alignment, overflow fixes, interface cleanup**

- **Manty UI** : Poppins, 64px icon-only primary sidebar (#4063A5), shadow-soft, r-card 8px, grey-medium #6B7280
- **Overflow** : html/body overflow-x hidden, app-layout overflow hidden, main-content min-width 0, timeline-wrapper overflow hidden
- **Cleanup** : Suppression du bouton « Stress test: 15 phases » et « Réinitialiser » sur toutes les versions
- **N-1** : Suppression du hint « — Comparer avec l'exercice précédent »
- **Index** : Footer simplifié, styleguide Manty appliqué

## v2 — 2026-03-11

**Styleguide, page structure & UX overhaul**

- **Styleguide** : Roboto (remplace Poppins), elevation/1 pour les cartes, radius 4px, tokens Manty
- **Page shell** : App layout avec sidebar (240px), app bar (64px), header cards ("Modifié le"), section "État des budgets"
- **UX inline edit** : Pencil → input + check/cancel (Enter/Escape), plus de blur automatique
- **UX delete** : Modal de confirmation avant suppression (Annuler + Supprimer)
- **UX admin** : Bannière "Mode édition activé" quand admin actif, outline sur le timeline
- **UX stress test** : Bouton "Réinitialiser" pour restaurer la config par défaut
- **UX N-1** : Hint "Comparer avec l'exercice précédent"
- **Accessibilité** : aria-labels sur les boutons de scroll, focus states

## v1 — 2026-03-10

**Initial prototype**

- Created: 5 variantes de la frise budgétaire (Budget Timeline)
- **index.html** : page de navigation vers les 5 versions
- **timeline-config.js** : configuration partagée, `getStressTestConfig()`, helpers de formatage des dates (français)
- **v1-horizontal-scroll.html** : bande horizontale défilante, flèches, gradient de scroll
- **v2-serpentine.html** : disposition en serpentine (Z-flow), connecteurs entre lignes
- **v3-vertical-stepper.html** : stepper vertical avec icônes de statut
- **v4-focus-window.html** : fenêtre glissante centrée sur la phase courante, pills de navigation
- **v5-hybrid.html** : bannière focus (V4) + serpentine (V2), approche recommandée

**Exigences communes implémentées**

- Phases variables (4–15), rendu dynamique
- Labels personnalisés, tooltip si troncation
- Dates au format français (29 sep → 31 oct, 1er nov)
- Titre éditable en mode admin
- Toggle N-1 (Afficher l'exercice N-1)
- Indicateur de phase courante (badge "Étape en cours")
- Mode admin : édition inline des labels, champs date, ajout/suppression de phases
- Bannière d'information sur les droits (admin vs gestionnaire)
- Bouton "Stress test: 15 phases"

**Composants**

- Design system Manty (couleurs, espacements, radius, ombres)
- Poppins, Material Icons
- Pas de dépendances externes
