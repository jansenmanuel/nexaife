import style from "../../Atomic/Button/Button.module.scss";
import _ from "lodash";

export const buttonSizeClass = (size, type) => {
  let sizeClass = style.ButtonMd;
  if (type.toLowerCase() === "link") {
    sizeClass = style[`Button${_.startCase(size)}Link`];
  } else {
    sizeClass = style[`Button${_.startCase(size)}`]
    // if (size === "xs") {
    //   sizeClass = style.ButtonXs;
    // } else if (size === "sm") {
    //   sizeClass = style.ButtonSm;
    // } else if (size === "lg") {
    //   sizeClass = style.ButtonLg;
    // } else if (size === "xl") {
    //   sizeClass = style.ButtonXl;
    // } else if (size === "xxl") {
    //   sizeClass = style.ButtonXxl;
    // }
  }
  return sizeClass;
};

export const buttonSizeOnlyIcon = (size) => {
  let btnSizeIcon = `Button${_.startCase(size)}OnlyIcon`;
  return btnSizeIcon;
};

export const buttonSizeSuffPreffIcon = (size, type) => {
  let btnSizeIcon = type === "link" ? `Button${_.startCase(size)}SuffPreffIconLink` : `Button${_.startCase(size)}SuffPreffIcon`;
  return btnSizeIcon;
};

export const buttonSizeType = (size) => {
  let sizeType = "buttonGroupXs";
  if (size === "xs") {
    sizeType = "buttonGroupXs";
  } else if (size === "sm") {
    sizeType = "buttonGroupSm";
  } else if (size === "md") {
    sizeType = "buttonGroupMd";
  } else if (size === "lg") {
    sizeType = "buttonGroupLg";
  } else if (size === "xl") {
    sizeType = "buttonGroupXl";
  } else if (size === "xxl") {
    sizeType = "buttonGroupXxl";
  }
  return sizeType;
};


export const ButtonContainerSize = (size) => {
  let style = "ButtonContainerLinkXs";
  if (size === "sm") {
    style = "ButtonContainerLinkSm"
  } else if (size === "md") {
    style = "ButtonContainerLinkMd"
  } else if (size === "lg") {
    style = "ButtonContainerLinkLg"
  } else if (size === "xl") {
    style = "ButtonContainerLinkXl"
  } else if (size === "xxl") {
    style = "ButtonContainerLinkXxl"
  }

  return style;
}

export const renderArrowSize = (size) => {
  switch (size) {
    case "s":
      return "18px";
    case "m":
      return "20px";
    case "l":
      return "26px";
    case "xl":
      return "40px";
    default:
      return "26px";
  }
};