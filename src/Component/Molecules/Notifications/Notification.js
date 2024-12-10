import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Div from '../../Atomic/Container/Div/Div';
import Image from '../../Atomic/Image/Image/ImageStyled';
import Paragraph from '../../Atomic/Paragraph/Paragraph';
import style from './Notification.module.css';
import {
  borderNotification,
  iconNotification,
  messageNotification,
} from './NotificationUtils';

const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 50) {
          return prev + 1;
        }
        clearInterval(id);
        return prev;
      });
    }, 50);
    setIntervalID(id);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseNotification = useCallback(() => {
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 50);
  });

  useEffect(() => {
    if (width === 50) {
      handleCloseNotification();
    }
  }, [width, handleCloseNotification]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <Div id={props.id}
      onMouseLeave={handleStartTimer}
      className={`${style.NotificationItem} notification-item ${borderNotification(props.type)} ${
        exit ? style.Exit : ""
      }`}
      onClick={handleCloseNotification}
    >
      <Image id={props.id} src={iconNotification(props.type)} alt="icon" />
      <Paragraph id={props.id} value={messageNotification(props.message)} />
    </Div>
  );
};

export default Notification;
