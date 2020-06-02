import React from 'react';

import './singleSelect.css';

export default function SingleSelect(props) {
  return (
    <div className="singleSelect">
      <div className="left">
        <input type="radio" className="left-radio" />
        <span className="text">只看高铁动车</span>
      </div>
      <div className="right">
        <input type="radio" className="right-radio" />
        <span className="text">学生票</span>
      </div>
    </div>
  );
}
