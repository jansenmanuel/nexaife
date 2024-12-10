import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Input from '../../../Atomic/Input/Input/Input';
import Label from '../../../Atomic/Label/Label/Label';
import Paragraph from '../../../Atomic/Paragraph/Paragraph';
import style from './Field.module.css';

const Field = props => {
  const validClass = valid => {
    let isValid =  "standart";
    if (valid === true) {
      isValid = "success";
    } else if (valid === false) {
      isValid = "error";
    }
    return isValid;
  };

  return (
    <>
      <Div id={props.id} className={props.className}>
        <Label
          id={props.labelId}
          value={props.label}
          className={`${props.classLabel} label ${style.Label}`}
        />
        <Input
          id={props.inputId}
          className={`${props.classInput}`}
          size={props.size}
          width={props.width}
          type={props.type}
          valid={props.valid}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
          onKeyUp={props.onKeyUp}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          checked={props.checked}
          onKeyDown={props.onKeyDown}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
          pattern={props.pattern}
          title={props.message}
          required={props.required}
          maxLength={props.maxLength}
        />
        <Paragraph
          value={props.message}
          className={`${style.Message} message ${validClass(props.valid)} ${props.classMessage}`}
        />
      </Div>
    </>
  );
};

export default Field;
Field.defaultProps = {
  id: "",
  labelId: "",
  inputId: "",
};
