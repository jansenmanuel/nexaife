"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Td = _styledComponents.default.td(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  text-align: ", ";\n  padding: ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.textAlign;
}, function (props) {
  return props.padding;
});
var _default = Td;
exports.default = _default;
Td.defaultProps = {
  width: "50px",
  textAlign: "left",
  padding: "15px 5px"
};