"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TransferFile;
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
require("./TransferFiles.scss");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TRANSFER_FILE_BASE = function TRANSFER_FILE_BASE(_ref) {
  var id = _ref.id,
    listData = _ref.listData,
    targetKeys = _ref.targetKeys,
    handleChangeData = _ref.handleChangeData,
    titleLeft = _ref.titleLeft,
    titleRight = _ref.titleRight;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)({
      selected: 0,
      totalCount: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    countDataLeft = _useState2[0],
    setCountDataLeft = _useState2[1];
  var _useState3 = (0, _react.useState)({
      selected: 0,
      totalCount: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    countDataRight = _useState4[0],
    setCountDataRight = _useState4[1];
  var filterOption = function filterOption(inputValue, option) {
    return option.description.indexOf(inputValue) > -1;
  };
  var handleChange = function handleChange(newTargetKeys) {
    function compareNumber(a, b) {
      return a - b;
    }
    handleChangeData(newTargetKeys.sort(compareNumber));
  };
  var renderFooter = function renderFooter(_, _ref2) {
    var direction = _ref2.direction;
    if (direction === 'left') {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 10px'
        }
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "footer-transfer-list"
      }, t("COMMON:TRANSFER_FILE.CHOICES")), /*#__PURE__*/_react.default.createElement("p", {
        className: "footer-transfer-list"
      }, countDataLeft.selected, " / ", countDataLeft.totalCount, " ", t("COMMON:TRANSFER_FILE.SELECTED")));
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 10px'
      }
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "footer-transfer-list"
    }, t("COMMON:TRANSFER_FILE.CHOICES")), /*#__PURE__*/_react.default.createElement("p", {
      className: "footer-transfer-list"
    }, countDataRight.selected, " / ", countDataRight.totalCount, " ", t("COMMON:TRANSFER_FILE.SELECTED")));
  };
  var leftLabel = function leftLabel(_ref3) {
    var selectedCount = _ref3.selectedCount,
      totalCount = _ref3.totalCount;
    if (selectedCount !== countDataLeft.selected || totalCount !== countDataLeft.totalCount) {
      setCountDataLeft({
        selected: selectedCount,
        totalCount: totalCount
      });
    }
    return /*#__PURE__*/_react.default.createElement("p", {
      className: "title-transfer-list"
    }, titleLeft || t("COMMON:TRANSFER_FILE.TITLE_LEFT"));
  };
  var rightLabel = function rightLabel(_ref4) {
    var selectedCount = _ref4.selectedCount,
      totalCount = _ref4.totalCount;
    if (selectedCount !== countDataRight.selected || totalCount !== countDataRight.totalCount) {
      setCountDataRight({
        selected: selectedCount,
        totalCount: totalCount
      });
    }
    return /*#__PURE__*/_react.default.createElement("p", {
      className: "title-transfer-list"
    }, titleRight || t("COMMON:TRANSFER_FILE.TITLE_RIGHT"));
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Transfer, {
    dataSource: listData,
    render: function render(item) {
      return item.title;
    },
    listStyle: {
      width: '486px',
      height: '572px'
    },
    showSearch: true,
    filterOption: filterOption,
    onChange: handleChange,
    targetKeys: targetKeys,
    selectAllLabels: [leftLabel, rightLabel],
    footer: renderFooter
    // titles={[<Tag color="geekblue">I am on Left</Tag>, <Tag color="geekblue">I am on right</Tag>]}
    // selectAllLabels={[
    //   ({ selectedCount, totalCount }) => (
    //     <span>
    //       {selectedCount} of {totalCount}
    //       <Tag color="geekblue">left</Tag>
    //     </span>
    //   ), ({ selectedCount, totalCount }) => (
    //     <span>
    //       {selectedCount} of {totalCount}
    //       <Tag color="geekblue">right</Tag>
    //     </span>
    //   )
    // ]}
    // pagination
  });
};

TransferFile.defaultProps = {
  listData: [],
  targetKeys: [],
  handleChangeData: function handleChangeData() {}
  // titleLeft: "Title Left",
  // titleRight: "Title Right"
};

function TransferFile(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(TRANSFER_FILE_BASE, props));
}
;