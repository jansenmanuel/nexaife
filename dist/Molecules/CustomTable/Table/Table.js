"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));
require("./table-style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Table = function Table(_ref) {
  var currentPage = _ref.currentPage,
    currentPageSize = _ref.currentPageSize,
    loading = _ref.loading,
    onChangePage = _ref.onChangePage,
    onChangePageSize = _ref.onChangePageSize,
    onChangeSorter = _ref.onChangeSorter,
    totalData = _ref.totalData,
    columns = _ref.columns,
    dataSource = _ref.dataSource,
    pageSizeOptions = _ref.pageSizeOptions;
  var _useState = (0, _react.useState)(currentPageSize),
    _useState2 = _slicedToArray(_useState, 2),
    pageSize = _useState2[0],
    setPageSize = _useState2[1];
  var handleChangePage = (0, _react.useCallback)(function (page) {
    onChangePage(page);
  }, [onChangePage]);
  var handleChangePageSize = (0, _react.useCallback)(function (current, size) {
    setPageSize(size);
    onChangePageSize(current, size);
  }, [onChangePageSize]);
  var getRowClassName = (0, _react.useCallback)(function (_, index) {
    return index % 2 === 0 ? "even-row" : "odd-row";
  }, []);
  window.scrollTo(0, 0);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: columns,
    dataSource: dataSource,
    pagination: false,
    rowClassName: getRowClassName,
    onChange: onChangeSorter,
    loading: loading
  }), (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0 && /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    currentPage: currentPage,
    data: dataSource,
    defaultCurrent: 1,
    total: totalData,
    pageSize: pageSize,
    onChange: handleChangePage,
    pageSizeOptions: pageSizeOptions,
    handleChangePageSize: handleChangePageSize
  }));
};
Table.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  dataSource: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  pageSize: _propTypes.default.number,
  currentPage: _propTypes.default.number,
  currentPageSize: _propTypes.default.number,
  loading: _propTypes.default.bool,
  onChangePage: _propTypes.default.func,
  onChangePageSize: _propTypes.default.func,
  onChangeSorter: _propTypes.default.func,
  totalData: _propTypes.default.number,
  pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number)
};
var _default = Table;
exports.default = _default;