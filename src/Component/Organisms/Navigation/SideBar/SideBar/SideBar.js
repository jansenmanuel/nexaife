import React from 'react';

import { SideBarMenu } from '../../../../';
import Div from '../../../../Atomic/Container/Div/Div';
import Flex from '../../../../Atomic/Container/Flex/Flex';
import { propsDefault } from '../../../../Enum/PropsDefault';
import { styleDefault } from '../../../../Enum/styleDefault';
import SideBarMenuIcon from '../SideBarMenuIcon/SideBarMenuIcon';
import style from './SideBar.module.css';

function SideBar(props) {
  const collapseSidemenu = sideMenu => {
    if (sideMenu === undefined || sideMenu === null) {
      return style.SideMenuCollapse;
    } else {
      return style.SideMenu;
    }
  };
  return (
    <Div id={props.id} height={styleDefault.fullVh}>
      <Flex id={props.id + "container"} className={style.SideBarBox}>
        <SideBarMenuIcon
          id={props.id + "icon"}
          collapse={true}
          className={`${style.SideIcon} side-icon`}
          menu={props.sidebarMenu}
          activeLevel1={props.activeLevel1}
        />
        <Div id={props.id + "boxmenu"} className={`${collapseSidemenu(props.sideMenu)} side-menu`}>
          <SideBarMenu
            activeLevel2={props.activeLevel2}
            activeLevel3={props.activeLevel3}
            id={props.id + "menu"}
            sideMenu={props.sidebarByType}
          />
        </Div>
      </Flex>
    </Div>
  );
}
export default SideBar;
SideBar.defaultProps = {
  id: propsDefault.stringEmpty,
};
