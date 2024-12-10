"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Toggle = _interopRequireDefault(require("../../Atomic/Toggle/Toggle"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ToggleGroupModule = _interopRequireDefault(require("./ToggleGroup.module.scss"));
var _ErrorInformation = _interopRequireDefault(require("../../Atomic/Error/ErrorInformation"));
var _Information = _interopRequireDefault(require("../../Atomic/Information/Information"));
var _colorConstant = require("../../Constant/colorConstant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ToggleGroup = function ToggleGroup(_ref) {
  var id = _ref.id,
    size = _ref.size,
    label = _ref.label,
    toggleLabel = _ref.toggleLabel,
    informationTop = _ref.informationTop,
    informationBottom = _ref.informationBottom,
    errorInformation = _ref.errorInformation,
    labelColor = _ref.labelColor,
    _ref$checkColor = _ref.checkColor,
    checkColor = _ref$checkColor === void 0 ? _colorConstant.BLUE_COLOR : _ref$checkColor,
    disabled = _ref.disabled,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  var renderLabel = "".concat(_ToggleGroupModule.default["Label".concat(size.toLowerCase())]);
  var renderInfoText = "".concat(_ToggleGroupModule.default["InfoText".concat(size.toLowerCase())]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    onChange: onChange,
    className: _ToggleGroupModule.default.toggleGroup
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: renderLabel
  }, label), informationTop ? /*#__PURE__*/_react.default.createElement("p", {
    className: renderInfoText
  }, informationTop) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_Toggle.default, {
    size: size,
    label: toggleLabel,
    labelColor: labelColor,
    checkColor: checkColor,
    disabled: disabled
  }), informationBottom ? /*#__PURE__*/_react.default.createElement(_Information.default, {
    text: informationBottom,
    size: size
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), errorInformation ? /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    text: errorInformation,
    size: size
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
};
ToggleGroup.propTypes = {
  id: _propTypes.default.string,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  label: _propTypes.default.string,
  toggleLabel: _propTypes.default.string,
  informationTop: _propTypes.default.string,
  informationBottom: _propTypes.default.string,
  errorInformation: _propTypes.default.string,
  labelColor: _propTypes.default.string,
  onChange: _propTypes.default.func,
  checkColor: _propTypes.default.string
};
ToggleGroup.defaultProps = {
  size: "md",
  label: "label",
  toggleLabel: "toggle label",
  informationTop: "information top",
  informationBottom: "information bottom",
  errorInformation: "error information"
};
var _default = ToggleGroup;
exports.default = _default;