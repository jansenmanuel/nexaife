import React from 'react';

import { Link } from 'react-router-dom';

import Div from '../../Atomic/Container/Div/Div';
import Heading from '../../Atomic/Heading/Heading';
import { propsDefault } from '../../Enum/PropsDefault';
import style from './TitlePage.module.css';

const TitlePage = props => {
  return (
    <Div id={props.id} className={`${style.TitlePage} ${props.className}`} onClick={props.onClick}>
      {props.icon !== undefined ? (
        <Link id={props.id + "icon"} to={props.to} className={style.Link}>
          {props.icon}
        </Link>
      ) : (
        <></>
      )}
      <Heading
        id={props.id + "title"}
        className={style.Title}
        size={props.sizeText}
        value={props.title}
      />
    </Div>
  );
};

export default TitlePage;
TitlePage.defaultProps = {
  onClick: propsDefault.onClick,
  to: propsDefault.to,
};
