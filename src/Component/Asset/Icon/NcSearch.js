import React from 'react';

import { propsDefault } from '../../Enum/PropsDefault';

const NcSearch = props => {
  return (
    <svg
      id={props.id}
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.55249 17.105C10.4501 17.1046 12.2929 16.4694 13.7877 15.3004L18.4873 20L19.9989 18.4883L15.2993 13.7888C16.4689 12.2938 17.1045 10.4505 17.105 8.55249C17.105 3.83686 13.2681 0 8.55249 0C3.83686 0 0 3.83686 0 8.55249C0 13.2681 3.83686 17.105 8.55249 17.105ZM8.55249 2.13812C12.09 2.13812 14.9669 5.01497 14.9669 8.55249C14.9669 12.09 12.09 14.9669 8.55249 14.9669C5.01497 14.9669 2.13812 12.09 2.13812 8.55249C2.13812 5.01497 5.01497 2.13812 8.55249 2.13812Z"
        fill={props.color ? props.color : "black"}
      />
    </svg>
  );
};

export default NcSearch;
NcSearch.defaultProps = {
  size: propsDefault.iconSize,
  onClick:()=>{}
  // color: propsDefault.iconColor,
};