import React from 'react';

import MBody from '../../../Atomic/Modal/MBody/MBody';

const ModalBody = props => {
  return (
    <MBody id={props.id} width={props.width} className={props.className}>
      {props.message}
    </MBody>
  );
};

export default ModalBody;
ModalBody.defaultProps = {
  id: "",
};
