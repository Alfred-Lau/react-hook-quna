import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = (props) => {
  const { goBack, title } = props;

  return (
    <div className="header">
      <div className="goBack" onClick={goBack}>
        goBack
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
