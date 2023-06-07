const api_key="922d25130e3b1057b25d0d35b6c200cd";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkweather(city){
        const res=await fetch(api_url + city + ` &appid=${api_key}`);  

        if(res.status==404){
          document.querySelector(".err").style.display="block";
          document.querySelector(".weather").style.display="nono";
        }
        else
        {
          var data =await res.json();
          console.log(data); 

          document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
          document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
          document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
          document.querySelector(".city").innerHTML=data.name;

          document.querySelector(".weather").style.display="block";
          document.querySelector(".err").style.display="none";
        }
      }

    searchBtn.addEventListener("click",()=>{
      	checkweather(searchBox.value);
	})