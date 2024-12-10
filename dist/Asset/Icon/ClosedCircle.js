"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ClosedCircle = function ClosedCircle(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    onClick: props.onClick,
    id: props.id,
    width: props.size,
    height: props.size,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.63 11.46C12.285 11.115 10.8 9.63 10.1625 9C10.875 8.295 12.585 6.5925 12.615 6.5625C12.645 6.5325 12.6825 6.495 12.705 6.4575C12.8475 6.2775 12.9075 6.06 12.8775 5.8425C12.8475 5.625 12.735 5.4225 12.555 5.2875C12.225 5.03251 11.76 5.07 11.445 5.3775L11.0025 5.82C10.38 6.4425 9.435 7.3875 8.985 7.8375C8.3025 7.125 6.6 5.4225 6.57 5.4L6.495 5.325C6.1875 5.0475 5.7375 5.04 5.415 5.295C5.2275 5.445 5.1225 5.6625 5.1075 5.8875C5.1 6.135 5.19 6.3675 5.3775 6.5475C5.4 6.57 7.1175 8.295 7.8375 9C7.2225 9.6075 5.8275 11.0025 5.3925 11.4375L5.325 11.5125C5.1375 11.715 5.07 12 5.1375 12.27C5.205 12.5325 5.4075 12.75 5.67 12.84C5.7675 12.87 5.8575 12.885 5.955 12.885C6.1725 12.885 6.3825 12.795 6.555 12.615C6.645 12.525 8.295 10.8675 8.9925 10.1625C9.435 10.5975 10.3125 11.4825 10.815 11.9775L11.01 12.1725C11.16 12.3225 11.31 12.4725 11.46 12.63C11.6175 12.7875 11.8275 12.8775 12.0525 12.885H12.06C12.2775 12.885 12.4875 12.8025 12.6375 12.6525C12.8025 12.495 12.885 12.285 12.8925 12.0675C12.8925 11.8425 12.8025 11.625 12.63 11.46Z",
    fill: "#CB1801"
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.9925 1.04385e-05C13.965 -0.00748955 18.0075 4.02751 18 9C18 13.98 13.9875 17.9925 9.0075 18C4.03501 18.0075 -0.00748957 13.9725 1.04191e-05 8.9925C0.00751041 4.02001 4.02001 0.00751043 8.9925 1.04385e-05ZM9.0075 1.79251C5.05501 1.78501 1.80751 5.0175 1.79251 8.9925C1.77751 12.945 5.01 16.185 8.985 16.215C12.93 16.245 16.2075 12.975 16.215 9.0075C16.215 5.04001 12.975 1.80001 9.0075 1.79251Z",
    fill: props.color
  }));
};
var _default = ClosedCircle;
exports.default = _default;
ClosedCircle.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: "#CB1801"
};