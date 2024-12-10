"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SELECT_V_2_2_3;
var _antd = require("antd");
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../../Asset/Icon/index");
var _utils = require("../../../Services/utils");
var _Div = _interopRequireDefault(require("../../Container/Div/Div"));
var _selectModule = _interopRequireDefault(require("./select.module.scss"));
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../../config/i18nConfig"));
var _excluded = ["width", "option", "size", "className", "mainColors", "valid", "search", "handleSearch", "disabled", "maxWidthError"];
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
var SELECT_V_2_2_3_BASE = function SELECT_V_2_2_3_BASE(_ref) {
  var _ref2, _ref3;
  var width = _ref.width,
    option = _ref.option,
    size = _ref.size,
    className = _ref.className,
    mainColors = _ref.mainColors,
    valid = _ref.valid,
    search = _ref.search,
    handleSearch = _ref.handleSearch,
    disabled = _ref.disabled,
    maxWidthError = _ref.maxWidthError,
    props = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    clickSelect = _React$useState2[0],
    setClickSelect = _React$useState2[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var getSize = function getSize(size) {
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
  var Option = _antd.Select.Option;
  var getWidthPhoneNumber = function getWidthPhoneNumber(size) {
    if (size === "sm") {
      return "56px";
    } else if (size === "md") {
      return "72px";
    } else if (size === "lg") {
      return "79px";
    } else if (size === "xl") {
      return "88px";
    } else if (size === "xxl") {
      return "106px";
    }
  };
  var getSelectStyling = function getSelectStyling(size) {
    if (props.phonenumber) {
      return;
    } else if (valid === false && props.phonenumber === false) {
      return _selectModule.default["selectSize".concat(_lodash.default.startCase(size), "Error")];
    } else if (clickSelect) {
      return _selectModule.default["selectSize".concat(_lodash.default.startCase(size), "Active")];
    } else if (disabled) {
      return _selectModule.default["selectSize".concat(_lodash.default.startCase(size), "Disabled")];
    } else {
      return _selectModule.default["selectSize".concat(_lodash.default.startCase(size))];
    }
  };
  var propsWidth = "--width-select";
  var mainColor = "--main-color-select";
  var Label = (0, _react.useMemo)(function () {
    if (!props.textlabel) return;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: props.textlabel && _selectModule.default["LabelText".concat(_lodash.default.startCase(size))]
    }, (props === null || props === void 0 ? void 0 : props.phonenumber) === false && /*#__PURE__*/_react.default.createElement("label", null, props.textlabel), " ", props.isOptional && /*#__PURE__*/_react.default.createElement("label", {
      className: _selectModule.default.optionalText
    }, "(Optional)"));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, Label, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    style: (_ref2 = {}, _defineProperty(_ref2, mainColor, mainColors), _defineProperty(_ref2, "alignItems", "center"), _defineProperty(_ref2, "display", "flex"), _defineProperty(_ref2, propsWidth, width), _ref2),
    className: " ".concat(props.phoneNumber ? _selectModule.default.containerSelectLinePhoneNumber : _selectModule.default.containerSelectLine, " ").concat(clickSelect && props.phoneNumber === false ? _selectModule.default["selectContainerActive".concat(_lodash.default.startCase(size))] : disabled && props.phoneNumber === false ? _selectModule.default.selectContainerDisabled : _selectModule.default.containerSelect, " ").concat(props.phoneNumber === false && _selectModule.default["selectContainer".concat(_lodash.default.startCase(size))])
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, props, {
    popupClassName: "".concat(_selectModule.default["itemOption".concat(_lodash.default.startCase(size))]),
    className: "".concat(getSelectStyling(size), " ").concat(className),
    bordered: props.phoneNumber ? false : true,
    disabled: disabled,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    style: (_ref3 = {}, _defineProperty(_ref3, mainColor, mainColors), _defineProperty(_ref3, "width", props.phoneNumber ? getWidthPhoneNumber(size.toLowerCase()) : width ? width : "500px"), _defineProperty(_ref3, "lineHeight", "normal"), _ref3),
    onClick: disabled ? function () {} : function (evt) {
      setClickSelect(!clickSelect);
      props === null || props === void 0 || props.onClick(evt);
    },
    dropdownRender: function dropdownRender(menu) {
      var customDropdown = search ? (0, _utils.dropdownCustom)(t, menu, function (value) {
        return handleSearch(value);
      }, props.id, props === null || props === void 0 ? void 0 : props.placeholderSearch) : menu;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: props.id ? "".concat(props.id, "-dropdown") : "custom-dropdown"
      }, customDropdown);
    },
    onBlur: function onBlur() {
      return setClickSelect(false);
    },
    suffixIcon: clickSelect ? /*#__PURE__*/_react.default.createElement(_index.Icon.NcChevronUp, {
      color: mainColors ? mainColors : "#818181",
      size: (0, _utils.getSizeIconSameSize)(size)
    }) : /*#__PURE__*/_react.default.createElement(_index.Icon.NcChevronDown, {
      color: mainColors ? mainColors : "#818181",
      size: (0, _utils.getSizeIconSameSize)(size)
    })
  }), option ? _lodash.default.map(option, function (el) {
    return el;
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))), valid === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    maxWidth: maxWidthError,
    size: size,
    text: props === null || props === void 0 ? void 0 : props.errormessage
  }))));
};
function SELECT_V_2_2_3(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(SELECT_V_2_2_3_BASE, props));
}
SELECT_V_2_2_3.defaultProps = {
  width: "500px",
  empty: "No Data",
  phonenumber: false,
  search: false,
  handleSearch: function handleSearch() {},
  onClick: function onClick() {}
};