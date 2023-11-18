import React from 'react';
import './WeatherApp.css'  

import clear_icon from '../Assest/clear.png';
import cloud_icon from '../Assest/cloud.png';
import drizzle_icon from '../Assest/drizzle.png';
import humidity_icon from '../Assest/humidity.png';
import rain_icon from '../Assest/rain.png';
import search_icon from '../Assest/search.png';
import snow_icon from '../Assest/snow.png';
import wind_icon from '../Assest/wind.png';

const WeatherApp = () => {

    const api_key   = 'a66be612c21a7791d4431075f204de9b'

    const search = () =>{
        const val = document.getElementsByClassName("cityInput");
        // console.log(val)
        if(val[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${val[0].value}&units=metric&appid=${api_key}`;
    }

  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search...' />
            <div className="seach_icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather_img">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather_temp">
            24°C
        </div>
        <div className="weather_location">
            Delhiff
        </div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">18km</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
