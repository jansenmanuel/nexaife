"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Hooks to only call effect function once
 * @param {EffectCallback} effect
 */
var useEffectOnce = function useEffectOnce(effect) {
  var isFirstRun = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (!isFirstRun.current) return;
    isFirstRun.current = false;
    effect && effect();
  }, []);
};
var _default = useEffectOnce;
exports.default = _default;