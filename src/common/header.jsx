import React, { useContext, useEffect, forwardRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../index/App';
import './header.css';

const FancyInput = forwardRef((props, ref) => {
  return (
    <>
      I <input type="text" ref={ref} />
      请输入信息
    </>
  );
});

const Header = (props) => {
  const { goBack, title } = props;
  const current = useContext(ThemeContext);
  console.log('current', current);

  const ref = createRef();

  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <div className="header">
      <div className="goBack" onClick={goBack}>
        goBack
      </div>
      <div className="title">{title}</div>
      <FancyInput ref={ref}></FancyInput>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Header;
