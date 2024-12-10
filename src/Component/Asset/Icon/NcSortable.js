import React from 'react';

import { propsDefault } from '../../Enum/PropsDefault';

const NcSortable = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 10 16"
      onClick={props.onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.82425 9H8.97575C9.7087 9 10.0752 10.0853 9.558 10.718L5.48225 15.7046C5.1603 16.0985 4.6397 16.0985 4.32118 15.7046L0.242 10.718C-0.275175 10.0853 0.0912996 9 0.82425 9Z"
        className={props.classDesc}
        fill={props.colorDesc}
      />
      <path
        className={props.classAsc}
        d="M9.558 5.28195L5.48225 0.29542C5.1603 -0.0984735 4.6397 -0.0984735 4.32118 0.29542L0.242 5.28195C-0.275175 5.9147 0.0912996 7 0.82425 7H8.97575C9.7087 7 10.0752 5.9147 9.558 5.28195Z"
        fill={props.colorAsc}
      />
    </svg>
  );
};

export default NcSortable;
NcSortable.defaultProps = {
  size: propsDefault.iconSize,
  colorAsc: propsDefault.iconColor,
  colorDesc: propsDefault.iconColor,
};
