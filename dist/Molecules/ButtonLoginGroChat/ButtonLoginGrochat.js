"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonLoginGrochat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _grochat = _interopRequireDefault(require("../../Asset/Icon/grochat.svg"));
var _NcArrowRight = _interopRequireDefault(require("../../Asset/Icon/NcArrowRight"));
var _LoginGroChatModule = _interopRequireDefault(require("./LoginGroChat.module.scss"));
var _ButtonSizeClass = require("../../Utils/Button/ButtonSizeClass");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BUTTON_LOGIN_GROCHAT_BASE = function BUTTON_LOGIN_GROCHAT_BASE(_ref) {
  var id = _ref.id,
    size = _ref.size,
    label = _ref.label,
    _onClick = _ref.onClick,
    mainColor = _ref.mainColor;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "".concat(_LoginGroChatModule.default.buttonLoginGroChat, " ").concat(_LoginGroChatModule.default["buttonLoginGroChat--".concat(size)]),
    onClick: function onClick() {
      return _onClick(true);
    },
    style: {
      '--main-color': mainColor
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _grochat.default,
    alt: "Logo Brand Nexsoft"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: _LoginGroChatModule.default.label
  }, label || t("COMMON:LOGIN_GROCHAT.TITLE_LOGIN_GROCHAT")), /*#__PURE__*/_react.default.createElement(_NcArrowRight.default, {
    size: (0, _ButtonSizeClass.renderArrowSize)(size)
  }));
};
ButtonLoginGrochat.defaultProps = {
  id: null,
  size: 'm',
  onClick: function onClick() {}
};
ButtonLoginGrochat.propTypes = {
  id: _propTypes.default.string,
  size: _propTypes.default.oneOf(['s', 'm', 'l', 'xl']),
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
function ButtonLoginGrochat(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(BUTTON_LOGIN_GROCHAT_BASE, props));
}