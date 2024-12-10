"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimePicker;
var _ErrorInformation = _interopRequireDefault(require("../../../Atomic/Error/ErrorInformation"));
var _index = require("../../../index");
var _antd = require("antd");
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _TimePickerStyleModule = _interopRequireDefault(require("./TimePickerStyle.module.scss"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../../config/i18nConfig"));
var _Helpers = require("../../../Utils/Helpers");
var _excluded = ["openState", "size", "mainColor", "disabled", "onChange", "placeholder", "valid", "value", "format", "label", "closeAble", "maxWidthError"]; // Components
// Libs
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
function getSize(size, sizes) {
  var sizeRes = sizes[size];
  return sizeRes ? sizeRes : "sm";
}
var Label = function Label(_ref) {
  var children = _ref.children;
  var labelContent = typeof children === "string" ? children : children.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TimePickerStyleModule.default.label
  }, /*#__PURE__*/_react.default.createElement("p", null, labelContent), typeof children !== "string" && children.subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: _TimePickerStyleModule.default.subtitle
  }, children.subtitle));
};
var sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl"
};

/**
 * TimePicker Component Version 2.0.2
 *
 * @param {Object} props - The properties object for the TimePicker.
 * @param {boolean} [props.openState=false] - The state of whether the picker is open or not.
 * @param {string} [props.size="sm"] - The size of the time picker. Options: "sm", "md", "lg", "xl", "xxl".
 * @param {string} props.mainColor - The main color of the time picker.
 * @param {boolean} [props.disabled=false] - Controls whether the time picker is disabled.
 * @param {function} [props.onChange=(time) => {}] - The function to handle time change events.
 * @param {boolean} props.valid - Determines if the picker is in a valid state.
 * @param {any} [props.value=null] - The selected value for the time picker.
 * @param {string} props.format - The format in which time should be displayed.
 * @param {string|Object} props.label - The label for the picker. Can be a string or an object with `title` and `subtitle`.
 * @param {boolean} [props.closeAble=false] - Determines whether the picker can be closed by clicking outside.
 * @param {Object} props.style - Additional styles for the picker.
 * @param {Object} props.errorMessage - The error message to be displayed when validation fails.
 * @param {string|number} props.id - The unique identifier for the picker.
 * @param {Object} props...restProps - Any additional properties passed to the component.
 *
 * @returns {JSX.Element} The rendered TimePicker component.
 */
var TimePickerBase = function TimePickerBase(_ref2) {
  var _ref2$openState = _ref2.openState,
    openState = _ref2$openState === void 0 ? false : _ref2$openState,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "sm" : _ref2$size,
    mainColor = _ref2.mainColor,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    _ref2$onChange = _ref2.onChange,
    onChange = _ref2$onChange === void 0 ? function (time) {} : _ref2$onChange,
    placeholder = _ref2.placeholder,
    valid = _ref2.valid,
    _ref2$value = _ref2.value,
    value = _ref2$value === void 0 ? null : _ref2$value,
    format = _ref2.format,
    label = _ref2.label,
    _ref2$closeAble = _ref2.closeAble,
    closeAble = _ref2$closeAble === void 0 ? false : _ref2$closeAble,
    maxWidthError = _ref2.maxWidthError,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    select = _useState4[0],
    setSelect = _useState4[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;

  /**
   * Handles confirmation of the selected time.
   *
   * @param {Date} time - The selected time.
   */
  var onConfirm = function onConfirm(time) {
    onChange(time);
  };

  /**
   * Handles selection of a time value.
   *
   * @param {Date} selected - The selected time value.
   */
  var _onSelect = function onSelect(selected) {
    setSelect(selected);
  };
  var sizeClass = getSize(size.toLowerCase(), sizes);
  var mainColors = "--main-color";
  var id = (0, _react.useMemo)(function () {
    if (!props.id) {
      return (0, _Helpers.generateId)("time-picker");
    }
    return props.id;
  }, [props.id]);
  var isError = valid === false;
  (0, _react.useEffect)(function () {
    if (value !== null) {
      setSelect(value);
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TimePickerStyleModule.default[sizeClass],
    id: id
  }, label && /*#__PURE__*/_react.default.createElement(Label, {
    children: label
  }), /*#__PURE__*/_react.default.createElement(_antd.TimePicker, _extends({}, props, {
    getPopupContainer: function getPopupContainer(node) {
      return document.getElementById(id);
    },
    placeholder: placeholder || t("COMMON:TIME_PICKER.PLACEHOLDER"),
    format: format,
    status: isError ? "error" : "",
    disabled: disabled,
    style: _objectSpread(_defineProperty({}, mainColors, mainColor), props.style),
    inputReadOnly: true,
    allowClear: true,
    value: select,
    onSelect: function onSelect(e) {
      _onSelect(e);
    },
    onChange: function onChange(e) {
      if (!e) {
        _onSelect(function () {
          onConfirm(e);
          return e;
        });
      }
    },
    className: _TimePickerStyleModule.default.sm,
    popupClassName: _TimePickerStyleModule.default.noFooterTimePick,
    showNow: false,
    open: open,
    onOpenChange: function onOpenChange(e) {
      if (closeAble) {
        setOpen(e);
      }
    },
    onClick: function onClick() {
      setOpen(true);
    },
    needConfirm: false,
    renderExtraFooter: function renderExtraFooter() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          gap: 4,
          flexDirection: "row-reverse"
        }
      }, /*#__PURE__*/_react.default.createElement(_index.Button, {
        size: "sm",
        mainColor: mainColor,
        buttonType: "primary",
        label: t("COMMON:OK"),
        onClick: function onClick() {
          setOpen(false);
          onConfirm(select);
        }
      }), /*#__PURE__*/_react.default.createElement(_index.Button, {
        mainColor: mainColor,
        size: "sm",
        buttonType: "secondary",
        label: t("COMMON:NOW"),
        onClick: function onClick() {
          setSelect((0, _moment.default)());
        }
      }));
    }
  })), valid === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    size: size,
    text: props === null || props === void 0 ? void 0 : props.errorMessage,
    maxWidth: maxWidthError
  }));
};
function TimePicker(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(TimePickerBase, props));
}
TimePicker.propTypes = {
  openState: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  mainColor: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  maxWidthError: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  valid: _propTypes.default.bool,
  value: _propTypes.default.any,
  errorMessage: _propTypes.default.string,
  format: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    subtitle: _propTypes.default.string
  })]),
  closeAble: _propTypes.default.bool
};