"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classNameDefault = require("../../Enum/classNameDefault");
var _IdDefault = require("../../Enum/IdDefault");
var _InputTypeDefault = require("../../Enum/InputTypeDefault");
var _PropsDefault = require("../../Enum/PropsDefault");
var _SwitchLabelClass = require("../../Utils/Switch/SwitchLabelClass");
var _SwitchSizeClass = require("../../Utils/Switch/SwitchSizeClass");
var _SwitchSizeLabelClass = require("../../Utils/Switch/SwitchSizeLabelClass");
var _SwitchSizeValueClass = require("../../Utils/Switch/SwitchSizeValueClass");
var _SwitchValue = require("../../Utils/Switch/SwitchValue");
var _SwitchValueClass = require("../../Utils/Switch/SwitchValueClass");
var _SwitchModule = _interopRequireDefault(require("./Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Switch = function Switch(props) {
  return /*#__PURE__*/_react.default.createElement("label", {
    id: props.id,
    className: "".concat((0, _SwitchLabelClass.switchLabelClass)(props.label), " ").concat((0, _SwitchSizeLabelClass.switchSizeLableClass)(props.size), " ").concat(_classNameDefault.classNameDefault.switch, "   ").concat(props.className)
  }, props.label, /*#__PURE__*/_react.default.createElement("input", {
    id: props.id + _IdDefault.idDefault.input,
    name: props.name,
    type: _InputTypeDefault.InputTypeDefault.checkbox,
    checked: props.checked,
    disabled: props.disabled,
    onChange: props.onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    id: props.id + _IdDefault.idDefault.slider,
    className: "".concat(_SwitchModule.default.Slider, " ").concat((0, _SwitchSizeClass.switchSizeClass)(props.size), " ").concat(_classNameDefault.classNameDefault.slider)
  }), /*#__PURE__*/_react.default.createElement("span", {
    id: props.id + _IdDefault.idDefault.value,
    className: "".concat(_SwitchModule.default.Value, " ").concat((0, _SwitchSizeValueClass.switchSizeValueClass)(props.size), " ").concat((0, _SwitchValueClass.switchValueClass)(props.checked))
  }, (0, _SwitchValue.switchValue)(props.checked, props.active, props.deactive)));
};
var _default = Switch;
exports.default = _default;
Switch.defaultProps = {
  className: _PropsDefault.propsDefault.stringEmpty,
  id: _PropsDefault.propsDefault.string,
  disabled: _PropsDefault.propsDefault.false,
  onChange: _PropsDefault.propsDefault.func,
  label: _PropsDefault.propsDefault.null,
  size: _PropsDefault.propsDefault.size,
  active: _PropsDefault.propsDefault.active,
  deactive: _PropsDefault.propsDefault.deactive
};