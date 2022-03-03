
var button = document.querySelector("button");

button.onclick= async function getWeatherInfo(){
    ville= document.getElementById("city").value;
    api_url = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&units=metric&lang=fr&appid=13a6b0a5726c35c06b87cc719ded487e";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.weather[0].description);
    document.getElementById('weather').textContent=data.weather[0].description;
    document.getElementById('temp').textContent=data.main.temp+" degrès";

}

getWeatherInfo();