"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAutoClose = void 0;
var _react = require("react");
var useAutoClose = function useAutoClose(isVisible, autoClose, onClose) {
  (0, _react.useEffect)(function () {
    var timer = null;
    if (isVisible && typeof autoClose === 'number') {
      timer = setTimeout(function () {
        if (onClose) onClose();
      }, autoClose);
    }
    return function () {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, autoClose, onClose]);
};
exports.useAutoClose = useAutoClose;