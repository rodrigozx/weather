import React, {Component} from 'react';

//funcion de la librer'ia para conectar react con redux
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) =>{
            return(
                <li key={book.title} className='list-group-item'>
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

export default connect(mapStateToProps)(BookList);