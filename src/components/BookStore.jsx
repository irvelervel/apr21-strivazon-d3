import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { fetchBooksAction } from "../redux/actions";

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooksAction())
})

class BookStore extends Component {
  state = {
    // books: [],
    bookSelected: null,
  };

  componentDidMount = () => {

    // the only thing we'll do here
    // is dispatching fetchBooks
    this.props.fetchBooks()

    // dispatch an action? you can, but with redux-thunk you can embed the fetch
    // in your action creators directly!
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <Row>
        <Col md={4}>
          <BookList
            bookSelected={this.state.bookSelected}
            changeBook={this.changeBook}
            books={this.props.books.stock}
          />
        </Col>
        <Col md={8}>
          <BookDetail
            bookSelected={this.state.bookSelected}
          />
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
