"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _reactPinInput = _interopRequireDefault(require("react-pin-input"));
var _Div = _interopRequireDefault(require("../Container/Div/Div"));
require("./Pin.scss");
var _lodash = _interopRequireDefault(require("lodash"));
var _ErrorInformation = _interopRequireDefault(require("../Error/ErrorInformation"));
var _excluded = ["lengthPin", "error", "maxWidthError"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PIN_V_2_2_3 = function PIN_V_2_2_3(_ref) {
  var _ref$lengthPin = _ref.lengthPin,
    lengthPin = _ref$lengthPin === void 0 ? 4 : _ref$lengthPin,
    error = _ref.error,
    _ref$maxWidthError = _ref.maxWidthError,
    maxWidthError = _ref$maxWidthError === void 0 ? '100px' : _ref$maxWidthError,
    props = _objectWithoutProperties(_ref, _excluded);
  var mainColors = "--main-color";
  var handleChange = function handleChange(value, index) {
    var splitValue = value === null || value === void 0 ? void 0 : value.split("");
    props.onChange(splitValue, index);
  };
  var handleOnComplete = function handleOnComplete(value, index) {
    var splitValue = value === null || value === void 0 ? void 0 : value.split("");
    props.onComplete(splitValue, index);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    style: {
      textAlign: "left"
    },
    className: props.disabled ? "Pin".concat(_lodash.default.startCase(props.size), "Disabled") : "Pin".concat(_lodash.default.startCase(props.size))
  }, /*#__PURE__*/_react.default.createElement(_reactPinInput.default, _extends({}, props, {
    initialValue: props.value,
    length: lengthPin,
    secret: props.hidden,
    secretDelay: props.hidden ? 100 : undefined,
    onChange: function onChange(value, index) {
      return handleChange(value, index);
    },
    type: "numeric",
    inputMode: "number",
    style: _defineProperty({
      padding: "10px"
    }, mainColors, props === null || props === void 0 ? void 0 : props.color),
    inputStyle: {
      borderColor: error ? "red" : "#DADCDE"
    },
    inputFocusStyle: {
      borderColor: props.color
    },
    onComplete: function onComplete(value, index) {
      return handleOnComplete(value, index);
    },
    autoSelect: true,
    regexCriteria: props.regex
  })), props.errorMessage && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    size: props === null || props === void 0 ? void 0 : props.size,
    text: props === null || props === void 0 ? void 0 : props.errorMessage,
    maxWidth: maxWidthError
  })));
};
PIN_V_2_2_3.defaultProps = {
  hidden: false,
  size: "sm",
  onChange: function onChange() {},
  onComplete: function onComplete() {},
  regex: /^[ A-Za-z0-9_@./#&+-]*$/
};
PIN_V_2_2_3.propTypes = {
  hidden: _propTypes.bool,
  size: _propTypes.string,
  onChange: _propTypes.func,
  onComplete: _propTypes.func
};
var _default = PIN_V_2_2_3;
exports.default = _default;