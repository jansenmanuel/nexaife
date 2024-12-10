"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarStyle = void 0;
var _LayoutPageModule = _interopRequireDefault(require("../../Organisms/Layout/LayoutPage/LayoutPage.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var sidebarStyle = function sidebarStyle(collapse, menu) {
  var contentClass = _LayoutPageModule.default.SideBarCollapseIcon;
  if (collapse && menu !== undefined) {
    contentClass = _LayoutPageModule.default.SideBar;
  }
  if (!collapse && menu === undefined) {
    contentClass = _LayoutPageModule.default.SideBarCollapse;
  }
  if (!collapse && menu !== undefined) {
    contentClass = _LayoutPageModule.default.SideBarCollapse;
  }
  return contentClass;
};
exports.sidebarStyle = sidebarStyle;