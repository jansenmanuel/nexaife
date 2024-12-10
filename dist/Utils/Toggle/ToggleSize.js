"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSpace = void 0;
var renderSpace = function renderSpace(size) {
  switch (size) {
    case "sm":
      return 6;
    case "md":
      return 8;
    case "lg":
      return 10;
    case "xl":
      return 12;
    case "xxl":
      return 14;
  }
};
exports.renderSpace = renderSpace;