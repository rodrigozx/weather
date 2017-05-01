import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if (!this.props.book){
            return <div>Selecciona un libro para empezar.</div>
        }
        return (
            <div>
                <h3>Detalles del libro:</h3>
                <div>{this.props.book.title}</div>
            </div>
      );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);