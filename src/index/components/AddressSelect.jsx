import React from 'react';
import PropTypes from 'prop-types';

import './addressSelect.css';
export default function AddressSelect(props) {
  const { from, to, exchangeFromTo } = props;

  return (
    <div className="addressSelect">
      <span className="target">{from}</span>
      <span className="target" onClick={exchangeFromTo}>
        ==
      </span>
      <span className="destination">{to}</span>
    </div>
  );
}

AddressSelect.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exchangeFromTo: PropTypes.func.isRequired,
};
