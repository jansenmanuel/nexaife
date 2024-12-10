"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _NcClose = _interopRequireDefault(require("../../../Asset/Icon/NcClose"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _MHeader = _interopRequireDefault(require("../../../Atomic/Modal/MHeader/MHeader"));
var _ModalHeaderModule = _interopRequireDefault(require("./ModalHeader.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ModalHeader = function ModalHeader(props) {
  var buttonClose = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_MHeader.default, {
    id: props.id,
    className: props.className
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "title",
    className: props.hideClose ? _ModalHeaderModule.default.ModalHeaderTitleNoIcon : _ModalHeaderModule.default.ModalHeaderTitle
  }, props.title), props.hideClose === true ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "icon",
    onClick: props.onClose,
    className: _ModalHeaderModule.default.ModalHeaderIcon
  }, props.closeIcon));
};
var _default = ModalHeader;
exports.default = _default;
ModalHeader.defaultProps = {
  closeIcon: /*#__PURE__*/_react.default.createElement(_NcClose.default, null),
  hideClose: false,
  id: ""
};