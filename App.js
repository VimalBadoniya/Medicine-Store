import Header from "./components/Header";
import "./App.css";
import AddNew from "./components/AddNew";
import React, { useState } from "react";
import AllMedicine from "./components/AllMedicine";
import Cart from "./components/Cart";
import ContextProvider from "./source/Context";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <ContextProvider>
    <React.Fragment>
      <Header onCartShow={showCartHandler} />
      {showCart && <Cart onCartClose={hideCartHandler}/>}
      <AddNew />
      <AllMedicine />
    </React.Fragment>
    </ContextProvider>
  );
}

export default App;
