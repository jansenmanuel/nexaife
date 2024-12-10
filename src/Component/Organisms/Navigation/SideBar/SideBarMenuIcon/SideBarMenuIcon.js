import React from 'react';

import Div from '../../../../Atomic/Container/Div/Div';
import SideBarItem from '../../../../Atomic/SideBar/SideBarItem/SideBarItem';
import SideBarSide from '../../../../Atomic/SideBar/SideBarSide/SideBarSide';
import { propsDefault } from '../../../../Enum/PropsDefault';
import SideBarIcon from '../../../../Molecules/SideBar/SideBarIcon/SideBarIcon';
import style from './SideBarMenuIcon.module.css';

const SideBarMenuIcon = props => {
  const classActiveLevel1 = (activeLevel1, type) => {
    if (activeLevel1 === type) {
      return `${style.ItemIconActive} item-icon-active`;
    } else {
      return `${style.ItemIcon} item-icon`;
    }
  };
  return (
    <Div id={props.id} className={`${style.SideIcon} side-icon`}>
      <SideBarSide id={props.id + "container"}>
        {props.menu.map((item, index) => {
          return (
            <SideBarItem
              className={`${classActiveLevel1(props.activeLevel1, item.type)}`}
              id={props.id + "item" + index}
              key={index}
            >
              <SideBarIcon
                id={props.id + "itemicon" + index}
                icon={item.icon}
                tooltip={item.tooltip}
                onClick={item.onClick}
                activeLevel1={props.activeLevel1}
                to={item.to !== undefined ? item.to : "#"}
              />
            </SideBarItem>
          );
        })}
      </SideBarSide>
    </Div>
  );
};

export default SideBarMenuIcon;
SideBarMenuIcon.defaultProps = {
  menu: propsDefault.list,
  id: propsDefault.stringEmpty,
};
