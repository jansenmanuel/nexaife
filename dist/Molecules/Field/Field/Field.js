"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Input = _interopRequireDefault(require("../../../Atomic/Input/Input/Input"));
var _Label = _interopRequireDefault(require("../../../Atomic/Label/Label/Label"));
var _Paragraph = _interopRequireDefault(require("../../../Atomic/Paragraph/Paragraph"));
var _FieldModule = _interopRequireDefault(require("./Field.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Field = function Field(props) {
  var validClass = function validClass(valid) {
    var isValid = "standart";
    if (valid === true) {
      isValid = "success";
    } else if (valid === false) {
      isValid = "error";
    }
    return isValid;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: props.className
  }, /*#__PURE__*/_react.default.createElement(_Label.default, {
    id: props.labelId,
    value: props.label,
    className: "".concat(props.classLabel, " label ").concat(_FieldModule.default.Label)
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    id: props.inputId,
    className: "".concat(props.classInput),
    size: props.size,
    width: props.width,
    type: props.type,
    valid: props.valid,
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
    pattern: props.pattern,
    title: props.message,
    required: props.required,
    maxLength: props.maxLength
  }), /*#__PURE__*/_react.default.createElement(_Paragraph.default, {
    value: props.message,
    className: "".concat(_FieldModule.default.Message, " message ").concat(validClass(props.valid), " ").concat(props.classMessage)
  })));
};
var _default = Field;
exports.default = _default;
Field.defaultProps = {
  id: "",
  labelId: "",
  inputId: ""
};