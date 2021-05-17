import React from 'react';
import PropTypes from 'prop-types';

function HistoryItem({ method, URL }) {
  return (
    <article>
      <label>{method}</label>
      <span>{URL}</span>
    </article>
  );
}

HistoryItem.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default HistoryItem;
