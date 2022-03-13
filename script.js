
var input = document.getElementById("input");
const divMeteo = document.getElementById('divMeteo');

input.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();  
  }
});


button.onclick= async function getWeatherInfo(){
    divMeteo.removeAttribute('hidden');
    ville= document.getElementById("input").value;
    api_url = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&units=metric&lang=fr&appid=13a6b0a5726c35c06b87cc719ded487e";
    const response = await fetch(api_url);
    const data = await response.json();
    const description =data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1);
    console.log(data);
    document.getElementById('ville').textContent=data.name+" : ";
    document.getElementById('weather').textContent=description;
    document.getElementById('temp').textContent=data.main.temp+"°";
    document.getElementById("weather").scrollIntoView({
      behavior: "smooth"
  });


}

getWeatherInfo();
