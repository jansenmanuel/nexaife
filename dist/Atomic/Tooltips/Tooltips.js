"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./tooltips.scss");
var _CloseIconTooltips = _interopRequireDefault(require("../../Asset/Icon/CloseIconTooltips.svg"));
var _TooltipsGetType = require("../../Utils/Tooltips/TooltipsGetType");
var _excluded = ["type", "title", "content", "children", "caption", "tag", "trigger", "state", "button", "hyperLink", "style", "className", "mainColor"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tooltips = function Tooltips(_ref) {
  var type = _ref.type,
    title = _ref.title,
    content = _ref.content,
    children = _ref.children,
    caption = _ref.caption,
    tag = _ref.tag,
    trigger = _ref.trigger,
    state = _ref.state,
    button = _ref.button,
    hyperLink = _ref.hyperLink,
    style = _ref.style,
    className = _ref.className,
    mainColor = _ref.mainColor,
    props = _objectWithoutProperties(_ref, _excluded);
  // State to manage visibility
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];

  // Handle close click
  var handleCloseClick = function handleCloseClick() {
    setIsVisible(false);
  };
  var DefaultTooltipContent = /*#__PURE__*/_react.default.createElement("div", {
    className: "default-content-tooltip"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "default-content-tooltip-close",
    onClick: handleCloseClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _CloseIconTooltips.default,
    alt: "Close Icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "default-content-tooltip-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "default-content-tooltip-badge-container"
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), tag && /*#__PURE__*/_react.default.createElement("div", {
    className: "default-content-tooltip-badge"
  }, "New")), /*#__PURE__*/_react.default.createElement("p", null, caption), button && /*#__PURE__*/_react.default.createElement("a", {
    href: hyperLink,
    target: "_blank",
    rel: "noreferrer",
    className: "default-content-tooltip-view"
  }, "View Detail")));
  var ChartTooltipContent = /*#__PURE__*/_react.default.createElement("div", {
    className: "chart-content-tooltip"
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("p", null, caption));
  var _ref2 = (0, _TooltipsGetType.TooltipsGetType)(type) || {},
    Component = _ref2.component;
  if (!Component) return null;
  var tooltipContent = type === 'default' ? DefaultTooltipContent : type === 'chart' ? ChartTooltipContent : content;
  var tooltipTitle = type === 'table' ? title : null;
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    content: tooltipContent,
    title: tooltipTitle,
    placement: state,
    color: mainColor || (type === 'default' ? '#ffff' : '#1D1D1D'),
    trigger: trigger,
    open: isVisible,
    onOpenChange: setIsVisible,
    style: style,
    className: className
  }, props), children);
};
Tooltips.propTypes = {
  type: _propTypes.default.oneOf(['table', 'chart', 'default']).isRequired,
  // Adjusted the prop types
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  children: _propTypes.default.node,
  caption: _propTypes.default.string,
  tag: _propTypes.default.bool,
  trigger: _propTypes.default.string,
  state: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'rightTop', 'rightBottom', 'leftTop', 'leftBottom']).isRequired,
  button: _propTypes.default.bool,
  hyperLink: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
Tooltips.defaultProps = {
  type: 'default',
  title: null,
  content: null,
  children: null,
  caption: null,
  tag: true,
  trigger: 'hover',
  state: 'top',
  button: true,
  hyperLink: null,
  style: null,
  className: null
};
var _default = Tooltips;
exports.default = _default;