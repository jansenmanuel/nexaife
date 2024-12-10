"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Flex = _interopRequireDefault(require("../../../Atomic/Container/Flex/Flex"));
var _BottomContentModule = _interopRequireDefault(require("./BottomContent.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BottomContent = function BottomContent(props) {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    id: props.id,
    className: "".concat(props.className, " ").concat(_BottomContentModule.default.Container)
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(props.classSidebar, " ").concat(_BottomContentModule.default.ContentLeft)
  }, props.sideBar), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(props.classContent, " ")
  }, props.content));
};
var _default = BottomContent;
exports.default = _default;