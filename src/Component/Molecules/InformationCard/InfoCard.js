import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import NotificationBody from './NotificationBody';
import { getInfoCardIconAndTitle } from '../../Utils/Feedback/InformationCard/InfoCardIconTitle';
import style from './InfoCard.module.scss';
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from '../../config/i18nConfig';

function INFOCARD_BASE({id, description, state, closable, width, ...props }) {
  const { t } = useTranslation();
  const { type, Icon, title } = getInfoCardIconAndTitle(state, t);

  return (
    <div className={style.infoCard} id={id}  style={{ width: width }}>
      <Alert
        description={<NotificationBody description={description} width={width} />}
        type={type}
        message={title}
        showIcon
        closable={closable}
        closeIcon={<CloseOutlined size={20}/>}
        icon={<Icon size={24} />}
        {...props}
      />
    </div>
  );
}

InfoCard.propTypes = {
  description: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['success', 'warning', 'information', 'error']).isRequired,
  closable: PropTypes.bool,
};

InfoCard.defaultProps = {
  description: '',
  state: 'information',
  closable: true,
};

export default function InfoCard(props){
  return (
    <I18nextProvider i18n={i18n}>
      <INFOCARD_BASE {...props}/>
    </I18nextProvider>
  );
}
