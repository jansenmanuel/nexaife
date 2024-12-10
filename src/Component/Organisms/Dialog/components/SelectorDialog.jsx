import React from "react";
import {Modal} from "antd";
import styles from "./SelectorDialog.module.scss";

const SelectorDialog = ({...props}) => {
  const {open, onCancel, children} = props;

  return (
    <Modal
      width={1000}
      className={styles.modal}
      open={open}
      centered={true}
      closable={false}
      footer={false}
      onCancel={onCancel}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default SelectorDialog;
