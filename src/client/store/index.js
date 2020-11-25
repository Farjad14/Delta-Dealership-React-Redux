import { createStore } from 'redux';
import { SortMethods } from './actions';
import reducers from './reducers';

export function initStore(initialData = []) {
  const initialState = {
    cars: initialData,
    sortMethod: {
      sortMethod: SortMethods.NAME
    }
  };
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
