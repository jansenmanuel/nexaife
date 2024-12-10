import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Option from '../../../Atomic/Selector/Option/Option';
import Select from '../../../Atomic/Selector/Select/Select';
import { classNameDefault } from '../../../Enum/classNameDefault';
import { idAdditional } from '../../../Enum/IdAdditional';
import { propsDefault } from '../../../Enum/PropsDefault';
import style from './TableLimit.module.css';

function TableLimit(props) {
  return (
    <Div id={props.id} className={`${style.SelectBox} ${classNameDefault.selectBox}`}>
      <Select id={props.id + idAdditional.select} onChange={evt => props.selectClick(evt)}>
        {props.option.map((item, index) => {
          return (
            <Option
              id={props.id + idAdditional.select + index}
              key={index}
              value={item}
              selected={item === props.defaultOption ? true : false}
            >
              {item}
            </Option>
          );
        })}
      </Select>
    </Div>
  );
}

export default TableLimit;
TableLimit.defaultProps = {
  id: propsDefault.stringEmpty,
  selectClick: () => {},
  option: propsDefault.option,
};
