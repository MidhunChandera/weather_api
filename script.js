const inputbox=document.getElementById("input");
const searchbutton=document.getElementById('sbutton');
const image=document.getElementById("weathimg");
const temperature=document.getElementById("degreec");
const discription=document.getElementById("text1");
const humidity=document.getElementById("humidity");
const windspeed=document.getElementById("windspeed");
const alldetails=  document.querySelector('.alldetails');
const error=document.getElementById('eror');
async function checkweather(city){
    const api_key="93248f8ca77014970179d803f5bc93a8"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherdata= await fetch(`${url}`).then(response => response.json());
  console.log(weatherdata);
  if(weatherdata.cod=='404'){

    alert("enter a valid input")
  
  }
  degreec.innerHTML=`${Math.round(weatherdata.main.temp-273.15)}°C`;
  text1.innerHTML=`${weatherdata.weather[0].description}`;
  humidity.innerHTML=`${weatherdata.main.humidity}%`;
  windspeed.innerHTML=`${weatherdata.wind.speed}Km/H`;

  alldetails.style.display="block";
    
  switch(weatherdata.weather[0].main){
    case 'Clouds':
        weathimg.src="./img/snow-removebg-preview.png"
        break;
        case 'Clear':
            weathimg.src="./img/clear-removebg-preview.png"
            break;
            case 'Rain':
                weathimg.src="./img/rain-removebg-preview.png"
                break;
                case 'Mist':
                    weathimg.src="./img/mist-removebg-preview.png"
                    break;
                    case 'Snow':
                    weathimg.src="./img/snow.png"
                    break;

                           
                    
  }

}

searchbutton.addEventListener('click',()=>{
    checkweather(inputbox.value)
});