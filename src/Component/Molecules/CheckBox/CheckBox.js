import React from 'react';

import Div from '../../Atomic/Container/Div/Div';
import Label from '../../Atomic/Label/Label/Label';
import style from './CheckBox.module.css';

const CheckBox = props => {
  const sizeClass = size => {
    let setSize = style.Sm;
    if (size === "md") {
      setSize = style.Md;
    } else if (size === "lg") {
      setSize = style.Lg;
    }
    return setSize;
  };
  const disabledClass = disabled => {
    let setDisabled = null;
    if (disabled === true) {
      setDisabled =` ${style.Disabled} disabled-checkbox`;
    }
    return setDisabled;
  };
  return (
    <Div
      id={props.id}
      className={`${style.CheckBox} checkbox ${sizeClass(props.size)} ${disabledClass(props.disabled)} ${
        props.className
      }`}
    >
      <input
        type="checkbox"
        id={props.checkboxId}
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
        required={props.required}
      />
      {props.label !== undefined ? (
        <Div className={style.Boxlabel}>
          <Label className={style.Label} id={props.labelId} value={props.label} /> <span>{props.required?"*":""}</span>
        </Div>
      ) : null}
    </Div>
  );
};

export default CheckBox;
CheckBox.defaultProps = {
  id: "",
};
