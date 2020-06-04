import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './cityTreeSelect.css';

function CityList(props) {
  const { handleClick, cityData } = props;

  return (
    <div className="city-list">
      {cityData.map((item) => {
        return (
          <div>
            <h4>{item.title}</h4>
            <p>{JSON.stringify(item.citys)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function CityTreeSelect(props) {
  const { cityData, cityVisible, handleSelect, goBack, isLoading } = props;

  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState([]);
  const key = useMemo(() => searchKey.trim(), [searchKey]);

  const citySelector = classnames('city-selector', {
    hidden: !cityVisible,
  });

  useEffect(() => {
    if (!cityVisible || cityData || isLoading) {
      fetch('/rest/cities')
        .then((value) => {
          return value.json();
        })
        .then((value) => {
          console.log(value);
          const { cityList } = value;
          setResult(cityList);
        });
    }
  }, [cityData, cityVisible, isLoading]);
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
            hidden: key.length === 0,
          })}
        >
          &#xf063;
        </i>
      </div>
      <CityList cityData={result}></CityList>
    </div>
  );
}

CityTreeSelect.propTypes = {
  cityData: PropTypes.object.isRequired,
  cityVisible: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
