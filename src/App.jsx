// package imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { ReactiveBase } from "@appbaseio/reactivesearch";

// Component imports
import Home from "./Components/Home";
import About from "./Components/About";
import Experiment from "./Components/Experiment/ExperimentBase";

// Context imports
import { CartContext } from "./Contexts/CartContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Methods from "./Components/Methods";
import Downloads from "./Components/Downloads";
import Summary from "./Components/Summary";

export default function App() {
  // To keep track of fileurls inside a cart.
  const [cartitems, setCartItems] = useState([]);

  // To keep track of fileurls inside a cart.
  const [urlparams, setUrlParams] = useState("");

  // To set the dataview
  const [dataview, setDataview] = useState("grid");

  // Function to dispatch actions to a cart
  const dispatchCartEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_TO_CART":
        setCartItems([...cartitems, payload.newCartItem]);
        return;
      case "REMOVE_FROM_CART":
        setCartItems(cartitems.filter((cart) => cart !== payload.cartItem));
        return;
      case "CLEAR_CART":
        setCartItems([]);
        return;
      default:
        return;
    }
  };

  // Credentials are from .env
  const ESCLUSTER = import.meta.env.VITE_ESCLUSTER;
  const INDEX = import.meta.env.VITE_ESINDEX;
  const CREDENTIALS = import.meta.env.VITE_ESCREDENTIALS;

  // console.log(window.outerWidth+' x '+window.outerHeight);
  // Wrap the entire app with the CartContext.
  return (
    <CartContext.Provider
      value={{
        cartitems,
        dispatchCartEvent,
        urlparams,
        setUrlParams,
        dataview,
        setDataview,
      }}
    >
      <ReactiveBase url={ESCLUSTER} app={INDEX} credentials={CREDENTIALS}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-betweem overflow-scroll bg-neutral-100">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="methods" element={<Methods />} />
                <Route path="summary" element={<Summary />} />
                <Route path="downloads" element={<Downloads />} />
                <Route path="experiment">
                  <Route path=":id" element={<Experiment />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ReactiveBase>
    </CartContext.Provider>
  );
}
