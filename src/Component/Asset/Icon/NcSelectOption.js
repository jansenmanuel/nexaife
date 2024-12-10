import React from 'react';

import { propsDefault } from '../../Enum/PropsDefault';

const NcSelectOption = (props) => {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.1 0.55L7.45053 10.45L0.900024 0.55H14.1Z" fill="#999999" />
    </svg>
  );
};

export default NcSelectOption;

NcSelectOption.defaultProps = {
  width: propsDefault.iconSize,
  height: propsDefault.iconSize,
};
