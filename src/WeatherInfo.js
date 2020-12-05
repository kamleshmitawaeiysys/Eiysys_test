import React from 'react';

const WeatherInfo = ({ selectedCountry, currentWeatherDetails }) => {
    return (
        <div>
            <h2>Weather Info of {selectedCountry.name} :</h2>
            <ul>
                <li>Temperature : {currentWeatherDetails["temperature"]} </li>
                <li>Weather_icons : {currentWeatherDetails["weather_icons"] &&
                    currentWeatherDetails["weather_icons"].length > 0 ?
                    currentWeatherDetails["weather_icons"].map((icon, idx) =>
                        <img src={icon} alt="weaterIcon" key={idx} style={{ height: "25px", width: "40px", margin: "5px" }} />
                    ) : <React.Fragment />} </li>
                <li>Wind_speed : {currentWeatherDetails["wind_speed"]} </li>
                <li>Precip : {currentWeatherDetails["precip"]} </li>
            </ul>
        </div>
    )
}

export default WeatherInfo