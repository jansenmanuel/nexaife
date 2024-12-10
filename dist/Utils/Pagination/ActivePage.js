"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePage = void 0;
var _classNameDefault = require("../../Enum/classNameDefault");
var _PropsDefault = require("../../Enum/PropsDefault");
var activePage = function activePage(currentPage, number) {
  if (number === currentPage) {
    return _classNameDefault.classNameDefault.activePage;
  } else {
    return _PropsDefault.propsDefault.stringEmpty;
  }
};
exports.activePage = activePage;