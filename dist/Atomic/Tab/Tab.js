"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TabUtils = require("../../Utils/Tab/TabUtils");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _excluded = ["defaultActiveKey", "items", "size", "showIcon", "activeColor", "inactiveColor", "iconColor", "id", "onChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tab = function Tab(_ref) {
  var _items$find;
  var defaultActiveKey = _ref.defaultActiveKey,
    items = _ref.items,
    size = _ref.size,
    showIcon = _ref.showIcon,
    activeColor = _ref.activeColor,
    inactiveColor = _ref.inactiveColor,
    iconColor = _ref.iconColor,
    id = _ref.id,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultActiveKey),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = (0, _react.useState)(activeColor),
    _useState4 = _slicedToArray(_useState3, 2),
    indicatorColor = _useState4[0],
    setIndicatorColor = _useState4[1];
  var _getSize = (0, _TabUtils.getSize)(size),
    iconSize = _getSize.iconSize,
    gap = _getSize.gap,
    sizeClass = _getSize.sizeClass;
  var sizeContainerClass = (0, _TabUtils.getSizeClass)(size);
  (0, _react.useEffect)(function () {
    setIndicatorColor(activeColor);
    setActiveKey(defaultActiveKey);
  }, [activeColor, defaultActiveKey]);
  var onChangeActiveKey = function onChangeActiveKey(key) {
    setActiveKey(key);
    if (onChange) onChange(key);
  };
  var customLabel = function customLabel(key, label, Icon, isError) {
    var isActive = activeKey === key;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_TabsModule.default.tabContent),
      style: {
        color: isError && isActive ? 'red' : isActive ? activeColor : 'inherit',
        gap: gap
      }
    }, showIcon && Icon && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: iconSize,
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(Icon, {
      color: isError && isActive ? 'red' : isActive ? activeColor : iconColor,
      size: iconSize,
      style: {
        color: isError && isActive ? 'red' : isActive ? activeColor : iconColor,
        fontSize: iconSize
      }
    })), /*#__PURE__*/_react.default.createElement("h1", {
      className: sizeClass,
      style: {
        color: isError && isActive ? 'red' : isActive ? activeColor : inactiveColor
      }
    }, label));
  };

  // Determine if the active tab has an icon    

  // Determine if the active tab has an error
  var activeTabIsError = (_items$find = items.find(function (item) {
    return item.key === activeKey;
  })) === null || _items$find === void 0 ? void 0 : _items$find.isError;
  var dynamicStyles = {
    '--indicator-color': activeColor,
    '--indicator-border-width': size === 'sm' ? '1px' : '2px'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_TabsModule.default.container, " ").concat(sizeContainerClass, " ").concat(activeTabIsError ? _TabsModule.default.containerError : ''),
    id: id
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, _extends({
    defaultActiveKey: defaultActiveKey,
    activeKey: activeKey,
    onChange: onChangeActiveKey,
    indicatorColor: indicatorColor,
    style: dynamicStyles
  }, props, {
    items: items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        label: customLabel(item.key, item.label, item.icon, item.isError),
        id: item.key
      });
    })
  })));
};
var _default = Tab;
exports.default = _default;
Tab.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    icon: _propTypes.default.elementType,
    isError: _propTypes.default.bool
  })),
  size: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  activeColor: _propTypes.default.string,
  inactiveColor: _propTypes.default.string,
  iconColor: _propTypes.default.string,
  defaultActiveKey: _propTypes.default.string,
  onChange: _propTypes.default.func
};
Tab.defaultProps = {
  items: [],
  size: 'md',
  showIcon: true,
  activeColor: '#1D1D1D',
  inactiveColor: '#424242',
  iconColor: '#1D1D1D',
  onChange: null
};