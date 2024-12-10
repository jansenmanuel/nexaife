import React, { useEffect } from 'react';
import './Alert.module.scss';
import { getAlertIconAndTitle } from '../../Utils/Feedback/Alert/AlertIconTitle';
import PropTypes, { func } from 'prop-types';
import { notification } from 'antd';
import Close from '../../Asset/Icon/Close';
import { CLOSE_ICON_COLOR } from '../../Constant/colorConstant';
import {I18nextProvider, useTranslation} from "react-i18next";

import i18n from "../../config/i18nConfig";

function AlertBase(propss) {
  const { showAlert, state, caption, duration, onClose, placement, className, onClick, style, showClose, showCaption, id, ...props } = propss;
  const {t} = useTranslation();

  useEffect(() => {
    if (showAlert) {
      const { type, Icon, title } = getAlertIconAndTitle(state, t);

      notification[type]({
        message: <div id={id}>
          {title}
        </div>, 
        description: showCaption ? caption : undefined,
        duration: duration,
        onClose: onClose,
        closeIcon: showClose ? <Close size={15} color={CLOSE_ICON_COLOR} /> : <div />,
        placement: placement,
        icon: <Icon size={18} />,
        className: className,
        onClick: onClick,
        style: style,
        key: id,
        ...props
      });
    }
  }, [showAlert, state, caption, duration, onClose, placement, className, onClick, style, showClose, showCaption, id ]);

  return null;
}

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  state: PropTypes.oneOf(['success', 'warning', 'information', 'error']).isRequired,
  caption: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  placement: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  showCaption: PropTypes.bool,
  showClose: PropTypes.bool,
  id: PropTypes.string
};

Alert.defaultProps = {
  id: '',
  showAlert: false,
  state: 'information',
  caption: '',
  duration: 4.5,
  onClose: null,
  placement: 'topRight',
  className: '',
  onClick: null,
  style: {},
  showCaption: true,
  showClose: true
};

export default function Alert(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <AlertBase {...props} />
    </I18nextProvider>
  );
}
