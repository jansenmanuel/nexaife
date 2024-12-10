"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Close = function Close(_ref) {
  var onClick = _ref.onClick,
    id = _ref.id,
    size = _ref.size,
    color = _ref.color,
    className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("svg", {
    onClick: onClick,
    id: id,
    width: size,
    height: size,
    className: className,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.97254 9.35876C7.93242 9.41227 4.10173 13.2785 2.21647 15.1648C1.90895 15.4725 1.55463 15.5796 1.14682 15.4391C0.49166 15.2117 0.2911 14.4023 0.745702 13.8805C0.785814 13.8337 0.825926 13.7936 0.866038 13.7535C2.73793 11.8805 6.5753 8.0544 6.64884 7.9942C6.58199 7.94068 2.71787 4.09449 0.832611 2.20818C0.378009 1.75333 0.39138 1.10449 0.866038 0.716529C1.22705 0.415523 1.76187 0.43559 2.12288 0.756664C2.17636 0.803487 2.22316 0.85031 2.26996 0.897133C4.13516 2.76337 7.93911 6.5895 7.97254 6.62963C7.99259 6.63632 11.9102 2.71655 13.8021 0.823554C14.1832 0.442279 14.718 0.395456 15.1125 0.696462C15.5537 1.0376 15.6272 1.63962 15.2863 2.0744C15.2395 2.1346 15.1793 2.18812 15.1258 2.24832C13.2539 4.12125 9.40988 7.94737 9.34303 7.9942C9.41657 8.0544 13.2874 11.914 15.1793 13.807C15.6005 14.2284 15.6005 14.8304 15.1994 15.2317C14.845 15.5796 14.2033 15.5929 13.8155 15.1983C13.3609 14.7301 12.8929 14.2685 12.4316 13.807Z",
    fill: color
  }));
};
Close.propTypes = {
  onClick: _propTypes.default.func,
  id: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  className: _propTypes.default.string
};
Close.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: "#818181",
  className: ''
};
var _default = Close;
exports.default = _default;