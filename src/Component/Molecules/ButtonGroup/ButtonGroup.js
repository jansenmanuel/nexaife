import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Button from "../../Atomic/Button/Button";
import Div from "../../Atomic/Container/Div/Div";
import { buttonSizeType } from "../../Utils/Button/ButtonSizeClass";
import style from "./buttonGroup.module.scss";
import {I18nextProvider, useTranslation} from "react-i18next";

import i18n from "../../config/i18nConfig";

const ButtonGroupBase = ({
  confirm,
  cancel,
  onConfirm,
  onCancel,
  mainColor,
  secondaryColor,
  idConfirm,
  idCancel,
  className,
  size,
  disableConfirm,
  disableCancel,
  iconConfirm,
  iconCancel,
  propsConfirm,
  propsCancel,
  direction,
}) => {
  const { t } = useTranslation();

  return (
    <Div
      className={`${className ? className : ""} ${
        direction === "vertical"
          ? style.containerButtonVertical
          : style.containerButton
      } ${style[buttonSizeType(size)]}`}
    >
      <Button
        size={size}
        className={
          direction === "vertical"
            ? style[`buttonVertical${_.startCase(size)}`]
            : style[`button${_.startCase(size)}`]
        }
        {...propsCancel}
        id={idCancel}
        disabled={disableCancel}
        onClick={onCancel}
        mainColor={mainColor}
        label={cancel || t("COMMON:CANCEL")}
        secondaryColor={secondaryColor}
        buttonType={"secondary"}
        prefixIcon={iconCancel}
      />
      <Button
        className={
          direction === "vertical"
            ? style[`buttonVertical${_.startCase(size)}`]
            : style[`button${_.startCase(size)}`]
        }
        size={size}
        {...propsConfirm}
        id={idConfirm}
        disabled={disableConfirm}
        onClick={onConfirm}
        mainColor={mainColor}
        label={confirm || t("COMMON:OK")}
        secondaryColor={secondaryColor}
        buttonType={"primary"}
        prefixIcon={iconConfirm}
      />
    </Div>
  );
};

export default function ButtonGroup(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <ButtonGroupBase {...props} />
    </I18nextProvider>
  );
}

ButtonGroup.propTypes = {
  idCancel: PropTypes.string,
  cancel: PropTypes.string,
  onCancel: PropTypes.func,
  idConfirm: PropTypes.string,
  confirm: PropTypes.string,
  onConfirm: PropTypes.func,
  size: PropTypes.string,
  disableCancel: PropTypes.bool,
  disableConfirm: PropTypes.bool,
  direction: PropTypes.string,
};

ButtonGroup.defaultProps = {
  idCancel: null,
  cancel: null,
  onCancel: () => {},
  idConfirm: null,
  confirm: null,
  onConfirm: () => {},
  size: "md",
  disableCancel: false,
  disableConfirm: false,
  direction: "horizontal",
};
