"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Span = _interopRequireDefault(require("../../../Atomic/Span/Span"));
var _PropsDefault = require("../../../Enum/PropsDefault");
var _DropDownProfileModule = _interopRequireDefault(require("./DropDownProfile.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DropDownProfile = function DropDownProfile(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "container",
    className: _DropDownProfileModule.default.Dropdown
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "main",
    className: "".concat(_DropDownProfileModule.default.DropdownButton, " dropdown-button"),
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "mainicon",
    className: _DropDownProfileModule.default.Icon
  }, props.titleIcon), /*#__PURE__*/_react.default.createElement(_Span.default, {
    id: props.id + "maintitle",
    className: "".concat(_DropDownProfileModule.default.Item, " ").concat(_DropDownProfileModule.default.HideItem),
    value: props.title
  })), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "dropdown-menu"
  }, props.menu.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      id: props.id + "boxitem" + index,
      to: item.to !== undefined ? item.to : _PropsDefault.propsDefault.to,
      className: "".concat(_DropDownProfileModule.default.DropdownItem, " dropdown-item"),
      key: index
    }, /*#__PURE__*/_react.default.createElement(_Div.default, {
      id: props.id + "icon" + index,
      className: _DropDownProfileModule.default.Icon
    }, item.icon), /*#__PURE__*/_react.default.createElement(_Span.default, {
      id: props.id + "title" + index,
      className: "".concat(_DropDownProfileModule.default.Item, " item"),
      value: item.menuTitle
    }));
  }), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "boxitemlogout",
    onClick: props.logoutFunc,
    className: "".concat(_DropDownProfileModule.default.DropdownItemLogout, " dropdown-item-logout")
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "iconlogout",
    className: _DropDownProfileModule.default.Icon
  }, props.logoutIcon), /*#__PURE__*/_react.default.createElement(_Span.default, {
    id: props.id + "titlelogout",
    className: "".concat(_DropDownProfileModule.default.Item, " item"),
    value: props.logoutTitle
  }))));
};
var _default = DropDownProfile;
exports.default = _default;
DropDownProfile.defaultProps = {
  logoutFunc: _PropsDefault.propsDefault.onClick,
  onClick: _PropsDefault.propsDefault.onClick,
  to: _PropsDefault.propsDefault.to,
  menu: _PropsDefault.propsDefault.list,
  id: _PropsDefault.propsDefault.stringEmpty
};