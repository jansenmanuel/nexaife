import React from "react";

import { propsDefault } from "../../Enum/PropsDefault";

const NcClose = (props) => {
  return (
    <svg
      id={props.id}
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1840_49242)">
        <path
          d="M11.967 13.6305C11.9189 13.6947 7.32208 18.3342 5.05977 20.5978C4.69074 20.967 4.26555 21.0955 3.77619 20.9269C2.98999 20.654 2.74932 19.6827 3.29484 19.0567C3.34298 19.0005 3.39111 18.9523 3.43925 18.9041C5.68551 16.6566 10.2904 12.0653 10.3786 11.993C10.2984 11.9288 5.66145 7.31339 3.39913 5.04982C2.85361 4.504 2.86966 3.72539 3.43925 3.25984C3.87245 2.89863 4.51425 2.92271 4.94745 3.308C5.01163 3.36418 5.06779 3.42037 5.12395 3.47656C7.36219 5.71605 11.9269 10.3074 11.967 10.3556C11.9911 10.3636 16.6922 5.65986 18.9626 3.38826C19.4198 2.93073 20.0616 2.87455 20.535 3.23575C21.0644 3.64512 21.1527 4.36754 20.7435 4.88928C20.6874 4.96153 20.6152 5.02574 20.551 5.09798C18.3047 7.3455 13.6919 11.9368 13.6116 11.993C13.6999 12.0653 18.3448 16.6968 20.6152 18.9684C21.1206 19.474 21.1206 20.1965 20.6392 20.6781C20.2141 21.0955 19.4439 21.1115 18.9786 20.6379C18.4331 20.0761 17.8715 19.5222 17.318 18.9684C15.5851 17.2426 12.0473 13.7108 11.967 13.6305Z"
          fill="#424242"
        />
      </g>
      <defs>
        <clipPath id="clip0_1840_49242">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(3 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NcClose;
NcClose.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
