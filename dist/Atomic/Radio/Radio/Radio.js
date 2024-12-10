"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _radioModule = _interopRequireDefault(require("./radio.module.scss"));
var _colorConstant = require("../../../Constant/colorConstant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RadioV1 = function RadioV1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "Md" : _ref$size,
    check = _ref.check,
    label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? _colorConstant.BLACK_COLOR : _ref$color,
    id = _ref.id,
    value = _ref.value,
    disabled = _ref.disabled;
  var renderRadio = "".concat(_radioModule.default["Radio".concat(size.toLowerCase())]);
  var renderRadioUncheck = "".concat(_radioModule.default["RadioUncheck".concat(size.toLowerCase())]);
  var renderLabel = "".concat(_radioModule.default["labelRadio".concat(size.toLowerCase())]);
  var renderWrapper = "".concat(_radioModule.default["Wrapper".concat(size.toLowerCase())]);
  var renderWrapperUncheck = "".concat(_radioModule.default["WrapperUncheck".concat(size.toLowerCase())]);
  var wrapperStyle = {
    border: "2px solid ".concat(color)
  };
  var wrapperStyleDisabled = {
    border: "2px solid ".concat(_colorConstant.GRAY_DISABLED_COLOR)
  };
  var normalStyle = {
    background: color
  };
  var styleDisabled = {
    background: _colorConstant.GRAY_DISABLED_COLOR
  };
  var renderStyleWrapper = function renderStyleWrapper() {
    var style;
    if (check && !disabled) {
      style = wrapperStyle;
    } else if (check && disabled) {
      style = wrapperStyleDisabled;
    } else if (!check && disabled) {
      style = wrapperStyleDisabled;
    } else {
      style = null;
    }
    return style;
  };
  var renderStyle = function renderStyle() {
    var style;
    if (check && !disabled) {
      style = normalStyle;
    } else if (check && disabled) {
      style = styleDisabled;
    } else if (!check && disabled) {
      style = styleDisabled;
    } else {
      style = null;
    }
    return style;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    hidden: true,
    defaultChecked: check,
    readOnly: true,
    value: value,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      margin: "5px",
      alignItems: "center"
    },
    onClick: disabled ? null : function () {
      return onChange(value);
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: check ? renderWrapper : renderWrapperUncheck,
    style: renderStyleWrapper(),
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: check ? renderRadio : renderRadioUncheck,
    style: renderStyle()
  }))), /*#__PURE__*/React.createElement("label", {
    className: renderLabel,
    style: {
      color: disabled ? _colorConstant.GRAY_DISABLED_COLOR : color
    }
  }, label)));
};
var _default = RadioV1;
exports.default = _default;