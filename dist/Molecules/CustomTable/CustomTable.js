"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./custom-table.scss");
var _NcArrowDown = _interopRequireDefault(require("../../../Component/Asset/Icon/NcArrowDown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CustomTable = function CustomTable(_ref) {
  var columns = _ref.columns,
    dataSource = _ref.dataSource;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index
    }, column.title);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, dataSource === null || dataSource === void 0 ? void 0 : dataSource.map(function (data, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index,
      style: {
        backgroundColor: index % 2 === 0 ? "white" : "#F9F9F9"
      }
    }, columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
      var _column$width;
      return /*#__PURE__*/_react.default.createElement("td", {
        key: index,
        style: {
          width: (_column$width = column === null || column === void 0 ? void 0 : column.width) !== null && _column$width !== void 0 ? _column$width : ""
        }
      }, data[column.dataIndex]);
    }));
  }))));
};
var _default = CustomTable;
exports.default = _default;