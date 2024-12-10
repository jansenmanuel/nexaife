"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MoreIcon = function MoreIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clip0_8819_30488)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 4C11.5 4.82843 10.8284 5.5 10 5.5C9.17157 5.5 8.5 4.82843 8.5 4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4Z",
    fill: props.color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z",
    fill: props.color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 16C11.5 16.8284 10.8284 17.5 10 17.5C9.17157 17.5 8.5 16.8284 8.5 16C8.5 15.1716 9.17157 14.5 10 14.5C10.8284 14.5 11.5 15.1716 11.5 16Z",
    fill: props.color
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_8819_30488"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "15",
    height: "15",
    fill: "white",
    transform: "translate(2.5 2.5)"
  }))));
};
MoreIcon.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};
var _default = MoreIcon;
exports.default = _default;