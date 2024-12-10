"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageSlice = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _LastIndex = require("../Math/LastIndex");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var pageSlice = function pageSlice(pageNumber) {
  return _lodash.default.slice(pageNumber, [1], [(0, _LastIndex.lastIndex)(pageNumber) - 1]);
};
exports.pageSlice = pageSlice;