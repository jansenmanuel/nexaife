"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcInfo = function NcInfo(_ref) {
  var id = _ref.id,
    size = _ref.size,
    color = _ref.color;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clip0_3726_33179)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.2184 24.3955C21.0997 24.3955 20.9968 24.3656 20.9573 24.3157C20.9256 24.2758 20.9098 24.206 20.9098 24.1063C20.9098 23.9468 20.9177 23.7075 20.9652 23.4981C21.1551 22.6008 21.3528 21.7134 21.5506 20.826C21.7089 20.138 21.7405 19.5797 21.6772 19.0413C21.5665 18.2237 20.9019 17.5656 20.1266 17.5058C19.4304 17.456 18.8212 17.7351 18.2278 18.0043L18.0142 18.1041C17.9193 18.1439 17.7848 18.2636 17.7373 18.453C17.6978 18.6126 17.6661 18.7721 17.6424 18.9316L17.5 19.6495L17.9589 19.5298C18.0459 19.5099 18.125 19.48 18.2041 19.46C18.3544 19.4102 18.5047 19.3703 18.663 19.3603C18.8291 19.3504 18.9557 19.3703 19.0111 19.4401C19.0665 19.5099 19.0585 19.6694 19.0506 19.7492C19.0111 20.158 18.9399 20.5668 18.8528 20.9855C18.7896 21.3146 18.7104 21.6436 18.6313 21.9627C18.4652 22.6407 18.2911 23.3486 18.2516 24.0964C18.2199 24.8142 18.4335 25.3826 18.8845 25.7914C19.2326 26.1004 19.6203 26.25 20.0712 26.25C20.2611 26.25 20.4589 26.2201 20.6646 26.1702C21.0047 26.0905 21.3212 25.9409 21.6377 25.8013C21.7563 25.7515 21.875 25.6916 21.9937 25.6418C22.1202 25.582 22.2389 25.4424 22.2785 25.2829C22.3101 25.1433 22.3418 25.0037 22.3655 24.8641L22.5 24.1961L21.7801 24.3057C21.5902 24.3656 21.4082 24.3955 21.2184 24.3955Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.625 16.25C21.6605 16.25 22.5 15.4105 22.5 14.375C22.5 13.3395 21.6605 12.5 20.625 12.5C19.5895 12.5 18.75 13.3395 18.75 14.375C18.75 15.4105 19.5895 16.25 20.625 16.25Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.9879 5.00002C28.2796 4.98792 35.0121 11.711 35 20.006C34.9879 28.301 28.3038 34.9878 20.0121 34.9999C11.7325 35.0241 4.98793 28.2889 5.00002 19.9939C5.0121 11.711 11.6962 5.01211 19.9879 5.00002ZM20.0121 7.98671C13.4247 7.97461 8.00969 13.3676 7.98551 19.9818C7.96134 26.5719 13.3401 31.977 19.9758 32.0253C26.5512 32.0737 32.0145 26.6203 32.0145 20.006C32.0145 13.4039 26.6237 7.9988 20.0121 7.98671Z",
    fill: color
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_3726_33179"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "30",
    height: "30",
    fill: "white",
    transform: "translate(5 5)"
  }))));
};
var _default = NcInfo;
exports.default = _default;
NcInfo.defaultProps = {
  size: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};