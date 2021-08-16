import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from "../redux/actions";
import { useEffect } from "react";

// REDUX HOOKS
// useSelector
// useDispatch

// const mapStateToProps = (state) => state

// const mapDispatchToProps = (dispatch) => ({
//   removeFromCart: (index) => dispatch(removeFromCartAction(index))
// })

const Cart = ({ history }) => {
  useEffect(() => {
    if (!user.firstName) {
      history.replace('/')
    }
  }, [])

  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  // this works but it's pretty unefficient
  // const state = useSelector(state => state)

  // const { cart, user } = useSelector(state => state)

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {cart.products.map((book, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => dispatch(removeFromCartAction(i))}>
                <FaTrash className="mr-3" />
                <span>{book.qty}</span>
              </Button>
              <img
                className="book-cover-small"
                src={book.book.imageUrl}
                alt="book selected"
              />
              {book.book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          TOTAL:{" "}
          {cart.products.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.book.price) * currentValue.qty,
            0
          )}
        </Col>
      </Row>
    </Row>
  );
}

export default Cart;
