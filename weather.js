const https= require("https")
//Destructuring
const { key } = require("./env.json")

function fetchWeather(city){
    console.log(city)
    const queryParameters = {
        appid: key,
        q: city,
    };  
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+queryParameters.q+"&appid="+queryParameters.appid; 
    console.log(url)
}
module.exports = fetchWeather;