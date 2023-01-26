var APIKey = "d7446df87faa9ff7e610c480b6ed3a29"
var city = []

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL, {
"method": "GET",
"headers": {
}
})
    .then(res => res.json())
    .then(data => console.log(data))
