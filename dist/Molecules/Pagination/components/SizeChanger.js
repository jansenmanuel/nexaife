"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SizeChanger = function SizeChanger(_ref) {
  var pageSizeOptions = _ref.pageSizeOptions,
    pageSize = _ref.pageSize,
    onPageSizeChange = _ref.onPageSizeChange;
  return /*#__PURE__*/_react.default.createElement(_antd.Select, {
    defaultValue: pageSize,
    onSelect: function onSelect(value) {
      return onPageSizeChange(1, parseInt(value, 10));
    },
    className: "custom-select"
  }, pageSizeOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
      key: option,
      value: option
    }, option);
  }));
};
var _default = SizeChanger;
exports.default = _default;