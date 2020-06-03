import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './cityTreeSelect.css';

function CityShowArea(props) {
  const { hotSpot } = props;
  return (
    <div className="city-show-area">
      <h5 className="city-show-title">定位/历史</h5>
      <div className="city-show content">
        <input type="button" className="location" value="定位"></input>
      </div>
      <h5 className="city-show-title">热门</h5>
      <div className="city-show content">热门</div>
    </div>
  );
}

export default function CityTreeSelect(props) {
  const { cityData, cityVisible, handleSelect, goBack } = props;

  const [searchKey, setSearchKey] = useState('');

  const citySelector = classnames('city-selector', {
    hidden: !cityVisible,
  });
  return (
    <div className={citySelector}>
      <div className="city-search">
        <div className="search-back" onClick={() => goBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <i
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', {
            // hidden: key.length === 0,
          })}
        >
          &#xf063;
        </i>
      </div>
      <CityShowArea hotSpot={[]}></CityShowArea>
    </div>
  );
}

CityTreeSelect.propTypes = {
  cityData: PropTypes.array.isRequired,
  cityVisible: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
