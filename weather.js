const https= require("https")
//Destructuring
const { key } = require("./env.json")

function fetchWeather(city){
    const queryParameters = {
        appid: key,
        q: city,
    };  
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+queryParameters.q+"&appid="+queryParameters.appid; 
    try {
        const request = https.get(url, (res) => {
            if(res.statusCode == 200){
                let body = "";
                res.on("data", (buffer_data) => {
                    body += buffer_data
                });
                res.on("end", () => {
                    const data = JSON.parse(body);
                    console.log("Weather Type: "+data.weather[0].main)
                    console.log("Temperature: "+data.main.temp);
                    console.log("Feels_Like: "+data.main.feels_like);
                    console.log("Minimum Temperature: "+data.main.temp_min);
                    console.log("Maximum Temperature: " + data.main.temp_max);
                    console.log("Humidity: " + data.main.humidity);
                })
            }else{
                console .log("something went wrong")
                return;
            }
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = fetchWeather;