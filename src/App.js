import React, {useState} from "react";
import Header from './Layout/Header'
import Meals from "./Meals/Meals";

import Cart from './Cart/Cart';

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const displayHandler = (con) => {
    setDisplayCart(con)
    console.log(con)
  }
  return (
    <React.Fragment>
      {displayCart ? <Cart displayHandler={displayHandler} /> : '' }
      <Header displayHandler={displayHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;