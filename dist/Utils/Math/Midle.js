"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mid = void 0;
var mid = function mid(totalRow, rowLimit) {
  return Math.ceil(Math.ceil(totalRow / rowLimit) / 2);
};
exports.mid = mid;