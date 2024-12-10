"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Col = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 0 0 auto;\n  padding: 20px;\n  width: ", ";\n  @media (max-width: 576px) {\n    flex: 0 0 auto;\n    width: ", ";\n  }\n  @media (max-width: 768px) {\n    flex: 0 0 auto;\n    width: ", ";\n  }\n\n  @media (max-width: 992px) {\n    flex: 0 0 auto;\n    width: ", ";\n  }\n"])), function (props) {
  if (props.width === 1) {
    return "8.33333333%";
  } else if (props.width === 2) {
    return "16.66666667%";
  } else if (props.width === 3) {
    return "25%";
  } else if (props.width === 4) {
    return "33.33333333%";
  } else if (props.width === 5) {
    return "41.66666667%";
  } else if (props.width === 5.5) {
    return "45.833333%";
  } else if (props.width === 6) {
    return "50%";
  } else if (props.width === 7) {
    return "58.33333333%";
  } else if (props.width === 8) {
    return "66.66666667%";
  } else if (props.width === 9) {
    return "75%";
  } else if (props.width === 10) {
    return "83.33333333%";
  } else if (props.width === 11) {
    return "91.66666667%";
  } else {
    return "100%";
  }
}, function (props) {
  if (props.size === "sm") {
    return "100%";
  } else {
    return "";
  }
}, function (props) {
  if (props.size === "md") {
    return "100%";
  } else {
    return "";
  }
}, function (props) {
  if (props.size === "lg") {
    return "100%";
  } else {
    return "";
  }
});
var _default = Col;
exports.default = _default;