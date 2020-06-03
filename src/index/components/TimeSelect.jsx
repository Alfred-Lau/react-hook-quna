import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { formatTime, formatWeek, isToday } from '../../utils';
import './timeSelect.css';

export default function TimeSelect(props) {
  const { time } = props;

  return (
    <div className="time-select">
      <span className="time">{formatTime(time)}</span>
      <span className="week">{formatWeek(time)}</span>
      {isToday(time) ? <span className="extra">(今天)</span> : null}
    </div>
  );
}

TimeSelect.propTypes = {
  time: PropTypes.number.isRequired,
};
