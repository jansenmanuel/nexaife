import { propsDefault } from "../../Enum/PropsDefault";
import React from "react";

const NcChevronUp = ({ color, size }) => {
  // const getHeight = () => {
  //   if (size.includes("vw")) {
  //     return size.split("vw")[0] / 2;
  //   }
  // };
  // const height = `${getHeight()}vw`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9649 3.88874C14.4654 4.33317 14.9017 4.73201 15.3508 5.11945C18.3665 7.79737 21.3951 10.4867 24.4108 13.1646C25.1679 13.8369 26.2202 13.8256 26.9004 13.1646C27.4265 12.6518 27.4778 11.8883 27.0287 11.33C26.9389 11.216 26.8362 11.1134 26.7207 11.0223C22.9094 7.63784 19.1108 4.26479 15.2995 0.880354C14.4782 0.151047 13.5157 0.151047 12.6944 0.880354C8.87027 4.27619 5.05893 7.66063 1.23475 11.0565C0.387788 11.8086 0.503282 12.9253 1.47857 13.4495C2.06888 13.7686 2.78752 13.7344 3.33933 13.3583C3.45483 13.2786 3.54466 13.1988 3.64732 13.1076C7.00951 10.122 10.3717 7.14783 13.7211 4.16223C13.7981 4.09386 13.8622 4.0027 13.9649 3.88874Z"
        fill={color ? color : "black"}
      />
    </svg>
  );
};

export default NcChevronUp;
NcChevronUp.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
