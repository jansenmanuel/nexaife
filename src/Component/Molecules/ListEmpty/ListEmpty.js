import React from 'react';

import Div from '../../Atomic/Container/Div/Div';
import Heading from '../../Atomic/Heading/Heading';
import style from './ListEmpty.module.css';

const ListEmpty = (props) => {
  return (
    <Div id={props.id} className={`${style.Text} ${props.className}`}>
      <Heading id={props.id} size={6} color="secondary" value={props.value} />
    </Div>
  );
};

export default ListEmpty;
