const API_KEY = `53bb219f519e0c3d20c5241e24dc7fc4`;

const searchTemperature =()=>{
    const city = document.getElementById("city-name").value;
    city.value ='';
    // console.log(city);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
 
fetch(url)
 .then(res => res.json())
 .then(data =>displayTemperature(data))
}

 const setInnerText = (id,text)=>{
     document.getElementById(id).innerText = text;
 }
const displayTemperature =temperature =>{
    setInnerText("city",temperature.name);
    setInnerText("Temperature" ,temperature.main.temp);
    setInnerText("weather",temperature.weather[0].main);
 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img=document.getElementById("weather-icon");
    img.setAttribute('src',url);

}