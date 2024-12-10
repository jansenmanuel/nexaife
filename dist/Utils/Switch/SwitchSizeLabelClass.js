"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSizeLableClass = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _sizeDefault = require("../../Enum/sizeDefault");
var _SwitchModule = _interopRequireDefault(require("../../Molecules/Switch/Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var switchSizeLableClass = function switchSizeLableClass(size) {
  var className = _PropsDefault.propsDefault.stringEmpty;
  if (size === _sizeDefault.sizeDefault.sm) {
    className = _SwitchModule.default.SwitchSm;
  }
  return className;
};
exports.switchSizeLableClass = switchSizeLableClass;