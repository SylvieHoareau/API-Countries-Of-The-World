//Connexion à l'API
//Node.js
// $.ajax({
//     method: 'GET',
//     url: 'restcountries.com/v3.1/lang/french',
//     // headers: { 'X-Api-Key': '4wCMleMMAVkmjmtOJdQULA==ZpXA6fxA7Yd5FqbO'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const dataContainer = document.querySelector(".dataContainer");

    //Connexion  à l'API
    fetch("restcountries.com/v3.1/lang/french")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const itemElement = document.createElemenr("div");
                itemElement.classList.add("item");
                itemElement.textContent = item.name;
                dataContainer.appendChild(itemElement);
            })
        })
        .catch(error => {
            console.error("Une erreur s'est produite : ", error);
        })
    });