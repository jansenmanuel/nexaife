"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _lodash = _interopRequireDefault(require("lodash"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RatingModule = _interopRequireDefault(require("./Rating.module.scss"));
var _excluded = ["size", "color"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var sizeMap = {
  Sm: 32,
  Md: 42,
  Lg: 56
};
var Rating = function Rating(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#F9BC59" : _ref$color,
    props = _objectWithoutProperties(_ref, _excluded);
  var fontSize = sizeMap[_lodash.default.startCase(size)] || sizeMap.Md;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _RatingModule.default.RatingNexContainer
  }, /*#__PURE__*/_react.default.createElement(_antd.Rate, _extends({
    style: {
      color: color,
      fontSize: fontSize
    },
    allowHalf: true
  }, props)));
};
Rating.propTypes = {
  size: _propTypes.default.string,
  color: _propTypes.default.string,
  defaultValue: _propTypes.default.number,
  value: _propTypes.default.number,
  onChange: _propTypes.default.func
};
var _default = Rating;
exports.default = _default;