"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcArrowUp = function NcArrowUp(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    onClick: props.onClick,
    id: props.id,
    width: props.size,
    height: props.size,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22ZM14.293 13.207C14.4816 13.3892 14.7342 13.49 14.9964 13.4877C15.2586 13.4854 15.5094 13.3802 15.6948 13.1948C15.8802 13.0094 15.9854 12.7586 15.9877 12.4964C15.99 12.2342 15.8892 11.9816 15.707 11.793L11.707 7.793C11.5195 7.60553 11.2652 7.50021 11 7.50021C10.7348 7.50021 10.4805 7.60553 10.293 7.793L6.293 11.793C6.11084 11.9816 6.01005 12.2342 6.01233 12.4964C6.0146 12.7586 6.11977 13.0094 6.30518 13.1948C6.49059 13.3802 6.7414 13.4854 7.0036 13.4877C7.2658 13.49 7.5184 13.3892 7.707 13.207L11 9.914L14.293 13.207Z",
    fill: props.color
  }));
};
var _default = NcArrowUp;
exports.default = _default;
NcArrowUp.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};