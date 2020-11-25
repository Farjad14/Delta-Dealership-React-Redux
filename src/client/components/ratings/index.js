import React from 'react';
import './index.css';
import RatingsStars from './ratings-stars';

export default class Ratings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return <div className="ratings">
      <RatingsStars />
      <RatingsStars />
      <RatingsStars />
      <RatingsStars />
      <RatingsStars />
    </div>;
  }
}
