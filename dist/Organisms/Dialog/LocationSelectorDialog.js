"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LocationSelectorDialog;
var _react = _interopRequireWildcard(require("react"));
var _LocationSelectorUtils = require("../../Utils/LocationSelectorDialog/LocationSelectorUtils");
var _index = require("../../index");
var _icons = require("@ant-design/icons");
var _CollapseLocation = _interopRequireDefault(require("./components/CollapseLocation"));
var _InputSearch = _interopRequireDefault(require("../../Molecules/SearchRecommendation/InputSearch"));
var _SelectorDialog = _interopRequireDefault(require("./components/SelectorDialog"));
var _NcClose = _interopRequireDefault(require("../../Asset/Icon/NcClose"));
var _propTypes = _interopRequireDefault(require("prop-types"));
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Libs
// Components
var LocationSelectorDialogBase = function LocationSelectorDialogBase(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    handleOpenCloseDialog = _ref.handleOpenCloseDialog,
    items = _ref.items,
    displayItems = _ref.displayItems,
    handleChangeCheck = _ref.handleChangeCheck,
    activeKey = _ref.activeKey,
    handlePanel = _ref.handlePanel,
    handleChangeSearch = _ref.handleChangeSearch,
    loading = _ref.loading,
    titleDialog = _ref.titleDialog,
    choseLocationLabel = _ref.choseLocationLabel,
    onSubmit = _ref.onSubmit,
    cancelLabel = _ref.cancelLabel,
    submitLabel = _ref.submitLabel,
    inputValue = _ref.inputValue,
    onClear = _ref.onClear,
    searchPlaceholder = _ref.searchPlaceholder,
    disableSubmit = _ref.disableSubmit,
    id = _ref.id;
  var _useState = (0, _react.useState)(activeKey),
    _useState2 = _slicedToArray(_useState, 2),
    activePanels = _useState2[0],
    setActivePanels = _useState2[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var chooseLocations = (0, _react.useMemo)(function () {
    return (0, _LocationSelectorUtils.locationMapperChecked)(displayItems);
  }, [displayItems]);
  var compute = function compute(checkboxId, status) {
    var updated = (0, _LocationSelectorUtils.traverse)(items, checkboxId, status);
    handleChangeCheck(updated);
  };
  (0, _react.useEffect)(function () {
    setActivePanels(activeKey);
  }, [activeKey]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id
  }, /*#__PURE__*/_react.default.createElement(_SelectorDialog.default, {
    open: open,
    onCancel: handleOpenCloseDialog
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      borderRadius: "inherit"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 400,
      backgroundColor: "#FFF",
      borderTopLeftRadius: "inherit",
      borderBottomLeftRadius: "inherit"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, titleDialog || t('COMMON:REGION_TITLE')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingRight: 10,
      marginBottom: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/_react.default.createElement(_InputSearch.default, {
    value: inputValue,
    placeholder: searchPlaceholder || t('COMMON:SEARCH'),
    width: "100%",
    onChange: handleChangeSearch,
    size: "sm",
    onClear: onClear
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 400,
      overflowY: "auto"
    }
  }, loading ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Spinner, null)) : /*#__PURE__*/_react.default.createElement(_CollapseLocation.default, {
    activePanels: activePanels,
    setActivePanels: setActivePanels,
    items: items,
    compute: compute,
    handlePanel: handlePanel,
    activeKey: activeKey
  })))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1,
      padding: 14
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      cursor: "pointer"
    },
    onClick: handleOpenCloseDialog
  }, /*#__PURE__*/_react.default.createElement(_NcClose.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      fontWeight: 600,
      marginBottom: 12
    }
  }, choseLocationLabel || t('COMMON:REGION_CHOOSE')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      height: "400px",
      overflowY: "auto",
      alignContent: "flex-start",
      borderRadius: "8px"
    }
  }, chooseLocations.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_index.Tag, {
      key: option.id,
      id: option.id,
      iconRight: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
      title: option.name,
      size: "xs",
      closable: true,
      onClose: function onClose() {
        return compute(option.id, 0);
      }
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Button, {
    buttonType: "secondary",
    secondaryColor: "white",
    label: cancelLabel || t('COMMON:CANCEL'),
    size: "sm",
    onClick: handleOpenCloseDialog
  }), /*#__PURE__*/_react.default.createElement(_index.Button, {
    onClick: onSubmit,
    buttonType: "primary",
    secondaryColor: "white",
    label: submitLabel || t('COMMON:APPLY'),
    size: "sm",
    disabled: disableSubmit
  })))))));
};
function LocationSelectorDialog(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(LocationSelectorDialogBase, props));
}
LocationSelectorDialog.defaultProps = {
  open: false,
  handleOpenCloseDialog: function handleOpenCloseDialog() {},
  items: [],
  handleChangeCheck: function handleChangeCheck() {},
  activeKey: {},
  handlePanel: function handlePanel() {},
  handleChangeSearch: function handleChangeSearch() {},
  loading: false,
  onSubmit: function onSubmit() {},
  inputValue: "",
  onClear: function onClear() {},
  id: null,
  disableSubmit: false
};
LocationSelectorDialog.propTypes = {
  open: _propTypes.default.bool,
  handleOpenCloseDialog: _propTypes.default.func,
  items: _propTypes.default.array,
  handleChangeCheck: _propTypes.default.func,
  activeKey: _propTypes.default.any,
  handlePanel: _propTypes.default.func,
  handleChangeSearch: _propTypes.default.func,
  loading: _propTypes.default.bool,
  titleDialog: _propTypes.default.string,
  choseLocationLabel: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  cancelLabel: _propTypes.default.string,
  submitLabel: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  onClear: _propTypes.default.func,
  searchPlaceholder: _propTypes.default.string,
  disableSubmit: _propTypes.default.bool
};