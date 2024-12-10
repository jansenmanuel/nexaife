"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _toggleModule = _interopRequireDefault(require("./toggle.module.scss"));
var _colorConstant = require("../../Constant/colorConstant");
var _ToggleSize = require("../../Utils/Toggle/ToggleSize");
var _excluded = ["id", "onChange", "label", "size", "disabled", "labelColor", "checkColor", "checked"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Toggle = function Toggle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    id = _ref.id,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label,
    size = _ref.size,
    disabled = _ref.disabled,
    _ref$labelColor = _ref.labelColor,
    labelColor = _ref$labelColor === void 0 ? _colorConstant.BLACK_COLOR : _ref$labelColor,
    _ref$checkColor = _ref.checkColor,
    checkColor = _ref$checkColor === void 0 ? _colorConstant.BLUE_COLOR : _ref$checkColor,
    checked = _ref.checked,
    props = _objectWithoutProperties(_ref, _excluded);
  var renderLabel = "".concat(_toggleModule.default["Label".concat(size.toLowerCase())]);
  var renderSwitch = "".concat(_toggleModule.default["Switch".concat(size.toLowerCase())]);
  var checkStyle = {
    '--background-color': checkColor
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: (0, _ToggleSize.renderSpace)(size),
    direction: "horizontal",
    className: "toggle",
    id: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: renderSwitch,
    style: checkStyle
  }, /*#__PURE__*/_react.default.createElement(_antd.Switch, _extends({
    onChange: onChange,
    disabled: disabled,
    checked: checked
  }, props))), /*#__PURE__*/_react.default.createElement("label", {
    className: renderLabel,
    style: {
      color: disabled ? _colorConstant.GRAY_DISABLED_COLOR : labelColor
    }
  }, label)));
};
Toggle.propTypes = {
  id: _propTypes.default.string,
  onChange: _propTypes.default.func,
  label: _propTypes.default.string,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  disabled: _propTypes.default.bool,
  labelColor: _propTypes.default.string
};
Toggle.defaultProps = {
  size: "md"
};
var _default = Toggle;
exports.default = _default;