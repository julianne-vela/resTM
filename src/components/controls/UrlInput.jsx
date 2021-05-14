import React from 'react';

function UrlInput({ value, onChange }) {
  return (
    <label>
      <input
        type="url"
        placeholder="URL"
        value={value}
        name="urlValue"
        onInput={onChange}
      />
    </label>
  );
}

export default UrlInput;
