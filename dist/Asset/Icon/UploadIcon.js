"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var UploadIcon = function UploadIcon(_ref) {
  var size = _ref.size,
    color = _ref.color;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clip0_1548_50586)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M31.5 23.461C31.5 23.2921 31.5 23.0973 31.448 22.9285C31.2532 22.2272 30.5519 21.7727 29.8377 21.8506C29.0974 21.9415 28.539 22.5649 28.526 23.3051C28.513 24.1882 28.513 25.0584 28.526 25.9415V27.0973C28.526 28.0844 28.0844 28.5259 27.0974 28.5259H8.88961C7.92857 28.5259 7.47403 28.0844 7.47403 27.1233C7.47403 26.7727 7.47403 26.422 7.47403 26.0844C7.47403 25.2142 7.47403 24.3181 7.46104 23.435C7.44805 23.0973 7.34416 22.7337 7.16234 22.448C6.81169 21.9155 6.13636 21.7207 5.5 21.9285C4.9026 22.1363 4.51299 22.6818 4.5 23.3181C4.5 24.6947 4.5 26.0714 4.51299 27.448C4.51299 27.7467 4.55195 28.0584 4.62987 28.3441C5.11039 30.2532 6.72078 31.4869 8.72078 31.4999C9.99351 31.4999 11.2662 31.4999 12.526 31.4999C13.4351 31.4999 14.3442 31.4999 15.2532 31.4999H19.8117C22.2532 31.4999 24.6948 31.4999 27.1364 31.4999H27.2013C27.448 31.4999 27.7338 31.4999 28.0065 31.448C30.1234 31.0454 31.487 29.396 31.5 27.2532C31.5 25.9934 31.5 24.7337 31.5 23.461Z",
    fill: color ? color : "black"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.0974 4.98052C18.7727 4.65584 18.3961 4.5 18.0065 4.5C17.6298 4.5 17.2402 4.65584 16.9156 4.96753C16.7467 5.13636 16.5779 5.30519 16.422 5.46104L15.7987 6.08442C14.8636 7.03247 13.9285 7.98052 13.0065 8.92857C12.5519 9.38312 12.448 9.94156 12.6818 10.539C12.9026 11.0974 13.3701 11.4351 14.0065 11.461C14.422 11.487 14.8246 11.3182 15.1623 10.9805C15.5259 10.6169 15.8896 10.2662 16.2662 9.9026L16.513 9.66883V23.7857C16.513 24.1104 16.513 24.4481 16.5259 24.7727C16.5389 25.3571 16.8376 25.7987 17.3701 26.0455C17.9026 26.2922 18.448 26.2403 18.9156 25.8896C19.448 25.5 19.5 24.9156 19.5 24.526C19.5 20.6818 19.5 16.8247 19.5 12.9805V9.62987L19.9285 10.0584C20.2532 10.3961 20.5779 10.7208 20.9156 11.0455C21.513 11.6299 22.448 11.6169 23.0195 11.0195C23.5909 10.4351 23.5779 9.51299 23.0065 8.94156C21.7078 7.61688 20.4091 6.29221 19.0974 4.98052Z",
    fill: color ? color : "black"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_1548_50586"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "27",
    height: "27",
    fill: "white",
    transform: "translate(4.5 4.5)"
  }))));
};
var _default = UploadIcon;
exports.default = _default;
UploadIcon.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};