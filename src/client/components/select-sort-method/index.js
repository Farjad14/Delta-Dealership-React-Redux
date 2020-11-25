import React from 'react';
import PropTypes from 'prop-types';

function SelectSortMethod({ children, property, onChange }) {
  return (
    <select value={property} onChange={event => onChange(event.target.value)}>
      {children}
    </select>
  );
}

SelectSortMethod.propTypes = {
  children: PropTypes.node.isRequired,
  property: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectSortMethod;
