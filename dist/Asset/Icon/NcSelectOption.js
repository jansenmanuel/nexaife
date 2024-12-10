"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcSelectOption = function NcSelectOption(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: props.className,
    width: props.width,
    height: props.height,
    viewBox: "0 0 15 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.1 0.55L7.45053 10.45L0.900024 0.55H14.1Z",
    fill: "#999999"
  }));
};
var _default = NcSelectOption;
exports.default = _default;
NcSelectOption.defaultProps = {
  width: _PropsDefault.propsDefault.iconSize,
  height: _PropsDefault.propsDefault.iconSize
};