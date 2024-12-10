"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchLabelClass = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _SwitchModule = _interopRequireDefault(require("../../Molecules/Switch/Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var switchLabelClass = function switchLabelClass(label) {
  var className = _PropsDefault.propsDefault.stringEmpty;
  if (label === _PropsDefault.propsDefault.null) {
    className = "".concat(_SwitchModule.default.SwitchNoLabel, " switch-no-label");
  }
  return className;
};
exports.switchLabelClass = switchLabelClass;