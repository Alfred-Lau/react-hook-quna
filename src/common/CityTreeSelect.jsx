import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './cityTreeSelect.less';

function SuggestItem(props) {
  const { name } = props;
}

function AlphaIndex(props) {
  const { name, handleClick } = props;
  return (
    <li className="alpha-item" onClick={() => handleClick(name)}>
      {name}
    </li>
  );
}

AlphaIndex.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function AlphaBet(props) {
  const { handleClick } = props;
  const dataSource = Array.from(Array(26), (v, i) => {
    return String.fromCharCode(i + 65);
  });

  return (
    <div className="alpha-bet">
      {dataSource.map((item) => {
        return <AlphaIndex name={item} handleClick={handleClick}></AlphaIndex>;
      })}
    </div>
  );
}

AlphaBet.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
function City(props) {
  const { name, handleClick } = props;
  return (
    <li onClick={() => handleClick(name)} className="city">
      {name}
    </li>
  );
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function CitySection(props) {
  const { section, handleSelect } = props;
  return (
    <ul className="city-section">
      {section.map((item) => {
        return <City name={item.name} handleClick={handleSelect}></City>;
      })}
    </ul>
  );
}

CitySection.propTypes = {
  section: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

function CityList(props) {
  const { handleSelect, cityData } = props;

  return (
    <div className="city-list">
      {cityData.map((item) => {
        return (
          <div className="city-content" data-cate={item.title}>
            <div className="city-title">{item.title}</div>
            <CitySection
              section={item.citys || []}
              handleSelect={handleSelect}
            ></CitySection>
          </div>
        );
      })}
    </div>
  );
}

CityList.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  cityData: PropTypes.array.isRequired,
};

export default function CityTreeSelect(props) {
  const { cityData, cityVisible, handleSelect, goBack, isLoading } = props;

  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState([]);
  const key = useMemo(() => searchKey.trim(), [searchKey]);

  const citySelector = classnames('city-selector', {
    hidden: !cityVisible,
  });

  const handleClickAlpha = useCallback((name) => {
    //处理点击跳转
    document.querySelector(`[data-cate=${name}]`).scrollIntoView();
  }, []);

  useEffect(() => {
    if (!cityVisible || cityData || isLoading) {
      fetch('/rest/cities')
        .then((value) => {
          return value.json();
        })
        .then((value) => {
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
      <CityList cityData={result} handleSelect={handleSelect}></CityList>
      <AlphaBet handleClick={handleClickAlpha}></AlphaBet>
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
