import React from "react";

import { propsDefault } from "../../Enum/PropsDefault";

const NcCheck = ({ id, size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9252_41515)">
        <path
          d="M13.9615 4.00369C13.8878 3.76816 13.7006 3.59008 13.4624 3.52689C13.1845 3.45221 12.935 3.53263 12.6968 3.77391L5.85115 10.7077C5.84548 10.7134 5.83981 10.7192 5.83414 10.7249L3.27624 8.12834C3.02102 7.87557 2.70908 7.80664 2.41983 7.94451C2.20431 8.04791 2.05118 8.24897 2.01148 8.4845C1.96611 8.73152 2.05685 8.98429 2.25536 9.1796C2.92461 9.84598 3.58818 10.5238 4.25176 11.196L5.27832 12.2357C5.32369 12.2817 5.39742 12.3506 5.48817 12.4023C5.6016 12.4655 5.7207 12.5 5.83981 12.5C6.03831 12.5 6.23682 12.4081 6.42398 12.2185L13.7233 4.81943C13.763 4.77922 13.8027 4.73326 13.8424 4.6873C13.9956 4.49199 14.0409 4.23922 13.9615 4.00369Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9252_41515">
          <rect
            width="12"
            height="12"
            fill={color}
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NcCheck;
NcCheck.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
