"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LegendModule = _interopRequireDefault(require("./Legend.module.css"));
var _lodash = _interopRequireDefault(require("lodash"));
var _excluded = ["size", "title", "color", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var sizeMap = {
  Sm: 'TextSm',
  Md: 'TextMd',
  Lg: 'TextLg'
};
var sizeIcon = ['Md', 'Lg'];
var Legend = function Legend(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'sm' : _ref$size,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Caption Title' : _ref$title,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#1D1D1D' : _ref$color,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  var fontSize = sizeMap[_lodash.default.startCase(size)] || sizeMap.Md;
  var circleSizeClass = sizeIcon.find(function (e) {
    return e.toLowerCase() === size.toLowerCase();
  });
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(_LegendModule.default.Wrap, " ").concat(className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_LegendModule.default.Circle, " ").concat(_LegendModule.default["Circle".concat(circleSizeClass)] || ''),
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: _LegendModule.default[fontSize]
  }, title));
};
Legend.propTypes = {
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  title: _propTypes.default.string.isRequired,
  color: _propTypes.default.string
};
var _default = Legend;
exports.default = _default;