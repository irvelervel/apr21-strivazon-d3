import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, addToCartActionThunk } from "../redux/actions";

const BookDetail = ({ bookSelected }) => {

  const [book, setBook] = useState(null)

  useEffect(() => {
    setBook(bookSelected)
  }, [bookSelected])

  const user = useSelector(state => state.user)
  const books = useSelector(state => state.books)

  const dispatch = useDispatch()

  return (
    <div className="mt-3">
      {book ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{book.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={book.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>
                {book.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>
                {book.price}
              </p>
              {
                user.firstName ? (
                  <Button color="primary" onClick={() => dispatch(addToCartActionThunk(book))}>
                    ADD TO CART
                  </Button>
                ) : (
                  <div>Please log in to add items to the cart</div>
                )
              }
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            {
              books.error ? (
                <h3>AN ERROR OCCURRED!</h3>
              ) : (
                <h3>Please select a book!</h3>
              )
            }
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookDetail;