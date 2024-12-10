import React from 'react';

import { Link } from 'react-router-dom';

import { nexIcon } from '../../';
import NcArrowRight from '../../Asset/Icon/NcArrowRight';
import Li from '../../Atomic/List/Li/Li';
import Ol from '../../Atomic/List/Ol/Ol';
import Nav from '../../Atomic/NavBar/Nav/Nav';
import { classNameDefault } from '../../Enum/classNameDefault';
import { idDefault } from '../../Enum/IdDefault';
import { propsDefault } from '../../Enum/PropsDefault';
import style from './Breadcrumb.module.css';

function Breadcrumb(props) {
  // nexIcon;
  return (
    <Nav id={props.id}>
      <Ol id={props.id + idDefault.orderList} className={`${style.Breadcrumb} breadcrumb`}>
        {props.list.map((item, index) => {
          return (
            <Li key={index} id={props.id + idDefault.list + index}>
              <Link to={item.to} id={props.id + idDefault.hyperlink + +index}>
                {item.value}
              </Link>
              <NcArrowRight
                id={props.id + idDefault.icon}
                className={`${style.IconBreadcrumb} ${classNameDefault.iconBreadcrumb}`}
                size={propsDefault.iconSizeSm}
              />
            </Li>
          );
        })}
        <Li id={props.id + idDefault.list + "default"} className={style.Default}>
          {props.default}
        </Li>
      </Ol>
    </Nav>
  );
}

export default Breadcrumb;

Breadcrumb.defaultProps = {
  id: "",
};
