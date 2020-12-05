import React from 'react';
import axios from 'axios';
import CountryInput from './CountryInput';
import CountryInfo from './CountryInfo';
import WeatherInfo from './WeatherInfo';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInput: '',
            selectedCountry: {},
            countriesList: [],
            isCountryInfo: false,
            isWeatherInfo:false

        }
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            if (this.state.countryInput.length > 2) {
                this.getCountriesList();
            }
        })

    }

    onCountrySelectHandler = (e, name, value) => {
        e.preventDefault();
        this.setState({ [name]: value, countriesList: [], countryInput: value.name })
    }
    getCountriesList = async () => {
        const { countryInput } = this.state;
        try {
            let response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryInput}`)
            if (response.status == 200) {
                this.setState({ countriesList: response.data })
            }
        }
        catch (err) {
            console.log(err, 'error')
            return err
        }

    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ isCountryInfo: true, isWeatherInfo:false })
    }
    onCapitalWeatherHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.get(`http://api.weatherstack.com/current?access_key=0217325da158c056313fa55f82bffea3&query=${this.state.selectedCountry.name}`)
            if (response.status == 200) {
                this.setState({ currentWeatherDetails: response.data.current , isWeatherInfo: true, isCountryInfo:false })
            }
        }
        catch (err) {
            console.log(err, 'error')
            return err
        }

    }
    render() {
        const { countryInput, countriesList, selectedCountry, isCountryInfo, isWeatherInfo, currentWeatherDetails } = this.state
        const CountryData = {
            countryInput,
            countriesList,
            onChangeHandler: this.onChangeHandler,
            onCountrySelectHandler: this.onCountrySelectHandler,
        }
        return (
            <div>
                <CountryInput {...CountryData} />
                <button disabled={!countryInput} onClick={this.onSubmitHandler} type="button">Submit</button>
                { isCountryInfo && Object.keys(selectedCountry).length ? <CountryInfo selectedCountry={selectedCountry} onCapitalWeatherHandler={this.onCapitalWeatherHandler} /> : <React.Fragment />}
                { isWeatherInfo && Object.keys(currentWeatherDetails).length ? <WeatherInfo selectedCountry={selectedCountry} currentWeatherDetails={currentWeatherDetails} /> : <React.Fragment />}
            </div>
        )
    }
}

export default Home