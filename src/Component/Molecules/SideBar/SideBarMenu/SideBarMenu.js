import React from 'react';

import { Link } from 'react-router-dom';

import SideBarItem from '../../../Atomic/SideBar/SideBarItem/SideBarItem';
import SideBarSide from '../../../Atomic/SideBar/SideBarSide/SideBarSide';
import SideTitle from '../../../Atomic/SideBar/SideBarTitle/SideBarTitle';
import { propsDefault } from '../../../Enum/PropsDefault';
import NestedMenu from './NestedMenu';
import style from './SideBarMenu.module.css';

function SideBarMenu(props) {
  const {sideMenu} = props;

  return (
    <>
      {sideMenu === undefined ? (
        <></>
      ) : (
        <>
          <Link id={props.id + "mainlink"} to={sideMenu.to}>
            <SideTitle id={props.id + "maintitle"} className={`${style.Title} side-title`} value={sideMenu.title} />
          </Link>
          <SideBarSide id={props.id + "boxmenu"} className={style.SideMenuContainer}>
            {sideMenu.submenu.map((menu, index) => {
              return (
                <SideBarItem id={props.id + "itemlevel1" + index} key={index}>
                  <NestedMenu
                    type={menu.type}
                    activeLevel2={props.activeLevel2}
                    activeLevel3={props.activeLevel3}
                    handleActiveLevel2={menu.handleActiveLevel2}
                    id={props.id + "itemlevel2" + index}
                    menu={menu}
                  />
                </SideBarItem>
              );
            })}
          </SideBarSide>
        </>
      )}
    </>
  );
}

export default SideBarMenu;
SideBarMenu.defaultProps = {
  id: propsDefault.stringEmpty,
};
