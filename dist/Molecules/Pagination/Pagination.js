"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./pagination-style.scss");
var _SizeChanger = _interopRequireDefault(require("./components/SizeChanger"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PaginationBased = function PaginationBased(_ref) {
  var pageSizeOptions = _ref.pageSizeOptions,
    pageSize = _ref.pageSize,
    handleChangePageSize = _ref.handleChangePageSize,
    total = _ref.total,
    defaultCurrent = _ref.defaultCurrent,
    data = _ref.data,
    currentPage = _ref.currentPage,
    handleChangePage = _ref.handleChangePage,
    currentRow = _ref.currentRow;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "select-from-total-page"
  }, "".concat(currentRow, " ").concat(t('COMMON:OF'), " ").concat(total)), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-changer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "row-per-page-text"
  }, t('COMMON:ROW_PER_PAGE')), /*#__PURE__*/_react.default.createElement(_SizeChanger.default, {
    pageSizeOptions: pageSizeOptions,
    pageSize: pageSize,
    onPageSizeChange: handleChangePageSize
  }), /*#__PURE__*/_react.default.createElement(_antd.Pagination, {
    current: currentPage,
    onChange: handleChangePage,
    defaultCurrent: defaultCurrent,
    total: total,
    pageSize: pageSize,
    showSizeChanger: false
  })));
};
function Pagination(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(PaginationBased, props));
}