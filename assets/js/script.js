// API KEY 347ef9e5a11b48794065658c22cadcce

// DEPENDENCIES
//  construct the queryURL from the city input and the API key

var cityInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var APIKey = '347ef9e5a11b48794065658c22cadcce';
var createName = document.querySelector("h2");
var tempWindHumUV = document.querySelectorAll("h4");
var forecastContainer = document.querySelector("#forecast");

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
            createName.textContent += " " + data.name + " (" + moment().format('l') + ")";
            tempWindHumUV[0].textContent += " " + data.main.temp + " K";
            tempWindHumUV[1].textContent += " " + data.wind.speed + " MPH";
            tempWindHumUV[2].textContent += " " + data.main.humidity + " %";
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var queryURLuvi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=" + APIKey;
            fetch(queryURLuvi)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data2){
                    tempWindHumUV[3].textContent += " " + data2.current.uvi;
                    if (data2.current.uvi < 2.5) {
                        tempWindHumUV[3].style.backgroundColor = "green";
                    }
                    else if (data2.current.uvi < 5 && data2.current.uvi >= 2.5) {
                        tempWindHumUV[3].style.backgroundColor = "yellow";
                    }
                    else if (data2.current.uvi < 8 && data2.current.uvi >= 5) {
                        tempWindHumUV[3].style.backgroundColor = "red";
                    }
                    else {
                        tempWindHumUV[3].style.backgroundColor = "grey";
                    }
                
                    addForecast(data2);
                })
        });
}

function addForecast(data) {
    console.log(data);
    for (i=1;i<6;i++) {
        var forecastDate = document.createElement("h5");
        forecastDate.textContent = moment().add(i,'days').format("l")
        var forecastIcon = document.createElement("img");
        forecastIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
        var forecastTemp = document.createElement("h5");
        var forecastWind = document.createElement("h5");
        var forecastHum = document.createElement("h5");
        var forecastCard = document.createElement("div");
    
        forecastCard.setAttribute("class","col-2");
        forecastCard.append(forecastDate, forecastIcon);
        forecastContainer.append(forecastCard);
        


    }
    
}


// USER INTERFACE

searchButton.addEventListener("click", function() {
    renderCityData();
}
)