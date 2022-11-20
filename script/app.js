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
	showFoto(dogs);
	// Als dat gelukt is, gaan we naar onze showResult functie.
	console.log(dogs);
  };

let showFoto = function(dogs) {
	let doghtml = '';
	for(let dog of dogs)
  {
	// console.log(dog.image.url);
    doghtml += `<div class="c-rectangle__kader">
	<div class="c-rectangle">
	<img src="${dog.image.url}">
	</div>
	</div>`
  }
  document.querySelector('.js-dogs').innerHTML = doghtml;
};


document.addEventListener('DOMContentLoaded', function () {
	getAPI();
	
});

