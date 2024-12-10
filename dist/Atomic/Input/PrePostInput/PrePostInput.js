"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
require("./PrePostInput.scss");
var _lodash = _interopRequireDefault(require("lodash"));
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PrePostInput = function PrePostInput(_ref) {
  var _ref2;
  var id = _ref.id,
    disabledField = _ref.disabledField,
    onChange = _ref.onChange,
    size = _ref.size,
    addonBefore = _ref.addonBefore,
    addonAfter = _ref.addonAfter,
    defaultValue = _ref.defaultValue,
    textLabel = _ref.textLabel,
    isOptional = _ref.isOptional,
    required = _ref.required,
    name = _ref.name,
    value = _ref.value,
    maxWidth = _ref.maxWidth,
    placeholder = _ref.placeholder,
    onKeyPress = _ref.onKeyPress,
    errorInformation = _ref.errorInformation,
    errorField = _ref.errorField;
  var wrapperInput = (0, _react.useRef)(null);
  var widthSize = "--custom-size-fixed-value";
  var borderInputLeft = "--border-input-radius-left";
  var borderInputRight = "--border-input-radius-right";
  var borderColorCondition = "--border-color-condition";
  var borderColorLeft = "--border-color-left-condition";
  var borderColorRight = "--border-color-right-condition";
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: textLabel && "LabelText".concat(_lodash.default.startCase(size))
  }, textLabel && /*#__PURE__*/_react.default.createElement("label", null, textLabel), isOptional && /*#__PURE__*/_react.default.createElement("label", {
    className: "optionalText"
  }, "(Optional)")), /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-field-input"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    style: (_ref2 = {}, _defineProperty(_ref2, widthSize, maxWidth), _defineProperty(_ref2, borderInputLeft, addonBefore ? 0 : "10px"), _defineProperty(_ref2, borderInputRight, addonAfter ? 0 : "10px"), _defineProperty(_ref2, borderColorCondition, errorField ? "#ff4d4f" : "#DADCDE"), _defineProperty(_ref2, borderColorLeft, errorField && !addonBefore ? "#ff4d4f" : "#DADCDE"), _defineProperty(_ref2, borderColorRight, errorField && !addonAfter ? "#ff4d4f" : "#DADCDE"), _ref2),
    name: name,
    ref: wrapperInput,
    id: id,
    className:
    // maxWidth? 'custom-size-fixed-value' :
    'custom-size-'.concat(size),
    addonBefore: addonBefore,
    addonAfter: addonAfter,
    disabled: disabledField,
    onChange: onChange,
    defaultValue: defaultValue,
    required: required,
    value: value,
    placeholder: placeholder,
    onKeyPress: onKeyPress
  }), errorInformation && errorField ? /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    text: errorInformation,
    size: size
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)));
};
var _default = PrePostInput;
exports.default = _default;
PrePostInput.defaultProps = {
  id: null,
  disabledField: false,
  onChange: function onChange() {},
  size: "md",
  addonBefore: "www.",
  addonAfter: ".com",
  defaultValue: null,
  required: false
};