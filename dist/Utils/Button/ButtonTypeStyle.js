"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonTypeStyle = exports.buttonBorderTypeSize = void 0;
var buttonTypeStyle = function buttonTypeStyle(style) {
  var typeStyle = "button-primary";
  if (style === "secondary") {
    typeStyle = "button-secondary";
  } else if (style === "tertiary") {
    typeStyle = "button-tertiary";
  } else if (style === "link") {
    typeStyle = "button-link";
  }
  return typeStyle;
};
exports.buttonTypeStyle = buttonTypeStyle;
var buttonBorderTypeSize = function buttonBorderTypeSize(type) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sm";
  var value = size.toLowerCase();
  if (type === "secondary") {
    var borderStyle = "borderSmall";
    if (value === "xl" || value === "xxl") {
      borderStyle = "borderLarge";
    }
    return borderStyle;
  }
};
exports.buttonBorderTypeSize = buttonBorderTypeSize;