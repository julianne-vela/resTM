import React from 'react';
import style from '../styles/Form.css';

function UrlInput({ value, onChange }) {
  return (
    <label className={style.url}>
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
