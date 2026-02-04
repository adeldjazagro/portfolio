#!/bin/bash

echo "========================================="
echo "  Déploiement Portfolio sur Firebase    "
echo "========================================="
echo ""

# Vérifier si .firebaserc est configuré
if grep -q "VOTRE-PROJECT-ID" .firebaserc 2>/dev/null; then
    echo "❌ ERREUR: Vous devez d'abord configurer votre ID de projet Firebase!"
    echo ""
    echo "Étapes à suivre :"
    echo "1. Ouvrez le fichier .firebaserc"
    echo "2. Remplacez 'VOTRE-PROJECT-ID' par votre vrai ID de projet Firebase"
    echo ""
    echo "Pour trouver votre ID de projet :"
    echo "1. Allez sur https://console.firebase.google.com/"
    echo "2. Ouvrez votre projet"
    echo "3. Paramètres > Paramètres du projet > ID de projet"
    echo ""
    exit 1
fi

echo "✅ Configuration Firebase détectée"
echo ""

# Vérifier si l'utilisateur est connecté à Firebase
echo "Vérification de l'authentification Firebase..."
if ! npx firebase projects:list &>/dev/null; then
    echo "❌ Vous n'êtes pas connecté à Firebase"
    echo ""
    echo "Connexion à Firebase..."
    npx firebase login

    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Échec de la connexion à Firebase"
        exit 1
    fi
fi

echo "✅ Authentification Firebase OK"
echo ""

# Builder le projet
echo "📦 Build du projet React..."
echo ""
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Erreur lors du build"
    exit 1
fi

echo ""
echo "✅ Build terminé avec succès"
echo ""

# Déployer sur Firebase
echo "🚀 Déploiement sur Firebase Hosting..."
echo ""
npx firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "  ✅ Déploiement réussi !                "
    echo "========================================="
    echo ""
    echo "Votre portfolio est maintenant en ligne !"
    echo ""
    echo "Pour voir votre site :"
    echo "  npx firebase hosting:channel:list"
    echo ""
else
    echo ""
    echo "❌ Erreur lors du déploiement"
    echo ""
    echo "Vérifiez :"
    echo "1. Que vous êtes bien connecté : npx firebase login"
    echo "2. Que l'ID du projet dans .firebaserc est correct"
    echo "3. Que vous avez les droits sur le projet Firebase"
    echo ""
    exit 1
fi
