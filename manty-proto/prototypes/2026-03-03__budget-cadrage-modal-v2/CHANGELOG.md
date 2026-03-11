# Changelog

## v1 — 2026-03-03

**Initial prototype — two UX improvements over Thomas's validated design**

### Source
- Figma base: ✅ Validated UI > "Personnalisation du cadrage" (node `2489:17484`)
- Additional reference: user-provided screenshot (current live modal)

### Changes made

**A) Bulk action button — disabled state self-explanatory**
- Kept "Appliquer un taux d'évolution" button in the top-right header area (same placement as Figma)
- When 0 rows selected: button is disabled AND a helper text appears below it:
  *"Sélectionnez une ou plusieurs lignes pour appliquer un taux."*
- When ≥1 row selected: button enables, helper text hides, selection count badge appears
  (e.g. "2 lignes sélectionnées" / "1 ligne sélectionnée")
- No floating bulk bar introduced — stays in Thomas's header CTA approach

**B) Grouping selector — radios → segmented control**
- Replaced two verbose radio lines with a compact segmented control
- Label: "Regrouper par" (inline, left of control)
- Buttons: [Chapitre] [Gestionnaire]
- Helper line: "Puis par l'autre" (12px, secondary text)
- Constructed from design system button styles (outlined group, 4px radius, primary fill on active)
- Default: "Chapitre" selected (matches original default: Chapitre first)

### Preserved from original
- Modal title, close button, overall structure
- Table columns: CHAPITRE, GESTIONNAIRE, BASE DE CADRAGE, MONTANT PERSONNALISÉS
- Checkbox selection column, expand/collapse group rows
- Inline amount inputs on child rows
- Evolution badges (+5%, −5%, +0%)
- Footer: "Annuler" (text button) + "Confirmer" (contained primary)

### Design system corrections discovered via Figma Bridge
- Font family is **Poppins** (not Roboto — corrected from initial ui-rules inference)
- Primary color: **#4063A5** (not MUI default blue)
- Button border-radius: **8px** (not 4px)
- `typography/H5`: Poppins 600 16px
- `button/large`: Poppins 600 14px, letter-spacing 3.28%

### Prototype initial state
- 0 rows selected → shows disabled button + helper text
- Group 011: expanded (3 child rows visible)
- Groups 012, 65: collapsed
- Click checkboxes to test the enabled state and selection counter
