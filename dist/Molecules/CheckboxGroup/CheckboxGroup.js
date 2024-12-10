"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Checkbox = _interopRequireDefault(require("../../Atomic/Checkbox/Checkbox/Checkbox"));
var _ErrorInformation = _interopRequireDefault(require("../../Atomic/Error/ErrorInformation"));
var _Information = _interopRequireDefault(require("../../Atomic/Information/Information"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CheckboxGroupV1 = function CheckboxGroupV1(_ref) {
  var options = _ref.options,
    onChange = _ref.onChange,
    id = _ref.id,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    color = _ref.color,
    defaultValue = _ref.defaultValue,
    _ref$horizontal = _ref.horizontal,
    horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
    labelInformation = _ref.labelInformation,
    errorInformation = _ref.errorInformation;
  var _useState = (0, _react.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : []),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var _onChange = (0, _react.useCallback)(function (value) {
    var newSelected;
    if (selected.includes(value)) {
      // Nilai sudah ada dalam array, hapus dari array
      newSelected = selected.filter(function (item) {
        return item !== value;
      });
    } else {
      // Nilai belum ada dalam array, tambahkan ke array
      newSelected = [].concat(_toConsumableArray(selected), [value]);
    }
    setSelected(newSelected);
    onChange && onChange(newSelected);
  }, [onChange, selected]);
  var VerticalCheckboxGroup = function VerticalCheckboxGroup() {
    return /*#__PURE__*/React.createElement("div", {
      id: id
    }, options === null || options === void 0 ? void 0 : options.map(function (val, index) {
      return /*#__PURE__*/React.createElement(_Checkbox.default, {
        key: index,
        disabled: val.disabled,
        label: val.label,
        check: selected.includes(val.value),
        value: val.value,
        onChange: function onChange() {
          return _onChange(val.value);
        },
        color: color,
        size: size
      });
    }), labelInformation ? /*#__PURE__*/React.createElement(_Information.default, {
      text: labelInformation,
      size: size
    }) : /*#__PURE__*/React.createElement(React.Fragment, null), errorInformation ? /*#__PURE__*/React.createElement(_ErrorInformation.default, {
      text: errorInformation,
      size: size
    }) : /*#__PURE__*/React.createElement(React.Fragment, null));
  };
  var HorizontalCheckboxGroup = function HorizontalCheckboxGroup() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      id: id,
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }
    }, options === null || options === void 0 ? void 0 : options.map(function (val, index) {
      return /*#__PURE__*/React.createElement(_Checkbox.default, {
        key: index,
        disabled: val.disabled,
        label: val.label,
        check: selected.includes(val.value),
        value: val.value,
        onChange: function onChange() {
          return _onChange(val.value);
        },
        color: color,
        size: size
      });
    })), /*#__PURE__*/React.createElement("div", null, labelInformation ? /*#__PURE__*/React.createElement(_Information.default, {
      text: labelInformation,
      size: size
    }) : /*#__PURE__*/React.createElement(React.Fragment, null), errorInformation ? /*#__PURE__*/React.createElement(_ErrorInformation.default, {
      text: errorInformation,
      size: size
    }) : /*#__PURE__*/React.createElement(React.Fragment, null)));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, horizontal ? /*#__PURE__*/React.createElement(HorizontalCheckboxGroup, null) : /*#__PURE__*/React.createElement(VerticalCheckboxGroup, null));
};
var _default = CheckboxGroupV1;
exports.default = _default;