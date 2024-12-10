"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Avatar = _interopRequireDefault(require("../../Atomic/Avatar/Avatar"));
var _AvatarGroupUtils = require("../../Utils/Avatar/AvatarGroupUtils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _avatarIcon = _interopRequireDefault(require("../../Asset/Icon/avatarIcon.png"));
var _excluded = ["size", "state", "type", "count", "mainColor", "imgUrl", "alt", "style"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AvatarGroup = function AvatarGroup(_ref) {
  var size = _ref.size,
    state = _ref.state,
    type = _ref.type,
    count = _ref.count,
    mainColor = _ref.mainColor,
    imgUrl = _ref.imgUrl,
    alt = _ref.alt,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var _getGapBasedOnSize = (0, _AvatarGroupUtils.getGapBasedOnSize)(size),
    groupGap = _getGapBasedOnSize.groupGap,
    multipleGap = _getGapBasedOnSize.multipleGap;
  var renderAvatars = function renderAvatars() {
    if (state === 'group') {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          gap: "".concat(groupGap, "px")
        }
      }, /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)));
    } else if (state === 'multiple') {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex"
        }
      }, /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        style: _objectSpread(_objectSpread({}, style), {}, {
          marginLeft: multipleGap
        }),
        alt: alt,
        imgUrl: imgUrl
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        state: "initial",
        count: count,
        style: _objectSpread(_objectSpread({}, style), {}, {
          marginLeft: multipleGap
        }),
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl
      }, props)));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          gap: {
            groupGap: groupGap
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)), /*#__PURE__*/_react.default.createElement(_Avatar.default, _extends({
        size: size,
        type: type,
        mainColor: mainColor,
        alt: alt,
        imgUrl: imgUrl,
        style: style
      }, props)));
    }
  };
  return renderAvatars();
};
AvatarGroup.propTypes = {
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  state: _propTypes.default.oneOf(['group', 'multiple']),
  type: _propTypes.default.oneOf(['circle', 'square']),
  count: _propTypes.default.number,
  mainColor: _propTypes.default.string,
  imgUrl: _propTypes.default.string,
  alt: _propTypes.default.string,
  style: _propTypes.default.object
};
AvatarGroup.defaultProps = {
  size: "md",
  state: "group",
  type: "circle",
  count: 0,
  mainColor: "",
  imgUrl: _avatarIcon.default,
  alt: "",
  style: {}
};
var _default = AvatarGroup;
exports.default = _default;