const weather = require("./weather.js")
const city = process.argv.slice(2).join("")
weather(city)