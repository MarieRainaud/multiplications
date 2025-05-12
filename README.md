# Jeu des Tables de Multiplication

Ce jeu permet de réviser les tables de multiplication de 1 à 11. L'utilisateur peut sélectionner les tables qu'il souhaite réviser, puis il devra répondre à des questions de multiplication générées aléatoirement à partir de ces tables. Le jeu lui indique si sa réponse est correcte ou incorrecte, et lui propose une nouvelle question après un délai.

## Objectifs

#### Renforcer les compétences en développement web :
- Utiliser des technologies front-end (HTML, CSS, JavaScript) pour créer une application web fonctionnelle
- Pratiquer la gestion du DOM, l’interactivité avec JavaScript, ainsi que la création d'une interface simple
- Offrir une personnalisation selon les besoins de l'utilisateur
- Organiser le développement du projet de manière progressive, en effectuant des mises à jour régulières et en documentant chaque étape via des changelogs.

#### Apprendre et réviser les tables de multiplication :
- Permettre à l'utilisateur de sélectionner les tables qu'il souhaite réviser
- Générer des questions aléatoires pour chaque table sélectionnée afin d'exercer la mémoire et la rapidité
- Rendre l'apprentissage interactif et engageant

## Structure du projet
- /index.html : Le fichier principal contenant la structure HTML de la page
- /style.css : Le fichier CSS pour la mise en forme et les styles
- /script.js : Le fichier JavaScript contenant la logique du jeu


## Fonctionnalités
- Sélection des tables de multiplication à réviser
- Génération de questions de multiplication aléatoires
- Validation des réponses de l'utilisateur
- Affichage des résultats avec une couleur spécifique
- Le jeu pose une nouvelle question après un court délai

## Technologies utilisées
#### HTML
- Structure de base d'une page web
- Liens avec les fichiers CSS et JS
- Attributs HTML
- Formulaires HTML, champs interactifs et boutons
- Manipulation de l’affichage avec style

#### CSS
- Sélecteurs CSS de type, d'ID et de classes
- Mise en page et typographie
- Box Model : marges, bordures et padding
- Structure simple et espacement adapté pour garantir une lisibilité optimale sur différentes tailles d'écran.

#### JavaScript
- Manipulation du DOM : méthodes pour sélectionner des éléments de la page, modification dynamique du contenu, modification du style d’un élément
- Manipulation d’événements : événements onclick
- Logique conditionnelle
- Tableaux
- Génération aléatoire d’une table et d’un nombre
- Timers et délais
- Vérification des entrées utilisateur avec alert()
- Gestion des classes dynamiques : classList.add() pour appliquer des classes CSS qui modifient la présentation des résultats

## Comment jouer ?
- Sélectionnez les tables de multiplication que vous souhaitez réviser
- Cliquez sur le bouton "Commencer" pour démarrer le jeu
- Répondez à chaque question de multiplication en entrant votre réponse dans le champ prévu à cet effet
- Après chaque réponse, le jeu vous indiquera si votre réponse est correcte ou incorrecte
- En cas de mauvaise réponse, recommencer jusqu'à trouver la bonne réponse
- Le jeu vous posera une nouvelle question après quelques secondes

## Changelog
#### Version 1 : Initial Commit

#### Version 2
- Résolution du bug d'affichage en cas de bonne réponse suivant une mauvaise réponse en retirant les classes CSS
- Changement en cas de mauvaise réponse, il faut recommencer jusqu'à avoir la bonne réponse
- Effacement de la réponse précédente dans le champ de saisie
- Ecouteur d'événement pour la touche Entrée
