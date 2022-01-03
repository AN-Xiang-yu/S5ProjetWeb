    //utiliser json pour récupérer les info des membres du bureau
    recupereMembresData = () => {
        fetch('http://localhost/S5ProjetWeb/data/membres.json')
            .then(response => response.json())
            .then(membres => {
                for (const membre of membres) {
                    const memberElement = document.getElementById('bureau-membre-container');
                    memberElement.innerHTML = memberElement.innerHTML + `
                <div class="vignette bureau-membre flex jc-center a-center border-leger-noire ombreHover pad-05r">
                    <img class="w100" src="${membre.photo}" alt="${membre.prenom} ${membre.nom}">
                    <div class="flex a-center direction-column">
                        <p>
                            <b>${membre.prenom} ${membre.nom}</b>
                        </p>
                        <p>${membre.poste}</p>
                    </div>
                `;
                }
            })
    }
    recupereMembresData()