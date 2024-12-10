"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tbody = _interopRequireDefault(require("../../../Atomic/Table/Tbody/Tbody"));
var _Td = _interopRequireDefault(require("../../../Atomic/Table/Td/Td"));
var _Tr = _interopRequireDefault(require("../../../Atomic/Table/Tr/Tr"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _TableBodyModule = _interopRequireDefault(require("./TableBody.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TableBody(props) {
  var selectableRow = props.selectable;
  var data = props.data;
  return /*#__PURE__*/_react.default.createElement(_Tbody.default, {
    id: props.id + "body",
    className: "".concat(_TableBodyModule.default.TableList, " ").concat(_classNameDefault.classNameDefault.tableList),
    fixHeader: props.fixHeader,
    height: props.height,
    overflowY: props.overflowY
  }, data === null || data.length <= 0 ? /*#__PURE__*/_react.default.createElement(_Tr.default, {
    id: props.id + "row",
    fixHeader: props.fixHeader
  }, /*#__PURE__*/_react.default.createElement(_Td.default, {
    id: props.id + "data",
    colSpan: props.column.length + 1
  }, props.empty)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map(function (item, indexItem) {
    return /*#__PURE__*/_react.default.createElement(_Tr.default, {
      id: props.id + "row" + indexItem,
      className: props.rowLink ? _TableBodyModule.default.RowLink : "",
      key: indexItem,
      onClick: props.rowLink ? function () {
        return props.rowClick(item);
      } : undefined
    }, selectableRow ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Td.default, {
      id: props.id + "row" + indexItem,
      style: {
        maxWitdh: "10px"
      }
    }, props.checkBoxPartial(item))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), props.column.map(function (columnItem, index) {
      var component = columnItem.component;
      var handleKey = function handleKey(item) {
        var key = "";
        if (item !== undefined) {
          key = item.replace("_", "");
        }
        return key;
      };
      return /*#__PURE__*/_react.default.createElement(_Td.default, {
        id: props.id + "data" + handleKey(columnItem.key) + indexItem,
        key: index,
        className: "".concat(_TableBodyModule.default.ItemLink, " ").concat(_classNameDefault.classNameDefault.itemLink),
        style: props.styleBody,
        textAlign: columnItem.textAlignRow,
        padding: columnItem.padding,
        width: columnItem.width
      }, component === true ? columnItem.selector(item) : item["".concat(columnItem.selector)]);
    }));
  })));
}
var _default = TableBody;
exports.default = _default;