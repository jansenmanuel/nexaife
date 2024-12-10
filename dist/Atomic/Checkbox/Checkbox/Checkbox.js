"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _checkboxModule = _interopRequireDefault(require("./checkbox.module.scss"));
var _lodash = _interopRequireDefault(require("lodash"));
var _NcCheck = _interopRequireDefault(require("../../../Asset/Icon/NcCheck"));
var _colorConstant = require("../../../Constant/colorConstant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckBoxv1 = function CheckBoxv1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "Md" : _ref$size,
    check = _ref.check,
    label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? _colorConstant.BLACK_COLOR : _ref$color,
    _ref$labelColor = _ref.labelColor,
    labelColor = _ref$labelColor === void 0 ? _colorConstant.BLACK_COLOR : _ref$labelColor,
    _ref$checkColor = _ref.checkColor,
    checkColor = _ref$checkColor === void 0 ? _colorConstant.WHITE_COLOR : _ref$checkColor,
    id = _ref.id,
    value = _ref.value,
    disabled = _ref.disabled;
  var renderCheckBox = "".concat(_checkboxModule.default["Container".concat(size.toLowerCase())]);
  var renderLabel = "".concat(_checkboxModule.default["Label".concat(size.toLowerCase)]);
  var whiteColor = "#fffcfc";
  var renderCheckSize = function renderCheckSize() {
    var value;
    if (size.toLowerCase() === "sm") {
      value = 12;
    }
    if (size.toLowerCase() === "md") {
      value = 12;
    }
    if (size.toLowerCase() === "lg") {
      value = 14;
    }
    if (size.toLowerCase() === "xl") {
      value = 16;
    }
    if (size.toLowerCase() === "xxl") {
      value = 18;
    }
    return value;
  };
  var renderColorBackground = function renderColorBackground() {
    var colors;
    if (disabled) {
      colors = _colorConstant.GRAY_DISABLED_COLOR;
    } else {
      if (check) {
        colors = color;
      } else {
        colors = whiteColor;
      }
    }
    return colors;
  };
  var renderIcon = function renderIcon() {
    if (disabled) {
      return /*#__PURE__*/_react.default.createElement(_NcCheck.default, {
        size: renderCheckSize,
        color: checkColor
      });
    } else {
      if (check) {
        return /*#__PURE__*/_react.default.createElement(_NcCheck.default, {
          size: renderCheckSize,
          color: checkColor
        });
      } else {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    checked: disabled ? true : check,
    onChange: disabled ? null : function () {
      return onChange(value);
    },
    style: {
      display: "none"
    } // Sembunyikan input checkbox bawaan
    ,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      backgroundColor: renderColorBackground()
    },
    className: renderCheckBox
  }, renderIcon(), " "), /*#__PURE__*/_react.default.createElement("div", {
    className: renderLabel,
    style: {
      color: disabled ? _colorConstant.GRAY_DISABLED_COLOR : labelColor
    }
  }, label)));
};
var _default = CheckBoxv1;
exports.default = _default;