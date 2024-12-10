"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastIndex = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var lastIndex = function lastIndex(array) {
  return _lodash.default.lastIndexOf(array);
};
exports.lastIndex = lastIndex;