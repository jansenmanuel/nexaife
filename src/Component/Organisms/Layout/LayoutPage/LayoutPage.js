import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import { contentStyle } from '../../../Utils/LayoutPage/LayoutPageContentStyle';
import { sidebarStyle } from '../../../Utils/LayoutPage/LayoutPageSideBarStyle';
import style from './LayoutPage.module.css';

const LayoutPage = props => {
  return (
    <>
      {props.topBar}
      <Div id={props.idContentBotton} className={style.Container}>
        <Div id={props.idSide} className={sidebarStyle(props.collapse, props.sideBarType)}>
          {props.sideBar}
        </Div>
        <Div id={props.idContent} className={`${contentStyle(props.collapse, props.sideBarType)} content`}>
          {props.content}
        </Div>
      </Div>
    </>
  );
};

export default LayoutPage;
