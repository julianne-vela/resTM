import React from 'react';
import PropTypes from 'prop-types';
import Methods from './Methods';
import Textarea from './JsonInput';
import UrlInput from './UrlInput';
import style from '../styles/Form.css';

function Form({ onSubmit, onInputChange, url, json, methodValue }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  return (
    <section className={style.form}>
      <h3 className={style.title}>Make an HTTP Request Below</h3>

      <form className={style.userForm} onSubmit={onSubmit}>
        <UrlInput value={url} onChange={onInputChange} />

        <span className={style.methods}>
          {methods.map((method) => (
            <Methods
              name={method}
              methodSelected={methodValue}
              onChange={onInputChange}
              key={method}
            />
          ))}

          <button>Go!</button>
        </span>

        <Textarea
          className={style.json}
          value={json}
          onChange={onInputChange}
        />
      </form>
    </section>
  );
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
};

export default Form;
