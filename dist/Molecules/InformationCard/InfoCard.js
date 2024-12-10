"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoCard;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _NotificationBody = _interopRequireDefault(require("./NotificationBody"));
var _InfoCardIconTitle = require("../../Utils/Feedback/InformationCard/InfoCardIconTitle");
var _InfoCardModule = _interopRequireDefault(require("./InfoCard.module.scss"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
var _excluded = ["id", "description", "state", "closable", "width"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function INFOCARD_BASE(_ref) {
  var id = _ref.id,
    description = _ref.description,
    state = _ref.state,
    closable = _ref.closable,
    width = _ref.width,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _getInfoCardIconAndTi = (0, _InfoCardIconTitle.getInfoCardIconAndTitle)(state, t),
    type = _getInfoCardIconAndTi.type,
    Icon = _getInfoCardIconAndTi.Icon,
    title = _getInfoCardIconAndTi.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _InfoCardModule.default.infoCard,
    id: id,
    style: {
      width: width
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Alert, _extends({
    description: /*#__PURE__*/_react.default.createElement(_NotificationBody.default, {
      description: description,
      width: width
    }),
    type: type,
    message: title,
    showIcon: true,
    closable: closable,
    closeIcon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, {
      size: 20
    }),
    icon: /*#__PURE__*/_react.default.createElement(Icon, {
      size: 24
    })
  }, props)));
}
InfoCard.propTypes = {
  description: _propTypes.default.string.isRequired,
  state: _propTypes.default.oneOf(['success', 'warning', 'information', 'error']).isRequired,
  closable: _propTypes.default.bool
};
InfoCard.defaultProps = {
  description: '',
  state: 'information',
  closable: true
};
function InfoCard(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(INFOCARD_BASE, props));
}