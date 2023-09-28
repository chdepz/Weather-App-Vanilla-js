const temprature = document.querySelector("#temp");
const cloud = document.querySelector('#cloud-pct');
const feels = document.querySelector('#feels_like');
const humid = document.querySelector('#humidity');
const max = document.querySelector('#max_temp');
const min = document.querySelector('#min_temp');
const wind = document.querySelector("#wind_speed");
const city = document.querySelector("#cityname")
const date1 = document.querySelector("#date")
const time1 = document.querySelector("#time")


const search = document.querySelector("#btn");
const input = document.querySelector("#input");

search.addEventListener("click", () => {
    city.innerText = "";
    const cityName = input.value;
    if (cityName.trim() !== "") {

        setTimeout(() => {

            city.innerText = `${cityName}`;
        }, 1000)


        fetchWeather(cityName);



    }
});

const weatherApiBaseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

async function fetchWeather(cityName) {
    const url = `${weatherApiBaseUrl}?city=${encodeURIComponent(cityName)}`;
    const options = {
        method: 'GET',
        headers: {
            // Replace with your API key
            'X-RapidAPI-Key': 'eed2413964mshc68f71784c9755ep1a8c28jsnb92b4bf9a34a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);

        cloud_pct = result.cloud_pct;
        let temp = result.temp;
        feels_like = result.feels_like;
        humidity = result.humidity;
        min_temp = result.min_temp;
        max_temp = result.max_temp;
        wind_speed = result.wind_speed;
        wind_degrees = result.wind_degrees;
        sunrise = result.sunrise;
        sunset = result.sunset;

        temprature.innerText = `Temperature is: ${temp} °C`;
        cloud.innerText = `Cloud PCT is: ${cloud_pct}`;
        feels.innerText = `Feels like: ${feels_like}`;
        humid.innerText = `Humidity is: ${humidity}`;
        max.innerText = `Max Temperature is: ${max_temp}  °C`;
        min.innerText = `Min Temperature is: ${min_temp}  °C`;
        wind.innerText = `Wind Speed is: ${wind_speed} Kmph`;
    } catch (error) {
        
        console.error(error);
    }
}

window.addEventListener("load", () => {
    const default_city = "Bharatpur, Nepal";
    fetchWeather(default_city)
    setTimeout(() => {

        city.innerText = `${default_city}`
    }, 1000)
    getDateAndTime();

})

function getDateAndTime() {




setInterval(()=>{
    const date = new Date();
    const dateTolocal = date.toDateString()
    date1.innerText = `${dateTolocal}`;
    // const timenow = date.toLocaleTimeString();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let session = "AM";


if(hr == 0){
    hr = 12;
   
}
if(hr > 12){
    hr = hr - 12;
    session = "PM";
  
}

let timenow = `${hr}:${min}:${sec}:${session}`;

    time1.innerText = `${timenow}`;
  
}, 1000)




}





