"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ListModule = _interopRequireDefault(require("./List.module.scss"));
var _lodash = _interopRequireDefault(require("lodash"));
var _Checkbox = _interopRequireDefault(require("../Checkbox/Checkbox/Checkbox"));
var _NcArrowRight = _interopRequireDefault(require("../../Asset/Icon/NcArrowRight"));
var _Toggle = _interopRequireDefault(require("../Toggle/Toggle"));
var _ListConstant = require("../../Constant/ListConstant");
var _index = require("../../index");
var _excluded = ["id", "size", "captionLabel", "titleLabel", "isCheckbox", "prefixIcon", "isToggle", "detailLabel", "onClickDetail", "isSelect", "mainColor", "isCheckboxSelected", "onClickList", "value", "onClickCheckbox", "onClickToggle", "card", "className", "styles"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var List = function List(_ref) {
  var id = _ref.id,
    size = _ref.size,
    captionLabel = _ref.captionLabel,
    titleLabel = _ref.titleLabel,
    isCheckbox = _ref.isCheckbox,
    prefixIcon = _ref.prefixIcon,
    isToggle = _ref.isToggle,
    detailLabel = _ref.detailLabel,
    onClickDetail = _ref.onClickDetail,
    isSelect = _ref.isSelect,
    mainColor = _ref.mainColor,
    isCheckboxSelected = _ref.isCheckboxSelected,
    onClickList = _ref.onClickList,
    value = _ref.value,
    onClickCheckbox = _ref.onClickCheckbox,
    onClickToggle = _ref.onClickToggle,
    card = _ref.card,
    className = _ref.className,
    styles = _ref.styles,
    props = _objectWithoutProperties(_ref, _excluded);
  var getSizeArrow = function getSizeArrow() {
    if (_lodash.default.startCase(size) === "Sm") {
      return 16;
    } else if (_lodash.default.startCase(size) === "Md") {
      return 20;
    } else if (_lodash.default.startCase(size) === "Lg") {
      return 24;
    } else if (_lodash.default.startCase(size) === "Xl") {
      return 28;
    } else if (_lodash.default.startCase(size) === "Xxl") {
      return 40;
    }
  };
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    checkValue = _React$useState2[0],
    setCheckValue = _React$useState2[1];
  (0, _react.useEffect)(function () {
    if (isCheckbox) {
      var findValue = _lodash.default.some(value, function (el) {
        return el === id;
      });
      if (findValue) {
        setCheckValue(true);
      } else {
        setCheckValue(false);
      }
    }
  }, [value, id]);
  var clickOption = function clickOption() {
    if (!isCheckbox && !isSelect && !isToggle) {
      defaultClickList();
    } else if (isCheckbox && isSelect) {
      ClickCheckbox();
    } else if (isCheckbox && !isSelect) {
      defaultClickList();
    } else if (isToggle) {
      ClickToggle();
    } else if (detailLabel !== undefined && !isSelect) {
      ClickDetail();
    } else if (isSelect) {
      ClickOptionSelect();
    }
  };
  var ClickCheckbox = function ClickCheckbox() {
    setCheckValue(!checkValue);
    onClickList({
      type: _ListConstant.LIST_CHECKBOX,
      data: {
        id: id,
        value: titleLabel,
        checked: !checkValue
      }
    });
  };
  var defaultClickList = function defaultClickList() {
    onClickList({
      type: _ListConstant.LIST_DEFAULT,
      data: {
        value: value
      }
    });
  };
  var ClickToggle = function ClickToggle() {
    onClickList({
      type: _ListConstant.LIST_TOGGLE,
      data: {
        value: value
      }
    });
  };
  var OnChangeToggle = function OnChangeToggle(e) {
    onClickToggle({
      type: _ListConstant.LIST_TOGGLE_ONLY,
      value: e
    });
  };
  var ClickDetail = function ClickDetail() {};
  var ClickOptionSelect = function ClickOptionSelect() {
    onClickList({
      type: _ListConstant.LIST_SELECT,
      data: {
        id: id,
        value: titleLabel
      }
    });
  };
  var onClickCheckboxNotSelect = function onClickCheckboxNotSelect() {
    onClickCheckbox({
      type: _ListConstant.LIST_CHECKBOX_ONLY,
      data: {
        id: id
      }
    });
  };
  var gapDoubleXl = (isCheckbox || prefixIcon) && size === "xxl" ? _ListModule.default["containerList".concat(_lodash.default.startCase(size), "16")] : _ListModule.default["containerList".concat(_lodash.default.startCase(size))];
  var cardContainer = card ? _ListModule.default.containerCard : '';
  var combinedClassName = "".concat(gapDoubleXl, " ").concat(cardContainer, " ").concat(className ? className : '').trim();
  var titleLabelClassName = "".concat(_ListModule.default["titleLabel".concat(_lodash.default.startCase(size))], " ").concat(card ? _ListModule.default.titleLabelCard : '').trim();
  var captionLabelClassName = "".concat(_ListModule.default["captionLabel".concat(_lodash.default.startCase(card ? 'lg' : size))]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    onClick: isSelect ? clickOption : function () {},
    className: gapDoubleXl,
    style: props.style
  }, isCheckbox && /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    id: id,
    onChange: isCheckbox && !isSelect ? onClickCheckboxNotSelect : undefined,
    color: mainColor,
    check: typeof isCheckboxSelected !== 'undefined' ? isCheckboxSelected : checkValue,
    size: size
  }), prefixIcon, card ? /*#__PURE__*/_react.default.createElement(_index.Avatar, null) : null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: !isSelect ? clickOption : function () {},
    className: _ListModule.default.containerMainTitle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: titleLabelClassName
  }, titleLabel), captionLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: captionLabelClassName
  }, captionLabel)), detailLabel && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClickDetail,
    className: _ListModule.default["detailLabel".concat(_lodash.default.startCase(size))]
  }, detailLabel), isToggle && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Toggle.default, {
    onChange: function onChange(e) {
      OnChangeToggle(e);
    },
    label: null,
    checkColor: mainColor,
    size: _lodash.default.lowerCase(size)
  })), !isSelect && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClickDetail,
    className: _ListModule.default.containerIcon
  }, /*#__PURE__*/_react.default.createElement(_NcArrowRight.default, {
    size: getSizeArrow()
  })));
};
List.propTypes = {
  size: _propTypes.default.string,
  titleLabel: _propTypes.default.string,
  captionLabel: _propTypes.default.string,
  isCheckbox: _propTypes.default.bool,
  prefixIcon: _propTypes.default.object,
  isToggle: _propTypes.default.bool,
  detailLabel: _propTypes.default.string,
  isSelect: _propTypes.default.bool,
  onClickDetail: _propTypes.default.func
};
List.defaultProps = {
  size: "sm",
  titleLabel: "Title List",
  captionLabel: "",
  isCheckbox: false,
  prefixIcon: null,
  isToggle: false,
  isSelect: false,
  detailLabel: "",
  onClickDetail: function onClickDetail() {},
  onClickList: function onClickList() {},
  onClickToggle: function onClickToggle() {}
};
var _default = List;
exports.default = _default;