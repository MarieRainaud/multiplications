let tablesSelectionnees = [];
let tablesEnCours;
let num1, num2;
let modeActuel = '';
let bonneReponseCount = 0;
let totalQuestions = 0;
let maxQuestions = 20;
let verrouillage = false;
let enCours = false;

// Récupérer les tables sélectionnées
function getTablesSelectionnees() {
    tablesSelectionnees = [];
    for (let i = 1; i <= 11; i++) {
        if (document.getElementById(`table${i}`).checked) {
            tablesSelectionnees.push(i);
        }
    }
}

// Choisir le mode
function choisirMode(mode) {
    modeActuel = mode;
    enCours = true;
    bonneReponseCount = 0;
    totalQuestions = 0;

    // Si mode contrôle, afficher le compteur de bonnes réponses
    if (mode === 'controle') {
        document.getElementById('compteur').style.display = 'block';
    }
    // Si aucune table n'est sélectionnée, on affiche une alerte
    getTablesSelectionnees();
    if (tablesSelectionnees.length === 0) {
        alert('Tu dois sélectionner au moins une table !');
        return;
    }
    poserQuestion();
}

// Poser la question
function poserQuestion() {

    // Stopper ici si on est revenu sur la page de sélection des tables
    if (!enCours) {
        return;
    }

    //Stopper ici en mode contrôle si on a atteint le nombre de questions
    if (modeActuel === 'controle' && totalQuestions >= maxQuestions) {
        afficherFinControle();
        return;
    }

    // Réinitialiser le message de résultat et effacer le champ de saisie
    document.getElementById('resultat').textContent = '';
    document.getElementById('reponse').value = '';

    // Définir les nombres à multiplier
    tablesEnCours = tablesSelectionnees[Math.floor(Math.random() * tablesSelectionnees.length)];
    num1 = tablesEnCours;
    num2 = Math.floor(Math.random() * 10) + 1;

    // Afficher la question et le bouton "Revenir à la sélection"
    document.getElementById('tables-selection').style.display = 'none';
    document.getElementById('questionDiv').style.display = 'block';
    document.getElementById('resultatFinalDiv').style.display = 'none';
    document.getElementById('revenir-selection-container').style.display = 'block';
    document.getElementById('question').textContent = `Combien font ${num1} x ${num2} ?`;
}
// Vérifier la réponse
function verifierReponse() {
    // Ne rien faire si le verrouillage est activé
    if (verrouillage === true) {
        return;
    }

    const bonneReponse = num1 * num2;

    // Ne rien faire si le champ de saisie est vide
    const valeurChamp = document.getElementById('reponse').value.trim();
    if (valeurChamp === '') {
        return;
    }

    const reponseUtilisateur = parseInt(valeurChamp);
    const resultatElement = document.getElementById('resultat');
    resultatElement.classList.remove('resultat-bon', 'resultat-mauvais');

    // Verrouiller pour éviter de cliquer plusieurs fois sur "Entrée"
    verrouillage = true;

    if (reponseUtilisateur === bonneReponse) {
        resultatElement.textContent = 'Bonne réponse !';
        resultatElement.classList.add('resultat-bon');
        if (modeActuel === 'controle') {
            bonneReponseCount++;
            totalQuestions++;
            document.getElementById('compteur').textContent = `Bonnes réponses : ${bonneReponseCount} / ${totalQuestions}`;
        }
        setTimeout(() => {
            verrouillage = false;
            poserQuestion();
        }, 2000);
    } else {
        resultatElement.textContent = `Mauvaise réponse. Essaye encore !`;
        resultatElement.classList.add('resultat-mauvais');
        if (modeActuel === 'controle') {
            totalQuestions++;
            resultatElement.textContent = `Mauvaise réponse. La bonne réponse était : ${bonneReponse}`;
            document.getElementById('compteur').textContent = `Bonnes réponses : ${bonneReponseCount} / ${totalQuestions}`;
            setTimeout(() => {
                verrouillage = false;
                poserQuestion();
            }, 2000);
        }
    }
}

function afficherFinControle() {
    document.getElementById('tables-selection').style.display = 'none';
    document.getElementById('questionDiv').style.display = 'none';
    document.getElementById('resultatFinalDiv').style.display = 'block';
    document.getElementById('revenir-selection-container').style.display = 'block';
    let resultatFinal = document.getElementById('resultatFinal');

    // Message final selon la note obtenue
    let messageFinal;
    if (bonneReponseCount === 20) {
        resultatFinal.classList.add('resultatfinal-bon');
        messageFinal = 'Parfait !';
    } else if (bonneReponseCount >= 15) {
        resultatFinal.classList.add('resultatfinal-bon');
        messageFinal = 'Bravo !';
    } else if (bonneReponseCount >= 10) {
        messageFinal = 'Il faut réviser encore un peu.';
        resultatFinal.classList.add('resultatfinal-moyen');
    } else {
        messageFinal = 'Révise encore !';
        resultatFinal.classList.add('resultatfinal-mauvais');
    }

    resultatFinal.innerHTML = `Contrôle terminé !<br>Tu as eu ${bonneReponseCount} bonnes réponses sur ${totalQuestions}.<br>${messageFinal}`;
    document.getElementById('compteur').textContent = '';
}

// Ecouteur d'évenément sur la touche entrée
document.getElementById('reponse').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        verifierReponse();
    }
})

// Revenir à la page de sélection des tables
function revenirSelection() {
    // Empêcher de lancer une autre question quand on a cliqué sur le bouton
    enCours = false;

    // Cacher la page de la question et afficher la page de sélection
    document.getElementById('tables-selection').style.display = 'block';
    document.getElementById('questionDiv').style.display = 'none';
    document.getElementById('revenir-selection-container').style.display = 'none';
    document.getElementById('resultatFinalDiv').style.display = 'none';

    // Réinitialiser les cases à cocher (décoche toutes les cases)
    for (let i = 1; i <= 11; i++) {
        document.getElementById(`table${i}`).checked = false;
    }
}