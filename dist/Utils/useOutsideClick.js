"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var useOutsideClick = function useOutsideClick(ref, callback) {
  var handleClick = function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    } else {
      callback(true);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  });
};
var _default = useOutsideClick;
exports.default = _default;