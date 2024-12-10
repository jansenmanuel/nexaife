"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _selectModule = _interopRequireDefault(require("./select.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LIST_V_2_0_ = _interopRequireDefault(require("../../List/LIST_V_2_0_2"));
var _lodash = _interopRequireDefault(require("lodash"));
var _NcChevronDown = _interopRequireDefault(require("../../../Asset/Icon/NcChevronDown"));
var _NcChevronUp = _interopRequireDefault(require("../../../Asset/Icon/NcChevronUp"));
var _Icon = require("../../../Asset/Icon");
var _utils = require("../../../Services/utils");
var _useOutsideClick = _interopRequireDefault(require("../../../Utils/useOutsideClick"));
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
var _excluded = ["mainColors", "size", "value", "option", "handleChange", "error", "valid"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function SELECT_V_2_0_3(_ref) {
  var _ref2;
  var mainColors = _ref.mainColors,
    size = _ref.size,
    value = _ref.value,
    option = _ref.option,
    handleChange = _ref.handleChange,
    error = _ref.error,
    valid = _ref.valid,
    props = _objectWithoutProperties(_ref, _excluded);
  var optionsRef = _react.default.useRef(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);
  var handleOptionClick = function handleOptionClick(options) {
    handleChange(options === null || options === void 0 ? void 0 : options.data);
    setIsOpen(false);
  };
  (0, _useOutsideClick.default)(selectRef, props.disabled ? function () {} : function (e) {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  var handleSelectClick = function handleSelectClick() {
    props !== null && props !== void 0 && props.disabled ? setIsOpen(false) : setIsOpen(!isOpen);
  };
  var isAtBottom = function isAtBottom() {
    if (!selectRef.current) return false;
    var selectBounds = selectRef.current.getBoundingClientRect();
    return window.innerHeight - selectBounds.bottom - 10 < selectBounds.height;
  };
  var getFontRight = function getFontRight() {
    if (props !== null && props !== void 0 && props.disabled) {
      return _selectModule.default["selectInput_DB_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    } else if (value === null) {
      return _selectModule.default["selectInput_PH_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    } else {
      return _selectModule.default["selectInput_ACT_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    }
  };
  var mainColor = "--main-color-select";
  var getSearchValue = (0, _react.useCallback)(function (values) {
    if (values && !_lodash.default.isNil(values === null || values === void 0 ? void 0 : values.id)) {
      var find = _lodash.default.find(option, function (el) {
        return el.id === (values === null || values === void 0 ? void 0 : values.id);
      });
      return find === null || find === void 0 ? void 0 : find.value;
    } else if (values && !_lodash.default.isNil(values === null || values === void 0 ? void 0 : values.value)) {
      return values === null || values === void 0 ? void 0 : values.value;
    } else if (values) {
      var findById = _lodash.default.findIndex(option, function (el) {
        return el.id == values;
      });
      var findByValue = _lodash.default.findIndex(option, function (el) {
        return el.value == values;
      });
      if (findById !== -1) {
        return option[findById].value;
      } else if (findByValue !== -1) {
        return option[findByValue].value;
      } else {
        return values;
      }
    } else if (props.placeholder) {
      return props.placeholder;
    } else {
      return "Select Option";
    }
  }, [value, option]);

  //   const getValue = useMemo(() => getSearchValue(value),[value,option])

  var getClassContainerSelect = function getClassContainerSelect() {
    if (props.disabled) {
      return _selectModule.default["containerSelectSize".concat(_lodash.default.startCase(size), "DisabledV2_0_3")];
    } else if (valid === false) {
      return _selectModule.default["containerSelectSize".concat(_lodash.default.startCase(size), "ErrorV2_0_3")];
    } else {
      return _selectModule.default["containerSelectSize".concat(_lodash.default.startCase(size), "V2_0_3")];
    }
  };
  var getGapSelect = function getGapSelect() {
    if (size.toLowerCase() === 'sm') {
      return '4px';
    } else if (size.toLowerCase() === 'md') {
      return '6px';
    } else if (size.toLowerCase() === 'lg') {
      return '8px';
    } else if (size.toLowerCase() === 'xl') {
      return '10px';
    } else if (size.toLowerCase() === 'xxl') {
      return '12px';
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _selectModule.default["LabelText".concat(_lodash.default.startCase(size))]
  }, (props === null || props === void 0 ? void 0 : props.phonenumber) === false && /*#__PURE__*/_react.default.createElement("label", null, props.textlabel)), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      handleSelectClick();
    },
    style: (_ref2 = {}, _defineProperty(_ref2, mainColor, mainColors), _defineProperty(_ref2, "width", props.width), _ref2),
    id: props.id,
    ref: selectRef,
    className: getClassContainerSelect()
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      gap: getGapSelect(),
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexGrow: 1
    },
    className: getFontRight()
  }, getSearchValue(value)), /*#__PURE__*/_react.default.createElement("div", null, isOpen ? /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcChevronUp, {
    color: mainColors ? mainColors : "#818181",
    size: (0, _utils.getSizeIconSameSize)(size)
  }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcChevronDown, {
    color: mainColors ? mainColors : "#818181",
    size: (0, _utils.getSizeIconSameSize)(size)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectModule.default.containerOptions,
    style: {
      bottom: isAtBottom() ? "100%" : "auto",
      top: isAtBottom() ? "auto" : "100%"
    },
    ref: optionsRef
  }, isOpen && _lodash.default.map(option, function (el, index) {
    return /*#__PURE__*/_react.default.createElement(_LIST_V_2_0_.default, {
      key: index,
      size: size,
      isSelect: true,
      id: el.id,
      titleLabel: el.value,
      onClickList: function onClickList(evt) {
        return handleOptionClick(evt);
      }
    });
  })))), valid === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    size: size,
    text: props === null || props === void 0 ? void 0 : props.errormessage
  }));
}
SELECT_V_2_0_3.propTypes = {
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  valid: _propTypes.default.any,
  errormessage: _propTypes.default.string,
  value: _propTypes.default.any,
  option: _propTypes.default.arrayOf(_propTypes.default.object),
  handleChange: _propTypes.default.func,
  mainColor: _propTypes.default.string,
  phonenumber: _propTypes.default.bool,
  id: _propTypes.default.string
};
SELECT_V_2_0_3.defaultProps = {
  size: "sm",
  disabled: false,
  valid: null,
  errormessage: "",
  value: null,
  handleChange: function handleChange() {},
  option: [],
  mainColor: "",
  phonenumber: false,
  id: ''
};
var _default = SELECT_V_2_0_3;
exports.default = _default;