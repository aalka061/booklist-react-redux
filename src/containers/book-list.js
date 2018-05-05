import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book)=> {
            return (
                <li 
                key={book.title} 
                onClick={()=> this.props.selectBook(book)} 
                className="list-group-item">{book.title}
                </li>      
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4"> 
                {this.renderList()}
            </ul>
        )

    }
}
// whenever our application state changes, our booklist will atuo rerender
// to have booklist aware of the redux side of the application state, we decided to promote it 
// to container
// the promotion is done through using connect function from react-redux  
function mapStateToProps(state) {
    return {
        books: state.books
    }
}


//anything returns from this function will end up as props on the  booklist container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// hooking the component to our application state    
export default connect (mapStateToProps, mapDispatchToProps) (BookList)
    
