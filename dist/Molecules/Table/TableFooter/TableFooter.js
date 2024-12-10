"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Li = _interopRequireDefault(require("../../../Atomic/List/Li/Li"));
var _Ul = _interopRequireDefault(require("../../../Atomic/List/Ul/Ul"));
var _Td = _interopRequireDefault(require("../../../Atomic/Table/Td/Td"));
var _Tfoot = _interopRequireDefault(require("../../../Atomic/Table/Tfoot/Tfoot"));
var _Tr = _interopRequireDefault(require("../../../Atomic/Table/Tr/Tr"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _TableFooterModule = _interopRequireDefault(require("./TableFooter.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TableFooter(props) {
  var selectableRow = props.selectable;
  return /*#__PURE__*/_react.default.createElement(_Tfoot.default, {
    id: props.id + "footer",
    className: "".concat(_TableFooterModule.default.TableFooter, " ").concat(_classNameDefault.classNameDefault.tableFooter),
    fixHeader: props.fixHeader,
    fixHeaderBg: props.fixHeaderBg
  }, /*#__PURE__*/_react.default.createElement(_Tr.default, {
    id: props.id + "footerrow"
  }, /*#__PURE__*/_react.default.createElement(_Td.default, {
    id: props.id + "footerdata",
    colSpan: selectableRow ? props.length + 1 : props.length
  }, /*#__PURE__*/_react.default.createElement(_Ul.default, {
    id: props.id + "footerul",
    className: _TableFooterModule.default.List
  }, /*#__PURE__*/_react.default.createElement(_Li.default, {
    id: props.id + "footerlabel",
    className: "".concat(_TableFooterModule.default.Label, " ").concat(_classNameDefault.classNameDefault.labelFooter)
  }, props.footerLabel), /*#__PURE__*/_react.default.createElement(_Li.default, {
    id: props.id + "footerlimit"
  }, props.tableLimit), /*#__PURE__*/_react.default.createElement(_Li.default, {
    id: props.id + "footerpagination",
    className: "".concat(_TableFooterModule.default.Pagination, " ").concat(_classNameDefault.classNameDefault.pagination)
  }, props.pagination)))));
}
var _default = TableFooter;
exports.default = _default;