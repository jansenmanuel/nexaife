"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _SelectorDialogModule = _interopRequireDefault(require("./SelectorDialog.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SelectorDialog = function SelectorDialog(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var open = props.open,
    onCancel = props.onCancel,
    children = props.children;
  return /*#__PURE__*/_react.default.createElement(_antd.Modal, _extends({
    width: 1000,
    className: _SelectorDialogModule.default.modal,
    open: open,
    centered: true,
    closable: false,
    footer: false,
    onCancel: onCancel
  }, props), children);
};
var _default = SelectorDialog;
exports.default = _default;