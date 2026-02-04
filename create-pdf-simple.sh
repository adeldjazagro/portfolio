#!/bin/bash

echo "========================================="
echo "  Création du PDF du CV                 "
echo "========================================="
echo ""

CV_HTML="/home/adel/cv-indep/portfolio/public/cv-template.html"
CV_PDF="/home/adel/cv-indep/portfolio/public/CV_Adel_Mansour_BA_PO.pdf"

echo "📄 Fichier HTML : $CV_HTML"
echo ""

# Vérifier que le fichier HTML existe
if [ ! -f "$CV_HTML" ]; then
    echo "❌ Erreur : cv-template.html introuvable"
    exit 1
fi

echo "💡 Plusieurs options pour générer le PDF :"
echo ""
echo "1️⃣  VIA SERVEUR LOCAL (Recommandé)"
echo "   - Lancez : npm run dev"
echo "   - Ouvrez : http://localhost:3000/cv-template.html"
echo "   - Ctrl+P > Enregistrer en PDF"
echo "   - Sauvegardez dans : public/"
echo ""
echo "2️⃣  VIA NAVIGATEUR WINDOWS"
echo "   - Le fichier va s'ouvrir dans votre navigateur par défaut"
echo "   - Appuyez sur Ctrl+P"
echo "   - Sélectionnez 'Enregistrer au format PDF'"
echo "   - Paramètres :"
echo "     • Format : A4"
echo "     • Marges : Par défaut"
echo "     • Graphiques d'arrière-plan : ✓ Activé"
echo "   - Sauvegardez : CV_Adel_Mansour_BA_PO.pdf"
echo "   - Copiez le fichier dans : /home/adel/cv-indep/portfolio/public/"
echo ""
echo "3️⃣  VIA CONVERSION EN LIGNE"
echo "   - Allez sur : https://cloudconvert.com/html-to-pdf"
echo "   - Uploadez : cv-template.html"
echo "   - Téléchargez le PDF"
echo "   - Renommez : CV_Adel_Mansour_BA_PO.pdf"
echo "   - Placez dans : public/"
echo ""

read -p "Voulez-vous ouvrir le fichier dans votre navigateur Windows ? (o/n) : " open_browser

if [ "$open_browser" = "o" ] || [ "$open_browser" = "O" ]; then
    echo ""
    echo "📂 Ouverture dans le navigateur..."

    # Essayer d'ouvrir avec explorer.exe (WSL)
    if command -v explorer.exe &> /dev/null; then
        explorer.exe "$(wslpath -w "$CV_HTML")" 2>/dev/null ||
        cmd.exe /c start "" "$(wslpath -w "$CV_HTML")" 2>/dev/null ||
        echo "⚠️  Impossible d'ouvrir automatiquement. Ouvrez manuellement : $CV_HTML"
    else
        echo "📝 Ouvrez manuellement le fichier dans votre navigateur :"
        echo "   $CV_HTML"
    fi

    echo ""
    echo "Après avoir généré le PDF :"
    echo "1. Renommez-le : CV_Adel_Mansour_BA_PO.pdf"
    echo "2. Copiez-le dans : /home/adel/cv-indep/portfolio/public/"
    echo ""
fi

# Vérifier si le PDF existe déjà
if [ -f "$CV_PDF" ]; then
    echo ""
    echo "✅ PDF trouvé !"
    ls -lh "$CV_PDF"

    read -p "Le PDF est déjà créé. Voulez-vous déployer maintenant ? (o/n) : " deploy_now

    if [ "$deploy_now" = "o" ] || [ "$deploy_now" = "O" ]; then
        echo ""
        echo "🚀 Lancement du déploiement..."
        ./deploy.sh
    fi
else
    echo ""
    echo "⏳ Une fois le PDF créé et placé dans public/, lancez :"
    echo "   ./deploy.sh"
    echo ""
fi
