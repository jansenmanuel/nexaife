"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputSearch;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _lodash = _interopRequireDefault(require("lodash"));
var _Icon = require("../../Asset/Icon");
var _InputSearchModule = _interopRequireDefault(require("./InputSearch.module.scss"));
var _utils = require("../../Services/utils");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
var _excluded = ["className", "size", "options", "value", "onChange", "onPopupScroll", "onSelect", "mainColor", "disabled", "placeholder", "onClear"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var InputSearchBase = function InputSearchBase(_ref) {
  var _ref2;
  var className = _ref.className,
    size = _ref.size,
    options = _ref.options,
    value = _ref.value,
    onChange = _ref.onChange,
    onPopupScroll = _ref.onPopupScroll,
    onSelect = _ref.onSelect,
    mainColor = _ref.mainColor,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    onClear = _ref.onClear,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    clickInput = _React$useState2[0],
    setClickInput = _React$useState2[1];
  var getSize = function getSize(value) {
    if (value === "sm") {
      return "40px";
    } else if (value === "md") {
      return "50px";
    } else if (value === "lg") {
      return "60px";
    } else if (value === "xl") {
      return "72px";
    } else if (value === "xxl") {
      return "80px";
    }
  };
  var getSizeFont = function getSizeFont(value) {
    if (value === "sm") {
      return "16px";
    } else if (value === "md") {
      return "20px";
    } else if (value === "lg") {
      return "24px";
    } else if (value === "xl") {
      return "32px";
    } else if (value === "xxl") {
      return "40px";
    }
  };
  var mainColors = "--main-color-autocomplete";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_InputSearchModule.default["containerAll".concat(_lodash.default.startCase(size))], " ").concat(className, " ").concat(disabled && _InputSearchModule.default.containerDisabled),
    style: _objectSpread({
      width: props.width
    }, props.style),
    id: props.id
  }, /*#__PURE__*/_react.default.createElement(_antd.AutoComplete, {
    value: value,
    options: options,
    style: (_ref2 = {}, _defineProperty(_ref2, mainColors, mainColor), _defineProperty(_ref2, "width", props.width), _ref2),
    onKeyPress: function onKeyPress(event) {
      if (event.key === "Enter") {
        // this.onSelectRecommendation(
        //   this.state.searchRecommendation
        // );
      }
    },
    onClick: function onClick() {
      return setClickInput(!clickInput);
    },
    onBlur: function onBlur() {
      return setClickInput(false);
    },
    popupClassName: _InputSearchModule.default["option".concat(_lodash.default.startCase(size))],
    onSelect: onSelect,
    onChange: onChange,
    disabled: disabled,
    onPopupScroll: onPopupScroll,
    children: /*#__PURE__*/_react.default.createElement(_antd.Input, {
      style: {
        width: props.width || 500,
        height: getSize(size.toLowerCase()),
        fontSize: getSizeFont(size.toLowerCase())
      },
      placeholder: placeholder || t('COMMON:SEARCH'),
      onKeyPress: function onKeyPress(event) {
        if (event.key === "Enter") {
          // this.onSelectRecommendation(
          //   this.state.searchRecommendation
          // );
        }
      },
      suffix: value ? /*#__PURE__*/_react.default.createElement("div", {
        onClick: onClear
      }, /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcClose, {
        color: disabled ? "#ACACAC" : "#C6C6C6",
        size: (0, _utils.getSizeIconSameSize)(size)
      })) : /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcSearch, {
        color: disabled ? "#ACACAC" : "#424242",
        size: (0, _utils.getSizeIconSameSize)(size)
      })
    })
  }));
};
function InputSearch(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(InputSearchBase, props));
}
InputSearch.defaultProps = {
  size: "md",
  disabled: undefined
};