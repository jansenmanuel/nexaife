import React from "react";

import { propsDefault } from "../../Enum/PropsDefault";

const NcArrowRight = (props) => {
  return (
    <svg
      id={props.id}
      width={props.size}
      height={props.size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5002 20.0251C23.0002 19.4765 22.5644 18.9712 22.1157 18.4803C19.103 15.0877 16.0775 11.6806 13.0649 8.28788C12.3085 7.43611 12.3213 6.25228 13.0649 5.48712C13.6417 4.89521 14.5007 4.83746 15.1288 5.34275C15.257 5.44381 15.3724 5.55931 15.475 5.68924C19.2825 9.977 23.0772 14.2503 26.8846 18.5381C27.7051 19.462 27.7051 20.5448 26.8846 21.4688C23.0643 25.771 19.2568 30.0587 15.4365 34.3609C14.5904 35.3138 13.3341 35.1838 12.7444 34.0866C12.3854 33.4225 12.4239 32.6141 12.8469 31.9933C12.9367 31.8633 13.0264 31.7623 13.129 31.6468C16.4878 27.8643 19.8337 24.0819 23.1925 20.3138C23.2695 20.2128 23.3848 20.1406 23.5002 20.0251Z"
        fill={props.color}
      />
    </svg>
  );
};

export default NcArrowRight;
NcArrowRight.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
