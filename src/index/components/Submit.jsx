import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export default function Submit(props) {
  const { title, onSubmit } = props;

  return (
    <div className="search-btn" onClick={onSubmit}>
      {title}
    </div>
  );
}

Submit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
