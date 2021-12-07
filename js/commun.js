class MonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="w100 backgroud_orange_saumon">
            <nav>
                <ul class="flex align_center justify_content_center">
                    <li class="flex_15">
                        <div class="flex justify_content_center">
                            <a href="accueil.html">
                                <!-- logo sur ordinateur -->
                                <img class="hight100" src="../img/logo-phone.png" alt="logo d'ordinateur">
                                <!-- logo sur tablette/phone -->
                                <!-- <img src="../img/logo.png" alt=""> -->
                            </a>
                        </div>
                    </li>
                    <li class="flex_10">
                        <a href="accueil.html">Accueil</a></li>
                    <li class="flex_10">
                        <a href="contact.html">Contact</a></li>
                    <li class="flex_10">Activité</li>
                    <li class="flex_10">Collabs</li>
                    <li class="flex_10">La méditation</li>
                    <li class="flex_10">
                        <a href="../page/produit/produit.html">Produit</a>
                    </li>
                    <li class="flex_10">
                        <a href="a_propos.html">À propos</a>
                    </li>
                    <li class="flex_10">
                        <a href="nous_rejoindre.html">Nous rejoindre</a>
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
        <footer class="backgroud_orange_saumon">
            <p class="center flex_100">Copyright©2013-2021 BEM - All Rights Reserved.</p>
            <p class="center flex_100">zenefrei.fr</p>
        </footer>
        `
    }
}

customElements.define('mon-footer', MonFooter)

function changerNav() {
    let largueurEcran = $(window).width();

    if (largueurEcran > tailleEcranOrdinateur) {
        document.querySelector('.nav_ul').classList.add('mystyle');
        // document.getElementById("nav_ul").className.remove("direction_column");
    } else {
        let x = document.getElementById("nav_ul")
        x += "xxxx";
    }
}