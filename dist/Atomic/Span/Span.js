"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Span = function Span(props) {
  return /*#__PURE__*/_react.default.createElement("span", {
    id: props.id,
    className: props.className,
    onClick: props.onClick
  }, props.value);
};
var _default = Span;
exports.default = _default;
Span.propTypes = {
  onClick: _propTypes.default.func
};
Span.defaultProps = {
  onClick: undefined,
  value: ""
};