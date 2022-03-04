
var input = document.getElementById("input");

input.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();  
  }
});


button.onclick= async function getWeatherInfo(){
    ville= document.getElementById("input").value;
    api_url = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&units=metric&lang=fr&appid=13a6b0a5726c35c06b87cc719ded487e";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById('ville').textContent=data.name+" : ";
    document.getElementById('weather').textContent="Le temps est : "+data.weather[0].description;
    document.getElementById('temp').textContent=data.main.temp+" degrès";
    document.getElementById("weather").scrollIntoView({
      behavior: "smooth"
  });

}

getWeatherInfo();
