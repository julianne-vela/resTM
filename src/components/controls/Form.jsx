import React from 'react';
import PropTypes from 'prop-types';
import Methods from './Methods';
import Textarea from './JsonInput';
import UrlInput from './UrlInput';
function Form({ onSubmit, onInputChange, url, json }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  return (
    <form onSubmit={onSubmit}>
      <UrlInput value={url} onChange={onInputChange} />
      <section>
        {methods.map((method) => (
          <Methods
            method={method}
            methodSelected={method}
            onChange={onInputChange}
            key={method}
          />
        ))}
        <button>Go!</button>
      </section>
      <Textarea value={json} onChange={onInputChange} />
    </form>
  );
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
};

export default Form;
