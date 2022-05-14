import React from 'react';
import style from '../styles/Form.css';

function Methods({ name, onChange, methodSelected }) {
  return (
    <>
      <input
        id={name.toLowerCase()}
        type="radio"
        name="methodValue"
        value={name}
        checked={methodSelected === name}
        onChange={onChange}
      />
      <label htmlFor={name.toLowerCase()} className={style.radio}>
        {name}
      </label>
    </>
  );
}

export default Methods;
