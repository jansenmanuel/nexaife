"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _InputFloatingModule = _interopRequireDefault(require("./InputFloating.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var InputFloating = function InputFloating(props) {
  var required = props.required;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, required === "true" ? /*#__PURE__*/_react.default.createElement("input", {
    className: _InputFloatingModule.default.Input,
    type: props.type,
    name: props.name,
    value: props.input,
    onChange: props.onChange,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    required: true
  }) : /*#__PURE__*/_react.default.createElement("input", {
    className: props.className,
    type: props.type,
    name: props.name,
    value: props.input,
    onChange: props.onChange,
    placeHolder: props.placeholder,
    defaultValue: props.defaultValue
  }));
};
var _default = InputFloating;
exports.default = _default;