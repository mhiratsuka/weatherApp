// When  pressing the button, weather info appears.
function onButtonClick(){

//Get data from open weathermap
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=6173331&appid=80e55fa739508889fe415e92805fa2b6&units=metric', true);
xhr.Onload = function(){
	var data = JSON.parse(xhr.responseText); 
	// console.log(data);
	var day = 'today';
	var tag =''
    tag += '<h2>' + 'Vancouver' + '</h2>';
    tag += '<table>';
    for(var i = 0; i<5; i++){
       	var icon = "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[i].icon + ".png'>";    // weathericon
        var tempMax = data.list[i].main.temp_max + '℃';   // max temp
        var tempMin = data.list[i].main.temp_min + '℃';   // min temp
        var humid = data.list[i].main.humidity +'%'; //humidity
        var description = data.list[i].weather[i].description; //weather description
     
        tag += '<tr>';
        tag += '<td>' + day + '</td>';
        tag += '<td>' + icon + '</td>';
        tag += '<td>Max Temperature</td><td>' + tempMax + '</td>';
        tag += '<td>Min Temperature</td><td>' + tempMin + '</td>';
        tag += '<td>Humidity</td><td>' + humid + '</td>';
        tag += '<td>Desctiption</td><td>' + description + '</td>';
        tag += '</tr>';
     }
    tag += '</table>';
    var weatherInfo;
	weatherInfo = document.getElementById('display');
	weatherInfo.innerHTML = tag;
}
xhr.send(null);
}
