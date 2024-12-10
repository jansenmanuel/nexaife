"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NcArrowLeft = _interopRequireDefault(require("../../../Asset/Icon/NcArrowLeft"));
var _NcArrowRight = _interopRequireDefault(require("../../../Asset/Icon/NcArrowRight"));
var _Li = _interopRequireDefault(require("../../../Atomic/List/Li/Li"));
var _Ul = _interopRequireDefault(require("../../../Atomic/List/Ul/Ul"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _PropsDefault = require("../../../Enum/PropsDefault");
var _FirstIndex = require("../../../Utils/Math/FirstIndex");
var _LastIndex = require("../../../Utils/Math/LastIndex");
var _Midle = require("../../../Utils/Math/Midle");
var _ActivePage = require("../../../Utils/Pagination/ActivePage");
var _PageSlice = require("../../../Utils/Pagination/PageSlice");
var _PaginationTableModule = _interopRequireDefault(require("./PaginationTable.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PaginationTable(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.pageNumber.length <= 7 ? /*#__PURE__*/_react.default.createElement(_Ul.default, {
    className: _PaginationTableModule.default.Container
  }, /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.currentPage === 1 ? props.firstClick : props.previousClick
  }, /*#__PURE__*/_react.default.createElement(_NcArrowLeft.default, {
    size: _PropsDefault.propsDefault.iconSizeSm,
    color: props.colorArrow
  })), props.pageNumber.map(function (number) {
    return /*#__PURE__*/_react.default.createElement(_Li.default, {
      key: number,
      className: (0, _ActivePage.activePage)(props.currentPage, number),
      onClick: function onClick() {
        return props.pageClick(number);
      }
    }, number);
  }), /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.currentPage === (0, _LastIndex.lastIndex)(props.pageNumber) ? props.lastClick : props.nextClick
  }, /*#__PURE__*/_react.default.createElement(_NcArrowRight.default, {
    size: _PropsDefault.propsDefault.iconSizeSm,
    color: props.colorArrow
  }))) : /*#__PURE__*/_react.default.createElement(_Ul.default, {
    className: _PaginationTableModule.default.Container
  }, /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.currentPage === 1 ? props.firstClick : props.previousClick
  }, /*#__PURE__*/_react.default.createElement(_NcArrowLeft.default, {
    size: _PropsDefault.propsDefault.iconSizeSm,
    color: props.colorArrow
  })), /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.firstClick,
    className: (0, _ActivePage.activePage)(props.currentPage, (0, _FirstIndex.firstIndex)(props.pageNumber))
  }, (0, _FirstIndex.firstIndex)(props.pageNumber)), props.currentPage >= (0, _Midle.mid)(props.totalRow, props.rowLimit) ? /*#__PURE__*/_react.default.createElement(_Li.default, {
    className: "".concat(_PaginationTableModule.default.DisablePagination, " ").concat(_classNameDefault.classNameDefault.disablePagination)
  }, "...") : " ", (0, _PageSlice.pageSlice)(props.pageNumber).slice(props.startPage, props.endPage).map(function (number) {
    return /*#__PURE__*/_react.default.createElement(_Li.default, {
      key: number,
      className: (0, _ActivePage.activePage)(props.currentPage, number),
      onClick: function onClick() {
        return props.pageClick(number);
      }
    }, number);
  }), props.currentPage <= (0, _Midle.mid)(props.totalRow, props.rowLimit) ? /*#__PURE__*/_react.default.createElement(_Li.default, {
    className: "".concat(_PaginationTableModule.default.DisablePagination, " ").concat(_classNameDefault.classNameDefault.disablePagination)
  }, "...") : " ", /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.lastClick,
    className: (0, _ActivePage.activePage)(props.currentPage, (0, _LastIndex.lastIndex)(props.pageNumber))
  }, (0, _LastIndex.lastIndex)(props.pageNumber)), /*#__PURE__*/_react.default.createElement(_Li.default, {
    onClick: props.currentPage === (0, _LastIndex.lastIndex)(props.pageNumber) ? props.lastClick : props.nextClick
  }, /*#__PURE__*/_react.default.createElement(_NcArrowRight.default, {
    size: _PropsDefault.propsDefault.iconSizeSm,
    color: props.colorArrow
  }))));
}
var _default = PaginationTable;
exports.default = _default;
PaginationTable.defaultProps = {
  startPage: _PropsDefault.propsDefault.startPage,
  endPage: _PropsDefault.propsDefault.endPage,
  pageClick: _PropsDefault.propsDefault.func
};