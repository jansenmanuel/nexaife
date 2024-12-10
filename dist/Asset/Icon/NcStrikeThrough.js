"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var NcStrikeThrough = function NcStrikeThrough(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#424242",
    d: "M19.211 13.94h-1.67c.36.65.54 1.41.54 2.26 0 1.45-.57 2.63-1.71 3.51-1.11.86-2.62 1.29-4.46 1.29-1.2 0-2.34-.23-3.38-.69-1.05-.46-1.87-1.11-2.44-1.92-.59-.82-.88-1.76-.88-2.81v-.24h2.75v.24c0 .97.35 1.71 1.05 2.26.72.56 1.69.84 2.9.84 1.12 0 1.99-.22 2.57-.67.58-.44.86-1.02.86-1.79s-.25-1.34-.79-1.74c-.23-.18-.54-.36-.93-.54h-8.84v-1.87h3.84c-.59-.31-1.08-.64-1.47-1-.93-.86-1.39-1.92-1.39-3.17 0-1.41.56-2.6 1.69-3.52 1.12-.91 2.58-1.38 4.34-1.38 1.21 0 2.3.25 3.24.71.95.47 1.7 1.13 2.23 1.96.52.84.79 1.75.79 2.74v.25h-2.75v-.25c0-.97-.29-1.71-.89-2.25-.62-.55-1.49-.83-2.62-.83-1.04 0-1.87.23-2.44.68-.57.45-.84 1.05-.84 1.85 0 .62.26 1.14.8 1.58.55.45 1.54.88 2.92 1.27 1.43.4 2.57.86 3.38 1.34.01.01.02.01.03.02h3.57v1.87Z"
  }));
};
var _default = NcStrikeThrough;
exports.default = _default;