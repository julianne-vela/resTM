import React from 'react';

function Methods({ value, onInputChange }) {
  return (
    <>
      <label>
        {value}
        <input
          type="radio"
          name="method"
          value={value}
          onChange={onInputChange}
        />
      </label>
    </>
  );
}

export default Methods;
