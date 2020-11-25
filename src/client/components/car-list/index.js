import React from 'react';
import PropTypes from 'prop-types';
import CarCard from '../car-card';
import './index.css';
import { SortMethods } from '../../store/actions';

const sortMethodMap = {
  [SortMethods.AVAILABILITY]: 'availability',
  [SortMethods.NAME]: 'name',
};

function CarList({ cars, limit, sortMethod }) {
  const mappedSortMethod = sortMethodMap[sortMethod];
  const sortCars = function(a, b) {
    return (a[mappedSortMethod] > b[mappedSortMethod]) ? 1 : -1;
  }

  return (
    <React.Fragment>
      <p>
        Showing {Math.min(limit, cars.length)} of {cars.length} cars.
      </p>
      <ul className="car-list">
        {cars
          .slice(0, limit)
          .sort(sortCars)
          .map(car => <CarCard key={car.id} data={car} />)}
      </ul>
    </React.Fragment>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  sortMethod: PropTypes.string.isRequired,
};

export default CarList;
