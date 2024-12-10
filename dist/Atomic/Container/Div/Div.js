"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Div = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // height: ", ";\n  // float: ", ";\n  // overflow-x: ", ";\n  // overflow-y: ", ";\n  // margin-top: ", ";\n"])), function (props) {
  return props.height;
}, function (props) {
  return props.float;
}, function (props) {
  return props.overflowX;
}, function (props) {
  return props.overflowY;
}, function (props) {
  return props.mTop;
});
var _default = Div; // Div.propTypes = {
//   height: PropTypes.string,
//   float: PropTypes.string,
//   overflowX: PropTypes.string,
//   overflowY: PropTypes.string,
//   mTop: PropTypes.string,
// };
// Div.defaultProps = {
//   height: "",
//   float: "",
//   overflowX: "none",
//   overflowY: "none",
//   mTop: "",
// };
exports.default = _default;