"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateGap = void 0;
var calculateGap = function calculateGap(size) {
  switch (size) {
    case 'Md':
      return '16px';
    case 'Lg':
      return '24px';
    case 'Sm':
    default:
      return '12px';
  }
};
exports.calculateGap = calculateGap;