"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonGroup;
var _lodash = _interopRequireDefault(require("lodash"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../Atomic/Button/Button"));
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _ButtonSizeClass = require("../../Utils/Button/ButtonSizeClass");
var _buttonGroupModule = _interopRequireDefault(require("./buttonGroup.module.scss"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ButtonGroupBase = function ButtonGroupBase(_ref) {
  var confirm = _ref.confirm,
    cancel = _ref.cancel,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    mainColor = _ref.mainColor,
    secondaryColor = _ref.secondaryColor,
    idConfirm = _ref.idConfirm,
    idCancel = _ref.idCancel,
    className = _ref.className,
    size = _ref.size,
    disableConfirm = _ref.disableConfirm,
    disableCancel = _ref.disableCancel,
    iconConfirm = _ref.iconConfirm,
    iconCancel = _ref.iconCancel,
    propsConfirm = _ref.propsConfirm,
    propsCancel = _ref.propsCancel,
    direction = _ref.direction;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: "".concat(className ? className : "", " ").concat(direction === "vertical" ? _buttonGroupModule.default.containerButtonVertical : _buttonGroupModule.default.containerButton, " ").concat(_buttonGroupModule.default[(0, _ButtonSizeClass.buttonSizeType)(size)])
  }, /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    size: size,
    className: direction === "vertical" ? _buttonGroupModule.default["buttonVertical".concat(_lodash.default.startCase(size))] : _buttonGroupModule.default["button".concat(_lodash.default.startCase(size))]
  }, propsCancel, {
    id: idCancel,
    disabled: disableCancel,
    onClick: onCancel,
    mainColor: mainColor,
    label: cancel || t("COMMON:CANCEL"),
    secondaryColor: secondaryColor,
    buttonType: "secondary",
    prefixIcon: iconCancel
  })), /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    className: direction === "vertical" ? _buttonGroupModule.default["buttonVertical".concat(_lodash.default.startCase(size))] : _buttonGroupModule.default["button".concat(_lodash.default.startCase(size))],
    size: size
  }, propsConfirm, {
    id: idConfirm,
    disabled: disableConfirm,
    onClick: onConfirm,
    mainColor: mainColor,
    label: confirm || t("COMMON:OK"),
    secondaryColor: secondaryColor,
    buttonType: "primary",
    prefixIcon: iconConfirm
  })));
};
function ButtonGroup(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(ButtonGroupBase, props));
}
ButtonGroup.propTypes = {
  idCancel: _propTypes.default.string,
  cancel: _propTypes.default.string,
  onCancel: _propTypes.default.func,
  idConfirm: _propTypes.default.string,
  confirm: _propTypes.default.string,
  onConfirm: _propTypes.default.func,
  size: _propTypes.default.string,
  disableCancel: _propTypes.default.bool,
  disableConfirm: _propTypes.default.bool,
  direction: _propTypes.default.string
};
ButtonGroup.defaultProps = {
  idCancel: null,
  cancel: null,
  onCancel: function onCancel() {},
  idConfirm: null,
  confirm: null,
  onConfirm: function onConfirm() {},
  size: "md",
  disableCancel: false,
  disableConfirm: false,
  direction: "horizontal"
};