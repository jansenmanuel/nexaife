"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./pagination-style.scss");
var _SizeChanger = _interopRequireDefault(require("./components/SizeChanger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Pagination = function Pagination(_ref) {
  var pageSizeOptions = _ref.pageSizeOptions,
    pageSize = _ref.pageSize,
    handleChangePageSize = _ref.handleChangePageSize,
    total = _ref.total,
    defaultCurrent = _ref.defaultCurrent,
    data = _ref.data,
    currentPage = _ref.currentPage,
    handleChangePage = _ref.handleChangePage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "select-from-total-page"
  }, "".concat(data.length, " of ").concat(total)), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-changer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "row-per-page-text"
  }, "Row per Page"), /*#__PURE__*/_react.default.createElement(_SizeChanger.default, {
    pageSizeOptions: pageSizeOptions,
    pageSize: pageSize,
    onPageSizeChange: handleChangePageSize
  }), /*#__PURE__*/_react.default.createElement(_antd.Pagination, {
    current: currentPage,
    onChange: handleChangePage,
    defaultCurrent: defaultCurrent,
    total: total,
    showSizeChanger: false
  })));
};
var _default = Pagination;
exports.default = _default;