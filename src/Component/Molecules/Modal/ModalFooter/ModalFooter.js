import React from 'react';

import MFooter from '../../../Atomic/Modal/MFooter/MFooter';
import style from './ModalFooter.module.css';

function ModalFooter(props) {
  return (
    <MFooter id={props.id} className={`${style.ModalFooter} ${props.className}`}>
      {props.content}
    </MFooter>
  );
}

export default ModalFooter;
ModalFooter.defaultProps = {
  id: "",
};
