/**
 * Action types
 */

export const SET_SORT_METHOD = 'SET_SORT_METHOD';

/**
 * Supporting constants
 */

export const SortMethods = {
  AVAILABILITY: 'availability',
  NAME: 'name',
};

/**
 * Action creators
 */

export function setSortMethod(property) {
  return {
    type: SET_SORT_METHOD,
    payload: {
      property,
    },
  };
}
