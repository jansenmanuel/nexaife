"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var NcLink = function NcLink(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    fill: "#424242",
    clipPath: "url(#a)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.406 16.623a.984.984 0 0 0-1.124.198c-.198.189-.386.377-.575.575-.266.266-.541.55-.824.816-.764.73-1.666.97-2.679.738-1.09-.258-1.82-.953-2.12-2.026-.3-1.082-.052-2.043.747-2.859l.824-.824.506-.506c.266-.266.37-.558.31-.884a.955.955 0 0 0-.662-.807c-.386-.13-.738-.043-1.03.249l-.377.369c-.344.343-.704.695-1.048 1.055-1.073 1.142-1.51 2.516-1.305 4.087.327 2.463 2.473 4.189 5.211 4.197.695 0 1.76-.283 2.687-1.073.558-.472 1.073-1.013 1.571-1.528l.223-.231c.12-.12.198-.327.232-.55a.952.952 0 0 0-.567-.996ZM20.948 7.223C20.622 4.786 18.588 3.01 16.115 3h-.017c-1.116 0-2.043.292-2.764.876-.67.54-1.288 1.167-1.88 1.768l-.258.257c-.146.155-.197.447-.197.661.008.404.24.713.643.867.387.146.747.06 1.056-.24l.592-.592c.284-.283.576-.575.868-.85.746-.695 1.613-.944 2.583-.73 1.125.25 1.855.919 2.18 2.009.319 1.073.07 2.052-.746 2.893-.3.318-.61.618-.927.927l-.42.42c-.267.267-.37.559-.318.885.068.395.3.678.67.798a1 1 0 0 0 .343.06c.257 0 .489-.103.695-.3l.283-.283a45.4 45.4 0 0 0 1.108-1.116c1.107-1.15 1.553-2.524 1.339-4.087Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.922 8.253a1.088 1.088 0 0 0-.928.335 531.672 531.672 0 0 1-3.811 3.812l-1.58 1.58c-.06.06-.111.11-.163.18-.24.334-.274.695-.085 1.055.188.37.497.541.987.541h.017c.206 0 .43-.129.678-.369l3.288-3.288 1.554-1.554.592-.592c.335-.352.403-.815.18-1.219a.966.966 0 0 0-.73-.48Z"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M3 3h18v18H3z"
  }))));
};
var _default = NcLink;
exports.default = _default;