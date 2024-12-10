import React from 'react';

import { classNameDefault } from '../../Enum/classNameDefault';
import { idDefault } from '../../Enum/IdDefault';
import { InputTypeDefault } from '../../Enum/InputTypeDefault';
import { propsDefault } from '../../Enum/PropsDefault';
import { switchLabelClass } from '../../Utils/Switch/SwitchLabelClass';
import { switchSizeClass } from '../../Utils/Switch/SwitchSizeClass';
import { switchSizeLableClass } from '../../Utils/Switch/SwitchSizeLabelClass';
import { switchSizeValueClass } from '../../Utils/Switch/SwitchSizeValueClass';
import { switchValue } from '../../Utils/Switch/SwitchValue';
import { switchValueClass } from '../../Utils/Switch/SwitchValueClass';
import style from './Switch.module.css';

const Switch = (props) => {
  return (
    <label
      id={props.id}
      className={`${switchLabelClass(props.label)} ${switchSizeLableClass(props.size)} ${
        classNameDefault.switch
      }   ${props.className}`}
    >
      {props.label}
      <input
        id={props.id + idDefault.input}
        name={props.name}
        type={InputTypeDefault.checkbox}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span
        id={props.id + idDefault.slider}
        className={`${style.Slider} ${switchSizeClass(props.size)} ${classNameDefault.slider}`}
      ></span>
      <span
        id={props.id + idDefault.value}
        className={`${style.Value} ${switchSizeValueClass(props.size)} ${switchValueClass(
          props.checked
        )}`}
      >
        {switchValue(props.checked, props.active, props.deactive)}
      </span>
    </label>
  );
};

export default Switch;
Switch.defaultProps = {
  className:propsDefault.stringEmpty,
  id: propsDefault.string,
  disabled: propsDefault.false,
  onChange: propsDefault.func,
  label: propsDefault.null,
  size: propsDefault.size,
  active: propsDefault.active,
  deactive: propsDefault.deactive,
};
