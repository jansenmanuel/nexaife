"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _reactRouterDom = require("react-router-dom");
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _SideBarIconModule = _interopRequireDefault(require("./SideBarIcon.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Span from '../../../Atomic/Span/Span';

function SideBarIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    id: props.id,
    to: props.to,
    className: props.className,
    key: props.key
  }, /*#__PURE__*/_react.default.createElement(_antd.Popover, {
    id: props.id + "popover",
    placement: "right",
    overlayClassName: "overlay-styale-tooltip",
    content: props.tooltip
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "itemicon",
    className: _SideBarIconModule.default.Icon,
    onClick: props.onClick
  }, props.icon)));
}
var _default = SideBarIcon;
exports.default = _default;