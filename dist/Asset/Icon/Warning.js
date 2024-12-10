"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Warning = function Warning(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    onClick: props.onClick,
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
    fill: "#F8AC30"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.2838 5.7037C10.2088 6.9487 10.1338 8.1787 10.0588 9.4012C10.0438 9.6412 10.0513 9.8887 10.0363 10.1287C10.0213 10.4512 9.8938 10.7137 9.5863 10.8562C9.3013 10.9837 9.0388 10.9462 8.7913 10.7587C8.5888 10.6012 8.5213 10.3762 8.5063 10.1362C8.4388 8.9287 8.3713 7.7212 8.3038 6.5137C8.2813 6.1537 8.2213 5.7787 8.2663 5.42621C8.3338 4.82621 8.8063 4.45871 9.3388 4.50371C9.9163 4.54121 10.2838 4.96871 10.2838 5.5837C10.2838 5.62871 10.2838 5.6737 10.2838 5.7037Z",
    fill: "#F8AC30"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.27379 12.6337C8.27379 12.0787 8.73129 11.6212 9.28629 11.6212C9.84129 11.6212 10.2763 12.0787 10.2688 12.6562C10.2613 13.1962 9.81129 13.6387 9.27129 13.6387C8.72379 13.6312 8.27379 13.1887 8.27379 12.6337Z",
    fill: props.color
  }));
};
var _default = Warning;
exports.default = _default;
Warning.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: "#F8AC30"
};