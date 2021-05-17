import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import style from '../styles/Display.css';
function JsonViewer({ srcJson }) {
  return (
    <section className={style.display}>
      <ReactJson src={srcJson} />
    </section>
  );
}

JsonViewer.propTypes = {};

export default JsonViewer;
