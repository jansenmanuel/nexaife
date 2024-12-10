"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _ChevronRight = _interopRequireDefault(require("../../Asset/Icon/ChevronRight"));
var _MoreIcon = _interopRequireDefault(require("../../Asset/Icon/MoreIcon"));
require("./CardCustomCSS.scss");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CardBase = function CardBase(_ref) {
  var id = _ref.id,
    actionProps = _ref.actionProps,
    onClickProps = _ref.onClickProps,
    titileCard = _ref.titileCard,
    roleName = _ref.roleName,
    datagroupName = _ref.datagroupName,
    optionDropdown = _ref.optionDropdown;
  var items = [{
    key: '1',
    label: /*#__PURE__*/_react.default.createElement(_antd.Button, null, "tes")
  }, {
    key: '2',
    label: /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.aliyun.com"
    }, "menu 2")
  }];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-card"
  }, /*#__PURE__*/_react.default.createElement(_antd.Card, {
    id: id,
    style: {
      width: '100%'
      // width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, null, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    sm: 12,
    style: {
      textAlign: 'start'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "title-card"
  }, " ", titileCard)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    sm: 12,
    style: {
      textAlign: 'end'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: actionProps === 1 ? onClickProps : function () {}
  }, actionProps === -1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : actionProps === 1 ? /*#__PURE__*/_react.default.createElement(_ChevronRight.default, null) : /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    menu: {
      items: optionDropdown // Use the prop here
    },

    placement: "bottomLeft"
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_MoreIcon.default, null)))))), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    style: {
      paddingTop: '24px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    sm: 12,
    style: {
      textAlign: 'start'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: "title-card-data"
  }, " ", t("COMMON:CARD.ROLE"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: "desc-card-data"
  }, roleName || t("COMMON:CARD.ROLE_NAME_CARD")))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    sm: 12,
    style: {
      textAlign: 'start'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: "title-card-data"
  }, "Data Group")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: "desc-card-data"
  }, datagroupName || t("COMMON:CARD.DATA_GROUP_CARD")))))));
};
Card.defaultProps = {
  actionProps: 1,
  titileCard: "Pt. Title Card",
  optionDropdown: [{
    key: '1',
    label: /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.aliyun.com"
    }, "menu 1")
  }, {
    key: '2',
    label: /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.aliyun.com"
    }, "menu 2")
  }]
};
function Card(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(CardBase, props));
}