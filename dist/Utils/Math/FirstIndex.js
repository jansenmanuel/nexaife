"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstIndex = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var firstIndex = function firstIndex(array) {
  return _lodash.default.first(array);
};
exports.firstIndex = firstIndex;