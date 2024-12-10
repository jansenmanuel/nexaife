"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchValueClass = void 0;
var _classNameDefault = require("../../Enum/classNameDefault");
var switchValueClass = function switchValueClass(isChecked) {
  if (isChecked) {
    return _classNameDefault.classNameDefault.valueToggleActive;
  }
  return _classNameDefault.classNameDefault.valueToggle;
};
exports.switchValueClass = switchValueClass;