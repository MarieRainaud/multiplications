let tablesSelectionnees = [];
let tablesEnCours;
let num1, num2;

// Récupérer les tables sélectionnées
function getTablesSelectionnees() {
    tablesSelectionnees = [];
    for (let i = 1; i <= 11; i++) {
        if (document.getElementById(`table${i}`).checked) {
            tablesSelectionnees.push(i);
        }
    }
}

// Poser la question
function poserQuestion() {
    getTablesSelectionnees();

    // Message d'erreur si pas de sélection
    if (tablesSelectionnees.length === 0) {
        alert('Tu dois sélectionner au moins une table !');
        return;
    }
    // Réinitialiser le message de résultat
    document.getElementById('resultat').textContent = '';

    //Définir les nombres à multiplier
    tablesEnCours = tablesSelectionnees[Math.floor(Math.random() * tablesSelectionnees.length)]; 
    num1 = tablesEnCours;
    num2 = Math.floor(Math.random() * 10) + 1;

    // Afficher la question
    document.querySelector('.tables-selection').style.display = 'none';
    document.getElementById('questionDiv').style.display = 'block';
    document.getElementById('question').textContent = `Combien font ${num1} x ${num2} ?`;
}

// Vérifier la réponse
function verifierReponse() {
    const bonneReponse = num1 * num2;
    const reponseUtilisateur = parseInt(document.getElementById('reponse').value); 

    const resultatElement = document.getElementById('resultat');
    if (reponseUtilisateur === bonneReponse) {
        resultatElement.textContent = 'Bonne réponse !';
        resultatElement.classList.add('resultat-bon');
    } else {
        resultatElement.textContent = `Mauvaise réponse. Essaye encore !.`;
        resultatElement.classList.add('resultat-mauvais');
    }
    // Attendre un peu puis poser une nouvelle question
    setTimeout(poserQuestion, 2000); 
}