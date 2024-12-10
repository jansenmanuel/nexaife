"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BadgeModule = _interopRequireDefault(require("./Badge.module.css"));
var _lodash = _interopRequireDefault(require("lodash"));
var _excluded = ["size", "content", "type", "color", "className", "style"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BADGE_V_2_0_1 = function BADGE_V_2_0_1(_ref) {
  var size = _ref.size,
    content = _ref.content,
    type = _ref.type,
    color = _ref.color,
    className = _ref.className,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var sizeMap = {
    Sm: 'SmBase',
    Md: 'MdBase',
    Lg: 'LgBase',
    Xl: 'XlBase',
    Xxl: 'XxlBase'
  };
  var sizeResult = sizeMap[_lodash.default.startCase(size)] || sizeMap.Sm;
  var typeSize = type ? _BadgeModule.default[size + type] : "";
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(_BadgeModule.default.Badge, " ").concat(_BadgeModule.default[sizeResult], " ").concat(typeSize, " ").concat(className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: color
    })
  }, props), content);
};
BADGE_V_2_0_1.defaultProps = {
  size: 'Sm',
  color: '#1D1D1D',
  content: "",
  type: "",
  style: {}
};
BADGE_V_2_0_1.propTypes = {
  size: _propTypes.default.oneOf(['Sm', 'Md', 'Lg', 'Xl', 'Xxl']),
  type: _propTypes.default.oneOf(['Pill', 'Legend', 'Icon', '']),
  color: _propTypes.default.string,
  content: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
var _default = BADGE_V_2_0_1;
exports.default = _default;