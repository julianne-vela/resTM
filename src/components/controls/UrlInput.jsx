import React from 'react';

function UrlInput({ url, onInputChange }) {
  return (
    <>
      <label htmlFor="url-input"></label>
      <input
        type="url"
        id="url-input"
        placeholder="URL"
        value={url}
        name="url"
        onChange={onInputChange}
      />
    </>
  );
}

export default UrlInput;
