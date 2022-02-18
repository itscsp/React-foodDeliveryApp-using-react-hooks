import React from "react";
import classes from "./Cart.module.css";
import Modal from '../UI/Modal'

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "shusi", amount: 2, price: 100.0 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal displayHandler={props.displayHandler}>
        {cartItems}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>200.00</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={() => props.displayHandler(false)}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
      <div></div>
    </Modal>
  );
};

export default Cart;
