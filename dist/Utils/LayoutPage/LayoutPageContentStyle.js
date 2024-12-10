"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentStyle = void 0;
var _LayoutPageModule = _interopRequireDefault(require("../../Organisms/Layout/LayoutPage/LayoutPage.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var contentStyle = function contentStyle(collapse, menu) {
  var contentClass = _LayoutPageModule.default.ContentExpand;
  if (collapse && menu !== undefined) {
    contentClass = _LayoutPageModule.default.Content;
  }
  return contentClass;
};
exports.contentStyle = contentStyle;