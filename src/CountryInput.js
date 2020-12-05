import React from 'react';

const CountryInput = (props) => {
    const { countryInput, countriesList, onChangeHandler, onCountrySelectHandler } = props
    return (
        <React.Fragment>
            <input type="text" name="countryInput" onChange={onChangeHandler} value={countryInput} placeholder="Enter Country" autoComplete="off" />
                <ol>
                    {countriesList.length > 0 && countriesList.map((country, idx) => (
                        <li key={idx} onClick={(e)=> onCountrySelectHandler(e, 'selectedCountry', country)}>{country.name}</li>
                    ))}
                </ol>
        </React.Fragment>
    )
}
export default CountryInput