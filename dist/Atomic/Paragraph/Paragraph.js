"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/_react.default.createElement("p", {
    id: props.id,
    className: props.className,
    onClick: props.onClick
  }, props.value);
};
var _default = Paragraph;
exports.default = _default;
Paragraph.propTypes = {
  onClick: _propTypes.default.func
};
Paragraph.defaultProps = {
  onClick: undefined
};