import React, {Component} from 'react';
import {connect} from 'react-redux'


class ActiveBook extends Component {


    
    render(){

        if (!this.props.book) {
            retrun (
                <div> select a book to get started </div>
            )        
        }
    
        return (
            <div> 
                <h2> Details for Book: </h2> 
                <h3> {this.props.book.title} </h3> 
             </div>
        )
    }
}

function mapStateToProps (state){

    return {
        book : state.activeBook
    }
}


export default connect (mapStateToProps)(ActiveBook)

