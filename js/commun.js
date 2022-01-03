var tailleGrandEcran = 1200
afficherDate()

//création une balise pour header
class MonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="w100 backgroud-orange-saumon">
            <nav>
                <ul class="flex a-center w90 m-auto">
                    <div class="flex jc-between a-center barre-menu-image-container">
                        <li class="flex-10">
                            <div class="flex jc-center">
                                <a class="ajouter_chemin" href="accueil.html">
                                    <img class="barre-menu-image ajouter_chemin_image mt-025r" src="../img/logo.png" alt="logo d'ordinateur">
                                </a>
                            </div>
                        </li>
                        <li class="flex-10 barre-menu-image-navphone-container">
                            <div class="flex jc-center">
                                <img id="barre-menu-image-nav" class="barre-menu-image ajouter_chemin_image mt-025r cr-pointer" src="../img/nav_phone.png" alt="nav phone" onclick="afficherNavPhone()">
                            </div>
                        </li>
                    </div>
                    <div id="barre-menu-page-container-grand-ecran" class="flex-90 flex">
                        <li id="accueil" class="flex-10 center">
                            <a class="ajouter_chemin" href="accueil.html">Accueil</a></li>
                        <li id="contact" class="flex-10 center">
                            <a class="ajouter_chemin" href="contact.html">Contact</a></li>
                        <li id="activite" class="flex-10 center">
                            <a class="ajouter_chemin" href="../page/activite/activite.html">Activité</a>
                        </li>
                        </li>
                        <li id="produit" class="flex-10 center">
                            <a class="ajouter_chemin" href="produit.html">Produit</a>
                        </li>
                        <li id="a_propos" class="flex-10 center">
                            <a class="ajouter_chemin" href="a_propos.html">À propos</a>
                        </li>
                        <li id="nous_rejoindre" class="flex-10 center">
                            <a class="ajouter_chemin" href="nous_rejoindre.html">Nous rejoindre</a>
                        </li>
                    </div>
                    <div id="barre-menu-page-container" class="flex-90 m-auto flex direction-column cache">
                        <li id="accueil" class="flex-10 center">
                            <a class="ajouter_chemin" href="accueil.html">Accueil</a></li>
                        <li id="contact" class="flex-10 center">
                            <a class="ajouter_chemin" href="contact.html">Contact</a></li>
                        <li id="activite" class="flex-10 center">
                            <a class="ajouter_chemin" href="../page/activite/activite.html">Activité</a>
                        </li>
                        </li>
                        <li id="produit" class="flex-10 center">
                            <a class="ajouter_chemin" href="produit.html">Produit</a>
                        </li>
                        <li id="a_propos" class="flex-10 center">
                            <a class="ajouter_chemin" href="a_propos.html">À propos</a>
                        </li>
                        <li id="nous_rejoindre" class="flex-10 center">
                            <a class="ajouter_chemin" href="nous_rejoindre.html">Nous rejoindre</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('mon-header', MonHeader)

//création une balise pour footer
class MonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="backgroud-orange-saumon w100">
            <div class="center flex-100">
                <p class="center">Copyright©2013-2021 BEM - All Rights Reserved.</p> 
            </div>
            <div class="center flex-100 flex jc-between">
                <p class="flex-30">
                    <a class="ajouter_chemin lien-dehors-a" href="a_propos.html">À propos</a>
                </p>
                <p class="flex-30">zenefrei.fr </p>
                <p class="flex-30">
                    <span id="dateheure" class="ordi-affiche"></span>
                </p>
            </div>   
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

    switch (nomPage) {
        case "activite":
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
function afficherNavPhone() {
    var barreMenuPageContainer = document.getElementById('barre-menu-page-container')
    var barreMenuPageContainerClass = barreMenuPageContainer.getAttribute("class")

    if (barreMenuPageContainer.classList.contains('cache')) {
        let classModifie = barreMenuPageContainerClass.replace('cache', '')
        barreMenuPageContainer.setAttribute("class", classModifie)
    } else {
        barreMenuPageContainer.classList.add("cache")
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

//mettre l'image dans une couche et l'agrandir
function mettreImgDansCouche() {
    $(".img-couche").click(function() {
        console.log("sss");
        var _this = $(this);
        afficherImage(_this);
    });

}

//afficher l'image choisie
function afficherImage(_this) {

    var containerCoucheImg = document.querySelector("#container-couche-img")
    var coucheImg = document.querySelector("#couche-img")

    var src = _this.attr("src");
    coucheImg.setAttribute("src", src);

    $("<img/>").attr("src", src).load(function() {
        var largeurPage = $(window).width();
        var hauteurPage = $(window).height();
        var vraieLargeur = this.width;
        var vraieHauteur = this.height;
        var largeurImg, hauteurImg;
        var scale = 0.4;

        largeurImg = scale * largeurPage
        hauteurImg = largeurImg / vraieLargeur * vraieHauteur
        coucheImg.height = hauteurImg;

        var largeur = (largeurPage - largeurImg) / 2;
        var hauteur = (hauteurPage - hauteurImg) / 2;

        coucheImg.style.cssText = "top:" + (hauteur) + "px; right:" + (largeur) + "px; ";

        containerCoucheImg.classList.add("block")
        containerCoucheImg.classList.remove("cache")
    });
    containerCoucheImg.onclick = function() {
        containerCoucheImg.classList.add("cache")
        containerCoucheImg.classList.remove("block")
    };
}