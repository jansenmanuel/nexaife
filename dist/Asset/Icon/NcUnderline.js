"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var NcUnderline = function NcUnderline(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#424242",
    d: "M17.822 3v10.05c-.01 1.425-.498 2.6-1.444 3.507-.937.907-2.232 1.425-3.836 1.524l-.547.03c-1.754 0-3.158-.458-4.204-1.345-1.046-.886-1.584-2.131-1.604-3.685V3h2.51v10.011c0 .976.28 1.743.847 2.271.568.528 1.385.797 2.44.797 1.056 0 1.903-.259 2.461-.797.558-.528.837-1.295.837-2.261V3h2.54ZM4.813 21v-1.873h14.374V21H4.812Z"
  }));
};
var _default = NcUnderline;
exports.default = _default;