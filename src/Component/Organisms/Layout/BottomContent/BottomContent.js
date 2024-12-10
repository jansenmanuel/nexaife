import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Flex from '../../../Atomic/Container/Flex/Flex';
import style from './BottomContent.module.css';

const BottomContent = (props) => {
  return (
    <Flex id={props.id} className={`${props.className} ${style.Container}`}>
      <Div id={props.id} className={`${props.classSidebar} ${style.ContentLeft}`}>
        {props.sideBar}
      </Div>
      <Div id={props.id} className={`${props.classContent} `}>
        {props.content}
      </Div>
    </Flex>
  );
};

export default BottomContent;
