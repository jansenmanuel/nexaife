import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { nexIcon } from '../../../';
import Div from '../../../Atomic/Container/Div/Div';
import SideBarItem from '../../../Atomic/SideBar/SideBarItem/SideBarItem';
import SideBarSide from '../../../Atomic/SideBar/SideBarSide/SideBarSide';
import SideTitle from '../../../Atomic/SideBar/SideBarTitle/SideBarTitle';
import Span from '../../../Atomic/Span/Span';
import { iconSet } from '../../../Enum/IconSet';
import { propsDefault } from '../../../Enum/PropsDefault';
import style from './SideBarMenu.module.css';

const NestedMenu = props => {
  const {menu} = props;
  const [accordion, setAccordion] = useState(menu.accordion);
  const accordionClick = () => {
    setAccordion(!accordion);
  };
  const collapse = accordion => {
    if (accordion === true) {
      return `${style.SideBarMenu} side-bar-menu`;
    } else {
      return style.SideBarMenuCollapse;
    }
  };
  const classActiveLevel2 = (activeLevel2, type) => {
    if (activeLevel2 === type) {
      return `${style.SubMenuActive} sub-menu-active`;
    } else {
      return "";
    }
  };
  const classActiveLevel3 = (activeLevel3, type) => {
    if (activeLevel3 === type) {
      return "subsubmenu-box-title-active";
    } else {
      return "subsubmenu-box-title";
    }
  };
  return (
    <>
      <Link id={props.id} to={menu.to} onClick={props.handleActiveLevel2}>
        <Div
          id={props.id + "container"}
          className={`${style.SubMenu} sub-menu ${classActiveLevel2(props.activeLevel2, props.type)}`}
          onClick={accordionClick}
        >
          <Div id={props.id + "icon"} className={`${style.IconSubMenu} icon-sub-menu`}>
            {menu.icon}
          </Div>
          <SideTitle id={props.id + "title"} className={`${style.SubMenuTitle} sub-menu-title`} value={menu.title} />
          <Div id={props.id + "arrow"} className={`${style.IconAccordion} icon-accordion`}>
            {menu.submenu.length > 0 ? (
              accordion === true ? (
                <nexIcon.NcArrowUp size={iconSet.size.md} />
              ) : (
                <nexIcon.NcArrowDown size={iconSet.size.md} />
              )
            ) : (
              ""
            )}
          </Div>
        </Div>
      </Link>
      {menu.submenu.length > 0 ? (
        <SideBarSide id={props.id + "menucontainer"} className={collapse(accordion)}>
          {menu.submenu.map((value, index) => {
            return (
              <SideBarItem id={props.id + "menuitem" + index} key={index} className={"subsubmenu"}>
                <Link
                  className={"subsubmenu-link"}
                  id={props.id + "menuitemlink" + index}
                  to={value.url}
                >
                  <Div
                    id={props.id + "menuitemboxtitle" + index}
                    className={`${classActiveLevel3(props.activeLevel3, value.url)}`}
                  >
                    <Span
                      id={props.id + "menuitemtitle" + index}
                      className={"subsubmenu-title"}
                      value={value.name}
                    />
                  </Div>
                </Link>
              </SideBarItem>
            );
          })}
        </SideBarSide>
      ) : (
        ""
      )}
    </>
  );
};

export default NestedMenu;
NestedMenu.defaultProps = {
  id: propsDefault.stringEmpty,
};
