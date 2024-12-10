import React from 'react';

import { Popover } from 'antd';
import { Link } from 'react-router-dom';

import Div from '../../../Atomic/Container/Div/Div';
// import Span from '../../../Atomic/Span/Span';
import style from './SideBarIcon.module.css';

function SideBarIcon(props) {
  return (
    <Link id={props.id} to={props.to} className={props.className} key={props.key}>
      <Popover
        id={props.id + "popover"}
        placement="right"
        overlayClassName={"overlay-styale-tooltip"}
        content={props.tooltip}
      >
        <Div id={props.id + "itemicon"} className={style.Icon} onClick={props.onClick}>
          {props.icon}
        </Div>
      </Popover>
    </Link>
  );
}

export default SideBarIcon;
