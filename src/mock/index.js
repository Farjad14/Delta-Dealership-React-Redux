import Availability from './services/availability.json';
import Cars from './services/cars.json';

export function getAvailability( id ) {
  return Availability[id];
}

export function getCars() {
  const carsWithAvail = [];
  for(let car in Cars) {
    let current = Cars[car];
    current.availability = getAvailability(Cars[car].id);
    carsWithAvail.push(current);
  }
  return carsWithAvail;
}
