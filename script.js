//Javascript
window.onload = function() {

    let countriesData = [];
    const dataContainer = document.querySelector(".dataContainer");

    const searchInput = document.getElementById("searchInput");
    

    //Connexion  à l'API
    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
           countriesData = data;
           displayCountries();
        })
        .catch(error => {
            console.error("Une erreur s'est produite : ", error);
        })
    };
    

    //Fonction pour afficher les pays
    const displayCountries = () => {
        dataContainer.innerHTML = "";
        countriesData
        .filter((country) => 
            country.translations.fra.common.toLowerCase()
            .includes(searchInput.value.toLowerCase()))
        .map((country) => {
            dataContainer.innerHTML += `
                <div class="card">
                    <div class="cardHeader">
                        ${
                            country.coatOfArms.png !== undefined
                            ? `<img id="coatOfArms" src=" ${country.coatOfArms.png}" alt="coat of Arms">`
                            : ""
                        }
                        <h1 id="name">${country.translations.fra.common}</h1>
                    </div>

                    <div class="flagContainer">
                        <img id="flag" src="${country.flags.png}" alt="${country.flags.alt}">
                        ${
                            country.flags.alt !== undefined
                            ?`<div><h2>Symbolique du drapeau : </h2><p>${country.flags.alt}</p></div>`
                            : ""
                        }
                    </div>

                    <div class="infoPays">
                        ${
                            country.capital !== undefined
                            ? `<div id="capital"><h2>Capital : </h2><p>${country.capital}<p> </div>`
                            : ""

                        }
                        <p id="population"><h2>Population :</h2> ${country.population.toLocaleString("fr-FR")} habitants</p>
                        <p id="continent"><h2>Continent :</h2> ${country.continents}</p>
                    </div>

                    <div class="cardFooter">
                        <h2>Lien vers les cartes</h2>
                        <p>Open Street Maps : <a href =" ${country.maps.openStreetMaps}"><span class="material-symbols-outlined">map</span></a></p>
                        <p>Google Maps : <a href =" ${country.maps.googleMaps}"><span class="material-symbols-outlined">location_on</span></a></p>
                    </div>
                </div>
            `
        });
    };

    searchInput.addEventListener("input", () => {
        displayCountries();
    });

    fetchCountries();

};