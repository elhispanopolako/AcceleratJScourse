"use strict";
searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display= 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
  
    var http = new XMLHttpRequest();
    var apiKey = 'ec9c31afc3bd2340bd6cb975c554e668';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metrics&appid=' + apiKey;
    var method= 'GET';
    http.open(method,url)
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
            var data=JSON.parse(http.responseText);
            var weatherData = new Weather(cityName,data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
            updateWeather(weatherData);

        }else if(http.readyState === XMLHttpRequest.DONE){
            alert('Something went wrong')

        }
        console.log(http)

    } 
    http.send()
    function updateWeather(weatherData){
        weatherCity.textContent = weatherData.cityName;
        weatherDescription.textContent = weatherData.description;
        weatherTemperature.textContent = weatherData._temperature;

        weatherBox.style.display = 'block';
      }
}