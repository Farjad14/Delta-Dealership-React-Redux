import React from 'react';

// Empty star: ☆
// Highlighted star: ★
function RatingsStars(enabled) {
  if (enabled === true) {
    return <React.Fragment>★</React.Fragment>;
  }
  return <React.Fragment>☆</React.Fragment>;
}

export default RatingsStars;
