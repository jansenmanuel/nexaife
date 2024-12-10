"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NcInfo = _interopRequireDefault(require("../../Asset/Icon/NcInfo"));
var _colorConstant = require("../../Constant/colorConstant");
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Paragraph = _antd.Typography.Paragraph;
var ErrorInformation = function ErrorInformation() {
  var _renderSize, _renderSize2, _renderSize3;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    text = _ref.text,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    maxWidth = _ref.maxWidth;
  var renderSize = function renderSize() {
    var sizeToLowerCase = size === null || size === void 0 ? void 0 : size.toLowerCase();
    var value;
    if (sizeToLowerCase === "xxl") {
      value = {
        labelSize: "24px",
        iconSize: "18px",
        marginLeft: "6px"
      };
    }
    if (sizeToLowerCase === "xl") {
      value = {
        labelSize: "20px",
        iconSize: "16.5px",
        marginLeft: "4px"
      };
    }
    if (sizeToLowerCase === "lg") {
      value = {
        labelSize: "18px",
        iconSize: "15px",
        marginLeft: "4px"
      };
    }
    if (sizeToLowerCase === "md") {
      value = {
        labelSize: "14px",
        iconSize: "13.5px",
        marginLeft: "2px"
      };
    }
    if (sizeToLowerCase === "sm") {
      value = {
        labelSize: "12px",
        iconSize: "12px",
        marginLeft: "2px"
      };
    }
    return value;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      padding: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_NcInfo.default, {
    size: (_renderSize = renderSize()) === null || _renderSize === void 0 ? void 0 : _renderSize.iconSize,
    color: _colorConstant.ERROR_COLOR
  }), /*#__PURE__*/_react.default.createElement(Paragraph, {
    style: {
      fontSize: (_renderSize2 = renderSize()) === null || _renderSize2 === void 0 ? void 0 : _renderSize2.labelSize,
      fontFamily: "Roboto",
      marginLeft: (_renderSize3 = renderSize()) === null || _renderSize3 === void 0 ? void 0 : _renderSize3.marginLeft,
      color: _colorConstant.ERROR_COLOR,
      fontWeight: "400",
      width: maxWidth
    },
    ellipsis: {
      tooltip: /*#__PURE__*/_react.default.createElement("div", null, text)
    }
  }, text));
};
var _default = ErrorInformation;
exports.default = _default;