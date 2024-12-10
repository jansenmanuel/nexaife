"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSizeValueClass = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _sizeDefault = require("../../Enum/sizeDefault");
var _SwitchModule = _interopRequireDefault(require("../../Molecules/Switch/Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var switchSizeValueClass = function switchSizeValueClass(size) {
  var className = _PropsDefault.propsDefault.stringEmpty;
  if (size === _sizeDefault.sizeDefault.sm) {
    className = _SwitchModule.default.ValueSm;
  }
  return className;
};
exports.switchSizeValueClass = switchSizeValueClass;