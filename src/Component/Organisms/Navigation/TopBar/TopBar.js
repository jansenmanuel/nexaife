import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Col from '../../../Atomic/Grid/Col/Col';
import { propsDefault } from '../../../Enum/PropsDefault';
import style from './TopBar.module.css';

const TopBar = props => {
  return (
    <Div id={props.id} className={`${style.TopBar} top-bar ${props.className}`}>
      <Col id={props.id + "topleft"} width={6}>
        {props.Logo}
      </Col>
      <Col id={props.id + "topright"} width={6}>
        {props.DropDownProfile}
      </Col>
    </Div>
  );
};

export default TopBar;
TopBar.defaultProps = {
  id: propsDefault.stringEmpty,
};
