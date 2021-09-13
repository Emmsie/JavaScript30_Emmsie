
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = [];

//console.log(fetch(endpoint)); //returns a promise
//fetch(endpoint).then(response => console.log(response));
//fetch(endpoint).then(response => response.json()); //returns a promise

//fetch(endpoint)
//    .then(response => response.json())
//    .then(data => console.log(data)); //returns raw data for places

//spread data into const array
fetch(endpoint)
    .then(response => response.json())
    .then(data => places.push(...data)); 

function findMatches(wordToMatch, places){
    const regex = new RegExp(wordToMatch, 'gi');
    return places.filter(place =>  place.city.match(regex) || place.state.match(regex));
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("keyup", displayMatches);

function displayMatches(){
    const matchArray = findMatches(this.value, places);

    const newHtml = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        //highlight letters
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithDots(place.population)}</span>
        </li>
      `;
    }).join(''); //create string

    suggestions.innerHTML = newHtml;
}

function numberWithDots(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}