"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;
var _antd = require("antd");
var _lodash = _interopRequireDefault(require("lodash"));
var _moment = _interopRequireDefault(require("moment"));
var _react = _interopRequireWildcard(require("react"));
var _NcCalendarIcon = _interopRequireDefault(require("../../../Asset/Icon/NcCalendarIcon"));
var _Button = _interopRequireDefault(require("../../../Atomic/Button/Button"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _DatePickerStyleModule = _interopRequireDefault(require("../DatePickerStyle.module.scss"));
var _reactI18next = require("react-i18next");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18nConfig = _interopRequireDefault(require("../../../config/i18nConfig"));
var _Helpers = require("../../../Utils/Helpers");
var _excluded = ["mainColor", "size", "onConfirm", "onCancel", "onOpen", "onChangeDate", "value", "startDate", "endDate", "className", "type", "disabled"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DatePickerBase = function DatePickerBase(_ref) {
  var _ref$mainColor = _ref.mainColor,
    mainColor = _ref$mainColor === void 0 ? "purple" : _ref$mainColor,
    size = _ref.size,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    onOpen = _ref.onOpen,
    onChangeDate = _ref.onChangeDate,
    value = _ref.value,
    startDate = _ref.startDate,
    endDate = _ref.endDate,
    className = _ref.className,
    type = _ref.type,
    disabled = _ref.disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  var RangePicker = _antd.DatePicker.RangePicker;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDate = _useState2[0],
    setOpenDate = _useState2[1];
  var _useState3 = (0, _react.useState)({
      startDate: (0, _moment.default)(new Date()).toISOString(),
      endDate: (0, _moment.default)(new Date()).toISOString()
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var mainColors = "--main-color-date";
  var getHeight = function getHeight(size) {
    if (size === "sm") {
      return "40px";
    } else if (size === "md") {
      return "50px";
    } else if (size === "lg") {
      return "60px";
    } else if (size === "xl") {
      return "72px";
    } else if (size === "xxl") {
      return "80px";
    }
  };
  var getBorderRadius = function getBorderRadius(size) {
    if (size === "sm") {
      return "6px";
    } else if (size === "md") {
      return "8px";
    } else if (size === "lg") {
      return "10px";
    } else if (size === "xl") {
      return "12px";
    } else if (size === "xxl") {
      return "14px";
    }
  };
  var onConfirmButton = function onConfirmButton() {
    setOpenDate(false);
    onConfirm();
  };
  var onCancelButton = function onCancelButton() {
    setOpenDate(false);
    onCancel();
  };
  var getSizeIcon = function getSizeIcon(size) {
    if (size === "sm") {
      return "16px";
    } else if (size === "md") {
      return "20px";
    } else if (size === "lg") {
      return "24px";
    } else if (size === "xl") {
      return "28px";
    } else if (size === "xxl") {
      return "36px";
    }
  };
  var getPadding = function getPadding(size) {
    if (size === "sm") {
      return " 8px 12px";
    } else if (size === "md") {
      return "10px 14px";
    } else if (size === "lg") {
      return "12px 16px";
    } else if (size === "xl") {
      return "14px 18px";
    } else if (size === "xxl") {
      return "16px 20px";
    }
  };
  var id = (0, _react.useMemo)(function () {
    if (!props.id) {
      return (0, _Helpers.generateId)("date-picker");
    }
    return props.id;
  }, [props.id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: id,
    style: _defineProperty({}, mainColors, mainColor),
    className: "".concat(className, " ").concat(_DatePickerStyleModule.default.DatePicker, " ").concat(_DatePickerStyleModule.default["DatePicker".concat(_lodash.default.startCase(size))])
  }, type === "not_range" ? /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, props, {
    getPopupContainer: function getPopupContainer(node) {
      return document.getElementById(id);
    },
    placeholder: props.placeholder,
    allowClear: false,
    inputReadOnly: true,
    popupStyle: _defineProperty({}, mainColors, mainColor),
    dropdownClassName: disabled !== undefined ? _DatePickerStyleModule.default.createDateRangePickerDisabled : _DatePickerStyleModule.default.createDateRangePicker,
    style: {
      padding: getPadding(size.toLowerCase()),
      borderRadius: getBorderRadius(size),
      width: props.width || 500,
      height: getHeight(size.toLowerCase())
    },
    suffixIcon: /*#__PURE__*/_react.default.createElement(_NcCalendarIcon.default, {
      color: disabled ? "#424242" : "",
      size: getSizeIcon(size.toLowerCase())
    }),
    dateRender: function dateRender(current) {
      var styles = {};
      if ((0, _moment.default)(current).format("DD-MMMM-YYYY") === (0, _moment.default)(startDate).format("DD-MMMM-YYYY")) {
        styles.border = "1px solid ".concat(mainColor);
        styles.borderRadius = "50%";
        styles.background = mainColor;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-picker-cell-inner ",
        style: styles
      }, current.date());
    },
    open: openDate,
    renderExtraFooter: function renderExtraFooter() {
      return /*#__PURE__*/_react.default.createElement(_Div.default, {
        className: _DatePickerStyleModule.default.containerActionButtonDate
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "sm",
        buttonType: "secondary",
        onClick: function onClick() {
          return onCancelButton();
        },
        label: t("COMMON:RESET"),
        mainColor: mainColor
      }), /*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "sm",
        buttonType: "primary",
        onClick: function onClick() {
          return onConfirmButton();
        },
        label: t("COMMON:APPLY"),
        mainColor: mainColor
      }));
    },
    onClick: function onClick() {
      return setOpenDate(true);
    },
    value: startDate && (0, _moment.default)(startDate),
    onChange: onChangeDate,
    className: disabled !== undefined ? _DatePickerStyleModule.default.createDateRangePickerDisabled : _DatePickerStyleModule.default.createDateRangePicker,
    showToday: false,
    disabled: disabled
  })) : /*#__PURE__*/_react.default.createElement(RangePicker, _extends({}, props, {
    getPopupContainer: function getPopupContainer(node) {
      return document.getElementById(id);
    },
    popupStyle: _defineProperty({}, mainColors, mainColor),
    className: disabled !== undefined ? _DatePickerStyleModule.default.createDateRangePickerDisabled : _DatePickerStyleModule.default.createDateRangePicker,
    open: openDate,
    dropdownClassName: disabled !== undefined ? _DatePickerStyleModule.default.createDateRangePickerDisabled : _DatePickerStyleModule.default.createDateRangePicker,
    onClick: function onClick() {
      setOpenDate(true);
      onOpen();
    },
    disabled: disabled,
    allowClear: false,
    inputReadOnly: true,
    value: [(0, _moment.default)(startDate), (0, _moment.default)(endDate)],
    separator: "-",
    style: {
      padding: getPadding(size.toLowerCase()),
      width: "500px",
      height: getHeight(size.toLowerCase()),
      borderRadius: getBorderRadius(size)
    },
    suffixIcon: /*#__PURE__*/_react.default.createElement(_NcCalendarIcon.default, {
      color: disabled && "#424242",
      size: getSizeIcon(size.toLowerCase())
    }),
    onChange: onChangeDate,
    dateRender: function dateRender(current) {
      var styles = {};
      if ((0, _moment.default)(current).format("DD-MMMM-YYYY") === (0, _moment.default)(startDate).format("DD-MMMM-YYYY") || (0, _moment.default)(current).format("DD-MMMM-YYYY") === (0, _moment.default)(endDate).format("DD-MMMM-YYYY")) {
        styles.border = "1px solid ".concat(mainColor);
        styles.borderRadius = "50%";
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-picker-cell-inner ",
        style: styles
      }, current.date());
    },
    renderExtraFooter: function renderExtraFooter() {
      return /*#__PURE__*/_react.default.createElement(_Div.default, {
        className: _DatePickerStyleModule.default.containerActionButtonDate
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "sm",
        buttonType: "secondary",
        onClick: function onClick() {
          return onCancelButton();
        },
        label: t("COMMON:RESET"),
        mainColor: mainColor
      }), /*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "sm",
        buttonType: "primary",
        onClick: function onClick() {
          return onConfirmButton();
        },
        label: t("COMMON:APPLY"),
        mainColor: mainColor
      }));
    }
  }))));
};
function DatePicker(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(DatePickerBase, props));
}
DatePicker.propTypes = {
  mainColor: _propTypes.default.string,
  size: _propTypes.default.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onChangeDate: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string, _propTypes.default.number]),
  startDate: _propTypes.default.instanceOf(Date),
  endDate: _propTypes.default.instanceOf(Date),
  className: _propTypes.default.string,
  type: _propTypes.default.oneOf(["not_range", "range"]),
  disabled: _propTypes.default.bool
};
DatePicker.defaultProps = {
  size: "Sm",
  type: "not_range",
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  onOpen: function onOpen() {},
  startDate: null,
  endDate: null,
  disabled: undefined
};