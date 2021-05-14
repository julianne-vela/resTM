import React from 'react';

function JsonInput({ value, onChange }) {
  return (
    <textarea
      placeholder="Raw JSON Body"
      name="jsonValue"
      value={value}
      onInput={onChange}
    />
  );
}

export default JsonInput;
