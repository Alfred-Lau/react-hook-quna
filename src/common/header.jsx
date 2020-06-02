import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = (props) => {
  const { goBack, title } = props;

  return (
    <div className="header">
      <div className="goBack" onClick={goBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Header;
