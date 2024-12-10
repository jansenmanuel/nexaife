import React from "react";
import { propsDefault } from "../../Enum/PropsDefault";

const NcChevronDown = ({size, color}) => {
  // const getHeight = () => {
  //   if (size.includes("vw")) {
  //     return size.split("vw")[0]/2
  //   }
  // }
  //   const height = `${getHeight()}vw`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9716 10.1113C14.4719 9.66691 14.908 9.26808 15.3569 8.88063C18.3712 6.20271 21.3982 3.51339 24.4125 0.835466C25.1693 0.163136 26.2211 0.174532 26.9009 0.835466C27.4268 1.34826 27.4781 2.11175 27.0291 2.67013C26.9393 2.78408 26.8367 2.88664 26.7213 2.9778C22.9118 6.36224 19.1151 9.73529 15.3056 13.1197C14.4847 13.849 13.5227 13.849 12.7018 13.1197C8.87945 9.72389 5.05712 6.33945 1.23478 2.94362C0.388227 2.19152 0.503666 1.07477 1.47849 0.550581C2.08134 0.231509 2.78681 0.265695 3.33835 0.641744C3.44096 0.721512 3.54358 0.80128 3.64619 0.892443C7.00677 3.87804 10.3673 6.85225 13.7151 9.83785C13.8049 9.91761 13.869 10.0088 13.9716 10.1113Z"
        fill={color ? color : "black" }
      />
    </svg>
  );
};

export default NcChevronDown;
NcChevronDown.defaultProps = {
  size: propsDefault.iconSize,
  color: propsDefault.iconColor,
};
