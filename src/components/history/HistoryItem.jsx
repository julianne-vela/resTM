import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/History.css';

function HistoryItem({ method, url }) {
  return (
    <span className={style.historyItem}>
      {method}: {url}
    </span>
  );
}

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default HistoryItem;
