import React from 'react';
import PropTypes from 'prop-types';
import grochat from "../../Asset/Icon/grochat.svg";
import NcArrowRight from '../../Asset/Icon/NcArrowRight';
import style from "./LoginGroChat.module.scss";
import { renderArrowSize } from '../../Utils/Button/ButtonSizeClass';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../config/i18nConfig';

const BUTTON_LOGIN_GROCHAT_BASE = ({
  id,
  size,
  label,
  onClick,
  mainColor,
}) => {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className={`${style.buttonLoginGroChat} ${style[`buttonLoginGroChat--${size}`]}`}
      onClick={() => onClick(true)}
      style={{
        '--main-color': mainColor
      }}
    >
      <img src={grochat} alt="Logo Brand Nexsoft" />
      <p className={style.label}>
        {label || t("COMMON:LOGIN_GROCHAT.TITLE_LOGIN_GROCHAT")}
      </p>
      <NcArrowRight size={renderArrowSize(size)} />
    </div>
  );
}

ButtonLoginGrochat.defaultProps = {
  id: null,
  size: 'm',
  onClick: () => {}
};

ButtonLoginGrochat.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function ButtonLoginGrochat(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <BUTTON_LOGIN_GROCHAT_BASE {...props}/>
    </I18nextProvider>
  );
}



