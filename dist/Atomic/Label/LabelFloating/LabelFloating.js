"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelFloatingModule = _interopRequireDefault(require("./LabelFloating.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LabelFloating = function LabelFloating(props) {
  var className = props.className,
    value = props.value;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(_LabelFloatingModule.default.Label, " ").concat(className)
  }, value);
};
var _default = LabelFloating;
exports.default = _default;
LabelFloating.propTypes = {
  value: _propTypes.default.string
};
LabelFloating.defaultProps = {
  value: null
};