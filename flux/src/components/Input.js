import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  let self = null;

  return (
    <div className="c-inputgroup">
      <label 
        htmlFor={props.id} 
        className="c-inputgroup__label">
        {props.title}
      </label>

      <input 
        ref={el => self = el}
        id={props.id} 
        type="text" 
        className="c-inputgroup__input u-mt4" 
        placeholder={props.placeholder} 
        value={props.value || ''}
        onChange={() => props.onChange(self.value)} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;