import React from 'react';
import { SortMethods } from '../store/actions';

import Header from './header/index.js';
import CarList from './car-list/container';
import SelectSortMethod from './select-sort-method/container';

import './app.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="app-container">
        <p>
          Sort cars by:<SelectSortMethod>
            <option value={SortMethods.AVAILABILITY}>Availability</option>
            <option value={SortMethods.NAME}>Name</option>
          </SelectSortMethod>
        </p>
        <CarList limit={10} />
      </div>
    </React.Fragment>
  );
}

export default App;
