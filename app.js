var btn = document.getElementById('btn');
var weatherInfo = document.getElementById('display');
var indxCity = document.wea_place.city_name.selectedIndex;
var city = document.wea_place.city_name.options[indxCity].text;



 
function writeWeather(weatherData){
	var tag = '';
	tag += '<h2>' + city + '</h2>';
		var icon = "<img src='http://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png'>";    // weathericon
		var when = weatherData.list[0].dt_txt; //date and time
		var descri = weatherData.list[0].weather[0].description;  //weather description
		var tempMax = weatherData.list[0].main.temp_max + '℃';   // max temp
	    var tempMin = weatherData.list[0].main.temp_min + '℃';   // min temp
	    var humid = weatherData.list[0].main.humidity +'%'; //humidity

		tag += '<td>' + icon + '</td>';
		tag += '<br>' + when;
		tag += '<p>';
		tag += '<br>' + descri;
		tag += '<br>Max Temperature ' + tempMax;
	    tag += '<br>Min Temperature ' + tempMin;
	    tag += '<br>Humidity ' + humid;
		tag += '<p>';

		var icon = "<img src='http://openweathermap.org/img/w/" + weatherData.list[1].weather[0].icon + ".png'>";    // weathericon
		var when = weatherData.list[1].dt_txt; //date and time
		var descri = weatherData.list[1].weather[0].description;  //weather description
		var tempMax = weatherData.list[1].main.temp_max + '℃';   // max temp
	    var tempMin = weatherData.list[1].main.temp_min + '℃';   // min temp
	    var humid = weatherData.list[1].main.humidity +'%'; //humidity

		tag += '<td>' + icon + '</td>';
		tag += '<br>' + when;
		tag += '<p>';
		tag += '<br>' + descri;
		tag += '<br>Max Temperature ' + tempMax;
	    tag += '<br>Min Temperature ' + tempMin;
	    tag += '<br>Humidity ' + humid;
		tag += '<p>';

		var icon = "<img src='http://openweathermap.org/img/w/" + weatherData.list[2].weather[0].icon + ".png'>";    // weathericon
		var when = weatherData.list[2].dt_txt; //date and time
		var descri = weatherData.list[2].weather[0].description;  //weather description
		var tempMax = weatherData.list[2].main.temp_max + '℃';   // max temp
	    var tempMin = weatherData.list[2].main.temp_min + '℃';   // min temp
	    var humid = weatherData.list[2].main.humidity +'%'; //humidity

		tag += '<td>' + icon + '</td>';
		tag += '<br>' + when;
		tag += '<p>';
		tag += '<br>' + descri;
		tag += '<br>Max Temperature ' + tempMax;
	    tag += '<br>Min Temperature ' + tempMin;
	    tag += '<br>Humidity ' + humid;
		tag += '<p>';

	weatherInfo.innerHTML = tag;
}


btn.addEventListener('click', (event) =>{
	event.preventDefault();
	fetch('http://api.openweathermap.org/data/2.5/forecast?id=6173331&cnt=5&appid=80e55fa739508889fe415e92805fa2b6&units=metric')
	.then((response) => {
		if(response.ok){
			return response.json();
		} else {
			throw new Error();
		}
	})
	.then((deta) => 
		writeWeather(deta))
	.catch((error) => console.log(error));	
})


