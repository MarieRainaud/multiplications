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
    // Réinitialiser le message de résultat et effacer le champ de saisie
    document.getElementById('resultat').textContent = '';
    document.getElementById('reponse').value = '';

    //Définir les nombres à multiplier
    tablesEnCours = tablesSelectionnees[Math.floor(Math.random() * tablesSelectionnees.length)]; 
    num1 = tablesEnCours;
    num2 = Math.floor(Math.random() * 10) + 1;

    // Afficher la question et le bouton "Revenir à la sélection"
    document.querySelector('.tables-selection').style.display = 'none';
    document.querySelector('.tables-selection').style.display = 'none';
    document.getElementById('questionDiv').style.display = 'block';
    document.getElementById('question').textContent = `Combien font ${num1} x ${num2} ?`;
}
// Vérifier la réponse, si elle est fausse, recommencer
function verifierReponse() {
    const bonneReponse = num1 * num2;
    const reponseUtilisateur = parseInt(document.getElementById('reponse').value); 

    const resultatElement = document.getElementById('resultat');
    resultatElement.classList.remove('resultat-bon', 'resultat-mauvais');
    if (reponseUtilisateur === bonneReponse) {
        resultatElement.textContent = 'Bonne réponse !';
        resultatElement.classList.add('resultat-bon');
        setTimeout(poserQuestion, 2000);
    } else {
        resultatElement.textContent = `Mauvaise réponse. Essaye encore !`;
        resultatElement.classList.add('resultat-mauvais');
    }
}
// Ecouteur d'évenément sur la touche entrée
document.getElementById('reponse').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verifierReponse();
    }
})
// Revenir à la page de sélection des tables
function revenirSelection() {
    // Cacher la page de la question et afficher la page de sélection
    document.getElementById('questionDiv').style.display = 'none';
    document.querySelector('.tables-selection').style.display = 'block';
    // Réinitialiser les cases à cocher (décoche toutes les cases)
    for (let i = 1; i <= 11; i++) {
        document.getElementById(`table${i}`).checked = false;
    }
}