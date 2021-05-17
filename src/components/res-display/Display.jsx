import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import style from '../styles/Display.css';

function JsonViewer({ srcJson }) {
  return (
    <section className={style.resDisplay}>
      <ReactJson src={srcJson} />
    </section>
  );
}

JsonViewer.propTypes = {
  srcJson: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default JsonViewer;
