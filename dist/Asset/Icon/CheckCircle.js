"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckCircle = function CheckCircle(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    id: props.id,
    width: props.size,
    height: props.size,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.9925 1.04385e-05C13.965 -0.00748955 18.0075 4.02751 18 9C18 13.98 13.9875 17.9925 9.0075 18C4.03501 18.0075 -0.00748957 13.9725 1.04191e-05 8.9925C0.00751041 4.02001 4.02001 0.00751043 8.9925 1.04385e-05ZM9.0075 1.79251C5.05501 1.78501 1.80751 5.0175 1.79251 8.9925C1.77751 12.945 5.01 16.185 8.985 16.215C12.93 16.245 16.2075 12.975 16.215 9.0075C16.215 5.04001 12.975 1.80001 9.0075 1.79251Z",
    fill: "#57C22D"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.43 5.73748C14.3325 5.40748 14.0925 5.15248 13.7775 5.06248C13.365 4.93498 12.9975 5.03248 12.675 5.35498L7.51499 10.515C6.78749 9.77998 6.05249 9.05248 5.32499 8.32498C4.97249 7.97248 4.50749 7.88248 4.10999 8.07748C3.79499 8.23498 3.585 8.50498 3.5325 8.83498C3.4875 9.15748 3.59999 9.49498 3.85499 9.74998C4.82999 10.725 5.79749 11.7 6.77999 12.6675C6.89999 12.7875 7.04249 12.8775 7.19249 12.93C7.28999 12.9675 7.40999 12.99 7.53749 12.99C7.76999 12.99 8.03999 12.9075 8.30249 12.6375L14.0775 6.86248C14.1375 6.80248 14.1975 6.73498 14.2575 6.66748C14.4675 6.41248 14.5275 6.06748 14.43 5.73748Z",
    fill: "#57C22D"
  }));
};
var _default = CheckCircle;
exports.default = _default;
CheckCircle.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};