import React, { useState } from 'react';

import NcClose from '../../../Asset/Icon/NcClose';
import Div from '../../../Atomic/Container/Div/Div';
import MHeader from '../../../Atomic/Modal/MHeader/MHeader';
import style from './ModalHeader.module.css';

const ModalHeader = props => {
  const buttonClose = useState(false);
  return (
    <MHeader id={props.id} className={props.className}>
      <Div
        id={props.id + "title"}
        className={props.hideClose ? style.ModalHeaderTitleNoIcon : style.ModalHeaderTitle}
      >
        {props.title}
      </Div>
      {props.hideClose === true ? (
        <></>
      ) : (
        <Div id={props.id + "icon"} onClick={props.onClose} className={style.ModalHeaderIcon}>
          {props.closeIcon}
        </Div>
      )}
    </MHeader>
  );
};

export default ModalHeader;
ModalHeader.defaultProps = {
  closeIcon: <NcClose />,
  hideClose: false,
  id:""
};
