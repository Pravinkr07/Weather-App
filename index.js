

const ApiKey = "ef9114137a7bf9db12d87f5664180e41";
const ApiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachindex = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weathericon =document.querySelector(".Weather-icon");

 async function checkWeather(city){
   
    const response = await fetch(ApiUrl + city +`&appid=${ApiKey}`);

    if(response.status == 404 ){
      document.querySelector(".error").style.dispaly="block";
      document.querySelector(".Weather").style.dispaly="none";
    }else{
      var data = await response.json();



      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =Math.round( data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
      if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
      }
      else if(data.weather[0].main=="Clear") {
        weathericon.src="images/clear.png";
  
      }
      else if(data.weather[0].main=="Rain") {
        weathericon.src="images/rain.png";
  
      }
      else if(data.weather[0].main=="Dirizzle") {
        weathericon.src="images/drizzle.png";
  
      }
      else if(data.weather[0].main=="Mist") {
        weathericon.src="images/mist.png";
  
      }
      document.querySelector(".error").style.dispaly="none";

    }


 }
 serachBtn.addEventListener("click", ()=>{
   checkWeather(serachindex.value);

});

