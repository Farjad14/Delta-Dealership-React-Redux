import { combineReducers } from 'redux';

// this is a no-op reducer
export function cars(state = [], action) {
  return state;
}

export function sortMethod(state, action) {
  if(action && action.payload && action.payload.property) {
    return { sortMethod: action.payload.property };
  }
  return { ...state };
}

export default combineReducers({ sortMethod, cars });
