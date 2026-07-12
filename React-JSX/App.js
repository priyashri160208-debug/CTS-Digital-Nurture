import React from "react";

function App() {

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const image =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400";

  const rentStyle = {
    color: office.Rent < 60000 ? "red" : "green"
  };

  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>

      <img src={image} alt="Office Space" width="250" height="180" />

      <h2>Name: {office.Name}</h2>

      <h3 style={rentStyle}>
        Rent: Rs. {office.Rent}
      </h3>

      <h3>Address: {office.Address}</h3>
    </div>
  );
}

export default App;
