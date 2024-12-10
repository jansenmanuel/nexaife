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
var Thead = _styledComponents.default.thead(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  position: ", ";\n  top: ", ";\n  z-index: ", ";\n"])), function (props) {
  return props.fixHeaderBg;
}, function (props) {
  return props.fixHeader ? "sticky" : "";
}, function (props) {
  return props.fixHeader ? "0" : "";
}, function (props) {
  return props.fixHeader ? "5" : "";
});
var _default = Thead;
exports.default = _default;
Thead.propTypes = {
  fixHeaderBg: _propTypes.default.string,
  fixHeader: _propTypes.default.bool
};
Thead.defaultProps = {
  fixHeaderBg: "",
  fixHeader: false
};