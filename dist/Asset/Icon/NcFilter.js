"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NcFilter(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M33.5936 11.25H6.40644C5.63596 11.25 5 11.8607 5 12.6007C5 13.3406 5.63596 13.9513 6.40644 13.9513H33.5936C34.364 13.9513 35 13.3406 35 12.6007C35 11.8607 34.3763 11.25 33.5936 11.25Z",
    fill: props.color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.8202 18.6493H10.1923C9.40217 18.6493 8.75 19.2601 8.75 20C8.75 20.7399 9.40217 21.3507 10.1923 21.3507H29.8077C30.5978 21.3507 31.25 20.7399 31.25 20C31.25 19.2601 30.6104 18.6493 29.8202 18.6493Z",
    fill: props.color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26.0233 26.0487H13.9896C13.1736 26.0487 12.5 26.6594 12.5 27.3993C12.5 28.1393 13.1736 28.75 13.9896 28.75H26.0104C26.8264 28.75 27.5 28.1393 27.5 27.3993C27.5 26.6594 26.8394 26.0487 26.0233 26.0487Z",
    fill: props.color
  }));
}
NcFilter.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};
var _default = NcFilter;
exports.default = _default;