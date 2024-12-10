"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _Heading = _interopRequireDefault(require("../../Atomic/Heading/Heading"));
var _PropsDefault = require("../../Enum/PropsDefault");
var _TitlePageModule = _interopRequireDefault(require("./TitlePage.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TitlePage = function TitlePage(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_TitlePageModule.default.TitlePage, " ").concat(props.className),
    onClick: props.onClick
  }, props.icon !== undefined ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    id: props.id + "icon",
    to: props.to,
    className: _TitlePageModule.default.Link
  }, props.icon) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    id: props.id + "title",
    className: _TitlePageModule.default.Title,
    size: props.sizeText,
    value: props.title
  }));
};
var _default = TitlePage;
exports.default = _default;
TitlePage.defaultProps = {
  onClick: _PropsDefault.propsDefault.onClick,
  to: _PropsDefault.propsDefault.to
};