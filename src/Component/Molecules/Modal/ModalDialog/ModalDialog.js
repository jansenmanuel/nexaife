import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import Div from '../../../Atomic/Container/Div/Div';
import Modal from '../../../Atomic/Modal/Modal/Modal';
import ModalBody from '../ModalBody/ModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
import style from './ModalDialog.module.css';

const ModalDialog = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ReactDOM.createPortal(
    <CSSTransition in={props.show} unmountOnExit timeout={200}>
      <Div
        id={props.id}
        className={`${props.className} ${style.Modal}  ${
          props.show ? style.EnterDone : style.Exit
        }  modal-dialogs`}
        onClick={props.onClose}
      >
        <Modal
          id={props.id + "content"}
          className={`${props.classContent} ${style.ModalContent} modal-contents`}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader
            id={props.id + "header"}
            className={`${props.classHeader} ${style.ModalHeader}`}
            title={props.title}
            closeIcon={props.closeIcon}
            onClose={props.onClose}
            hideClose={props.hideClose}
          />
          <ModalBody
            id={props.id + "body"}
            message={props.content}
            className={`${style.ModalBody} ${props.classBody}`}
          />
          <ModalFooter
            id={props.id + "footer"}
            className={`${props.classFooter} ${style.ModalFooter} `}
            content={props.footer}
          />
        </Modal>
      </Div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default ModalDialog;
ModalDialog.defaultProps = {
  footerContent: "",
  id: "",
};
