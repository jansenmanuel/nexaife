"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../../Atomic/Container/Div/Div"));
var _SideBarItem = _interopRequireDefault(require("../../../../Atomic/SideBar/SideBarItem/SideBarItem"));
var _SideBarSide = _interopRequireDefault(require("../../../../Atomic/SideBar/SideBarSide/SideBarSide"));
var _PropsDefault = require("../../../../Enum/PropsDefault");
var _SideBarIcon = _interopRequireDefault(require("../../../../Molecules/SideBar/SideBarIcon/SideBarIcon"));
var _SideBarMenuIconModule = _interopRequireDefault(require("./SideBarMenuIcon.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SideBarMenuIcon = function SideBarMenuIcon(props) {
  var classActiveLevel1 = function classActiveLevel1(activeLevel1, type) {
    if (activeLevel1 === type) {
      return "".concat(_SideBarMenuIconModule.default.ItemIconActive, " item-icon-active");
    } else {
      return "".concat(_SideBarMenuIconModule.default.ItemIcon, " item-icon");
    }
  };
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_SideBarMenuIconModule.default.SideIcon, " side-icon")
  }, /*#__PURE__*/_react.default.createElement(_SideBarSide.default, {
    id: props.id + "container"
  }, props.menu.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_SideBarItem.default, {
      className: "".concat(classActiveLevel1(props.activeLevel1, item.type)),
      id: props.id + "item" + index,
      key: index
    }, /*#__PURE__*/_react.default.createElement(_SideBarIcon.default, {
      id: props.id + "itemicon" + index,
      icon: item.icon,
      tooltip: item.tooltip,
      onClick: item.onClick,
      activeLevel1: props.activeLevel1,
      to: item.to !== undefined ? item.to : "#"
    }));
  })));
};
var _default = SideBarMenuIcon;
exports.default = _default;
SideBarMenuIcon.defaultProps = {
  menu: _PropsDefault.propsDefault.list,
  id: _PropsDefault.propsDefault.stringEmpty
};