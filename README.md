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
- Flexbox
- Structure simple et espacement adapté pour garantir une lisibilité optimale sur différentes tailles d'écran

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

#### Version 3 : Bouton revenir à la sélection des tables
- Création du bouton revenir à la sélection
- Positionnement à la fin de la page
- Effacement sur la page de sélection des tables
- Modification du <p> du résultat afin que le bouton ne bouge pas quand le résultat s'affiche

Annexe : meta pour téléphone

#### Version 4 : Mode contrôle
- Création d'un mode entrainement et un mode contrôle
- Limitation du nombre d'itérations à 20
- Mise à jour pour les mauvaises réponses
- Création d'un compteur de bonnes réponses
- Création d'un message de fin et de messages selon le résultat final
- Remise à zéro du compteur de bonnes réponses

Annexe :
- Résolution mauvaise réponse en cas de champ de saisie vide
- Résolution appuis successifs sur le bouton Vérifier

#### Version 5
- Résolution du problème d'affichage du compteur
- Meileure présentation grâce à Grid, notamment sur mobile
- Résolution du problème avec le setTimeout de verifierReponse() qui relançait une question si on avait cliqué sur le bouton de retour à la sélection des tables avant la fin du délai

#### Version 6
- Résolution du bug lié à l'absence de déverrouillage en mode Entraînement
- Résolution du bug d'affichage du compteur une fois le mode contrôle quitté

#### Version 7
- Remise à zéro du compteur au début du mode contrôle 

#### Projets à venir
- Affichage sur mobile (cases à cocher pas sur la même ligne que le nom de la table)
- Choix du nombre de questions
- Chronomètre et choix de la durée du chronomètre
- Accessibilité