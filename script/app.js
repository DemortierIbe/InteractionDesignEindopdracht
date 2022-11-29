const getData = (endpoint) => {
  return fetch(endpoint)
    .then((r) => r.json())
    .catch((e) => console.error(e));
};

let getAPI = async (lat, lon) => {
  // Eerst bouwen we onze url op
  const link = `https://api.TheDogAPI.com/v1/breeds`;
  // Met de fetch API proberen we de data op te halen.
  const dogs = await getData(link);
  // showFoto(dogs);
  // Als dat gelukt is, gaan we naar onze showResult functie.
  console.log(dogs);
};

let showFoto = function (dogs) {
  let doghtml = '';
  for (let dog of dogs) {
    // console.log(dog.image.url);
    doghtml += `<div class="c-rectangle">
	<img  src="${dog.image.url}">
  <p class="c-name_dogs">${dog.name}</p>
  <p class="c-name_dogs">${dog.weight.imperial}</p>
  <p class="c-name_dogs">${dog.temperament}</p>
  <p class="c-name_dogs">${dog.description}</p>
	</div>`;
  }
  document.querySelector('.js-dogs').innerHTML += doghtml;
};

const listentodog = function() {
  let hond = document.querySelectorAll('.js-dogs')
    hond.forEach(Element => {
      hond.addEventListener('click', function(){

      })
    });
  
};



document.addEventListener('DOMContentLoaded', function () {
  getAPI();
});
