// DEPENDENCIES
var cityInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');



// STATES

// FUNCTIONS
function lookupCity(event) {
    var cityName = cityInput.value
    console.log(cityName);
};



// USER INTERFACE
searchButton.addEventListener("click", lookupCity);