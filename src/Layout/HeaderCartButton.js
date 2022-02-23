import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import { useContext, useEffect, useState } from 'react';

import CartContext from '../states/cart-context'

const HeaderCartButton = (props) => {

  const [btnIsHighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  let reduced = cartCtx.items.reduce(myfun, 0);

  function myfun(cartNumber, item){
      return cartNumber + item.amount;
  }

  const btnClasses = `${classes.button} ${btnIsHighted ? classes.bump : ''}`

  const { items } = cartCtx;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };


  }, [items])




  return (
    <button className={btnClasses} onClick={() => props.displayHandler(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{reduced}</span>
    </button>
  );
};

export default HeaderCartButton;