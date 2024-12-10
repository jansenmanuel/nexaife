import style from '../../Organisms/Layout/LayoutPage/LayoutPage.module.css';

export const sidebarStyle = (collapse, menu) => {
  let contentClass = style.SideBarCollapseIcon;
  if (collapse && menu !== undefined) {
    contentClass = style.SideBar;
  }
  if (!collapse && menu === undefined) {
    contentClass = style.SideBarCollapse;
  }
  if (!collapse && menu !== undefined) {
    contentClass = style.SideBarCollapse;
  }
  return contentClass;
};
