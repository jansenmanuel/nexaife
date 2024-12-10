"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateId = void 0;
var generateId = function generateId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  return "".concat(prefix, "-").concat(Math.random().toString(36).substring(2, 9));
};
exports.generateId = generateId;