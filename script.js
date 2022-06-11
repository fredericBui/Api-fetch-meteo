
function temp(latitude,longitude){
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById("root").innerHTML = data.current_weather.temperature + "°C";
    weather = weatherCase(data);
    document.getElementById("weather").innerHTML = weather;
  });
}

function customTemp(){
  customLatitude = document.getElementById("latitude").value;
  customLongitude = document.getElementById("longitude").value;
  
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+customLatitude+'&longitude='+customLongitude+'&current_weather=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById("customTemp").innerHTML = data.current_weather.temperature + "°C";
    customWeather = weatherCase(data);
    document.getElementById("customWeather").innerHTML = customWeather;
  });
}

function weatherCase(props){
  switch (props.current_weather.weathercode){
    case 0 :
      return "Clear sky";
    case 1 :
    case 2 :
    case 3 :
      return "Clear sky";
    case 45 :
    case 48 :
      return "Fog and depositing rime fog";
    case 51 :
    case 53 :
    case 55 :
      return "Drizzle: Light, moderate, and dense intensity";
    case 56 :
    case 57 :
      return "Freezing Drizzle: Light and dense intensity";
    case 61 :
    case 63 :
    case 65 :
      return "Rain: Slight, moderate and heavy intensity";
    case 66 :
    case 67 :
      return "Freezing Rain: Light and heavy intensity";
    case 71 :
    case 73 :
    case 75 :
      return "Snow fall: Slight, moderate, and heavy intensity";
    case 77 :
      return "Snow grains";
    case 80 :
    case 81 :
    case 82 :
      return "Rain showers: Slight, moderate, and violent";
    case 95 :
      return "Thunderstorm: Slight or moderate";
    case 96 :
    case 99 :
      return "Thunderstorm with slight and heavy hail";
    default :
      return "Inconnu";
    };
}