# Changer l'URL Firebase pour un lien plus professionnel

Actuellement : `https://portfolio-adel-6aeaa.web.app`
Objectif : `https://VOTRE-NOM-CHOISI.web.app`

---

## 🎯 Étape 1 : Créer un nouveau site Firebase Hosting

### 1.1 Aller sur Firebase Console

Ouvrez : [https://console.firebase.google.com/project/portfolio-adel-6aeaa/hosting](https://console.firebase.google.com/project/portfolio-adel-6aeaa/hosting)

### 1.2 Ajouter un nouveau site

1. Cliquez sur **⚙️ Ajouter un site** (ou **Add another site**)
2. Choisissez un ID de site professionnel :

**Suggestions :**
- `adel-portfolio`
- `adel-ba-po`
- `adel-product-owner`
- `adelbenali` (si c'est votre nom)
- `adel-business-analyst`

**Important :** Ce nom doit :
- Être unique sur Firebase
- Contenir uniquement des lettres minuscules, chiffres et tirets
- Sera visible dans l'URL : `https://VOTRE-NOM.web.app`

3. Cliquez sur **Ajouter**

### 1.3 Notez votre nouvel ID

Exemple : Si vous choisissez `adel-portfolio`, votre nouvelle URL sera :
```
https://adel-portfolio.web.app
```

---

## 🔧 Étape 2 : Configurer le target localement

Dans votre terminal, remplacez `VOTRE-NOUVEL-ID` par l'ID que vous avez choisi :

```bash
cd /home/adel/cv-indep/portfolio

# Exemple : npx firebase target:apply hosting portfolio adel-portfolio
npx firebase target:apply hosting portfolio VOTRE-NOUVEL-ID
```

Cela créera/modifiera le fichier `.firebaserc` avec la configuration du target.

---

## 🚀 Étape 3 : Déployer sur le nouveau site

```bash
npm run build
npx firebase deploy --only hosting:portfolio
```

Ou utilisez le script :

```bash
./deploy.sh
```

---

## ✅ Vérification

Après le déploiement, Firebase affichera :

```
✔  Deploy complete!

Hosting URL: https://VOTRE-NOUVEL-ID.web.app
```

**Votre portfolio est maintenant accessible avec l'URL professionnelle !** 🎉

---

## 🗑️ (Optionnel) Supprimer l'ancien site

Si vous voulez supprimer l'ancien site `portfolio-adel-6aeaa` :

1. Allez sur [Firebase Console > Hosting](https://console.firebase.google.com/project/portfolio-adel-6aeaa/hosting)
2. Trouvez le site `portfolio-adel-6aeaa`
3. Cliquez sur les **⋮** (trois points)
4. Cliquez sur **Supprimer le site**

**Note :** Attendez que le nouveau site soit déployé avant de supprimer l'ancien !

---

## 🌐 Option 2 : Utiliser un domaine personnalisé (gratuit)

Si vous avez un nom de domaine (ex: `adelportfolio.com`), vous pouvez le connecter gratuitement :

1. [Firebase Console > Hosting](https://console.firebase.google.com/project/portfolio-adel-6aeaa/hosting)
2. Sélectionnez votre site
3. **Domaine personnalisé** → **Ajouter**
4. Suivez les instructions pour configurer les DNS

**Avantages :**
- URL ultra professionnelle : `https://adelportfolio.com`
- SSL automatique (HTTPS)
- Gratuit sur Firebase Hosting

**Où acheter un domaine ?**
- [Namecheap](https://www.namecheap.com/) (~10€/an)
- [Google Domains](https://domains.google/) (~12€/an)
- [OVH](https://www.ovh.com/fr/) (~5€/an)

---

## 📋 Récapitulatif des commandes

```bash
# 1. Créer le site sur Firebase Console d'abord

# 2. Configurer le target (remplacez adel-portfolio)
npx firebase target:apply hosting portfolio adel-portfolio

# 3. Déployer
npm run build
npx firebase deploy --only hosting:portfolio

# Ou simplement :
./deploy.sh
```

---

## ❓ Résolution de problèmes

### "Site not found"

Assurez-vous d'avoir créé le site sur Firebase Console d'abord.

### "Permission denied"

Reconnectez-vous :

```bash
npx firebase logout
npx firebase login
```

### "Invalid target"

Vérifiez que le nom correspond exactement à celui créé sur Firebase Console.

---

## 🎯 Résultat final

**Avant :** `https://portfolio-adel-6aeaa.web.app`

**Après :** `https://VOTRE-NOUVEL-ID.web.app` (exemple: `https://adel-portfolio.web.app`)

Beaucoup plus professionnel pour partager votre CV ! 🚀
