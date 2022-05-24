// API KEY 347ef9e5a11b48794065658c22cadcce

// DEPENDENCIES
//  construct the queryURL from the city input and the API key

var cityInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var APIKey = '347ef9e5a11b48794065658c22cadcce';
var createName = document.querySelector("h2");
var tempWindHumUV = document.querySelectorAll("h4");


// STATES

// FUNCTIONS

function renderCityData() {
    var city = cityInput.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            createName.textContent += " " + data.name + " (" + moment().format('L') + ")";
            tempWindHumUV[0].textContent += " " + data.main.temp + " K";
            tempWindHumUV[1].textContent += " " + data.wind.speed + " MPH";
            tempWindHumUV[2].textContent += " " + data.main.humidity + " %";
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var queryURLuvi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(queryURLuvi)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data2){
                    tempWindHumUV[3].textContent += " " + data2.current.uvi;
                })

            
            




        
        });
}


// USER INTERFACE

searchButton.addEventListener("click", function() {
    renderCityData();
}
)