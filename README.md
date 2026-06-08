# CSS UI Utilities Collection

Collection de mini-projets HTML/CSS (et un exemple CSS/JS) pour reproduire des effets d'interface modernes: boutons, menus, navigation, glassmorphism et horloge animee.

## Objectif du projet

Ce depot sert a:
- explorer des effets visuels UI avec du code simple et lisible;
- reutiliser rapidement des composants visuels dans d'autres projets;
- apprendre des techniques CSS comme `clip-path`, `animation`, `filter`, `backdrop-filter`, effets hover, et navigation avec indicateur actif.

## Contenu (utils disponibles)

1. `custom-shape-button-with-hover-effects`
- Type: composant bouton
- Tech: HTML + CSS
- Point d'entree: `index.html`
- Utilise notamment: `clip-path`

2. `digital-clock`
- Type: composant horloge animee
- Tech: HTML + CSS + JavaScript
- Point d'entree: `index.html`
- Fichiers principaux: `style.css`, `script.js`

3. `glassmorphism-animation-effects`
- Type: animation visuelle glassmorphism
- Tech: HTML + CSS
- Point d'entree: `index.html`
- Utilise notamment: `animation`, `filter`, `backdrop-filter`

4. `glowing-button-hover-effect-02`
- Type: composant bouton lumineux
- Tech: HTML + CSS
- Point d'entree: `index.html`

5. `isometric-menu-hover-effect`
- Type: menu isometrique multi-pages
- Tech: HTML + CSS
- Points d'entree: `index.html`, `about.html`, `services.html`, `our-team.html`, `portfolio.html`, `contact.html`
- Peut utiliser Font Awesome via CDN

6. `magic-navigation-menu-indicator`
- Type: menu de navigation avec indicateur actif
- Tech: HTML + CSS
- Point d'entree: `index.html`
- Peut utiliser Ionicons

## Prerequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Optionnel pour un meilleur rendu local: serveur HTTP local

## Compilation

Aucune compilation necessaire.

Ces projets sont statiques (HTML/CSS/JS). Vous pouvez les ouvrir directement dans un navigateur.

## Execution

### Option 1: ouverture directe

Ouvrir le fichier `index.html` (ou une autre page d'entree) dans votre navigateur.

### Option 2: via un serveur local (recommande)

Depuis la racine du projet:

```bash
cd /Users/ebaudet/rendu/tutorials/css
python3 -m http.server 8000
```

Puis ouvrir:

- `http://localhost:8000/custom-shape-button-with-hover-effects/`
- `http://localhost:8000/digital-clock/`
- `http://localhost:8000/glassmorphism-animation-effects/`
- `http://localhost:8000/glowing-button-hover-effect-02/`
- `http://localhost:8000/isometric-menu-hover-effect/`
- `http://localhost:8000/magic-navigation-menu-indicator/`

## Exemples d'utilisation

### Reutiliser un composant bouton dans un autre projet

1. Copier le HTML du bouton depuis un `index.html` source.
2. Copier les regles CSS associees depuis `style.css`.
3. Verifier les dependances visuelles (icones CDN, polices, variables CSS).
4. Ajuster couleurs, tailles et timings d'animation.

### Integrer l'horloge digitale

1. Copier la structure HTML de `digital-clock/index.html`.
2. Importer `digital-clock/style.css`.
3. Importer `digital-clock/script.js` en bas de page.
4. Verifier que le script est charge apres le DOM.

## Personnalisation rapide

- Couleurs: modifier les variables/valeurs dans les fichiers CSS.
- Vitesse d'animation: ajuster `animation-duration` et `transition`.
- Formes: adapter `clip-path` dans le projet de bouton personnalise.
- Effet glassmorphism: jouer sur `backdrop-filter`, opacite et bordures.

## Structure du depot

```text
css/
  custom-shape-button-with-hover-effects/
  digital-clock/
  glassmorphism-animation-effects/
  glowing-button-hover-effect-02/
  isometric-menu-hover-effect/
  magic-navigation-menu-indicator/
```

## Ressources utiles

- MDN `clip-path`: https://developer.mozilla.org/fr/docs/Web/CSS/clip-path
- MDN `animation`: https://developer.mozilla.org/fr/docs/Web/CSS/animation
- MDN `filter`: https://developer.mozilla.org/fr/docs/Web/CSS/filter
- MDN `backdrop-filter`: https://developer.mozilla.org/fr/docs/Web/CSS/backdrop-filter
- Clippy (generateur `clip-path`): https://bennettfeely.com/clippy/
- Font Awesome: https://fontawesome.com/
- Ionicons: https://ionic.io/ionicons

## Licence

Usage libre pour apprentissage, experimentation et adaptation a vos projets.
