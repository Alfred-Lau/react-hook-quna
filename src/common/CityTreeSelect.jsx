import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './cityTreeSelect.css';

export default function CityTreeSelect(props) {
  const { cityData, cityVisible, handleSelect, goBack } = props;

  const citySelector = classnames('city-selector', {
    hidden: !cityVisible,
  });
  return (
    <div className={citySelector}>
      <div className="city-search-header">
        <span className="goBack" onClick={goBack}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </span>
        <div className="city-search-box">
          <i class="iconfont search-icon">&#xe632;</i>
          <input
            type="text"
            className="search-content"
            placeholder="城市车站的中文或拼音"
          />
          <i className="iconfont close-icon">&#xe62a;</i>
        </div>
      </div>
    </div>
  );
}

CityTreeSelect.propTypes = {
  cityData: PropTypes.array.isRequired,
  cityVisible: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
