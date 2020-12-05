import React from 'react';

const CountryInfo = ({ selectedCountry , onCapitalWeatherHandler }) => {
    return (
        <div>
            <ul>
                <li>Capital : {selectedCountry["capital"]} </li>
                <li>Population : {selectedCountry["population"]} </li>
                <li>Latlng : {selectedCountry && selectedCountry["latlng"] && selectedCountry["latlng"].length ? `${selectedCountry["latlng"][0]}-  ${selectedCountry["latlng"][1]}` : 0} </li>
                <li>Flag : <img src={selectedCountry["flag"]} alt="flag" style={{ height: "15px", width: "50Px"}} /> </li>
            </ul>
            <button type="button" onClick={onCapitalWeatherHandler}>Capital Weather</button>
        </div>
    )
}

export default CountryInfo