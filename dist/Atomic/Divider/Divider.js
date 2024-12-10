"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DividerModule = _interopRequireDefault(require("./Divider.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Divider = function Divider(_ref) {
  var size = _ref.size;
  var dividerClass = "".concat(_DividerModule.default.divider, " ").concat(size ? _DividerModule.default[size] : '');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: dividerClass
  });
};
Divider.propTypes = {
  size: _propTypes.default.oneOf(['sm', 'md', 'lg'])
};
Divider.defaultProps = {
  size: 'sm'
};
var _default = Divider;
exports.default = _default;