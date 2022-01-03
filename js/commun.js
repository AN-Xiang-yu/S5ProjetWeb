var tailleEcranOrdinateur = 1200;
var tailleEcranSmartphone = 768;
afficherDate()
window.addEventListener("resize", changerNav)

//création une balise pour 
class MonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="w100 backgroud-orange-saumon">
            <nav>
                <ul id="barre-menu" class="flex direction-column a-center jc-start flex-70 ">
                    <li class="flex-10">
                        <div class="flex jc-center">
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
                        <a class="ajouter_chemin" href="produit.html">Produit</a>
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
            <p class="center flex-100 flex jc-between">
                <span class="flex-30"><a class="ajouter_chemin lien-dehors-a" href="a_propos.html">À propos</a></span>
                <span class="flex-30">zenefrei.fr</span>
                <span class="flex-30">
                    <span id="dateheure" class="ordi-affiche"></span>
                </span>
            </p>
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
    var largueurEcran = window.innerWidth;
    var barreMenu = document.getElementById('barre-menu')
    var barreNavClass = barreMenu.getAttribute("class")
    var nav = document.querySelector("nav")

    if (largueurEcran > tailleEcranOrdinateur) {
        let classModifie = barreNavClass.replace('direction-column', '')
        barreMenu.setAttribute("class", classModifie)
    } else {
        barreMenu.classList.add("direction-column")
        nav.classList.add("flex", "jc-around", "a-center")
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



function zoomerImage() {
    const imgRoulanteContainer = document.querySelector(".img-roulante-container");
    const imgRoulante = document.querySelector(".img-roulante");
    var wDefaut = 100;

    imgRoulante.style.width = `${wDefaut}%`
    imgRoulanteContainer.onmouseover = () => {
        imgRoulante.onmousewheel = (b) => {
            b.wheelDelta < 0 ? wDefaut-- : wDefaut++;
            imgRoulante.style.width = `${wDefaut}%`
        }
    }
}

function mettreImgDansCouche() {
    $(".img-couche").click(function() {
        var _this = $(this); //将当前的pimg元素作为_this传入函数 
        afficherImage(_this);
    });
}

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
        coucheImg.height = hauteurImg; //以最终的宽度对图片缩放 

        var largeur = (largeurPage - largeurImg) / 2; //计算图片与窗口左边距 
        var hauteur = (hauteurPage - hauteurImg) / 2; //计算图片与窗口上边距 

        coucheImg.style.cssText = "top:" + (hauteur) + "px; right:" + (largeur) + "px; ";

        containerCoucheImg.classList.add("block")
        containerCoucheImg.classList.remove("cache")
    });
    containerCoucheImg.onclick = function() {
        containerCoucheImg.classList.add("cache")
        containerCoucheImg.classList.remove("block")
    };
}