const API = "https://api.openbrewerydb.org/breweries?by_city=denver&per_page=10";

fetch("https://api.openbrewerydb.org/breweries?by_city=denver&per_page=10")
.then(res => res.json())
.then(data => console.log(data))

const leftArrow = document.getElementById("left-arrow");