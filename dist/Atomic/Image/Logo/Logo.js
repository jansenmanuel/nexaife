"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Logo = function Logo(props) {
  return /*#__PURE__*/_react.default.createElement("img", {
    id: props.id,
    className: props.className,
    src: props.src,
    width: props.width,
    alt: props.alt,
    onClick: props.onClick
  });
};
var _default = Logo;
exports.default = _default;
Logo.propTypes = {
  onClick: _propTypes.default.func,
  alt: _propTypes.default.string,
  width: _propTypes.default.string
};
Logo.defaultProps = {
  className: undefined,
  onClick: undefined,
  alt: null,
  width: null
};