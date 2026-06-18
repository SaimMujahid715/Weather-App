// Shows Date
const today = new Date();
document.getElementById("date").textContent = today.toDateString();

// Collects Input!
let CityDiv = document.querySelector("#city-result");
let TempDiv = document.querySelector("#temp-result");
let HumidityDiv = document.querySelector("#humidity-result");
let WindDiv = document.querySelector("#wind-result");
let RegionDiv = document.querySelector("#region-result");
let StatusDiv = document.querySelector("#status-result");
let ImgTag = document.querySelector("#img-icon");
let msg = document.querySelector("#loading");

// Function
async function WeatherApp(event) {
  let city = document.querySelector("#CityName").value;
  event.preventDefault();

  //loading msg
  msg.style.display = "block"


  let response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=6fd08f88d1d44f5fbd3110100260706&q=${city}`,
  );
  

  msg.style.display = "none"


  //  Output
  CityDiv.innerHTML = response.data.location.name;
  TempDiv.innerHTML = response.data.current.temp_c + "°C";
  HumidityDiv.innerHTML = response.data.current.humidity + "%";
  WindDiv.innerHTML = response.data.current.wind_kph + " Km/h";
  RegionDiv.innerHTML =response.data.location.region + ", " + response.data.location.country;
  StatusDiv.innerHTML = response.data.current.condition.text;
  ImgTag.src = response.data.current.condition.icon;
  
}
