import {useState} from "react";
import Header from './Layout/Header'
import Meals from "./Meals/Meals";

import Cart from './Cart/Cart';
import CartProvider from "./states/CartProvider";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const displayHandler = (status) => {
    setDisplayCart(status)
  }
  return (
    <CartProvider>
      {displayCart && <Cart displayHandler={displayHandler}/>}
      <Header displayHandler={displayHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
