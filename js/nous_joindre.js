//afficher le tableau de confirmation
function afficherTableauConfirmation() {
    var selectionnerFormulaire = document.forms.infoInscription
        //vérifier si les cases nécessaire sont remplies 
    if (!selectionnerFormulaire.elements.nom.checkValidity() ||
        !selectionnerFormulaire.elements.prenom.checkValidity() ||
        !selectionnerFormulaire.elements.naissance.checkValidity() ||
        !selectionnerFormulaire.elements.specialite.checkValidity() ||
        !selectionnerFormulaire.elements.telephone.checkValidity() ||
        !selectionnerFormulaire.elements.email.checkValidity() ||
        !selectionnerFormulaire.elements.regle.checkValidity()
    ) {
        return
    }

    //récupérer les balises
    var article = document.querySelector(".confirmation")
    var ancienneSection = document.querySelector(".section-confirmation-container")

    //créer les balises
    const nouvelleSection = document.createElement("section")
    const h2 = document.createElement("h2")
    const table = document.createElement("table")
    const tbody = document.createElement("tbody")
    const boutonConfirmation = document.createElement("button")

    //créer tous les th
    var thEnsemble = new Array(createTh("Nom"), createTh("Prénom"), createTh("Sexe"), createTh("Date de naissance"), createTh("Promo"), createTh("Spécialité"), createTh("Téléphone"), createTh("E-mail"), createTh("Adresse"), createTh("Adresse complémentaire"), createTh("Ville"), createTh("Code postal"));

    //initialiser les balises avec les classes
    nouvelleSection.classList.add("section-confirmation-container", "flex", "jc-center", "m-auto")
    h2.classList.add("center", "flex-100")
    table.classList.add("confirmation-table", "border-tb-blanc", "flex-100", "w100", "border-leger-noire", "ombreHover")
    boutonConfirmation.classList.add("mtb-inter", "border-ra-5")

    //ajouter le contenu pour les balises
    h2.innerHTML = "Confirmation des informations"
    boutonConfirmation.innerHTML = "Envoyer"

    //ajouter la fonction pour le bouton de confirmation
    boutonConfirmation.setAttribute("onclick", "dialogConfirmation()")

    // récupérer l'ensemble de tous les names de formulaire
    var names = selectionnerFormulaire.elements

    // ajouter tous les valeurs de formulaire dans tableau
    for (var i = 0; i < thEnsemble.length; i++) {
        //mettre la valeur remplie de formulaire dans td
        td = createTd()
        td.innerHTML = names[i].value

        //créer tr avec td et th ainsi mettre tr dans tbody
        tbody.append(createTr(thEnsemble[i], td))
    }

    //ajouter les balises dans table et sections
    table.append(tbody)
    nouvelleSection.append(h2, table, boutonConfirmation)

    //replacer la section
    article.replaceChild(nouvelleSection, ancienneSection)
}

//Mettre la date du jour dans input de naissance

function inputDateAujourdhui() {
    var date = new Date()
    var mois = (date.getMonth() + 1).toString();
    var jour = date.getDate().toString();
    var annee = date.getFullYear();
    mois = (mois.length < 2) ? ('0' + mois) : mois
    jour = (jour.length < 2) ? ('0' + jour) : jour
    var aujourdhui = annee + "-" + mois + "-" + jour
    var naissance = document.getElementById("naissance")

    naissance.setAttribute("max", aujourdhui)
}

//créer la balise th
function createTh(nomColonne) {
    var th = document.createElement("th")
    th.classList.add("left", "border-tb-blanc", "border-r-dashed-blanc", "w30")
    th.innerHTML = nomColonne + " : "
    return th
}

//créer la balise td
function createTd() {
    var td = document.createElement("td")
    td.classList.add("border-tb-blanc", "center", "w20")
    return td
}

//créer la balise tr
function createTr(th, td) {
    var tr = document.createElement("tr")
    tr.classList.add("confiramtion-table-tr")
    tr.append(th, td)
    return tr
}

//afficher le dialogue de confirmation d'envoi d'inscription
function dialogConfirmation() {
    var x
    var dialogConfirmation = confirm("Confirmez-vous l'envoi des informations d'inscription")
    if (dialogConfirmation == true) {
        confirm("Félicitations, vous vous êtes inscrit avec succès !\nNous vous contacterons dans les meilleurs délais!")
    }
    document.getElementById("demo").innerHTML = x
}