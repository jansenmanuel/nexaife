"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sideBarIcontStyle = void 0;
var sideBarIcontStyle = function sideBarIcontStyle(style, sideBarCollapse) {
  if (sideBarCollapse === false) {
    return style.SideIcon;
  } else if (sideBarCollapse === true) {
    return style.SideIconCollapse;
  }
};
exports.sideBarIcontStyle = sideBarIcontStyle;