# 🚀 Déploiement Firebase en 3 étapes

Votre portfolio est prêt à être déployé sur Firebase Hosting (100% gratuit).

---

## Étape 1 : Configurer l'ID de votre projet Firebase

**1.1** Allez sur [Firebase Console](https://console.firebase.google.com/)

**1.2** Ouvrez votre projet existant

**1.3** Cliquez sur ⚙️ **Paramètres** → **Paramètres du projet**

**1.4** Copiez votre **ID de projet** (exemple: `mon-portfolio-12345`)

**1.5** Éditez le fichier `.firebaserc` :

```bash
nano .firebaserc
```

Remplacez `VOTRE-PROJECT-ID` par votre vrai ID :

```json
{
  "projects": {
    "default": "mon-portfolio-12345"
  }
}
```

Sauvegardez (Ctrl+O, Entrée, Ctrl+X)

---

## Étape 2 : Se connecter à Firebase

```bash
cd /home/adel/cv-indep/portfolio

npx firebase login
```

Cela ouvrira votre navigateur. Connectez-vous avec votre compte Google.

---

## Étape 3 : Déployer

### Option A : Utiliser le script automatique (recommandé)

```bash
./deploy.sh
```

### Option B : Déploiement manuel

```bash
npm run build
npx firebase deploy --only hosting
```

---

## ✅ C'est fait !

Après le déploiement, Firebase affichera :

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/VOTRE-PROJECT-ID/overview
Hosting URL: https://VOTRE-PROJECT-ID.web.app
```

**Votre portfolio est maintenant en ligne !** 🎉

---

## Mises à jour futures

Pour mettre à jour votre portfolio après des modifications :

```bash
./deploy.sh
```

Ou manuellement :

```bash
npm run firebase:deploy
```

---

## Besoin d'aide ?

Consultez le guide complet : [FIREBASE_DEPLOY.md](FIREBASE_DEPLOY.md)

---

## Totalement gratuit tant que :

- ✅ Moins de 10 GB de stockage
- ✅ Moins de 360 MB/jour de bande passante
- ✅ (Suffisant pour ~10 000 visites par jour)

Vous ne paierez rien ! 💰
