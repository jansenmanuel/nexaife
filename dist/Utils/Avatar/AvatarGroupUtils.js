"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGapBasedOnSize = void 0;
var getGapBasedOnSize = function getGapBasedOnSize(size) {
  switch (size) {
    case 'sm':
      return {
        groupGap: 4,
        multipleGap: -12
      };
    case 'md':
      return {
        groupGap: 2,
        multipleGap: -8
      };
    case 'lg':
      return {
        groupGap: 6,
        multipleGap: -16
      };
    case 'xl':
      return {
        groupGap: 8,
        multipleGap: -20
      };
    case '2xl':
      return {
        groupGap: 12,
        multipleGap: -24
      };
    default:
      return {
        groupGap: 2,
        multipleGap: -8
      };
  }
};
exports.getGapBasedOnSize = getGapBasedOnSize;