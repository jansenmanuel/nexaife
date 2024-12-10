import React from 'react';

import { Link } from 'react-router-dom';

import Div from '../../../Atomic/Container/Div/Div';
import Span from '../../../Atomic/Span/Span';
import { propsDefault } from '../../../Enum/PropsDefault';
import style from './DropDownProfile.module.css';

const DropDownProfile = props => {
  return (
    <Div id={props.id + "container"} className={style.Dropdown}>
      <Div
        id={props.id + "main"}
        className={`${style.DropdownButton} dropdown-button`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={props.onClick}
      >
        <Div id={props.id + "mainicon"} className={style.Icon}>
          {props.titleIcon}
        </Div>
        <Span id={props.id + "maintitle"} className={`${style.Item} ${style.HideItem}`} value={props.title} />
      </Div>
      <Div id={props.id} className={`dropdown-menu`}>
        {props.menu.map((item, index) => {
          return (
            <Link
              id={props.id + "boxitem" + index}
              to={item.to !== undefined ? item.to : propsDefault.to}
              className={`${style.DropdownItem} dropdown-item`}
              key={index}
            >
              <Div id={props.id + "icon" + index} className={style.Icon}>
                {item.icon}
              </Div>
              <Span id={props.id + "title" + index} className={`${style.Item} item`} value={item.menuTitle} />
            </Link>
          );
        })}
        <Div
          id={props.id + "boxitemlogout"}
          onClick={props.logoutFunc}
          className={`${style.DropdownItemLogout} dropdown-item-logout`}
        >
          <Div id={props.id + "iconlogout"} className={style.Icon}>
            {props.logoutIcon}
          </Div>
          <Span id={props.id + "titlelogout"} className={`${style.Item} item`}  value={props.logoutTitle} />
        </Div>
      </Div>
    </Div>
  );
};

export default DropDownProfile;
DropDownProfile.defaultProps = {
  logoutFunc: propsDefault.onClick,
  onClick: propsDefault.onClick,
  to: propsDefault.to,
  menu: propsDefault.list,
  id: propsDefault.stringEmpty,
};
