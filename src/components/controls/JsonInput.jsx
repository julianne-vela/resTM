import React from 'react';

function JsonInput({ json, onInputChange }) {
  return (
    <textarea
      placeholder="Raw JSON Body"
      name="body"
      value={json}
      onChange={onInputChange}
    />
  );
}

export default JsonInput;
