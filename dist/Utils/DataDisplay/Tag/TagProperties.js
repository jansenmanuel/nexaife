"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = void 0;
var _colorConstant = require("../../../Constant/colorConstant");
var getProperties = function getProperties(state) {
  var stateLower = state ? state.toLowerCase() : "";
  switch (stateLower) {
    case 'default':
      return {
        backgroundColor: _colorConstant.COLOR_BACKGROUND_GRAY,
        borderColor: _colorConstant.COLOR_BORDER,
        fontColor: _colorConstant.COLOR_TEXT
      };
    case 'outlined':
      return {
        backgroundColor: '',
        borderColor: _colorConstant.COLOR_BORDER,
        fontColor: _colorConstant.COLOR_TEXT
      };
    case 'colored':
      return {
        backgroundColor: '',
        borderColor: '',
        fontColor: _colorConstant.COLOR_TEXT_INVERSE
      };
    case 'disabled':
      return {
        backgroundColor: _colorConstant.COLOR_BACKGROUND_DISABLED,
        borderColor: _colorConstant.COLOR_BORDER,
        fontColor: _colorConstant.COLOR_TEXT_DISABLED
      };
    default:
      return {
        backgroundColor: _colorConstant.COLOR_BACKGROUND_GRAY,
        borderColor: _colorConstant.COLOR_BORDER,
        fontColor: _colorConstant.COLOR_TEXT
      };
  }
};
exports.getProperties = getProperties;