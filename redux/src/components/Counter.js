import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => (
  <div className="c-heading c-heading--1 u-txcenter">You have added {props.count} books</div>
);

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;