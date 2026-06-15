# ⚡ CODE BREAKER : Le Casse ⚡

Bienvenue dans le dépôt de **Code Breaker**, un mini-jeu de clicker web interactif développé en autonomie. L'objectif est de forcer un coffre-fort pour accumuler un butin et débloquer des améliorations dans la boutique.

---

## 🎯 L'Objectif du Projet


Après avoir posé les bases de l'HTML et du CSS, j'ai démarré mon apprentissage de JavaScript. J'ai commencé par des exercices algorithmiques sur Exercism, mais j'ai vite ressenti le besoin de sortir de la théorie pure. Faire des mini-exercices isolés ne me suffisait pas.

C'est pour cela que j'ai lancé ce projet : pour apprendre sur le terrain en développant un jeu de A à Z. Au lieu de suivre un plan théorique, je découvre et j'intègre les notions JavaScript au fur et à mesure des étapes et des besoins de mon jeu. Pour chaque fonctionnalité, je construis ma solution de manière autonome en effectuant mes propres recherches à travers la documentation et internet. Cela me permet de lier immédiatement la théorie à une interface concrète et de gérer de vraies interactions utilisateurs en temps réel.

---

## 🛠️ Ce qui fonctionne déjà 
* **Système de clic** : Le bouton rose du coffre est connecté au JS. Le butin augmente à chaque clic et s'affiche en direct.
* **Boutique dynamique** : Les boutons d'améliorations (PC Élite, Fibre Pro, Serveur Dédié, IA, Calculateur Quantique) s'activent et se grisent automatiquement selon le butin disponible.
* **Gestion des achats** : L'achat déduit correctement le coût du butin, augmente le prix de l'amélioration de manière exponentielle et incrémente la quantité possédée.
* **Revenu Passif** : Calcul en temps réel de la vitesse de hachage ($ €/s) et génération automatique du butin chaque seconde.
* **Sauvegarde Automatique** : Intégration du `localStorage` avec conversion JSON pour sauvegarder et charger instantanément la progression (butin, prix, quantités, revenus passifs) à chaque actualisation.

## 📈 À faire ensuite
- [ ] **Bouton Reset (Outil de test)** : Ajouter un bouton pour effacer le `localStorage` et remettre toutes les variables à zéro instantanément.
- [ ] **Multiplicateurs de clics** : Faire évoluer la puissance du clic manuel (via des améliorations dédiées ou des paliers).
- [ ] **Système de Prestige / Reset global** : Permettre de réinitialiser le jeu en échange de bonus permanents (multiplicateurs globaux).
- [ ] **Événements aléatoires** : Ajouter des bonus temporaires qui apparaissent à l'écran (ex: "Hack bonus : clics x2 pendant 15s").
- [ ] **Animations et Polish** : Ajouter un effet visuel de texte flottant (ex: "+1€") à l'endroit exact où l'on clique sur le coffre.