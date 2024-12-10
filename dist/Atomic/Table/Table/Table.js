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
var Table = _styledComponents.default.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: ", ";\n"])), function (props) {
  return props.margin;
});
var _default = Table;
exports.default = _default;
Table.propTypes = {
  margin: _propTypes.default.string
};
Table.defaultProps = {
  margin: "0px"
};