"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLanguage = exports.default = void 0;
var _react = require("react");
var _LanguageProvider = require("../providers/LanguageProvider");
/**
 * Custom hook to access the LanguageContext.
 * @returns {{ language: string, changeLanguage: (newLanguage: string) => void }}
 */
var useLanguage = function useLanguage() {
  var context = (0, _react.useContext)(_LanguageProvider.LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
exports.useLanguage = useLanguage;
var _default = useLanguage;
exports.default = _default;