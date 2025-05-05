/*import "./css/App.css"; 
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
    <main className = "main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    </div>
  ); 
}

export default App; */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import IndividualEventPage from "./pages/IndividualEventPage";

function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // Function to add an item to the cart
  const addToCart = (event) => {
    setCartItems((prevItems) => {
      // Avoid adding duplicate items
      if (!prevItems.find((item) => item.id === event.id)) {
        return [...prevItems, event];
      }
      return prevItems;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/event/:id" element={<IndividualEventPage addToCart = {addToCart} />} /> {/* Add this route for individual event page */}
        </Routes>
      </main>
    </div>
  );
}

export default App;