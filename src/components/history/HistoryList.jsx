import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/History.css';

function HistoryList(props) {
  return (
    <section className={style.historyList}>
      <h3 className={style.title}>Request History</h3>
    </section>
  );
}

HistoryList.propTypes = {};

export default HistoryList;
