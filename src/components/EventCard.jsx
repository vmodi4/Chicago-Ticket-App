/*import "../css/EventCard.css";

function EventCard({ event }) {
    function onCartClick() {
        alert("Added to cart: " + event.title);
    }
    function onMoreInfo() {
        alert("button has been clicked"); 
    }

    return (
        <div className="event-card">
            <div className="event-card-image">
                <img src={event.url} alt={event.name} />
                <div className="event-card-overlay">
                    <button className="Add-to-Cart-Button" onClick={onCartClick}>
                        Add to Cart
                    </button>
                    <button className="More-Info-Button" onClick={onMoreInfo}>
                        More information
                    </button>

                </div>
            </div>
            <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.price}</p>
            </div>
        </div>
    );
}

export default EventCard;

// hello this is extra features branch */

import React from "react";
import "../css/EventCard.css";
import { useNavigate } from "react-router-dom";
import events from "../data/data"; // Import your events data

// create an arrow function to handle the click event


function EventCard({ event, addToCart }) {
    const navigate = useNavigate(); 
    const handleMoreInfo = () => {
        navigate(`/event/${event.id}`); // Navigate to the individual event page with the event ID
      };
    
    return (
    
    <div className="event-card">
      <div className="event-image">
        <img src={event.url} alt={event.title} />
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p>Price of Event: {event.price}</p>
        <div className="event-buttons">
          <button onClick={() => addToCart(event)}>Add to Cart</button>
          <button onClick={handleMoreInfo}>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;