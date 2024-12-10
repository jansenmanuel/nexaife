"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var NcQuote = function NcQuote(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#424242",
    d: "M20.46 16.804c0 1.85-1.27 3.21-3.1 3.21-2.02 0-3.77-1.84-3.77-4.97 0-4.83 2.6-8.94 6.37-11.06L21 5.554c-2.94 1.95-4.82 4.93-5.05 8.67.49-.32 1-.51 1.54-.51 1.75 0 2.97 1.31 2.97 3.09ZM9.86 16.804c0 1.85-1.27 3.21-3.1 3.21-2.01 0-3.76-1.84-3.76-4.97 0-4.83 2.6-8.94 6.36-11.06l1.04 1.57c-2.94 1.95-4.83 4.93-5.05 8.68.48-.33 1-.52 1.54-.52 1.76 0 2.97 1.31 2.97 3.09Z"
  }));
};
var _default = NcQuote;
exports.default = _default;