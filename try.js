let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=3cc1fd802fa53fb8586b253aa77ec039";

async function checkWeather(city) {
    let respone = await fetch(`${url}` + `&q=${city}` );
    let data = await respone.json();
    console.log(data);
}
checkWeather("birgunj");
