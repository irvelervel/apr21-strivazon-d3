import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import { useState } from "react";
import { setUserNameAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  cartLength: state.cart.products.reduce((acc, currentValue) => acc + currentValue.qty,
    0),
  firstName: state.user.firstName,
})

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => dispatch(setUserNameAction(name))
})

// const mapStateToProps = state => state

const CartIndicator = ({ history, cartLength, firstName, setUserName }) => {

  const [name, setName] = useState('')

  return (
    <div className="ml-auto mt-2">
      {
        firstName ? <>
          <Button color="primary" onClick={() => history.push("/cart")}>
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </> : <>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log("I'm dispatching the action!")
                  setUserName(name)
                }
              }}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
        </>
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator));
