let cityName = document.querySelector(".weather_city");  
let dateTime = document.querySelector(".weather_date_time");  
let w_forecast = document.querySelector(".weather_forecast");  
let w_icon = document.querySelector(".weather_icon");  
let w_temperature = document.querySelector(".weather_temperature");  
let w_minTem = document.querySelector(".weather_min");  
let w_maxTem = document.querySelector(".weather_max");  
let w_feelsLike = document.querySelector(".weather_feelsLike");  
let w_humidity = document.querySelector(".weather_humidity");  
let w_wind = document.querySelector(".weather_wind");  
let w_pressure = document.querySelector(".weather_pressure");  

let citySearch = document.querySelector(".weather_search");  

// Get the country name from the country code  
const getCountryName = (code) => {  
  return new Intl.DisplayNames([code], { type: "region" }).of(code);  
};  

// Get the date and time  
const getDateTime = (dt) => {  
  const curDate = new Date(dt * 1000); // Convert seconds to milliseconds  
  const options = {  
    weekday: "long",  
    year: "numeric",  
    month: "long",  
    day: "numeric",  
    hour: "numeric",  
    minute: "numeric"  
  };  
  const formatter = new Intl.DateTimeFormat("en-US", options);  
  return formatter.format(curDate);  
};  

let city = "Karachi";  

// Search functionality  
citySearch.addEventListener("submit", (e) => {  
  e.preventDefault();  
  let cityNameInput = document.querySelector(".city_name");  
  city = cityNameInput.value;  
  getWeatherData();  
  cityNameInput.value = ""; // Clear input field  
});  

const getWeatherData = async () => {  
  // Use your actual API key here  
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ade616e2afb4b3c538524273fb5a2b21`;  

  try {  
    const res = await fetch(weatherUrl);  

    if (!res.ok) {  
      throw new Error("City not found");  
    }  

    const data = await res.json();  
    const { main, name, weather, wind, sys, dt } = data;  

    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;  
    dateTime.innerHTML = getDateTime(dt);  

    w_forecast.innerHTML = weather[0].main;  
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;  

    w_temperature.innerHTML = `${(main.temp - 273.15).toFixed(2)}&#176;C`;  
    w_minTem.innerHTML = `Min: ${(main.temp_min - 273.15).toFixed(2)}&#176;C`;  
    w_maxTem.innerHTML = `Max: ${(main.temp_max - 273.15).toFixed(2)}&#176;C`;  

    w_feelsLike.innerHTML = `${(main.feels_like - 273.15).toFixed(2)}&#176;C`;  
    w_humidity.innerHTML = `${main.humidity}%`;  
    w_wind.innerHTML = `${wind.speed} m/s`;  
    w_pressure.innerHTML = `${main.pressure} hPa`;  
  } catch (error) {  
    console.error(error);  
    alert("Error: " + error.message);  
  }  
};  

// Load weather data on page load  
window.addEventListener("load", getWeatherData);  