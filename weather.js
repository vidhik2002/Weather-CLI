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
                    console.log("\x1B[33mWeather Type: " + data.weather[0].main);
                    console.log("\x1b[35mTemperature: " + data.main.temp);
                    console.log("\x1b[36mFeels_Like: " + data.main.feels_like);
                    console.log("\x1b[32mMinimum Temperature: "+data.main.temp_min);
                    console.log("\x1b[31mMaximum Temperature: " + data.main.temp_max);
                    console.log("\x1b[34mHumidity: " + data.main.humidity+"\x1b[0m");
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