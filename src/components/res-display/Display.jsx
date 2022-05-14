import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import style from '../styles/Display.css';

function JsonViewer({ srcJson }) {
  const viewStyles = {
    width: '100%',
    borderRadius: '10px',
    padding: '5px',
    overflow: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    WebkitScrollbarStyle: 'none',
  };
  return (
    <section aria-label="results-display" className={style.resDisplay}>
      <ReactJson
        src={srcJson}
        name={'response'}
        theme={'solarized'}
        style={viewStyles}
        collapseStringsAfterLength={80}
        collapsed={2}
        displayDataTypes={false}
      />
    </section>
  );
}

JsonViewer.propTypes = {
  srcJson: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default JsonViewer;
