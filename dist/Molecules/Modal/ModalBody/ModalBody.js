"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MBody = _interopRequireDefault(require("../../../Atomic/Modal/MBody/MBody"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ModalBody = function ModalBody(props) {
  return /*#__PURE__*/_react.default.createElement(_MBody.default, {
    id: props.id,
    width: props.width,
    className: props.className
  }, props.message);
};
var _default = ModalBody;
exports.default = _default;
ModalBody.defaultProps = {
  id: ""
};