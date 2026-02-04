#!/bin/bash

echo "========================================="
echo "  Changer l'URL Firebase du Portfolio   "
echo "========================================="
echo ""
echo "URL actuelle : https://portfolio-adel-6aeaa.web.app"
echo ""
echo "Ce script vous aide à créer une URL plus professionnelle"
echo "comme : https://adel-portfolio.web.app"
echo ""

# Demander l'ID du nouveau site
echo "========================================="
echo "Étape 1 : Créer un nouveau site"
echo "========================================="
echo ""
echo "D'abord, créez un nouveau site sur Firebase Console :"
echo ""
echo "1. Ouvrez : https://console.firebase.google.com/project/portfolio-adel-6aeaa/hosting"
echo "2. Cliquez sur '⚙️ Ajouter un site'"
echo "3. Choisissez un ID (ex: adel-portfolio, adel-ba-po, adelbenali)"
echo "4. Cliquez sur 'Ajouter'"
echo ""
read -p "Avez-vous créé le nouveau site sur Firebase Console ? (o/n) : " created

if [ "$created" != "o" ] && [ "$created" != "O" ]; then
    echo ""
    echo "⚠️  Créez d'abord le site sur Firebase Console, puis relancez ce script."
    exit 0
fi

echo ""
echo "========================================="
echo "Étape 2 : Configuration locale"
echo "========================================="
echo ""
read -p "Entrez l'ID du nouveau site que vous avez créé : " site_id

if [ -z "$site_id" ]; then
    echo "❌ L'ID du site ne peut pas être vide"
    exit 1
fi

echo ""
echo "Configuration du target 'portfolio' vers '$site_id'..."
echo ""

npx firebase target:apply hosting portfolio "$site_id"

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Erreur lors de la configuration du target"
    echo ""
    echo "Vérifiez :"
    echo "1. Que vous êtes connecté : npx firebase login"
    echo "2. Que le site '$site_id' existe bien sur Firebase Console"
    echo "3. Que vous avez les droits sur le projet"
    exit 1
fi

echo ""
echo "✅ Target configuré avec succès !"
echo ""

# Demander si on déploie maintenant
read -p "Voulez-vous déployer maintenant sur le nouveau site ? (o/n) : " deploy_now

if [ "$deploy_now" = "o" ] || [ "$deploy_now" = "O" ]; then
    echo ""
    echo "========================================="
    echo "Étape 3 : Build et déploiement"
    echo "========================================="
    echo ""

    echo "📦 Build du projet..."
    npm run build

    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Erreur lors du build"
        exit 1
    fi

    echo ""
    echo "🚀 Déploiement sur Firebase..."
    echo ""

    npx firebase deploy --only hosting:portfolio

    if [ $? -eq 0 ]; then
        echo ""
        echo "========================================="
        echo "  ✅ SUCCÈS !                            "
        echo "========================================="
        echo ""
        echo "Votre portfolio est maintenant accessible sur :"
        echo ""
        echo "  https://$site_id.web.app"
        echo ""
        echo "🎉 URL beaucoup plus professionnelle !"
        echo ""
        echo "Vous pouvez maintenant :"
        echo "1. Partager cette nouvelle URL"
        echo "2. Supprimer l'ancien site 'portfolio-adel-6aeaa' sur Firebase Console (optionnel)"
        echo ""
    else
        echo ""
        echo "❌ Erreur lors du déploiement"
        exit 1
    fi
else
    echo ""
    echo "Pour déployer plus tard, utilisez :"
    echo "  npm run build"
    echo "  npx firebase deploy --only hosting:portfolio"
    echo ""
    echo "Ou simplement :"
    echo "  ./deploy.sh"
    echo ""
fi
