"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Col = _interopRequireDefault(require("../../../Atomic/Grid/Col/Col"));
var _PropsDefault = require("../../../Enum/PropsDefault");
var _TopBarModule = _interopRequireDefault(require("./TopBar.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TopBar = function TopBar(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_TopBarModule.default.TopBar, " top-bar ").concat(props.className)
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    id: props.id + "topleft",
    width: 6
  }, props.Logo), /*#__PURE__*/_react.default.createElement(_Col.default, {
    id: props.id + "topright",
    width: 6
  }, props.DropDownProfile));
};
var _default = TopBar;
exports.default = _default;
TopBar.defaultProps = {
  id: _PropsDefault.propsDefault.stringEmpty
};