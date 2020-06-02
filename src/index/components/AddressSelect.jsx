import React, { useState } from 'react';

import './addressSelect.css';
export default function AddressSelect(props) {
  const [target, setTarget] = useState('北京');
  const [destination, setDestination] = useState('上海');
  return (
    <div className="addressSelect">
      <span className="target">{target}</span>
      <span className="target">==</span>
      <span className="destination">{destination}</span>
    </div>
  );
}
