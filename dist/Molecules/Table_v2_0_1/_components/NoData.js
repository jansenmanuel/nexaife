"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icons = require("../../../Asset/Icons");
require("./no-data-style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NoData = function NoData() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "no-data-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Icons.Icon.NcDataTableEmpty,
    alt: "bg-no-data"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "no-data-text"
  }, "Data Belum Tersedia"), /*#__PURE__*/_react.default.createElement("p", {
    className: "no-data-description"
  }, "Silahkan lakukan transaksi terlebih dahulu untuk menambahkan data pada tabel"));
};
var _default = NoData;
exports.default = _default;