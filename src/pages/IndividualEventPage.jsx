import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/data"; // Import your events data
import "../css/IndividualEventPage.css";

function IndividualEventPage() {
  const { id } = useParams(); // Get the event ID from the route
  console.log("Event Id from url: ", id); // Log the event ID
  const event = events.find((event) => event.id === parseInt(id)); // Find the event by ID
  console.log("Event data: ", event); // Log the event data
  

  return (
    <div className="individual-event-page">
      <h1>{event.title}</h1>
      <img src={event.url} alt={event.title} />
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Time: {event.time}</p>
      <p>Price: {event.price}</p>
      <button onClick={() => addToCart(event)}>Add to Cart</button>
    </div>
  );
}

export default IndividualEventPage;