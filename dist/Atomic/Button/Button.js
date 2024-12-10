"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ButtonSizeClass = require("../../Utils/Button/ButtonSizeClass");
var _ButtonTypeStyle = require("../../Utils/Button/ButtonTypeStyle");
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
var _lodash = _interopRequireDefault(require("lodash"));
var _antd = require("antd");
var _excluded = ["id", "disabled", "onClick", "type", "label", "className", "mainColor", "secondaryColor", "prefixIcon", "suffixIcon", "buttonType", "size", "icon", "roundedIcon", "error", "badge"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = function Button(propss) {
  var _ref, _icon$props, _icon$props2, _prefixIcon$props, _prefixIcon$props2, _suffixIcon$props;
  var id = propss.id,
    disabled = propss.disabled,
    onClick = propss.onClick,
    type = propss.type,
    label = propss.label,
    className = propss.className,
    mainColor = propss.mainColor,
    secondaryColor = propss.secondaryColor,
    prefixIcon = propss.prefixIcon,
    suffixIcon = propss.suffixIcon,
    buttonType = propss.buttonType,
    size = propss.size,
    icon = propss.icon,
    roundedIcon = propss.roundedIcon,
    error = propss.error,
    badge = propss.badge,
    props = _objectWithoutProperties(propss, _excluded);
  var mainColors = "--main-color";
  var secondaryColors = "--secondary-color";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _ButtonModule.default["badgeStyle".concat(_lodash.default.startCase(size))]
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    dot: badge
  }, /*#__PURE__*/_react.default.createElement("button", _extends({
    id: id,
    className: "".concat(className, " ").concat(label === null && icon ? _ButtonModule.default[(0, _ButtonSizeClass.buttonSizeOnlyIcon)(size)] : prefixIcon || suffixIcon ? _ButtonModule.default[(0, _ButtonSizeClass.buttonSizeSuffPreffIcon)(size, buttonType)] : (0, _ButtonSizeClass.buttonSizeClass)(size, buttonType), " ").concat(_ButtonModule.default[(0, _ButtonTypeStyle.buttonTypeStyle)(buttonType)], " ").concat(label === null && roundedIcon && _ButtonModule.default.roundedIcon, "  ").concat(error && _ButtonModule.default.errorButton, " ").concat(_ButtonModule.default[(0, _ButtonTypeStyle.buttonBorderTypeSize)(buttonType, size)])
  }, props, {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: (_ref = {}, _defineProperty(_ref, mainColors, mainColor), _defineProperty(_ref, secondaryColors, secondaryColor), _ref)
  }), label === null && icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: _ButtonModule.default.containerButtonIcon
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ButtonModule.default.onlyIcon
  }, _objectSpread(_objectSpread({}, icon), {}, {
    props: _objectSpread(_objectSpread({}, icon.props), {}, {
      color: disabled ? "#ACACAC" : (_icon$props = icon.props) !== null && _icon$props !== void 0 && _icon$props.color ? (_icon$props2 = icon.props) === null || _icon$props2 === void 0 ? void 0 : _icon$props2.color : "#1D1D1D"
    })
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: props.inputbutton && !disabled ? _ButtonModule.default.containerButtonIb : buttonType === "link" && !disabled ? _ButtonModule.default.containerButtonLink : _ButtonModule.default.containerButton
  }, prefixIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: _ButtonModule.default["iconPrefix".concat(_lodash.default.startCase(size))]
  }, _objectSpread(_objectSpread({}, prefixIcon), {}, {
    props: _objectSpread(_objectSpread({}, prefixIcon.props), {}, {
      color: disabled ? "#ACACAC" : buttonType === "link" ? "#0068BE" : prefixIcon !== null && prefixIcon !== void 0 && (_prefixIcon$props = prefixIcon.props) !== null && _prefixIcon$props !== void 0 && _prefixIcon$props.color ? prefixIcon === null || prefixIcon === void 0 || (_prefixIcon$props2 = prefixIcon.props) === null || _prefixIcon$props2 === void 0 ? void 0 : _prefixIcon$props2.color : "#1D1D1D"
    })
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, label)), suffixIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: _ButtonModule.default.iconSuffix
  }, _objectSpread(_objectSpread({}, suffixIcon), {}, {
    props: _objectSpread(_objectSpread({}, suffixIcon.props), {}, {
      color: disabled ? "#ACACAC" : buttonType === "link" ? "#0068BE" : suffixIcon.props.color ? suffixIcon === null || suffixIcon === void 0 || (_suffixIcon$props = suffixIcon.props) === null || _suffixIcon$props === void 0 ? void 0 : _suffixIcon$props.color : "#1D1D1D"
    })
  })))))));
};
var _default = Button;
exports.default = _default;
Button.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string
};
Button.defaultProps = {
  id: null,
  label: null,
  type: "submit",
  onClick: function onClick() {},
  disabled: false,
  size: "md",
  icon: null,
  roundedIcon: false
};