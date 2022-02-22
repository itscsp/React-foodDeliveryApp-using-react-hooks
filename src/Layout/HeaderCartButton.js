import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import { useContext } from 'react';

import CartContext from '../states/cart-context'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  let reduced = cartCtx.items.reduce(myfun, 0);

  function myfun(cartNumber, item){
      return cartNumber + item.amount;
  }


  return (
    <button className={classes.button} onClick={() => props.displayHandler(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{reduced}</span>
    </button>
  );
};

export default HeaderCartButton;