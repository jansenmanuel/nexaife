"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = exports.getSizeDetailContentClass = exports.getSizeClass = exports.getSize = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _DialogModule = _interopRequireDefault(require("../../Molecules/Dialog/Dialog.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getSize = function getSize(size) {
  var sizeLower = size.toLowerCase();
  var dialogSize, imageSize, inputSize;
  switch (sizeLower) {
    case 'sm':
      dialogSize = 400;
      imageSize = 376;
      inputSize = {
        width: 328,
        height: 50
      };
      break;
    case 'md':
      dialogSize = 700;
      imageSize = 584;
      inputSize = {
        width: 600,
        height: 50
      };
      break;
    case 'lg':
      dialogSize = 1080;
      imageSize = 900;
      inputSize = {
        width: 492,
        height: 50
      };
      break;
    case 'xl':
      dialogSize = 1400;
      imageSize = 1116;
      inputSize = {
        width: 600,
        height: 50
      };
      break;
    default:
      dialogSize = 400;
      imageSize = 376;
      inputSize = {
        width: 328,
        height: 50
      };
  }
  return {
    dialogSize: dialogSize,
    imageSize: imageSize,
    inputSize: inputSize,
    dividerSize: _DialogModule.default["Divider".concat(_lodash.default.startCase(size))]
  };
};
exports.getSize = getSize;
var getType = function getType(type, components) {
  var typeLower = type.toLowerCase();
  switch (typeLower) {
    case 'default':
      return {
        footer: components.defaultFooter,
        contentType: components.defaultContent
      };
    case 'ilustration':
      return {
        footer: components.ilustrationFooter,
        contentType: components.ilustrationContent
      };
    case 'detail':
      return {
        footer: components.defaultFooter,
        contentType: components.detailContent
      };
    case 'media':
      return {
        footer: null,
        contentType: components.imageContent
      };
    case 'form':
      return {
        footer: components.defaultFooter,
        contentType: components.formContent
      };
    default:
      return {
        footer: components.defaultFooter,
        contentType: components.defaultContent
      };
  }
};
exports.getType = getType;
var getSizeClass = function getSizeClass(type, size) {
  var dialogSizeClass = _DialogModule.default["dialog".concat(_lodash.default.startCase(type)).concat(_lodash.default.startCase(size))];
  return dialogSizeClass;
};
exports.getSizeClass = getSizeClass;
var getSizeDetailContentClass = function getSizeDetailContentClass(size) {
  var dialogSizeClass = _DialogModule.default["detailContent".concat(_lodash.default.startCase(size))];
  return dialogSizeClass;
};
exports.getSizeDetailContentClass = getSizeDetailContentClass;