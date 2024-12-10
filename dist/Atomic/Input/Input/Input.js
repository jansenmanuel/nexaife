"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../../../Asset/Icon");
var _useOutsideClick = _interopRequireDefault(require("../../../Utils/useOutsideClick"));
var _Div = _interopRequireDefault(require("../../Container/Div/Div"));
var _InputModule = _interopRequireDefault(require("./Input.module.scss"));
var _antd = require("antd");
var _utils = require("../../../Services/utils");
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../../config/i18nConfig"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InputBase = function InputBase(props) {
  var _ref, _props$size, _props$size2, _ref2, _ref3, _props$icon;
  var wrapperInput = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    clickedInput = _useState2[0],
    setClickedInput = _useState2[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  (0, _useOutsideClick.default)(wrapperInput, props.disabled ? function () {} : function (e) {
    return setClickedInput(e);
  });
  var validClass = function validClass(valid) {
    var isValid = _InputModule.default.Input;
    if (valid === true) {
      isValid = _InputModule.default.Valid;
    } else if (valid === false) {
      isValid = _InputModule.default.Invalid;
    }
    return isValid;
  };
  var sizeClass = function sizeClass(size) {
    var setSize = _InputModule.default[_lodash.default.startCase(size)];
    return setSize;
  };
  var getIconSize = function getIconSize(size) {
    if (size === "sm") {
      return "12px";
    } else if (size === "md") {
      return "14px";
    } else if (size === "lg") {
      return "18px";
    } else if (size === "xl") {
      return "21px";
    } else if (size === "xxl") {
      return "27px";
    }
  };
  var widthClass = function widthClass(width) {
    var setWidth = _InputModule.default.MinWidth;
    if (width === "max") {
      setWidth = _InputModule.default.MaxWidth;
    } else if (props.phonenumber || props.selectSearch) {
      setWidth = undefined;
    }
    return setWidth;
  };
  var disabledClass = function disabledClass(disabled) {
    var setDisabled = null;
    if (disabled === true && props.phonenumber) {
      return _InputModule.default.DisabledPhoneNumber;
    } else if (disabled === true) {
      return _InputModule.default.Disabled;
    } else {
      return null;
    }
  };
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var visibleClick = function visibleClick() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  var iconByVisibility = function iconByVisibility(visible) {
    if (visible === true) {
      return /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcEyesOpen, null);
    }
    return /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcEyesClose, null);
  };
  var getPadding = function getPadding(value) {
    if (value === "sm") {
      return "12px";
    } else if (value === "md") {
      return "14px";
    } else if (value === "lg") {
      return "16px";
    } else if (value === "xl") {
      return "18px";
    } else if (value === "xxl") {
      return "20px";
    }
  };
  var typeByVisibility = function typeByVisibility(visible) {
    var setType = "password";
    if (visible === true) {
      return "text";
    }
    return setType;
  };
  var mainColors = "--main-color";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, props.textlabel && /*#__PURE__*/_react.default.createElement("div", {
    className: props.textlabel && _InputModule.default["LabelText".concat(_lodash.default.startCase(props.size))]
  }, (props === null || props === void 0 ? void 0 : props.phonenumber) === false && /*#__PURE__*/_react.default.createElement("label", null, props.textlabel), " ", (props === null || props === void 0 ? void 0 : props.isOptional) && /*#__PURE__*/_react.default.createElement("label", {
    className: _InputModule.default.optionalText
  }, "(", t('COMMON:OPTIONAL'), ")")), /*#__PURE__*/_react.default.createElement("div", null, props.type === "password" ? /*#__PURE__*/_react.default.createElement(_Div.default, {
    style: {
      width: props.width
    },
    className: "\n              ".concat(props.valid === false && "".concat(_InputModule.default.passwordBoxIsInvalid), "\n          ").concat(disabledClass(props.disabled), " \n          ").concat(clickedInput && _InputModule.default["PasswordBox".concat(_lodash.default.startCase(props.size), "Click")], " ").concat(_InputModule.default["PasswordBox".concat(_lodash.default.startCase(props.size))], " \n        ")
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    ref: wrapperInput
  }, props, {
    id: props.id,
    style: (_ref = {}, _defineProperty(_ref, mainColors, props === null || props === void 0 ? void 0 : props.mainColor), _defineProperty(_ref, "cursor", props.disabled && "not-allowed"), _ref),
    className: "".concat(_InputModule.default.placeholderInputPassword, " ").concat(props.className),
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    checked: props.checked,
    onKeyDown: props.onKeyDown,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    pattern: props.pattern,
    title: props.message,
    maxLength: props.maxLength,
    required: props.required,
    type: typeByVisibility(visible)
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: props.disabled === undefined && visibleClick
  }, visible ? /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcHiddenEye, {
    size: getIconSize((_props$size = props.size) === null || _props$size === void 0 ? void 0 : _props$size.toLowerCase()),
    color: props.disabled && "#ACACAC"
  }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcShowEye, {
    size: getIconSize((_props$size2 = props.size) === null || _props$size2 === void 0 ? void 0 : _props$size2.toLowerCase()),
    color: props.disabled && "#ACACAC"
  }))) : props.button ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    style: {
      width: props.width || 500
    },
    className: "\n          ".concat(disabledClass(props.disabled), " \n          ").concat(clickedInput && _InputModule.default["ButtonBox".concat(_lodash.default.startCase(props.size), "Click")], " ").concat(_InputModule.default["ButtonBox".concat(_lodash.default.startCase(props.size))], " \n        ")
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    ref: wrapperInput
  }, props, {
    id: props.id,
    style: (_ref2 = {}, _defineProperty(_ref2, mainColors, props === null || props === void 0 ? void 0 : props.mainColor), _defineProperty(_ref2, "cursor", props.disabled && "not-allowed"), _ref2),
    className: "\n              ".concat(props.className, "\n              "),
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    checked: props.checked,
    onKeyDown: props.onKeyDown,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    pattern: props.pattern,
    title: props.message,
    maxLength: props.maxLength,
    required: props.required
  })), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    type: "vertical",
    style: {
      margin: 0,
      height: (0, _utils.getSizeDivider)(props.size)
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, props.button))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: _InputModule.default.containerInput,
    style: {
      width: props.width
    }
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    id: props.id,
    className: "\n                      ".concat(validClass(props.valid), " ").concat(sizeClass(props.size), " \n                      ").concat(disabledClass(props.disabled), " ").concat(props.className, "\n                  "),
    style: (_ref3 = {}, _defineProperty(_ref3, mainColors, props === null || props === void 0 ? void 0 : props.mainColor), _defineProperty(_ref3, "width", props.width || 500), _ref3),
    type: props.type,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    checked: props.checked,
    onKeyDown: props.onKeyDown,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    pattern: props.pattern,
    title: props.message,
    required: props.required,
    maxLength: props.maxLength
  })), (props === null || props === void 0 ? void 0 : props.icon) && /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: _InputModule.default.iconInput
  }, props === null || props === void 0 || (_props$icon = props.icon) === null || _props$icon === void 0 ? void 0 : _props$icon.image))))), (props === null || props === void 0 ? void 0 : props.valid) === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    maxWidth: props.maxWidthError,
    size: props === null || props === void 0 ? void 0 : props.size,
    text: props === null || props === void 0 ? void 0 : props.errormessage
  }));
};
function Input(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(InputBase, props));
}
Input.defaultProps = {
  value: null,
  size: "md",
  onChange: function onChange() {},
  disabled: undefined,
  phonenumber: false
};
Input.propTypes = {
  maxWidthError: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};