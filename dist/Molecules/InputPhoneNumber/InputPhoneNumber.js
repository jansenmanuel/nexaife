"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputPhoneNumber;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _Input = _interopRequireDefault(require("../../Atomic/Input/Input/Input"));
var _Select = _interopRequireDefault(require("../../Atomic/Selector/Select/Select"));
var _utils = require("../../Services/utils");
var _InputPhoneNumberModule = _interopRequireDefault(require("./InputPhoneNumber.module.scss"));
var _Paragraph = _interopRequireDefault(require("../../Atomic/Paragraph/Paragraph"));
var _antd = require("antd");
var _ErrorInformation = _interopRequireDefault(require("../../Atomic/Error/ErrorInformation"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
var _excluded = ["option", "size", "errormessage", "onChange", "propsSelect", "propsInput", "disabled", "mainColor", "placeholder"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InputPhoneNumberBase = function InputPhoneNumberBase(_ref) {
  var _ref2;
  var _ref$option = _ref.option,
    option = _ref$option === void 0 ? [{
      id: "+62",
      value: "+62"
    }, {
      id: "+14",
      value: "+14"
    }, {
      id: "+13",
      value: "+13"
    }] : _ref$option,
    size = _ref.size,
    errormessage = _ref.errormessage,
    onChange = _ref.onChange,
    propsSelect = _ref.propsSelect,
    propsInput = _ref.propsInput,
    disabled = _ref.disabled,
    mainColor = _ref.mainColor,
    placeholder = _ref.placeholder,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    clickInputPhoneNumber = _useState6[0],
    setClickInputPhoneNumber = _useState6[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  (0, _react.useEffect)(function () {
    setValueInputNumber(option);
  }, []);
  (0, _react.useEffect)(function () {
    sentToParent(value);
  }, [value]);
  var sentToParent = function sentToParent(value) {
    onChange(value);
  };
  var setValueInputNumber = function setValueInputNumber(optionVal) {
    setOptions((0, _utils.selectOption)([], optionVal, "value"));
  };
  var onChangeNumber = function onChangeNumber(value, namespace) {
    setValue(function (prevsValue) {
      return _objectSpread(_objectSpread({}, prevsValue), {}, _defineProperty({}, namespace, value));
    });
  };
  var validClass = function validClass(valid) {
    var isValid = "standart";
    if (valid === true) {
      isValid = "success";
    } else if (valid === false) {
      isValid = "error";
    }
    return isValid;
  };
  var setWidthSelect = function setWidthSelect(size) {
    if (size === "sm") {
      return "10%";
    } else if (size === "md") {
      return "13%";
    } else if (size === "lg") {
      return "16%";
    } else if (size === "xl") {
      return "18%";
    } else if (size === "xxl") {
      return "24.5%";
    }
  };
  var mainColors = "--main-color";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props === null || props === void 0 ? void 0 : props.id,
    onClick: function onClick() {
      setClickInputPhoneNumber(!clickInputPhoneNumber);
    },
    onBlur: function onBlur() {
      return setClickInputPhoneNumber(false);
    },
    className: " ".concat(disabled && _InputPhoneNumberModule.default.containerInputPhoneNumberDisable, " ").concat(errormessage ? _InputPhoneNumberModule.default.containerInputPhoneNumberError : _InputPhoneNumberModule.default.containerInputPhoneNumber, " ").concat(clickInputPhoneNumber && errormessage === undefined && _InputPhoneNumberModule.default.containerInputPhoneNumberClick),
    style: (_ref2 = {
      borderRadius: (0, _utils.getBorderRadius)(size)
    }, _defineProperty(_ref2, mainColors, mainColor), _defineProperty(_ref2, "width", props.width), _ref2)
  }, /*#__PURE__*/_react.default.createElement(_Select.default, _extends({}, propsSelect, {
    value: propsSelect === null || propsSelect === void 0 ? void 0 : propsSelect.value,
    mainColors: !disabled ? mainColor : "#ACACAC",
    id: "selectphone_".concat(props === null || props === void 0 ? void 0 : props.id),
    phonenumber: true,
    onChange: function onChange(e) {
      return onChangeNumber(e, "code");
    },
    disabled: disabled,
    size: size,
    option: options
    // width={setWidthSelect(size)}
    ,
    className: "".concat(_InputPhoneNumberModule.default["InputPhoneNumberSize".concat(_lodash.default.startCase(size))], " \n          ").concat(_InputPhoneNumberModule.default["selectBorderNone".concat(_lodash.default.startCase(size))], " ").concat(_InputPhoneNumberModule.default.containerSelectLinePhoneNumber)
  })), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    style: {
      height: (0, _utils.getSizeDivider)(size === null || size === void 0 ? void 0 : size.toLowerCase()),
      margin: 0
    },
    type: "vertical"
  }), /*#__PURE__*/_react.default.createElement(_Input.default, _extends({}, propsInput, {
    phonenumber: true,
    disabled: disabled,
    id: "tslphone_".concat(props === null || props === void 0 ? void 0 : props.id),
    placeholder: placeholder || t("COMMON:PHONE.PLACEHOLDER"),
    onChange: function onChange(e) {
      return onChangeNumber(e, "value");
    },
    onKeyPress: function onKeyPress(e) {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    },
    size: size,
    className: "".concat(_InputPhoneNumberModule.default["InputPhoneNumberSize".concat(_lodash.default.startCase(size))], " ").concat(_InputPhoneNumberModule.default.inputBorderNone)
  }))), errormessage && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    size: props === null || props === void 0 ? void 0 : props.size,
    text: errormessage
  }));
};
function InputPhoneNumber(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(InputPhoneNumberBase, props));
}
InputPhoneNumber.defaultProps = {
  onChange: function onChange() {},
  size: "lg",
  errormessage: undefined,
  propsSelect: {
    value: "+62"
  }
};