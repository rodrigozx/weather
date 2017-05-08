
// Se importan las classes de react
import React, {Component} from 'react';

 import {connect}  from 'react-redux';
// import {bindActionCreators}  from 'redux';
// import {fetchWeather}  from '../actions/index';

// // Se define una nueva clase "WheatherList"
// // contiene una lista de componentes
// class WheatherList extends Component{

//     // Se define el constructor con el metodo super
//     constructor(props){
//         super(props);
//         //setea el estado "vacío" para cuando se crea el componente
//         this.state = {term: ''};
        
//     }

class WheatherList extends Component{     

    renderWeather(cityData){
        const name = cityData.city.name;

        return(
            <tr key={name}>
                <td>{name}</td>
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

export default connect(mapStateToProps)(WheatherList);