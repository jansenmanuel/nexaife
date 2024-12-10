"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
require("./ProgressBar.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ProgressBarAtomic = function ProgressBarAtomic(_ref) {
  var valuePercent = _ref.valuePercent,
    size = _ref.size,
    noValuePercent = _ref.noValuePercent;
  // const mainColors = "--main-color"
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "customize-size-".concat(size, " ").concat(noValuePercent ? 'no-value-percent' : '')
  }, /*#__PURE__*/_react.default.createElement(_antd.Progress, {
    percent: valuePercent
    // size="small"
    // size={[300, 50]}
    // strokeColor={{
    //     from: '#13A1DC',
    //     to: '#13A1DC'
    // }}
  }));
};

ProgressBarAtomic.defaultProps = {
  valuePercent: 0,
  size: "sm"
};
var _default = ProgressBarAtomic;
exports.default = _default;