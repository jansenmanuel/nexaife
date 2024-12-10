"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _SideBarItem = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarItem/SideBarItem"));
var _SideBarSide = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarSide/SideBarSide"));
var _SideBarTitle = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarTitle/SideBarTitle"));
var _PropsDefault = require("../../../Enum/PropsDefault");
var _NestedMenu = _interopRequireDefault(require("./NestedMenu"));
var _SideBarMenuModule = _interopRequireDefault(require("./SideBarMenu.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SideBarMenu(props) {
  var sideMenu = props.sideMenu;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sideMenu === undefined ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    id: props.id + "mainlink",
    to: sideMenu.to
  }, /*#__PURE__*/_react.default.createElement(_SideBarTitle.default, {
    id: props.id + "maintitle",
    className: "".concat(_SideBarMenuModule.default.Title, " side-title"),
    value: sideMenu.title
  })), /*#__PURE__*/_react.default.createElement(_SideBarSide.default, {
    id: props.id + "boxmenu",
    className: _SideBarMenuModule.default.SideMenuContainer
  }, sideMenu.submenu.map(function (menu, index) {
    return /*#__PURE__*/_react.default.createElement(_SideBarItem.default, {
      id: props.id + "itemlevel1" + index,
      key: index
    }, /*#__PURE__*/_react.default.createElement(_NestedMenu.default, {
      type: menu.type,
      activeLevel2: props.activeLevel2,
      activeLevel3: props.activeLevel3,
      handleActiveLevel2: menu.handleActiveLevel2,
      id: props.id + "itemlevel2" + index,
      menu: menu
    }));
  }))));
}
var _default = SideBarMenu;
exports.default = _default;
SideBarMenu.defaultProps = {
  id: _PropsDefault.propsDefault.stringEmpty
};