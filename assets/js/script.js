// API KEY 347ef9e5a11b48794065658c22cadcce

// DEPENDENCIES
var APIKey = '347ef9e5a11b48794065658c22cadcce';
var cityInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var city = "chicago";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)})


// STATES

// FUNCTIONS



// USER INTERFACE
