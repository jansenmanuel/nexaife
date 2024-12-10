"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _Heading = _interopRequireDefault(require("../../Atomic/Heading/Heading"));
var _ListEmptyModule = _interopRequireDefault(require("./ListEmpty.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ListEmpty = function ListEmpty(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_ListEmptyModule.default.Text, " ").concat(props.className)
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    id: props.id,
    size: 6,
    color: "secondary",
    value: props.value
  }));
};
var _default = ListEmpty;
exports.default = _default;