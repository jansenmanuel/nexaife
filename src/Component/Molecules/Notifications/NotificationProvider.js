import React, {
  createContext,
  useReducer,
} from 'react';

import Div from '../../Atomic/Container/Div/Div';
import Notification from './Notification';
import style from './Notification.module.css';

export const NotificationContext = createContext();
const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case "ADD_NOTIFICATION":
          return [action.payload];
        case "REMOVE_NOTIFICATION":
          return [];
        default:
          return state
      }
  }, []);

  return(
    <NotificationContext.Provider value={dispatch}>
      <Div id={props.id} className={style.NotificationWrapper}>
        {state.map((note,index) => {
          return <Notification id={props.id} dispatch={dispatch} key={index} {...note} />
        })}
      </Div>
      {props.children}
    </NotificationContext.Provider>
  )
};
export default NotificationProvider;