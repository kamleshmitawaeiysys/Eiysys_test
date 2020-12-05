import React from 'react';

const CountryInput = (props) => {
    console.log(props, 'peopsggggggggg')
    return(
        <input type="text" name="country" onChange={onChangeHandler} value={countryInput} />
    )
}
export default CountryInput