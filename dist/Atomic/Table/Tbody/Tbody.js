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
var Tbody = _styledComponents.default.tbody(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n"])), function (props) {
  return props.height;
});
var _default = Tbody;
exports.default = _default;
Tbody.propTypes = {
  height: _propTypes.default.string
};
Tbody.defaultProps = {
  height: "0px"
};