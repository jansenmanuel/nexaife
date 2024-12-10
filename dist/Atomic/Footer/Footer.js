"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FooterModule = _interopRequireDefault(require("./Footer.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Footer = function Footer(props) {
  var className = props.className,
    onClick = props.onClick,
    value = props.value;
  return /*#__PURE__*/_react.default.createElement("footer", {
    id: props.id,
    className: "".concat(_FooterModule.default.Footer, " ").concat(className),
    onClick: onClick
  }, value);
};
var _default = Footer;
exports.default = _default;
Footer.propTypes = {
  onClick: _propTypes.default.func
};
Footer.defaultProps = {
  className: undefined,
  onClick: undefined,
  value: null
};