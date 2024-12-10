"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcArrowLeft = function NcArrowLeft(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.00402 4.99302L5.04249 8.2169C5.10828 8.28669 5.16046 8.36954 5.19607 8.46073C5.23167 8.55192 5.25 8.64966 5.25 8.74836C5.25 8.84707 5.23167 8.94481 5.19607 9.036C5.16046 9.12719 5.10828 9.21004 5.04249 9.27983C4.97671 9.34963 4.89863 9.405 4.81268 9.44278C4.72674 9.48056 4.63462 9.5 4.54159 9.5C4.44856 9.5 4.35644 9.48056 4.2705 9.44278C4.18455 9.405 4.10647 9.34963 4.04069 9.27983L0 4.99302L4.02712 0.720174C4.09289 0.650371 4.17098 0.595 4.25693 0.557222C4.34287 0.519444 4.43499 0.5 4.52802 0.5C4.62105 0.5 4.71316 0.519444 4.79911 0.557222C4.88505 0.595 4.96314 0.650371 5.02892 0.720174C5.0947 0.789961 5.14689 0.872815 5.1825 0.964004C5.2181 1.05519 5.23643 1.15293 5.23643 1.25164C5.23643 1.35034 5.2181 1.44808 5.1825 1.53927C5.14689 1.63046 5.0947 1.71331 5.02892 1.7831L2.00402 4.99302Z",
    fill: props.color
  }));
};
var _default = NcArrowLeft;
exports.default = _default;
NcArrowLeft.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};