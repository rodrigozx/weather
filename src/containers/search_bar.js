/*   Container de buscador de pagina
     -------------------------------
     Esta barra esta predeterminada para buscar en un servicio API
     Para la vista se utilizan las classes de bootstrap
*/

// Se importan las classes de react
import React, {Component} from 'react';

import {connect}  from 'react-redux';
import {bindActionCreators}  from 'redux';
import {fetchWeather}  from '../actions/index';

// Se define una nueva clase "SearchBar"
// la cual es la que se exporta para poder llamar desde otros componentes
class SearchBar extends Component{

    // Se define el constructor con el metodo super
    constructor(props){
        super(props);
        //setea el estado "vacío" para cuando se crea el componente
        this.state = {term: ''};
        
        // el método creado como onInputChange necesita pasar el "bind" para llevar el contexto a cuando se cambia el estado
        // hace un override de la función para pasarle tambien el contexto "this". Sino no funciona el setState.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // Método creado para cuando cambia el contenido del input del buscador
    onInputChange(e){

        // log para pruebas
        //   console.log(e.target.value);

        // Setea el valor del state con el nuevo valor
        // es el "callback" del evento.
        this.setState({term: e.target.value});
    }

    onFormSubmit(e){
        //le digo que el evento no dispare la llamada por defecto
        e.preventDefault();

        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ""});

        // con esta API = http://openweathermap.org/forecast5
        //API key= 7cfe85b2543376211f3b5568dfe15b9c
        //passw = iceman123456

/* API call:

    api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    Parameters:

    q city name and country code divided by comma, use ISO 3166 country codes

    Examples of API calls:

    api.openweathermap.org/data/2.5/forecast?q=London,us
*/

    }

    render(){
        return(
            // se crea un form que contendrá:
            // - un input para escribir el valor de texto a buscar
            // - un botón para enviar por submit la busqueda

            // Form agrupado
            <form 
                onSubmit = {this.onFormSubmit} //cambio el atributo onSubmit para que cuando envíe el formulario haga lo que yo quiero 
                className="input-group">

                {/*input de busqueda*/}
                <input type="text"
                    placeholder="Busca una ciudad para ver su clima..."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                {/*botón de submit para enviar texto a buscar*/}
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondaty">Buscar Clima</button>
                </span>
            </form>
         );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);