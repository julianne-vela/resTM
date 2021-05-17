import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/History.css';

function HistoryList({ history }) {
  return (
    <section className={style.historyView}>
      <h3 className={style.title}>Request History</h3>

      <ul aria-label="request-history" className={style.historyList}>
        {history.map((entry, i) => (
          <li>
            <HistoryItem
              key={`${i} + '-' + ${entry.method} + '-' + ${entry.url}`}
            />
          </li>
        ))}
      </ul>
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
