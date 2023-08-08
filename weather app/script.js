const apiKey = "f6f48a48bcb99e164fd571a7e4ade95f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let search_box = document.querySelector(".search_bar input");
let search_btn = document.querySelector(".search_bar button");
let weather_icon = document.getElementById("weather_icon");

async function cheakWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await responce.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = data.main.temp + " °C ";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humid").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weather_icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_icon.src = "images/mist.png";
  }
}

search_btn.addEventListener("click", () => {
  cheakWeather(search_box.value);
  search_box.value = " ";
});
