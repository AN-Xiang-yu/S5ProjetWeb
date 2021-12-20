function afficherInformationSaisie() {
    var selectionnerFormulaire = document.forms.infoInscription
    if (!selectionnerFormulaire.elements.nom.checkValidity() ||
        !selectionnerFormulaire.elements.prenom.checkValidity() ||
        !selectionnerFormulaire.elements.telephone.checkValidity() ||
        !selectionnerFormulaire.elements.email.checkValidity() ||
        !selectionnerFormulaire.elements.promo.checkValidity() ||
        !selectionnerFormulaire.elements.specialite.checkValidity()
    ) {
        return
    }

    var article = document.querySelector(".confirmation")
    var ancienneSection = document.querySelector(".section-confirmation")

    const nouvelleSection = document.createElement("section")
    const h2 = document.createElement("h2")
    const table = document.createElement("table")
    const tbody = document.createElement("tbody")
    const tr1 = document.createElement("tr")
    const tr2 = document.createElement("tr")
    const tr3 = document.createElement("tr")
    const tr4 = document.createElement("tr")
    const tr5 = document.createElement("tr")
    const tr6 = document.createElement("tr")
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")
    const th4 = document.createElement("th")
    const th5 = document.createElement("th")
    const th6 = document.createElement("th")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    const td5 = document.createElement("td")
    const td6 = document.createElement("td")

    nouvelleSection.classList.add("section-confirmation", "flex", "justify_content_center")
    h2.classList.add("center", "flex_100")
    table.classList.add("border-black", "flex_100")
    th1.classList.add("left", "border-black", "w30")
    th2.classList.add("left", "border-black", "w30")
    th3.classList.add("left", "border-black", "w30")
    th4.classList.add("left", "border-black", "w30")
    th5.classList.add("left", "border-black", "w30")
    th6.classList.add("left", "border-black", "w30")
    td1.classList.add("border-black")
    td2.classList.add("border-black")
    td3.classList.add("border-black")
    td4.classList.add("border-black")
    td5.classList.add("border-black")
    td6.classList.add("border-black")
    h2.innerHTML = "Confirmation des informations"
    th1.innerHTML = "Nom : "
    th2.innerHTML = "Prénom : "
    th3.innerHTML = "Téléphone : "
    th4.innerHTML = "E-mail : "
    th5.innerHTML = "Promo : "
    th6.innerHTML = "Spécialité : "
    td1.textContent = selectionnerFormulaire.elements.nom.value
    td2.textContent = selectionnerFormulaire.elements.prenom.value
    td3.textContent = selectionnerFormulaire.elements.telephone.value
    td4.textContent = selectionnerFormulaire.elements.email.value
    td5.textContent = selectionnerFormulaire.elements.promo.value
    td6.textContent = selectionnerFormulaire.elements.specialite.value

    tr1.append(th1, td1)
    tr2.append(th2, td2)
    tr3.append(th3, td3)
    tr4.append(th4, td4)
    tr5.append(th5, td5)
    tr6.append(th6, td6)

    tbody.append(tr1, tr2, tr3, tr4, tr5, tr6)
    table.append(tbody)
    nouvelleSection.append(h2, table)

    article.replaceChild(nouvelleSection, ancienneSection)
}