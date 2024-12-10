"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LanguageContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18nConfig = _interopRequireDefault(require("../config/i18nConfig"));
var _reactI18next = require("react-i18next");
var _antd = require("antd");
var _moment = _interopRequireDefault(require("moment"));
require("moment/locale/id");
require("moment/locale/en-gb");
var _id_ID = _interopRequireDefault(require("antd/es/locale/id_ID"));
var _en_GB = _interopRequireDefault(require("antd/es/locale/en_GB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LanguageContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.LanguageContext = LanguageContext;
var localeMap = {
  en: _en_GB.default,
  id: _id_ID.default
};
var LanguageProvider = function LanguageProvider(_ref) {
  var children = _ref.children,
    _ref$defaultLanguage = _ref.defaultLanguage,
    defaultLanguage = _ref$defaultLanguage === void 0 ? "en" : _ref$defaultLanguage;
  var _useState = (0, _react.useState)(defaultLanguage),
    _useState2 = _slicedToArray(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];

  /**
   * Function to change the application's language.
   * It updates the language state, synchronizes with i18n and moment locales.
   *
   * @param {string} newLanguage - The new language code (e.g., 'en', 'id').
   */
  var changeLanguage = (0, _react.useCallback)(function (newLanguage) {
    setLanguage(newLanguage);
    _i18nConfig.default.changeLanguage(newLanguage);
    _moment.default.locale(newLanguage);
  }, []);
  (0, _react.useEffect)(function () {
    _i18nConfig.default.changeLanguage(defaultLanguage);
    _moment.default.locale(defaultLanguage);
  }, [defaultLanguage]);
  return /*#__PURE__*/_react.default.createElement(LanguageContext.Provider, {
    value: {
      language: language,
      changeLanguage: changeLanguage
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.ConfigProvider, {
    locale: localeMap[language] || _en_GB.default
  }, children));
};
var _default = LanguageProvider;
exports.default = _default;