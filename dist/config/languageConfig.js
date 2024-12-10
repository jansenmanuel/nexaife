"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.languageResources = void 0;
var _id = _interopRequireDefault(require("../locales/common/id.json"));
var _en = _interopRequireDefault(require("../locales/common/en.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var languageResources = {
  en: {
    COMMON: _en.default
  },
  id: {
    COMMON: _id.default
  }
};
exports.languageResources = languageResources;