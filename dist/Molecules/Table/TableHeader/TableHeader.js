"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NcSortable = _interopRequireDefault(require("../../../Asset/Icon/NcSortable"));
var _Th = _interopRequireDefault(require("../../../Atomic/Table/Th/Th"));
var _Thead = _interopRequireDefault(require("../../../Atomic/Table/Thead/Thead"));
var _Tr = _interopRequireDefault(require("../../../Atomic/Table/Tr/Tr"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _TableHeaderModule = _interopRequireDefault(require("./TableHeader.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TableHeader(props) {
  var selectableRow = props.selectable;
  return /*#__PURE__*/_react.default.createElement(_Thead.default, {
    id: props.id + "tableheader",
    className: props.className,
    fixHeader: props.fixHeader,
    fixHeaderBg: props.fixHeaderBg
  }, /*#__PURE__*/_react.default.createElement(_Tr.default, {
    id: props.id + "tablerowheader"
  }, selectableRow === true ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Th.default, {
    id: props.id + "tablecheckboxall",
    className: _TableHeaderModule.default.HeaderCheck
  }, props.checkBoxAll)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), props.columns.map(function (item, index) {
    var colorStatus = function colorStatus(status) {
      if (status === true) {
        return _classNameDefault.classNameDefault.iconActive;
      } else {
        return _classNameDefault.classNameDefault.iconDeactive;
      }
    };
    return /*#__PURE__*/_react.default.createElement(_Th.default, {
      id: props.id + index,
      key: index,
      style: props.styleHeader,
      textAlign: item.textAlignHead,
      padding: item.padding,
      width: item.width,
      className: "".concat(_TableHeaderModule.default.Th, " ").concat(_classNameDefault.classNameDefault.th)
    }, item.name + " ", item.sortable === true ? /*#__PURE__*/_react.default.createElement(_NcSortable.default, {
      onClick: function onClick() {
        return props.sortClick(item);
      },
      size: "16",
      classAsc: colorStatus(item.asc),
      classDesc: colorStatus(item.desc)
    }) : "");
  })));
}
var _default = TableHeader;
exports.default = _default;