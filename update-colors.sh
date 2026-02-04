#!/bin/bash

echo "Mise à jour des couleurs pour le thème clair..."

# Trouver tous les fichiers .jsx dans src/components
find src/components -name "*.jsx" -type f | while read file; do
    echo "Traitement de $file..."

    # Remplacements des couleurs de texte
    sed -i 's/text-dark-50/text-gray-900/g' "$file"
    sed -i 's/text-dark-100/text-gray-800/g' "$file"
    sed -i 's/text-dark-200/text-gray-700/g' "$file"
    sed -i 's/text-dark-300/text-gray-600/g' "$file"
    sed -i 's/text-dark-400/text-gray-500/g' "$file"
    sed -i 's/text-dark-500/text-gray-500/g' "$file"

    # Remplacements des couleurs de background
    sed -i 's/bg-dark-900/bg-gray-100/g' "$file"
    sed -i 's/bg-dark-950/bg-white/g' "$file"
    sed -i 's/from-dark-900/from-gray-100/g' "$file"
    sed -i 's/to-dark-950/to-white/g' "$file"
    sed -i 's/from-dark-950/from-white/g' "$file"
    sed -i 's/to-dark-900/to-gray-100/g' "$file"

    # Remplacements des hover states
    sed -i 's/hover:text-primary-300/hover:text-primary-600/g' "$file"
    sed -i 's/hover:text-primary-400/hover:text-primary-700/g' "$file"

    # Remplacements pour les borders
    sed -i 's/border-dark-950/border-gray-200/g' "$file"
    sed -i 's/ring-offset-dark-950/ring-offset-white/g' "$file"
done

echo "✓ Couleurs mises à jour avec succès!"
