"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _BreadcrumbModule = _interopRequireDefault(require("./Breadcrumb.module.scss"));
var _ChevronRight = _interopRequireDefault(require("../../Asset/Icon/ChevronRight"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["items", "id", "onClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Breadcrumb = function Breadcrumb(_ref) {
  var items = _ref.items,
    id = _ref.id,
    _onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: _BreadcrumbModule.default.breadcrumb
  }, props, {
    id: id
  }), items === null || items === void 0 ? void 0 : items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return _onClick(item);
      },
      id: item.key,
      key: item.key,
      className: _BreadcrumbModule.default.breadcrumbItem
    }, /*#__PURE__*/_react.default.createElement("div", {
      to: item.to,
      className: "".concat(_BreadcrumbModule.default.breadcrumbItemText, " ").concat(index === items.length - 1 ? _BreadcrumbModule.default.breadcrumbCurrent : '')
    }, item.label), index < items.length - 1 && /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
      size: 15,
      color: "#ACACAC"
    }));
  }));
};

// Define PropTypes for the component
Breadcrumb.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    to: _propTypes.default.string,
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  })),
  onClick: _propTypes.default.func,
  id: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  items: [],
  onClick: function onClick() {},
  id: ''
};
var _default = Breadcrumb;
exports.default = _default;