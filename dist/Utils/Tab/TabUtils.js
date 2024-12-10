"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizeClass = exports.getSize = void 0;
var _TabsModule = _interopRequireDefault(require("../../Atomic/Tab/Tabs.module.scss"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getSize = function getSize(size) {
  var sizeLower = size.toLowerCase();
  var iconSize, gap;
  switch (sizeLower) {
    case 'sm':
      iconSize = '16.5px';
      gap = '4px';
      break;
    case 'md':
      iconSize = '19.5px';
      gap = '8px';
      break;
    case 'lg':
      iconSize = '24px';
      gap = '12px';
      break;
    default:
      iconSize = '19.5px';
      gap = '8px';
  }
  return {
    iconSize: iconSize,
    gap: gap,
    sizeClass: _TabsModule.default["Title".concat(_lodash.default.startCase(size))]
  };
};
exports.getSize = getSize;
var getSizeClass = function getSizeClass(size) {
  return _TabsModule.default["tabsContainer".concat(_lodash.default.startCase(size))];
};
exports.getSizeClass = getSizeClass;