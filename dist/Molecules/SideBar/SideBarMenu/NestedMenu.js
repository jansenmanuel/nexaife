"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ = require("../../../");
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _SideBarItem = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarItem/SideBarItem"));
var _SideBarSide = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarSide/SideBarSide"));
var _SideBarTitle = _interopRequireDefault(require("../../../Atomic/SideBar/SideBarTitle/SideBarTitle"));
var _Span = _interopRequireDefault(require("../../../Atomic/Span/Span"));
var _IconSet = require("../../../Enum/IconSet");
var _PropsDefault = require("../../../Enum/PropsDefault");
var _SideBarMenuModule = _interopRequireDefault(require("./SideBarMenu.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NestedMenu = function NestedMenu(props) {
  var menu = props.menu;
  var _useState = (0, _react.useState)(menu.accordion),
    _useState2 = _slicedToArray(_useState, 2),
    accordion = _useState2[0],
    setAccordion = _useState2[1];
  var accordionClick = function accordionClick() {
    setAccordion(!accordion);
  };
  var collapse = function collapse(accordion) {
    if (accordion === true) {
      return "".concat(_SideBarMenuModule.default.SideBarMenu, " side-bar-menu");
    } else {
      return _SideBarMenuModule.default.SideBarMenuCollapse;
    }
  };
  var classActiveLevel2 = function classActiveLevel2(activeLevel2, type) {
    if (activeLevel2 === type) {
      return "".concat(_SideBarMenuModule.default.SubMenuActive, " sub-menu-active");
    } else {
      return "";
    }
  };
  var classActiveLevel3 = function classActiveLevel3(activeLevel3, type) {
    if (activeLevel3 === type) {
      return "subsubmenu-box-title-active";
    } else {
      return "subsubmenu-box-title";
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    id: props.id,
    to: menu.to,
    onClick: props.handleActiveLevel2
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "container",
    className: "".concat(_SideBarMenuModule.default.SubMenu, " sub-menu ").concat(classActiveLevel2(props.activeLevel2, props.type)),
    onClick: accordionClick
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "icon",
    className: "".concat(_SideBarMenuModule.default.IconSubMenu, " icon-sub-menu")
  }, menu.icon), /*#__PURE__*/_react.default.createElement(_SideBarTitle.default, {
    id: props.id + "title",
    className: "".concat(_SideBarMenuModule.default.SubMenuTitle, " sub-menu-title"),
    value: menu.title
  }), /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id + "arrow",
    className: "".concat(_SideBarMenuModule.default.IconAccordion, " icon-accordion")
  }, menu.submenu.length > 0 ? accordion === true ? /*#__PURE__*/_react.default.createElement(_.nexIcon.NcArrowUp, {
    size: _IconSet.iconSet.size.md
  }) : /*#__PURE__*/_react.default.createElement(_.nexIcon.NcArrowDown, {
    size: _IconSet.iconSet.size.md
  }) : ""))), menu.submenu.length > 0 ? /*#__PURE__*/_react.default.createElement(_SideBarSide.default, {
    id: props.id + "menucontainer",
    className: collapse(accordion)
  }, menu.submenu.map(function (value, index) {
    return /*#__PURE__*/_react.default.createElement(_SideBarItem.default, {
      id: props.id + "menuitem" + index,
      key: index,
      className: "subsubmenu"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "subsubmenu-link",
      id: props.id + "menuitemlink" + index,
      to: value.url
    }, /*#__PURE__*/_react.default.createElement(_Div.default, {
      id: props.id + "menuitemboxtitle" + index,
      className: "".concat(classActiveLevel3(props.activeLevel3, value.url))
    }, /*#__PURE__*/_react.default.createElement(_Span.default, {
      id: props.id + "menuitemtitle" + index,
      className: "subsubmenu-title",
      value: value.name
    }))));
  })) : "");
};
var _default = NestedMenu;
exports.default = _default;
NestedMenu.defaultProps = {
  id: _PropsDefault.propsDefault.stringEmpty
};