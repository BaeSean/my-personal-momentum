const API_KEY = "c7ea5059800ee2477c4664db3a3272b1"

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(respone => respone.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        
        city.innerText = data.name;
        const weatherText = `${data.weahter[0].main} / ${data.main.temp} C`;
        weather.innerText = weatherText;
    });
}

function onGeoErr() {
    console.log("err")
}
