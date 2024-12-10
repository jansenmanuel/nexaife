"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Table = _interopRequireDefault(require("../../../Atomic/Table/Table/Table"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _PropsDefault = require("../../../Enum/PropsDefault");
var _TableBody = _interopRequireDefault(require("../TableBody/TableBody"));
var _TableFooter = _interopRequireDefault(require("../TableFooter/TableFooter"));
var _TableHeader = _interopRequireDefault(require("../TableHeader/TableHeader"));
var _DataTableModule = _interopRequireDefault(require("./DataTable.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DataTable = function DataTable(props) {
  var tabel = function tabel(fixFirstCol) {
    if (fixFirstCol) {
      return "".concat(_DataTableModule.default.ContainerFixXCol, " ").concat(_classNameDefault.classNameDefault.containerFixXCol);
    } else {
      return _DataTableModule.default.Container;
    }
  };
  var rounded = function rounded(footer, customHeader) {
    if (footer && customHeader !== undefined) {
      return _DataTableModule.default.HalfRoundBottom;
    } else if (footer) {
      return _DataTableModule.default.FullRound;
    } else {
      return _DataTableModule.default.HalfRound;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_DataTableModule.default.Shadow, " ").concat(_classNameDefault.classNameDefault.shadowTable, " ").concat(props.className)
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    className: _DataTableModule.default.BorderContentHeader
  }, props.customHeader), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "content",
    className: "".concat(tabel(props.fixFirstCol), "  ").concat(rounded(props.footer, props.customHeader), " ").concat(props.classTableBox),
    style: {
      maxHeight: props.height,
      minHeight: props.fixHeader ? "160px" : ""
    },
    mTop: props.mTop
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    id: props.id + "table",
    className: "".concat(tabel(props.fixFirstCol), " ").concat(props.classTable),
    fixHeader: props.fixHeader
  }, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    id: props.id + "header",
    className: "".concat(_DataTableModule.default.TableHeader, " ").concat(_classNameDefault.classNameDefault.tableHeader),
    columns: props.columns,
    selectable: props.selectable,
    sortClick: props.sortClick,
    selectAll: props.selectAll,
    checkBoxAll: props.checkBoxAll,
    data: props.data,
    fixHeader: props.fixHeader,
    fixHeaderBg: props.fixHeaderBg
  }), /*#__PURE__*/_react.default.createElement(_TableBody.default, {
    id: props.id,
    data: props.data,
    selectable: props.selectable,
    column: props.columns,
    fixHeader: props.fixHeader,
    overflowY: props.overflowY,
    rowLink: props.rowLink,
    keyLink: props.keyLink,
    rowClick: function rowClick(item) {
      return props.rowClick(item);
    },
    empty: props.empty,
    checkBoxPartial: props.checkBoxPartial
  }), props.footer ? /*#__PURE__*/_react.default.createElement(_TableFooter.default, {
    id: props.id,
    limitation: props.limitation,
    length: props.columns.length,
    totalRow: props.totalRow,
    selectable: props.selectable,
    footerLabel: props.footerLabel,
    tableLimit: props.tableLimit,
    pagination: props.pagination,
    fixHeader: props.fixHeader,
    fixHeaderBg: props.fixHeaderBg
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))), props.customFooter);
};
var _default = DataTable;
exports.default = _default;
DataTable.defaultProps = {
  className: _PropsDefault.propsDefault.stringEmpty,
  width: "100"
};