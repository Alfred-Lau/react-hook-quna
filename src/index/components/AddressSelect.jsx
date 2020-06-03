import React from 'react';
import PropTypes from 'prop-types';

import './addressSelect.css';
export default function AddressSelect(props) {
  const { from, to, exchangeFromTo, toggleSelector } = props;

  return (
    <div className="addressSelect">
      <span className="target" onClick={toggleSelector}>
        {from}
      </span>
      <span className="target" onClick={exchangeFromTo}>
        ==
      </span>
      <span className="destination" onClick={toggleSelector}>
        {to}
      </span>
    </div>
  );
}

AddressSelect.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exchangeFromTo: PropTypes.func.isRequired,
  toggleSelector: PropTypes.func.isRequired,
};
