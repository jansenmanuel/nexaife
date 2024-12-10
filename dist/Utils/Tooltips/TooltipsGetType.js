"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipsGetType = void 0;
var _antd = require("antd");
// TooltipService.js

var TooltipsGetType = function TooltipsGetType(type) {
  switch (type) {
    case 'table':
      return {
        component: _antd.Tooltip
      };
    case 'chart':
      return {
        component: _antd.Popover
      };
    case 'default':
      return {
        component: _antd.Popover
      };
    default:
      return null;
  }
};
exports.TooltipsGetType = TooltipsGetType;