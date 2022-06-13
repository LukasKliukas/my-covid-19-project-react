import React from 'react';
import css from './Input.module.css';

const Input = ({ name, id, label, placeholder, onChange, value }) => {
  return (
    <div className={css.inputDiv}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={css.input}
        type='text'
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
