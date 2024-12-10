"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ = require("../../");
var _NcArrowRight = _interopRequireDefault(require("../../Asset/Icon/NcArrowRight"));
var _Li = _interopRequireDefault(require("../../Atomic/List/Li/Li"));
var _Ol = _interopRequireDefault(require("../../Atomic/List/Ol/Ol"));
var _Nav = _interopRequireDefault(require("../../Atomic/NavBar/Nav/Nav"));
var _classNameDefault = require("../../Enum/classNameDefault");
var _IdDefault = require("../../Enum/IdDefault");
var _PropsDefault = require("../../Enum/PropsDefault");
var _BreadcrumbModule = _interopRequireDefault(require("./Breadcrumb.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Breadcrumb(props) {
  // nexIcon;
  return /*#__PURE__*/_react.default.createElement(_Nav.default, {
    id: props.id
  }, /*#__PURE__*/_react.default.createElement(_Ol.default, {
    id: props.id + _IdDefault.idDefault.orderList,
    className: "".concat(_BreadcrumbModule.default.Breadcrumb, " breadcrumb")
  }, props.list.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Li.default, {
      key: index,
      id: props.id + _IdDefault.idDefault.list + index
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: item.to,
      id: props.id + _IdDefault.idDefault.hyperlink + +index
    }, item.value), /*#__PURE__*/_react.default.createElement(_NcArrowRight.default, {
      id: props.id + _IdDefault.idDefault.icon,
      className: "".concat(_BreadcrumbModule.default.IconBreadcrumb, " ").concat(_classNameDefault.classNameDefault.iconBreadcrumb),
      size: _PropsDefault.propsDefault.iconSizeSm
    }));
  }), /*#__PURE__*/_react.default.createElement(_Li.default, {
    id: props.id + _IdDefault.idDefault.list + "default",
    className: _BreadcrumbModule.default.Default
  }, props.default)));
}
var _default = Breadcrumb;
exports.default = _default;
Breadcrumb.defaultProps = {
  id: ""
};