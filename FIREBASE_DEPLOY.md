# Guide de déploiement Firebase Hosting

Votre portfolio est prêt à être déployé sur Firebase Hosting (100% gratuit pour votre usage).

## Plan gratuit Firebase Hosting

- ✅ **10 GB** de stockage
- ✅ **360 MB/jour** de transfert de données (suffisant pour des milliers de visiteurs)
- ✅ **SSL automatique** (HTTPS)
- ✅ **CDN global** (ultra rapide partout dans le monde)
- ✅ **Domaine personnalisé** possible (.web.app et .firebaseapp.com inclus)

---

## Étape 1 : Récupérer l'ID de votre projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Ouvrez votre projet
3. Cliquez sur l'icône **⚙️ Paramètres** (en haut à gauche)
4. Dans **Paramètres du projet**, copiez votre **ID de projet**

Exemple : `mon-portfolio-12345`

---

## Étape 2 : Configurer le projet Firebase

Éditez le fichier `.firebaserc` et remplacez `VOTRE-PROJECT-ID` par votre vrai ID de projet :

```json
{
  "projects": {
    "default": "mon-portfolio-12345"
  }
}
```

---

## Étape 3 : Se connecter à Firebase

```bash
cd /home/adel/cv-indep/portfolio

# Se connecter à Firebase (ouvrira votre navigateur)
npx firebase login
```

Suivez les instructions dans le navigateur pour vous authentifier avec votre compte Google.

---

## Étape 4 : Builder le projet

```bash
npm run build
```

Cela créera un dossier `dist/` avec tous les fichiers optimisés.

---

## Étape 5 : Déployer sur Firebase

```bash
npx firebase deploy
```

Ou utilisez le script npm :

```bash
npm run firebase:deploy
```

Cette commande va :
1. Builder automatiquement votre projet
2. Déployer sur Firebase Hosting
3. Vous donner l'URL de votre site

---

## URL de votre portfolio

Après le déploiement, Firebase vous donnera deux URLs :

- **URL principale** : `https://VOTRE-PROJECT-ID.web.app`
- **URL alternative** : `https://VOTRE-PROJECT-ID.firebaseapp.com`

Exemple : `https://mon-portfolio-12345.web.app`

---

## Déploiements futurs

Pour mettre à jour votre portfolio après des modifications :

```bash
# 1. Tester localement
npm run dev

# 2. Builder et déployer
npm run firebase:deploy
```

C'est tout ! Vos changements seront en ligne en quelques secondes.

---

## Ajouter un domaine personnalisé (optionnel)

Si vous avez votre propre domaine (ex: `adelportfolio.com`) :

1. Allez dans [Firebase Console](https://console.firebase.google.com/)
2. **Hosting** → **Ajouter un domaine personnalisé**
3. Suivez les instructions pour configurer les DNS

**Note** : Les domaines personnalisés sont gratuits sur Firebase Hosting !

---

## Commandes utiles

```bash
# Se connecter à Firebase
npx firebase login

# Voir les projets Firebase
npx firebase projects:list

# Tester localement avec Firebase
npx firebase serve

# Déployer uniquement le hosting
npx firebase deploy --only hosting

# Voir l'historique des déploiements
npx firebase hosting:channel:list
```

---

## Résoudre les problèmes

### "Error: Authentication error"

```bash
npx firebase logout
npx firebase login
```

### "Error: Project not found"

Vérifiez que l'ID du projet dans `.firebaserc` correspond bien à votre projet Firebase.

### "Permission denied"

Assurez-vous d'être connecté avec le bon compte Google qui a accès au projet Firebase.

---

## Optimisations automatiques

Firebase Hosting applique automatiquement :

- ✅ **Compression Gzip/Brotli** (fichiers plus petits)
- ✅ **Cache CDN** (chargement ultra rapide)
- ✅ **HTTP/2** (performance optimale)
- ✅ **SSL/TLS** (sécurité HTTPS)

Pas besoin de configuration supplémentaire !

---

## Statistiques et monitoring

Pour voir les statistiques de votre site :

1. [Firebase Console](https://console.firebase.google.com/)
2. **Hosting** → **Tableau de bord**

Vous verrez :
- Nombre de visiteurs
- Bande passante utilisée
- Pays des visiteurs
- Pages les plus consultées

---

## Checklist avant déploiement

- [ ] Personnaliser `.firebaserc` avec votre ID de projet
- [ ] Mettre à jour vos informations de contact
- [ ] Remplacer les liens LinkedIn/GitHub
- [ ] Tester localement : `npm run dev`
- [ ] Builder : `npm run build`
- [ ] Se connecter : `npx firebase login`
- [ ] Déployer : `npx firebase deploy`

---

## Coûts

**Totalement GRATUIT** pour un portfolio avec :
- Moins de 10 GB de fichiers
- Moins de 360 MB/jour de transfert (≈ 10 000 visites/jour)

Vous ne paierez RIEN tant que vous restez dans ces limites (ce qui est le cas pour 99% des portfolios).

---

Bon déploiement ! 🚀
