#!/bin/bash

echo "========================================="
echo "   Installation du Portfolio React      "
echo "========================================="
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé."
    echo ""
    echo "Installation de Node.js via nvm..."
    echo ""

    # Installer nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

    # Charger nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

    # Installer Node.js
    nvm install 18
    nvm use 18

    echo ""
    echo "✅ Node.js installé avec succès!"
else
    echo "✅ Node.js est déjà installé : $(node --version)"
fi

echo ""
echo "Installation des dépendances npm..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "   ✅ Installation terminée !            "
    echo "========================================="
    echo ""
    echo "Pour lancer le portfolio en mode développement :"
    echo "  npm run dev"
    echo ""
    echo "Pour builder la version production :"
    echo "  npm run build"
    echo ""
    echo "Consultez PORTFOLIO_INSTRUCTIONS.md pour la personnalisation."
    echo ""
else
    echo ""
    echo "❌ Erreur lors de l'installation des dépendances."
    echo "Veuillez vérifier les logs ci-dessus."
    echo ""
fi
