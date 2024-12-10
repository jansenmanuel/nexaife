"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _Label = _interopRequireDefault(require("../../Atomic/Label/Label/Label"));
var _CheckBoxModule = _interopRequireDefault(require("./CheckBox.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckBox = function CheckBox(props) {
  var sizeClass = function sizeClass(size) {
    var setSize = _CheckBoxModule.default.Sm;
    if (size === "md") {
      setSize = _CheckBoxModule.default.Md;
    } else if (size === "lg") {
      setSize = _CheckBoxModule.default.Lg;
    }
    return setSize;
  };
  var disabledClass = function disabledClass(disabled) {
    var setDisabled = null;
    if (disabled === true) {
      setDisabled = " ".concat(_CheckBoxModule.default.Disabled, " disabled-checkbox");
    }
    return setDisabled;
  };
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_CheckBoxModule.default.CheckBox, " checkbox ").concat(sizeClass(props.size), " ").concat(disabledClass(props.disabled), " ").concat(props.className)
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: props.checkboxId,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    checked: props.checked,
    onKeyDown: props.onKeyDown,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    required: props.required
  }), props.label !== undefined ? /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: _CheckBoxModule.default.Boxlabel
  }, /*#__PURE__*/_react.default.createElement(_Label.default, {
    className: _CheckBoxModule.default.Label,
    id: props.labelId,
    value: props.label
  }), " ", /*#__PURE__*/_react.default.createElement("span", null, props.required ? "*" : "")) : null);
};
var _default = CheckBox;
exports.default = _default;
CheckBox.defaultProps = {
  id: ""
};