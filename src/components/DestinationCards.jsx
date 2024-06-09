import React from 'react';
// import './DestinationCards.css';
import img3 from "../images/pexels-flodahm-699466.jpg"
import img4 from "../images/pexels-apasaric-2067057.jpg"
import img5 from "../images/pexels-pixabay-221532.jpg"

const DestinationCards = () => {
  return (
    <div className="destination-cards-container">
      <div className="destination-card">
        <img src={img3} alt="Destination 1" className="card-image" />
        <div className="card-content">
          <h2>Paris, France</h2>
          <p>Explore the City of Light, visit the Eiffel Tower, and enjoy French cuisine.</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="destination-card">
        <img src={img4} alt="Destination 2" className="card-image" />
        <div className="card-content">
          <h2>Tokyo, Japan</h2>
          <p>Experience vibrant culture, sushi, cherry blossoms, and high-tech innovation.</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="destination-card">
        <img src={img5} alt="Destination 3" className="card-image" />
        <div className="card-content">
          <h2>Santorini, Greece</h2>
          <p>Relax on stunning beaches, admire white-washed buildings, and enjoy breathtaking sunsets.</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCards;
