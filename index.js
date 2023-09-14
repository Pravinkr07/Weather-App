const ApiKey = "ef9114137a7bf9db12d87f5664180e41";
const ApiUrl= "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}";



 async function checkWeather(){
   
    const respone= await fetch(ApiUrl + `&appid=${ApiKey}`);
    var data= await respone.json();
    console.log(data);

 }
 checkWeather();
