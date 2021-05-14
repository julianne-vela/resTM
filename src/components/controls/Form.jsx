import React from 'react';
import PropTypes from 'prop-types';
import Methods from './Methods';

function Form({ onSubmit, onInputChange, url, json }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url-input"></label>
      <input
        type="url"
        id="url-input"
        placeholder="URL"
        value={url}
        name="url"
        onChange={onInputChange}
      />
      <section>
        {methods.map((method) => (
          <Methods value={method} onChange={onInputChange} key={method} />
        ))}
        <button>Go!</button>
      </section>
      <textarea
        placeholder="Raw JSON Body"
        name="body"
        value={json}
        onChange={onInputChange}
      />
    </form>
  );
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
