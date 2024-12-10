"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ContainerFluid = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  max-height: ", ";\n  min-height: ", ";\n  width: 100%;\n  overflow: hidden;\n  background: ", ";\n  margin-right: 0;\n  margin-left: 0;\n"])), function (props) {
  return props.height;
}, function (props) {
  return props.maxHeight;
}, function (props) {
  return props.minHeight;
}, function (props) {
  return props.bg;
});
var _default = ContainerFluid;
exports.default = _default;
ContainerFluid.propTypes = {
  height: _propTypes.default.string,
  maxHeight: _propTypes.default.string,
  minHeight: _propTypes.default.string,
  bg: _propTypes.default.string
};
ContainerFluid.defaultProps = {
  height: "",
  maxHeight: "",
  minHeight: "",
  bg: "#FFF"
};