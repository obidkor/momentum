const weather = document.querySelector(".js-weather");

const API_KEY = "4a38136bf09396e504ffcbbe998ae577";
const COORDS = 'coords';

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = Math.round(json.main.temp);
            const currentPlace = json.name;
            console.log(temperature,currentPlace);
            weather.innerText=`${temperature}'c \n${currentPlace}`;
        })
}

function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant load geo location")
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoards=localStorage.getItem(COORDS)
    if(loadedCoards===null){
        askCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoards);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
   }
}

function init(){
    loadCoords();
}

init();