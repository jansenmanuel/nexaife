"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListCollapseModule = _interopRequireDefault(require("./ListCollapse.module.scss"));
var _generalConstant = require("../../../Constant/generalConstant");
var _antd = require("antd");
var _Checkbox = _interopRequireDefault(require("../components/Checkbox"));
var _excluded = ["items", "checkedValues", "handleCheck", "compute", "handlePanel", "activeKey"]; // Libs
// Constants
// Components
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Panel = _antd.Collapse.Panel;
var CollapseLocation = function CollapseLocation(_ref) {
  var items = _ref.items,
    checkedValues = _ref.checkedValues,
    handleCheck = _ref.handleCheck,
    compute = _ref.compute,
    handlePanel = _ref.handlePanel,
    _ref$activeKey = _ref.activeKey,
    activeKey = _ref$activeKey === void 0 ? [] : _ref$activeKey,
    props = _objectWithoutProperties(_ref, _excluded);
  var activePanels = props.activePanels,
    setActivePanels = props.setActivePanels;
  var onCollapseChange = (0, _react.useCallback)(function (keys, level) {
    setActivePanels(function (prev) {
      var returnedData = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, level, keys));
      handlePanel(returnedData, level);
      return returnedData;
    });
  }, [handlePanel, setActivePanels]);
  var renderItems = function renderItems(items) {
    var currentLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
      expandIconPosition: "end",
      ghost: true,
      className: _ListCollapseModule.default.collapseCustom,
      destroyInactivePanel: true,
      onChange: function onChange(e) {
        return onCollapseChange(e, currentLevel);
      },
      activeKey: activePanels[currentLevel]
    }, items.map(function (opt) {
      if (opt.items && opt.items.length > 0) {
        return /*#__PURE__*/_react.default.createElement(Panel, {
          collapsible: "icon",
          extra: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
            id: opt.id,
            name: opt.name,
            checked: opt.status === _generalConstant.STATUS.checked,
            indeterminate: opt.status === _generalConstant.STATUS.indeterminate,
            compute: compute
          }),
          header: "".concat(opt.name),
          key: opt.id
        }, renderItems(opt.items, currentLevel + 1));
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: opt.id,
          style: {
            paddingTop: 8,
            paddingBottom: 6
          }
        }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          id: opt.id,
          name: opt.name,
          checked: opt.status === _generalConstant.STATUS.checked,
          indeterminate: opt.status === _generalConstant.STATUS.indeterminate,
          compute: compute
        }, opt.name));
      }
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", null, renderItems(items));
};
var _default = CollapseLocation;
exports.default = _default;