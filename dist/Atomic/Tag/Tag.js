"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TagModule = _interopRequireDefault(require("./Tag.module.scss"));
var _TagProperties = require("../../Utils/DataDisplay/Tag/TagProperties");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Tag = function Tag(_ref) {
  var id = _ref.id,
    iconLeft = _ref.iconLeft,
    closable = _ref.closable,
    iconRight = _ref.iconRight,
    title = _ref.title,
    size = _ref.size,
    state = _ref.state,
    color = _ref.color,
    onClose = _ref.onClose,
    fontColorProps = _ref.fontColorProps;
  var _getProperties = (0, _TagProperties.getProperties)(state),
    backgroundColor = _getProperties.backgroundColor,
    borderColor = _getProperties.borderColor,
    fontColor = _getProperties.fontColor;
  var renderTag = "".concat(_TagModule.default["Tag".concat(size)]);
  var renderLabel = "".concat(_TagModule.default["Label".concat(size)]);
  var renderState = "".concat(_TagModule.default["State".concat(state)]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: renderTag
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    id: id,
    className: renderState,
    icon: iconLeft,
    closeIcon: iconRight,
    closable: closable,
    color: backgroundColor ? backgroundColor : color,
    size: size,
    onClose: onClose,
    style: {
      cursor: 'pointer',
      borderColor: state === 'outlined' && fontColorProps ? fontColorProps : borderColor
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: renderLabel,
    style: {
      color: fontColorProps ? fontColorProps : fontColor
    }
  }, title)));
};
Tag.propTypes = {
  iconLeft: _propTypes.default.element,
  closable: _propTypes.default.bool,
  iconRight: _propTypes.default.element,
  title: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  state: _propTypes.default.oneOf(['default', 'colored', 'outlined', 'disabled']),
  color: _propTypes.default.string,
  onClose: _propTypes.default.func
};
Tag.defaultProps = {
  size: 'md',
  closable: false,
  state: 'default',
  onClose: function onClose() {}
};
var _default = Tag;
exports.default = _default;