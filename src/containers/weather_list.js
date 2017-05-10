
// Se importan las classes de react
import React, {Component} from 'react';

import {connect}  from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{     

    //esta función renderiza una sola fila
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);        
        const humidity = cityData.list.map(weather => weather.main.humidity);                
        //{console.log(temps)}

        return(

            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color='orange' /></td>
                <td><Chart data={pressure} color='green' /></td>
                <td><Chart data={humidity} color='blue' /></td>
            </tr>
        );

    }

    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Ciudad</th>
                        <th>Temperatura</th>
                        <th>Presión</th>
                        <th>Humedad</th>                                                                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}){
    //return {weather: weather}; //es igual a {weather} === {weather: weather}
    return {weather}; //es igual a {weather} === {weather: weather}    
}

export default connect(mapStateToProps)(WeatherList);