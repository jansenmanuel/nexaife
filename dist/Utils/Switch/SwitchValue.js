"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchValue = void 0;
var switchValue = function switchValue(isChecked, active, deactive) {
  if (isChecked) {
    return active;
  }
  return deactive;
};
exports.switchValue = switchValue;