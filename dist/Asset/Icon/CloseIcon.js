"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CloseIcon = function CloseIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    id: props.id,
    width: props.size,
    height: props.size,
    onClick: props.onClick,
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.97803 7.08701C5.94594 7.12982 2.88139 10.2228 1.37318 11.7319C1.12716 11.978 0.843701 12.0636 0.517457 11.9513C-0.00667215 11.7693 -0.16712 11.1218 0.196562 10.7044C0.228651 10.667 0.260741 10.6349 0.29283 10.6028C1.79034 9.10442 4.86024 6.04352 4.91907 5.99536C4.86559 5.95255 1.7743 2.87559 0.266089 1.36655C-0.0975926 1.00266 -0.086896 0.483595 0.29283 0.173223C0.581636 -0.0675817 1.0095 -0.051528 1.2983 0.205331C1.34109 0.242789 1.37853 0.280248 1.41596 0.317707C2.90813 1.8107 5.95129 4.8716 5.97803 4.90371C5.99407 4.90906 9.12815 1.77324 10.6417 0.258843C10.9466 -0.0461768 11.3744 -0.0836353 11.69 0.15717C12.043 0.430082 12.1018 0.911693 11.829 1.25952C11.7916 1.30768 11.7435 1.35049 11.7007 1.39865C10.2032 2.897 7.1279 5.9579 7.07442 5.99536C7.13325 6.04352 10.2299 9.13118 11.7435 10.6456C12.0804 10.9827 12.0804 11.4643 11.7595 11.7854C11.476 12.0636 10.9626 12.0743 10.6524 11.7586C10.2887 11.384 9.91435 11.0148 9.54532 10.6456C8.39009 9.49506 6.03151 7.14052 5.97803 7.08701Z",
    fill: props.color
  }));
};
var _default = CloseIcon;
exports.default = _default;
CloseIcon.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};