"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../../../Atomic/Button/Button"));
var _Div = _interopRequireDefault(require("../../../../Atomic/Container/Div/Div"));
var _ActionDatePickerModule = _interopRequireDefault(require("./ActionDatePicker.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ActionDatePicker = function ActionDatePicker(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: props.className
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "btncancel",
    className: _ActionDatePickerModule.default.ButtonCancel,
    onClick: props.closeClick,
    label: props.labelCancel
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "btndone",
    className: _ActionDatePickerModule.default.ButtonDone,
    onClick: props.doneClick,
    label: props.labelDone
  }));
};
var _default = ActionDatePicker;
exports.default = _default;