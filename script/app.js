const getData = (endpoint) => {
	return fetch(endpoint)
	  .then((r) => r.json())
	  .catch((e) => console.error(e));
  };



let getAPI = async (lat, lon) => {
	// Eerst bouwen we onze url op
	const link = `https://api.TheDogAPI.com/v1/breeds`;
	// Met de fetch API proberen we de data op te halen.
	const city = await getData(link);
	// Als dat gelukt is, gaan we naar onze showResult functie.
	console.log(city);
	
  };


document.addEventListener('DOMContentLoaded', function () {
	getAPI();
});

