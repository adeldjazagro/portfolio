# Portfolio Adel - BA / Product Owner

Portfolio moderne et responsive construit avec React, Vite et Tailwind CSS.

## Fonctionnalités

- Design ultra moderne et épuré orienté IT
- Entièrement responsive (mobile, tablette, desktop)
- Animations fluides et transitions
- Navigation smooth scroll
- Effets glassmorphism
- Thème sombre moderne
- Icônes Font Awesome
- Performance optimale

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript
- **Vite** - Build tool ultra rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome** - Bibliothèque d'icônes
- **PostCSS** - Transformations CSS

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez ou naviguez dans le dossier du projet :

```bash
cd portfolio
```

2. Installez les dépendances :

```bash
npm install
```

ou avec yarn :

```bash
yarn install
```

## Lancement en mode développement

Pour démarrer le serveur de développement :

```bash
npm run dev
```

ou avec yarn :

```bash
yarn dev
```

Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

## Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

ou avec yarn :

```bash
yarn build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Preview de la production

Pour prévisualiser le build de production localement :

```bash
npm run preview
```

ou avec yarn :

```bash
yarn preview
```

## Personnalisation

### Modifier les informations personnelles

1. **Photo de profil** : Remplacez `/public/adel_portefolio.png` par votre photo
2. **Informations de contact** : Modifiez dans [src/components/Contact.jsx](src/components/Contact.jsx)
3. **Liens sociaux** : Mettez à jour les URLs dans [src/components/Hero.jsx](src/components/Hero.jsx) et [src/components/Contact.jsx](src/components/Contact.jsx)
4. **Expériences** : Modifiez le tableau `experiences` dans [src/components/Experience.jsx](src/components/Experience.jsx)
5. **Compétences** : Éditez le tableau `skillCategories` dans [src/components/Skills.jsx](src/components/Skills.jsx)

### Modifier les couleurs

Les couleurs principales sont définies dans [tailwind.config.js](tailwind.config.js) :

```js
colors: {
  primary: {
    // Modifier ces valeurs pour changer la palette de couleurs
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Modifier les animations

Les animations sont définies dans [src/styles/index.css](src/styles/index.css) et [tailwind.config.js](tailwind.config.js).

## Structure du projet

```
portfolio/
├── public/
│   └── adel_portefolio.png    # Photo de profil
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation
│   │   ├── Hero.jsx           # Section d'accueil
│   │   ├── About.jsx          # Section à propos
│   │   ├── Skills.jsx         # Compétences
│   │   ├── Experience.jsx     # Expériences
│   │   ├── Contact.jsx        # Contact
│   │   └── Footer.jsx         # Pied de page
│   ├── styles/
│   │   └── index.css          # Styles globaux et Tailwind
│   ├── App.jsx                # Composant principal
│   └── main.jsx               # Point d'entrée
├── index.html                 # Template HTML
├── package.json               # Dépendances
├── vite.config.js             # Configuration Vite
├── tailwind.config.js         # Configuration Tailwind
└── postcss.config.js          # Configuration PostCSS
```

## Déploiement

### Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre repository Git
3. Configuration de build :
   - Build command : `npm run build`
   - Publish directory : `dist`

### Vercel

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre repository
3. Vercel détectera automatiquement Vite

### GitHub Pages

1. Installez `gh-pages` :

```bash
npm install --save-dev gh-pages
```

2. Ajoutez dans `package.json` :

```json
{
  "homepage": "https://votre-username.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Déployez :

```bash
npm run deploy
```

## Support

Pour toute question ou problème, n'hésitez pas à me contacter via le formulaire de contact du portfolio.

## Licence

Ce projet est libre de droits. Vous pouvez l'utiliser et le modifier comme vous le souhaitez.

---

Fait avec React, Vite et Tailwind CSS
