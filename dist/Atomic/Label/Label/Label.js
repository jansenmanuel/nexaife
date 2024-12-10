"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Label = function Label(props) {
  return /*#__PURE__*/_react.default.createElement("label", {
    id: props.id,
    className: "".concat(_LabelModule.default.Label, " label ").concat(props.className)
  }, props.value);
};
var _default = Label;
exports.default = _default;
Label.propTypes = {
  value: _propTypes.default.string
};
Label.defaultProps = {
  value: null
};