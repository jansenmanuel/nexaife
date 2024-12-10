import { useContext } from 'react';

import { NotificationContext } from './NotificationProvider';

export const useNotification = () => {
  const notify = useContext(NotificationContext);

  return (props) => {
    notify({
      type: "ADD_NOTIFICATION",
      payload: {
        ...props,
      },
    });
  };
};
