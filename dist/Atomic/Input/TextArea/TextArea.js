"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TextArea = _interopRequireDefault(require("antd/es/input/TextArea"));
var _textAreaModule = _interopRequireDefault(require("./textArea.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
var _startCase = _interopRequireDefault(require("lodash/startCase"));
var _excluded = ["size", "className", "valid", "maxWidthError"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextArea = function TextArea(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "Md" : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    valid = _ref.valid,
    maxWidthError = _ref.maxWidthError,
    props = _objectWithoutProperties(_ref, _excluded);
  var textSize = "text".concat((0, _startCase.default)(size));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TextArea.default, _extends({
    className: "".concat(_textAreaModule.default.customTextArea, " ").concat(_textAreaModule.default[textSize], " ").concat(className)
  }, props)), valid === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    maxWidth: maxWidthError,
    size: size,
    text: props === null || props === void 0 ? void 0 : props.errorMessage
  }));
};
TextArea.propTypes = {
  size: _propTypes.default.oneOf(["Sm", "Md", "Lg", "Xl", "2Xl"]),
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  maxWidthError: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = TextArea;
exports.default = _default;