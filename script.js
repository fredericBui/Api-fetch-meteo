
function temp(latitude,longitude){
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.current_weather.temperature);
    document.getElementById("root").innerHTML = data.current_weather.temperature + "°C";
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
    console.log(data.current_weather.temperature);
    document.getElementById("customTemp").innerHTML = data.current_weather.temperature + "°C";
  });
}