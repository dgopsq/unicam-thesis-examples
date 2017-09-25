import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button 
    className="c-button"
    onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;