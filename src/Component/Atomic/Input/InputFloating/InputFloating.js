import React from 'react';

import style from './InputFloating.module.css';

const InputFloating = (props) => {
  const required = props.required;

  return (
    <>
      {required === "true" ? (
        <input
          className={style.Input}
          type={props.type}
          name={props.name}
          value={props.input}
          onChange={props.onChange}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          required
        />
      ) : (
        <input
          className={props.className}
          type={props.type}
          name={props.name}
          value={props.input}
          onChange={props.onChange}
          placeHolder={props.placeholder}
          defaultValue={props.defaultValue}
        />
      )}
    </>
  );
};

export default InputFloating;
