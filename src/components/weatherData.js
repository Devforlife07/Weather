import React , {useContext, Fragment}from 'react';
import weatherContext from '../context/weatherContext';

const WeatherData = () => {

    const {data, loading, dataLoaded} = useContext(weatherContext);
    
    const Data = (
        const temp = data.current.temp_c;
        console.log(temp);

    )
    const ShowError =(
        <Fragment>'
            <h1 style={{'textAlign': 'center'}}>Search for a city</h1>
        </Fragment>
    )
  
    return (
        <div>
       {dataLoaded ? Data: ShowError}
        </div>
    )
}

export default WeatherData
