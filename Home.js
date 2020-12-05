import React from 'react';
import CountryInput from './CountryInput';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countryInput: '',
            countriesList: [],
        }
    }
    onChangeHandler = (e)=> {
        this.setState({ [e.target.name] : e.target.value })
    }
    render(){
        const { countryInput, } = this.state
        console.log(this.state, 'stateeeeeeeeeeeee')

        const CountryData = {
            countryInput,
            onChangeHandler : this.onChangeHandler
        }
        return(
            <div>
                <CountryInput CountryData={CountryData} />
            </div>
        )
    }
}

export default Home