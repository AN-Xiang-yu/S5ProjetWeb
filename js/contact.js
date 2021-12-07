function afficherInformationSaisie() {
    onclick = "afficherInformationSaisie()"
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var promo = document.getElementById("promo").value;
    var specialite = document.getElementById("specialite").value;

    document.getElementById("obtenirNom").innerHTML = nom;
    document.getElementById("obtenirPrenom").innerHTML = prenom;
    document.getElementById("obtenirTel").innerHTML = telephone;
    document.getElementById("obtenirEmail").innerHTML = email;
    document.getElementById("obtenirPromo").innerHTML = promo;
    document.getElementById("obtenirSpecialite").innerHTML = specialite;
}