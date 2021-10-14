const https= require("https")
//Destructuring
const { key } = require("./env.json")

function fetchWeather(city){
    console.log(city)
}
module.exports = fetchWeather;