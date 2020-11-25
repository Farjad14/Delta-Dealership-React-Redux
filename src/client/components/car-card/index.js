import React from 'react';
import PropTypes from 'prop-types';
import BuyButton from '../buy-button';
import Ratings from '../ratings';
import './index.css';

function CarCard({ data: { id, name, make, model, year, img, availability } }) {
  return (
    <li
      className={`car${availability === 'Unavailable' ? ' unavailable' : ''}`}>
      <div
        className="car-img"
        style={{ background: `url(${img}) center / cover` }}
      />
      <div className="car-container">
        <h4>{name}</h4>
        <p>Make: {make}</p>
        <p>Model: {model}</p>
        <p>Availability: {availability}</p>
        <div>
          Rating: <Ratings />
        </div>
        {availability === 'In Dealership' ? (
          <p>
            <BuyButton />
          </p>
        ) : null}
      </div>
    </li>
  );
}

CarCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CarCard;
