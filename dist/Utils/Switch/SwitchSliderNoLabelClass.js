"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSliderNoLabelClass = void 0;
var _PropsDefault = require("../../Enum/PropsDefault");
var _SwitchModule = _interopRequireDefault(require("../../Molecules/Switch/Switch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var switchSliderNoLabelClass = function switchSliderNoLabelClass(label) {
  var className = _PropsDefault.propsDefault.stringEmpty;
  if (label === _PropsDefault.propsDefault.null) {
    className = _SwitchModule.default.SliderNoLabel;
  }
  return className;
};
exports.switchSliderNoLabelClass = switchSliderNoLabelClass;