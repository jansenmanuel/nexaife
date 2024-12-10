"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInfoCardIconAndTitle = void 0;
var _react = _interopRequireDefault(require("react"));
var _CheckCircle = _interopRequireDefault(require("../../../Asset/Icon/CheckCircle"));
var _ClosedCircle = _interopRequireDefault(require("../../../Asset/Icon/ClosedCircle"));
var _Warning = _interopRequireDefault(require("../../../Asset/Icon/Warning"));
var _Information = _interopRequireDefault(require("../../../Asset/Icon/Information"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getInfoCardIconAndTitle = function getInfoCardIconAndTitle(state, t) {
  // Convert state to lowercase to ensure case-insensitive matching
  var stateLower = state ? state.toLowerCase() : "";
  switch (stateLower) {
    case 'success':
      return {
        type: 'success',
        Icon: _CheckCircle.default,
        title: t("COMMON:INFORMATION_CARD.TITLE_SUCCESS")
      };
    case 'warning':
      return {
        type: 'warning',
        Icon: _Warning.default,
        title: t("COMMON:INFORMATION_CARD.TITLE_WARNING")
      };
    case 'information':
      return {
        type: 'info',
        Icon: _Information.default,
        title: t("COMMON:INFORMATION_CARD.TITLE_INFO")
      };
    case 'error':
      return {
        type: 'error',
        Icon: _ClosedCircle.default,
        title: t("COMMON:INFORMATION_CARD.TITLE_ERROR")
      };
    default:
      // Fallback case returns 'Information' for any unknown state
      return {
        type: 'info',
        Icon: _Information.default,
        title: t("COMMON:INFORMATION_CARD.TITLE_INFO")
      };
  }
};
exports.getInfoCardIconAndTitle = getInfoCardIconAndTitle;