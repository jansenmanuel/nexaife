"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MFooter = _interopRequireDefault(require("../../../Atomic/Modal/MFooter/MFooter"));
var _ModalFooterModule = _interopRequireDefault(require("./ModalFooter.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalFooter(props) {
  return /*#__PURE__*/_react.default.createElement(_MFooter.default, {
    id: props.id,
    className: "".concat(_ModalFooterModule.default.ModalFooter, " ").concat(props.className)
  }, props.content);
}
var _default = ModalFooter;
exports.default = _default;
ModalFooter.defaultProps = {
  id: ""
};