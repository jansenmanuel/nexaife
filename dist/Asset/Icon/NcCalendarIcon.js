"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcCalendarIcon = function NcCalendarIcon(_ref) {
  var size = _ref.size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#818181' : _ref$color;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.924 2.67956H20.2866V2.39473C20.2866 1.07604 19.2105 0 17.8075 0C16.4888 0 15.4127 1.07604 15.4127 2.39473V2.67956H14.8431V2.39473C14.8431 1.07604 13.767 0 12.364 0C11.0453 0 9.96923 1.07604 9.96923 2.39473V2.67956H9.39956V2.39473C9.39956 1.07604 8.33407 0 6.92044 0C5.60176 0 4.53626 1.07604 4.53626 2.39473V2.67956H1.07604C0.485275 2.67956 0 3.15429 0 3.74505V22.924C0 23.5147 0.485275 24 1.07604 24H22.924C23.5147 24 24 23.5147 24 22.924V3.74505C24 3.15429 23.5147 2.67956 22.924 2.67956ZM21.8479 9.94813V21.8479H2.15209V9.94813H21.8479ZM6.68835 2.67956V2.39473C6.68835 2.26813 6.79385 2.15209 7.01538 2.15209C7.14198 2.15209 7.25802 2.25758 7.25802 2.39473V2.67956H6.68835ZM12.1213 2.67956V2.39473C12.1213 2.26813 12.2268 2.15209 12.4484 2.15209C12.5749 2.15209 12.691 2.25758 12.691 2.39473V2.67956H12.1213ZM17.5648 2.67956V2.39473C17.5648 2.26813 17.6703 2.15209 17.8919 2.15209C18.0185 2.15209 18.1345 2.25758 18.1345 2.39473V2.67956H17.5648ZM5.61231 7.68C6.20308 7.68 6.68835 7.19473 6.68835 6.60396V4.8211H9.97978V6.60396C9.97978 7.19473 10.4651 7.68 11.0558 7.68C11.6466 7.68 12.1319 7.19473 12.1319 6.60396V4.8211H15.4233V6.60396C15.4233 7.19473 15.9086 7.68 16.4993 7.68C17.0901 7.68 17.5754 7.19473 17.5754 6.60396V4.8211H21.8585V7.79604H2.15209V4.8211H4.53626V6.60396C4.53626 7.19473 5.01099 7.68 5.61231 7.68Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.93899 12.0114C3.66418 12.0458 3.40082 12.1947 3.22906 12.4351C3.08021 12.6298 3.00006 12.8817 3.00006 13.1221C3.00006 13.1908 3.00006 13.2595 3.02296 13.3168C3.12601 13.8893 3.54967 14.2443 4.12219 14.2443H8.77105C9.12601 14.2443 9.46952 14.2443 9.82448 14.2443C10.1909 14.2443 10.523 14.0496 10.7176 13.7405C10.9237 13.4198 10.9581 13.0076 10.7978 12.6527C10.6146 12.229 10.2367 12 9.75578 12H4.2138C4.11074 12 4.01914 12 3.93899 12.0114Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.939 17.0114C13.6642 17.0458 13.4008 17.1947 13.2291 17.4351C13.0802 17.6298 13.0001 17.8817 13.0001 18.1221C13.0001 18.1908 13.0001 18.2595 13.023 18.3168C13.126 18.8893 13.5497 19.2443 14.1222 19.2443H18.771C19.126 19.2443 19.4695 19.2443 19.8245 19.2443C20.1909 19.2443 20.523 19.0496 20.7176 18.7405C20.9237 18.4198 20.9581 18.0076 20.7978 17.6527C20.6146 17.229 20.2367 17 19.7558 17H14.2138C14.1107 17 14.0191 17 13.939 17.0114Z",
    fill: color
  }));
};
var _default = NcCalendarIcon;
exports.default = _default;
NcCalendarIcon.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};