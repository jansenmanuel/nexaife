"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _ImageStyled = _interopRequireDefault(require("../../Atomic/Image/Image/ImageStyled"));
var _Paragraph = _interopRequireDefault(require("../../Atomic/Paragraph/Paragraph"));
var _NotificationModule = _interopRequireDefault(require("./Notification.module.css"));
var _NotificationUtils = require("./NotificationUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Notification = function Notification(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    exit = _useState2[0],
    setExit = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    width = _useState4[0],
    setWidth = _useState4[1];
  // eslint-disable-next-line no-unused-vars
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    intervalID = _useState6[0],
    setIntervalID = _useState6[1];
  var handleStartTimer = function handleStartTimer() {
    var id = setInterval(function () {
      setWidth(function (prev) {
        if (prev < 50) {
          return prev + 1;
        }
        clearInterval(id);
        return prev;
      });
    }, 50);
    setIntervalID(id);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  var handleCloseNotification = (0, _react.useCallback)(function () {
    setExit(true);
    setTimeout(function () {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id
      });
    }, 50);
  });
  (0, _react.useEffect)(function () {
    if (width === 50) {
      handleCloseNotification();
    }
  }, [width, handleCloseNotification]);
  (0, _react.useEffect)(function () {
    handleStartTimer();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    onMouseLeave: handleStartTimer,
    className: "".concat(_NotificationModule.default.NotificationItem, " notification-item ").concat((0, _NotificationUtils.borderNotification)(props.type), " ").concat(exit ? _NotificationModule.default.Exit : ""),
    onClick: handleCloseNotification
  }, /*#__PURE__*/_react.default.createElement(_ImageStyled.default, {
    id: props.id,
    src: (0, _NotificationUtils.iconNotification)(props.type),
    alt: "icon"
  }), /*#__PURE__*/_react.default.createElement(_Paragraph.default, {
    id: props.id,
    value: (0, _NotificationUtils.messageNotification)(props.message)
  }));
};
var _default = Notification;
exports.default = _default;