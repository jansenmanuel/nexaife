"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _legendGroupModule = _interopRequireDefault(require("./legendGroup.module.css"));
var _Legend = _interopRequireDefault(require("../../Atomic/Legends/Legend"));
var _LegendGroup = require("../../Utils/Legends/LegendGroup");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LegendGroup = function LegendGroup(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'Sm' : _ref$size;
  var gap = (0, _LegendGroup.calculateGap)(size);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _legendGroupModule.default.Wrap,
    style: {
      gap: gap
    }
  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Legend.default, {
      key: index,
      title: item.title,
      size: size,
      color: item === null || item === void 0 ? void 0 : item.color
    });
  }));
};
LegendGroup.propTypes = {
  size: _propTypes.default.oneOf(['Sm', 'Md', 'Lg']),
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    color: _propTypes.default.string
  }))
};
var _default = LegendGroup;
exports.default = _default;