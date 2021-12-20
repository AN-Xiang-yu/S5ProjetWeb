var tailleEcranOrdinateur = 1200;
var tailleEcranSmartphone = 768;
afficherDate()
window.addEventListener("resize", changerNav)


class MonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="w100 backgroud-orange-saumon">
            <nav>
                <ul id="barre-menu" class="flex direction-column align-center justify-content-start flex-70 ">
                    <li class="flex-10">
                        <div class="flex justify-content-center">
                            <a class="ajouter_chemin" href="accueil.html">
                                <!-- logo sur ordinateur -->
                                <img class="hight75 ajouter_chemin_image mt-025r" src="../img/logo-phone.png" alt="logo d'ordinateur">
                                <!-- logo sur tablette/phone -->
                                <!-- <img src="../img/logo.png" alt=""> -->
                            </a>
                        </div>
                    </li>
                    <li id="accueil" class="flex-10 center">
                        <a class="ajouter_chemin" href="accueil.html">Accueil</a></li>
                    <li id="contact" class="flex-10 center">
                        <a class="ajouter_chemin" href="contact.html">Contact</a></li>
                    <li id="activite" class="flex-10 center">
                        <a class="ajouter_chemin" href="../page/activite/activite.html">Activité</a>
                    </li>
                    </li>
                    <li id="produit" class="flex-10 center">
                        <a class="ajouter_chemin" href="../page/produit/produit.html">Produit</a>
                    </li>
                    <li id="a_propos" class="flex-10 center">
                        <a class="ajouter_chemin" href="a_propos.html">À propos</a>
                    </li>
                    <li id="nous_rejoindre" class="flex-10 center">
                        <a class="ajouter_chemin" href="nous_rejoindre.html">Nous rejoindre</a>
                    </li>
                    
                </ul>
                <div id="barre-nav"></div>
            </nav>
        </header>
        `
    }
}

customElements.define('mon-header', MonHeader)

class MonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="backgroud-orange-saumon w100">
            <p class="center flex-100">Copyright©2013-2021 BEM - All Rights Reserved.</p>
            <p class="center flex-100 flex justify-content-between"><span class="flex-30"></span><span class="flex-30">zenefrei.fr</span> <span class="flex-30"> <span id="dateheure" class="ordi-affiche"></span> </span></p>
        </footer>
        `
    }
}

customElements.define('mon-footer', MonFooter)

//recupere le nom de page actuel
function recupererNomPage() {
    var locationHrefComplete = location.href.split('/')
    var nomFichier = locationHrefComplete[locationHrefComplete.length - 1]
    var idNav = nomFichier.split('.')[0]
    return idNav
}

//ajouter css dans menu de navigation pour la page actuelle
function ajouterCssMenuNavigation() {
    var liChange = document.getElementById(recupererNomPage())
    liChange.classList.add("page-actuel")
}

//changer le chemin si les pages sont pas dans les répertoires
function ajouterChemin() {
    var nomPage = recupererNomPage()

    console.log(nomPage);
    switch (nomPage) {
        case "produit":
        case "activite":
        case "activite-evenement":
            var aChange = document.getElementsByClassName("ajouter_chemin")
            var imgChange = document.getElementsByClassName("ajouter_chemin_image")

            //modifier les liens dans menu de navigation
            for (let a of aChange) {
                a.href = "../" + a.getAttribute("href")
            }
            //modifier les sources des images dans menu de navigation
            for (let img of imgChange) {
                img.setAttribute("src", "../" + img.getAttribute("src"))
            }
            break;
        default:
            break;

    }
}

//modifier la façon d'afficher le barre de navigation
function changerNav() {
    let largueurEcran = window.innerWidth;
    let barreMenu = document.getElementById('barre-menu')
    let barreNavClass = barreMenu.getAttribute("class")
    let nav = document.querySelector("nav")

    console.log(nav);

    if (largueurEcran > tailleEcranOrdinateur) {
        let classModifie = barreNavClass.replace('direction-column', '')
        barreMenu.setAttribute("class", classModifie)
    } else {
        barreMenu.classList.add("direction-column")
        nav.classList.add("flex", "justify-content-around", "align-center")
    }
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//afficher date et heure
async function afficherDate() {
    while (true) {
        await pause(1);
        var cejour = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = cejour.toLocaleDateString("fr-FR", options);
        var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = date + " " + heure;
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('dateheure').innerHTML = dateheure;
    }
}

function classExiste() {

}