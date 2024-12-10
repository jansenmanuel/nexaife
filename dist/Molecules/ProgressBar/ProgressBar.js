"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProgressBar = _interopRequireDefault(require("../../Atomic/ProgressBar/ProgressBar"));
require("./ProgressBar.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PROGRESSBAR_V_2_0_2 = function PROGRESSBAR_V_2_0_2(_ref) {
  var titleBar = _ref.titleBar,
    valuePercent = _ref.valuePercent,
    size = _ref.size,
    noValuePercent = _ref.noValuePercent;
  return /*#__PURE__*/_react.default.createElement("div", null, titleBar ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      padding: '8px 0px'
    },
    className: "progressbar-customize-title-".concat(size)
  }, titleBar)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    valuePercent: valuePercent,
    size: size,
    noValuePercent: noValuePercent
  }));
};
var _default = PROGRESSBAR_V_2_0_2;
exports.default = _default;