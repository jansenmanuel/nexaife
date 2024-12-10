"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _Radio = _interopRequireDefault(require("../../Atomic/Radio/Radio/Radio"));
var _Information = _interopRequireDefault(require("../../Atomic/Information/Information"));
var _ErrorInformation = _interopRequireDefault(require("../../Atomic/Error/ErrorInformation"));
var _RadioGroupModule = _interopRequireDefault(require("./RadioGroup.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RadioGroupV1 = function RadioGroupV1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    options = _ref.options,
    onChange = _ref.onChange,
    id = _ref.id,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "Md" : _ref$size,
    color = _ref.color,
    defaultValue = _ref.defaultValue,
    _ref$horizontal = _ref.horizontal,
    horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
    labelInformation = _ref.labelInformation,
    errorInformation = _ref.errorInformation,
    labelTitle = _ref.labelTitle;
  var _useState = (0, _react.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var renderText = "".concat(_RadioGroupModule.default["RadioTitle".concat(size.toLowerCase())]);
  var _onChange = (0, _react.useCallback)(function (value) {
    setSelected(value);
    onChange && onChange(value);
  }, [onChange]);
  var VerticalRadioGroup = function VerticalRadioGroup() {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: id
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: renderText
    }, labelTitle), options === null || options === void 0 ? void 0 : options.map(function (val, index) {
      return /*#__PURE__*/_react.default.cloneElement( /*#__PURE__*/_react.default.createElement(_Radio.default, null), {
        key: index,
        value: val.value,
        label: val.label,
        onChange: _onChange,
        check: val.value === selected,
        disabled: val.disabled,
        size: size,
        color: color
      });
    }), labelInformation ? /*#__PURE__*/_react.default.createElement(_Information.default, {
      text: labelInformation,
      size: size
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), errorInformation ? /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
      text: errorInformation,
      size: size
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
  };
  var HorizontalRadioGroup = function HorizontalRadioGroup() {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: id
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: renderText
    }, labelTitle), /*#__PURE__*/_react.default.createElement(_antd.Row, {
      align: "middle"
      // justify="center"
    }, options === null || options === void 0 ? void 0 : options.map(function (val, index) {
      return /*#__PURE__*/_react.default.cloneElement( /*#__PURE__*/_react.default.createElement(_Radio.default, null), {
        key: index,
        value: val.value,
        label: val.label,
        onChange: _onChange,
        check: val.value === selected,
        disabled: val.disabled,
        size: size,
        color: color
      });
    })), labelInformation ? /*#__PURE__*/_react.default.createElement(_Information.default, {
      text: labelInformation,
      size: size
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), errorInformation ? /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
      text: errorInformation,
      size: size
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, horizontal ? /*#__PURE__*/_react.default.createElement(HorizontalRadioGroup, null) : /*#__PURE__*/_react.default.createElement(VerticalRadioGroup, null));
};
var _default = RadioGroupV1;
exports.default = _default;