/*import "../css/Cart.css";

function Cart () {
    return <div className = "cart-empty">
        <h2>Nothing in Cart</h2>
        <p>Add Items to cart in order to purchase</p>
    </div>
    
}

export default Cart; */ 

import React from "react";
import "../css/Cart.css";

function Cart({ cartItems, removeFromCart }) {
    // Calculate the total price
    const totalPrice = cartItems.reduce((total, item) => {
      // Ensure the price is parsed as a number (if it's a string like "$35")
      const price = parseFloat(item.price.replace("$", ""));
      return total + price;
    }, 0);
  
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-grid">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default Cart;
