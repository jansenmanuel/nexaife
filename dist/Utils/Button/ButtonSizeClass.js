"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderArrowSize = exports.buttonSizeType = exports.buttonSizeSuffPreffIcon = exports.buttonSizeOnlyIcon = exports.buttonSizeClass = exports.ButtonContainerSize = void 0;
var _ButtonModule = _interopRequireDefault(require("../../Atomic/Button/Button.module.scss"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var buttonSizeClass = function buttonSizeClass(size, type) {
  var sizeClass = _ButtonModule.default.ButtonMd;
  if (type.toLowerCase() === "link") {
    sizeClass = _ButtonModule.default["Button".concat(_lodash.default.startCase(size), "Link")];
  } else {
    sizeClass = _ButtonModule.default["Button".concat(_lodash.default.startCase(size))];
    // if (size === "xs") {
    //   sizeClass = style.ButtonXs;
    // } else if (size === "sm") {
    //   sizeClass = style.ButtonSm;
    // } else if (size === "lg") {
    //   sizeClass = style.ButtonLg;
    // } else if (size === "xl") {
    //   sizeClass = style.ButtonXl;
    // } else if (size === "xxl") {
    //   sizeClass = style.ButtonXxl;
    // }
  }

  return sizeClass;
};
exports.buttonSizeClass = buttonSizeClass;
var buttonSizeOnlyIcon = function buttonSizeOnlyIcon(size) {
  var btnSizeIcon = "Button".concat(_lodash.default.startCase(size), "OnlyIcon");
  return btnSizeIcon;
};
exports.buttonSizeOnlyIcon = buttonSizeOnlyIcon;
var buttonSizeSuffPreffIcon = function buttonSizeSuffPreffIcon(size, type) {
  var btnSizeIcon = type === "link" ? "Button".concat(_lodash.default.startCase(size), "SuffPreffIconLink") : "Button".concat(_lodash.default.startCase(size), "SuffPreffIcon");
  return btnSizeIcon;
};
exports.buttonSizeSuffPreffIcon = buttonSizeSuffPreffIcon;
var buttonSizeType = function buttonSizeType(size) {
  var sizeType = "buttonGroupXs";
  if (size === "xs") {
    sizeType = "buttonGroupXs";
  } else if (size === "sm") {
    sizeType = "buttonGroupSm";
  } else if (size === "md") {
    sizeType = "buttonGroupMd";
  } else if (size === "lg") {
    sizeType = "buttonGroupLg";
  } else if (size === "xl") {
    sizeType = "buttonGroupXl";
  } else if (size === "xxl") {
    sizeType = "buttonGroupXxl";
  }
  return sizeType;
};
exports.buttonSizeType = buttonSizeType;
var ButtonContainerSize = function ButtonContainerSize(size) {
  var style = "ButtonContainerLinkXs";
  if (size === "sm") {
    style = "ButtonContainerLinkSm";
  } else if (size === "md") {
    style = "ButtonContainerLinkMd";
  } else if (size === "lg") {
    style = "ButtonContainerLinkLg";
  } else if (size === "xl") {
    style = "ButtonContainerLinkXl";
  } else if (size === "xxl") {
    style = "ButtonContainerLinkXxl";
  }
  return style;
};
exports.ButtonContainerSize = ButtonContainerSize;
var renderArrowSize = function renderArrowSize(size) {
  switch (size) {
    case "s":
      return "18px";
    case "m":
      return "20px";
    case "l":
      return "26px";
    case "xl":
      return "40px";
    default:
      return "26px";
  }
};
exports.renderArrowSize = renderArrowSize;