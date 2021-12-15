import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart onClose={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
