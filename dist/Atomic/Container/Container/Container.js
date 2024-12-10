"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n"])));
var _default = Container;
exports.default = _default;