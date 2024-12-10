"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18next = require("i18next");
var _languageConfig = require("./languageConfig");
var i18n = (0, _i18next.createInstance)({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: _languageConfig.languageResources
});
i18n.init();
var _default = i18n;
exports.default = _default;