import React, {Component} from 'react';

//funcion de la librer'ia para conectar react con redux
import { connect } from 'react-redux';
//función creada en acciones para saber que seleccioné un libro
import {selectBook} from '../actions/index';

//
import {bindActionCreators} from 'redux';


class BookList extends Component{
    renderList(){
        return this.props.books.map((book) =>{
            return(
                <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} 
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render(){
        return (
            <ul className= 'list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }
}



function mapStateToProps(state){
    //lo que devuelva se muestra como propiedad dentro de la lista de libros.
    //cada vez que cambia el estado se devuelve las propiedaes
    return{
        books: state.books
    };
}

//lo que devuelve esta funcion termina como un a propiedad en el container de BookList
function mapDispatchToProps(dispatch){
    //cuando se llama a selectBook, el resultado pasa a todos los reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//pasa BookList de componente a container. 
// necesita conocer el metodo selectBook. Lo hace disponible como una propiedad
export default connect(mapStateToProps, mapDispatchToProps)(BookList);