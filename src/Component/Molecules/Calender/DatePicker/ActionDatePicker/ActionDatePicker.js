import React from 'react';

import Button from '../../../../Atomic/Button/Button';
import Div from '../../../../Atomic/Container/Div/Div';
import style from './ActionDatePicker.module.css';

const ActionDatePicker = props => {
  return (
    <Div className={props.className}>
      <Button
        id="btncancel"
        className={style.ButtonCancel}
        onClick={props.closeClick}
        label={props.labelCancel}
      />
      <Button
        id="btndone"
        className={style.ButtonDone}
        onClick={props.doneClick}
        label={props.labelDone}
      />
    </Div>
  );
};

export default ActionDatePicker;
