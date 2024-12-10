import React from 'react';

import { propsDefault } from '../../Enum/PropsDefault';

const NcList = props => {
  return (
    <svg
      onClick={props.onClick}
      id={props.id}
      width={props.size}
      height={props.size}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.color}
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  );
};

export default NcList;
NcList.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
