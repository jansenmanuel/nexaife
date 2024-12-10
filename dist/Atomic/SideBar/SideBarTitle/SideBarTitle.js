"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
var _PropsDefault = require("../../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SideBarTitle = function SideBarTitle(props) {
  var className = props.className,
    onClick = props.onClick,
    value = props.value;
  return /*#__PURE__*/_react.default.createElement("p", {
    id: props.id,
    className: className,
    onClick: onClick
  }, value);
};
var _default = SideBarTitle;
exports.default = _default;
SideBarTitle.propTypes = {
  onClick: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.string
};
SideBarTitle.defaultProps = {
  onClick: undefined,
  value: "",
  id: _PropsDefault.propsDefault.stringEmpty
};