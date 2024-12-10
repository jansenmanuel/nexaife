"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSizeClass = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _sizeDefault = require("../../Enum/sizeDefault");
var _SwitchModule = _interopRequireDefault(require("../../Molecules/Switch/Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var switchSizeClass = function switchSizeClass(size) {
  var className = _PropsDefault.propsDefault.stringEmpty;
  if (size === _sizeDefault.sizeDefault.sm) {
    className = _SwitchModule.default.SliderSm;
  }
  return className;
};
exports.switchSizeClass = switchSizeClass;