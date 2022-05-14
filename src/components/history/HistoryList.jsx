import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import style from '../styles/History.css';

function HistoryList({ history }) {
  return (
    <section className={style.historyView}>
      <h3 className={style.title}>Request History</h3>

      <section aria-label="request-history" className={style.historyList}>
        {history.map((entry, i) => (
          <HistoryItem
            method={entry.method}
            url={entry.url}
            key={`${entry.method} + '-' + ${entry.url} + '-' + ${i}`}
          />
        ))}
      </section>
    </section>
  );
}

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoryList;
