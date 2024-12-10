export const sideBarIcontStyle = (style,sideBarCollapse) => {
  if (sideBarCollapse === false) {
    return style.SideIcon;
  } else if (sideBarCollapse === true) {
    return style.SideIconCollapse;
  }
};