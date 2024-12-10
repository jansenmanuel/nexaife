"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _LayoutPageContentStyle = require("../../../Utils/LayoutPage/LayoutPageContentStyle");
var _LayoutPageSideBarStyle = require("../../../Utils/LayoutPage/LayoutPageSideBarStyle");
var _LayoutPageModule = _interopRequireDefault(require("./LayoutPage.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LayoutPage = function LayoutPage(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.topBar, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.idContentBotton,
    className: _LayoutPageModule.default.Container
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.idSide,
    className: (0, _LayoutPageSideBarStyle.sidebarStyle)(props.collapse, props.sideBarType)
  }, props.sideBar), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.idContent,
    className: "".concat((0, _LayoutPageContentStyle.contentStyle)(props.collapse, props.sideBarType), " content")
  }, props.content)));
};
var _default = LayoutPage;
exports.default = _default;