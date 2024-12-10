"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _NcInfo = _interopRequireDefault(require("../../Asset/Icon/NcInfo"));
var _colorConstant = require("../../Constant/colorConstant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Information = function Information() {
  var _renderSize, _renderSize2, _renderSize3;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    text = _ref.text,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? _colorConstant.INFORMATION_COLOR : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size;
  var renderSize = function renderSize() {
    var sizeToLowerCase = size === null || size === void 0 ? void 0 : size.toLowerCase();
    var value;
    if (sizeToLowerCase === "xxl") {
      value = {
        labelSize: "24px",
        iconSize: "18",
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "5px"
    }
  }, /*#__PURE__*/React.createElement(_NcInfo.default, {
    size: (_renderSize = renderSize()) === null || _renderSize === void 0 ? void 0 : _renderSize.iconSize,
    color: color
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: (_renderSize2 = renderSize()) === null || _renderSize2 === void 0 ? void 0 : _renderSize2.labelSize,
      fontFamily: "Roboto",
      marginLeft: (_renderSize3 = renderSize()) === null || _renderSize3 === void 0 ? void 0 : _renderSize3.marginLeft,
      fontWeight: "400"
    }
  }, text));
};
var _default = Information;
exports.default = _default;