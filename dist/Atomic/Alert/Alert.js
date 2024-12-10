"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;
var _react = _interopRequireWildcard(require("react"));
require("./Alert.module.scss");
var _AlertIconTitle = require("../../Utils/Feedback/Alert/AlertIconTitle");
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _antd = require("antd");
var _Close = _interopRequireDefault(require("../../Asset/Icon/Close"));
var _colorConstant = require("../../Constant/colorConstant");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
var _excluded = ["showAlert", "state", "caption", "duration", "onClose", "placement", "className", "onClick", "style", "showClose", "showCaption", "id"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function AlertBase(propss) {
  var showAlert = propss.showAlert,
    state = propss.state,
    caption = propss.caption,
    duration = propss.duration,
    onClose = propss.onClose,
    placement = propss.placement,
    className = propss.className,
    onClick = propss.onClick,
    style = propss.style,
    showClose = propss.showClose,
    showCaption = propss.showCaption,
    id = propss.id,
    props = _objectWithoutProperties(propss, _excluded);
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  (0, _react.useEffect)(function () {
    if (showAlert) {
      var _getAlertIconAndTitle = (0, _AlertIconTitle.getAlertIconAndTitle)(state, t),
        type = _getAlertIconAndTitle.type,
        Icon = _getAlertIconAndTitle.Icon,
        title = _getAlertIconAndTitle.title;
      _antd.notification[type](_objectSpread({
        message: /*#__PURE__*/_react.default.createElement("div", {
          id: id
        }, title),
        description: showCaption ? caption : undefined,
        duration: duration,
        onClose: onClose,
        closeIcon: showClose ? /*#__PURE__*/_react.default.createElement(_Close.default, {
          size: 15,
          color: _colorConstant.CLOSE_ICON_COLOR
        }) : /*#__PURE__*/_react.default.createElement("div", null),
        placement: placement,
        icon: /*#__PURE__*/_react.default.createElement(Icon, {
          size: 18
        }),
        className: className,
        onClick: onClick,
        style: style,
        key: id
      }, props));
    }
  }, [showAlert, state, caption, duration, onClose, placement, className, onClick, style, showClose, showCaption, id]);
  return null;
}
Alert.propTypes = {
  showAlert: _propTypes.default.bool.isRequired,
  state: _propTypes.default.oneOf(['success', 'warning', 'information', 'error']).isRequired,
  caption: _propTypes.default.string.isRequired,
  duration: _propTypes.default.number,
  onClose: _propTypes.default.func,
  placement: _propTypes.default.string,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  showCaption: _propTypes.default.bool,
  showClose: _propTypes.default.bool,
  id: _propTypes.default.string
};
Alert.defaultProps = {
  id: '',
  showAlert: false,
  state: 'information',
  caption: '',
  duration: 4.5,
  onClose: null,
  placement: 'topRight',
  className: '',
  onClick: null,
  style: {},
  showCaption: true,
  showClose: true
};
function Alert(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(AlertBase, props));
}