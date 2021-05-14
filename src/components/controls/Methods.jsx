import React from 'react';

function Methods({ method, onChange, methodSelected }) {
  return (
    <label>
      {method}
      <input type="radio" name="method" value={method} onChange={onChange} />
    </label>
  );
}

export default Methods;
