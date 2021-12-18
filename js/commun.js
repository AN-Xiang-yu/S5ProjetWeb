var tailleEcranOrdinateur = 1200;
var tailleEcranSmartphone = 768;
afficherDate()

class MonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="w100 backgroud-orange-saumon">
            <nav>
                <ul class="flex align-center justify-content-center">
                    <li class="flex-15">
                        <div class="flex justify-content-center">
                            <a class="ajouter_chemin" href="accueil.html">
                                <!-- logo sur ordinateur -->
                                <img class="hight100 ajouter_chemin_image" src="../img/logo-phone.png" alt="logo d'ordinateur">
                                <!-- logo sur tablette/phone -->
                                <!-- <img src="../img/logo.png" alt=""> -->
                            </a>
                        </div>
                    </li>
                    <li id="accueil" class="flex-10">
                        <a class="ajouter_chemin" href="accueil.html">Accueil</a></li>
                    <li id="contact" class="flex-10">
                        <a class="ajouter_chemin" href="contact.html">Contact</a></li>
                    <li id="activite" class="flex-10">Activité</li>
                    <li id="produit" class="flex-10">
                        <a href="../page/produit/produit.html">Produit</a>
                    </li>
                    <li id="a_propos" class="flex-10">
                        <a class="ajouter_chemin" href="a_propos.html">À propos</a>
                    </li>
                    <li id="nous_rejoindre" class="flex-10">
                        <a class="ajouter_chemin" href="nous_rejoindre.html">Nous rejoindre</a>
                    </li>
                </ul>
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
            <p class="center flex-100 flex justify-content-center"><span>zenefrei.fr</span> <span id="dateheure" class="ab-right"></span></p>
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
    var memeAChange = document.getElementById(nomPage)

    //le lien dans le menu de navigation de la page courante va naviguer sur elle même
    memeAChange.children[0].href = "#"

    switch (nomPage) {
        case "accueil", "contact", "a_propos", "nous_rejoindre":
            break;
        default:
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
    }
}

function changerNav() {
    let largueurEcran = $(window).width();

    if (largueurEcran > tailleEcranOrdinateur) {
        document.querySelector('.nav_ul').classList.add('mystyle');
        // document.getElementById("nav_ul").className.remove("direction-column");
    } else {
        let x = document.getElementById("nav_ul")
        x += "xxxx";
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