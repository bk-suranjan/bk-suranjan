
let degree = document.querySelector(".deg");
let citys = document.querySelector(".city");

let humidtiy = document.querySelector(".humiditys ");
let wind = document.querySelector(".wind");
let searchInput = document.querySelector(".search");
let searchBtn = document.querySelector(".search-btn");
let img = document.querySelector(".humidity img");

const apiKey = "3cc1fd802fa53fb8586b253aa77ec039";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
async function checkWeather (city){
    const respone = await fetch(apiUrl+ `&q=${city}` + `&appid=${apiKey}` );
    let data = await respone.json();
    console.log(data);
    degree.innerHTML= Math.round(data.main.temp) + "°c" ;
    citys.innerHTML= data.name;
    humidtiy.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Cloud") {
        img.src="/images/cloud.png"
    }
    else if(data.weather[0].main == "Rain") {
        img.src="/images/rain.png";
    }

    else if(data.weather[0].main == "Clear") {
        img.src="/images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        img.src="/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        img.src="/images/mist.png";
    }
    
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
    document.querySelector(".humidity").style.display="block";
});