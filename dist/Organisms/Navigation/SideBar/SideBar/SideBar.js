"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../../");
var _Div = _interopRequireDefault(require("../../../../Atomic/Container/Div/Div"));
var _Flex = _interopRequireDefault(require("../../../../Atomic/Container/Flex/Flex"));
var _PropsDefault = require("../../../../Enum/PropsDefault");
var _styleDefault = require("../../../../Enum/styleDefault");
var _SideBarMenuIcon = _interopRequireDefault(require("../SideBarMenuIcon/SideBarMenuIcon"));
var _SideBarModule = _interopRequireDefault(require("./SideBar.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SideBar(props) {
  var collapseSidemenu = function collapseSidemenu(sideMenu) {
    if (sideMenu === undefined || sideMenu === null) {
      return _SideBarModule.default.SideMenuCollapse;
    } else {
      return _SideBarModule.default.SideMenu;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    height: _styleDefault.styleDefault.fullVh
  }, /*#__PURE__*/_react.default.createElement(_Flex.default, {
    id: props.id + "container",
    className: _SideBarModule.default.SideBarBox
  }, /*#__PURE__*/_react.default.createElement(_SideBarMenuIcon.default, {
    id: props.id + "icon",
    collapse: true,
    className: "".concat(_SideBarModule.default.SideIcon, " side-icon"),
    menu: props.sidebarMenu,
    activeLevel1: props.activeLevel1
  }), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "boxmenu",
    className: "".concat(collapseSidemenu(props.sideMenu), " side-menu")
  }, /*#__PURE__*/_react.default.createElement(_.SideBarMenu, {
    activeLevel2: props.activeLevel2,
    activeLevel3: props.activeLevel3,
    id: props.id + "menu",
    sideMenu: props.sidebarByType
  }))));
}
var _default = SideBar;
exports.default = _default;
SideBar.defaultProps = {
  id: _PropsDefault.propsDefault.stringEmpty
};