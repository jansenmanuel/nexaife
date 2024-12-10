"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcHome = function NcHome(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.79917 20C1.56281 20 1.32878 19.9559 1.11042 19.8701C0.892062 19.7843 0.693646 19.6586 0.526554 19.5002C0.359463 19.3417 0.226948 19.1536 0.136577 18.9465C0.0462058 18.7395 -0.000236872 18.5176 -0.000121405 18.2935V7.16776C-0.000353644 6.91175 0.0602214 6.65897 0.177082 6.42818C0.293943 6.19738 0.464097 5.99451 0.674948 5.83456L7.87651 0.374215C8.19552 0.132015 8.59203 0 9.00074 0C9.40944 0 9.80595 0.132015 10.125 0.374215L17.3248 5.83456C17.5357 5.99451 17.7058 6.19738 17.8227 6.42818C17.9395 6.65897 18.0001 6.91175 17.9999 7.16776V18.2927C18 18.5168 17.9535 18.7386 17.8631 18.9456C17.7728 19.1526 17.6402 19.3408 17.4731 19.4993C17.3061 19.6577 17.1077 19.7835 16.8893 19.8693C16.671 19.9551 16.4369 19.9992 16.2006 19.9992L1.79917 20ZM1.79917 7.16776V18.2927H16.2006V7.16776L8.99988 1.70741L1.79917 7.16776ZM4.31044 12.2198C4.31044 11.3404 4.58554 10.4808 5.10091 9.74963C5.61629 9.01844 6.3488 8.44852 7.20584 8.11199C8.06288 7.77546 9.00595 7.68746 9.91578 7.85902C10.8256 8.03058 11.6613 8.45403 12.3173 9.07586C12.9732 9.69768 13.4199 10.4899 13.6009 11.3524C13.7819 12.2149 13.689 13.1089 13.334 13.9213C12.979 14.7338 12.3779 15.4282 11.6065 15.9168C10.8352 16.4054 9.92839 16.6661 9.00074 16.6661C8.38454 16.6667 7.77428 16.5521 7.20482 16.329C6.63537 16.1058 6.11791 15.7784 5.68199 15.3656C5.24607 14.9527 4.90025 14.4625 4.66431 13.9228C4.42837 13.3832 4.30696 12.8048 4.30696 12.2206L4.31044 12.2198ZM6.06842 12.2198C6.06825 12.7696 6.24011 13.3071 6.56221 13.7644C6.88431 14.2216 7.34217 14.578 7.87796 14.7886C8.41376 14.9991 9.00339 15.0543 9.57226 14.9471C10.1411 14.84 10.6637 14.5753 11.0739 14.1866C11.4841 13.7979 11.7634 13.3025 11.8767 12.7633C11.9899 12.224 11.9318 11.6651 11.7099 11.1571C11.488 10.6491 11.1122 10.2149 10.63 9.90942C10.1477 9.60394 9.58073 9.44092 9.00074 9.44092C8.22272 9.44092 7.47654 9.73364 6.92606 10.2549C6.37559 10.7761 6.06587 11.4831 6.06494 12.2206L6.06842 12.2198Z",
    fill: props.color
  }));
};
var _default = NcHome;
exports.default = _default;
NcHome.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};