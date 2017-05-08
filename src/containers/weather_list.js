
// Se importan las classes de react
import React, {Component} from 'react';

import {connect}  from 'react-redux';

import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component{     

    //esta función renderiza una sola fila
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        {console.log(weather.main.temp)}

        return(

            <tr key={name}>
                {/*<td>{name}</td>
                <td>
                    
                    <SparkLines heigth={130} width={180} data={temps}>
                        <SparklinesLine color='green' />
                    </SparkLines>
                </td>*/}
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
    return {weather: weather}; //es igual a {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);