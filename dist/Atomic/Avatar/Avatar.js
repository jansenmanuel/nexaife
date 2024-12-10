"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _AvatarModule = _interopRequireDefault(require("./Avatar.module.scss"));
var _AvatarDefault = _interopRequireDefault(require("../../Asset/Icon/AvatarDefault.png"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AvatarUtils = require("../../Utils/Avatar/AvatarUtils");
var _excluded = ["type", "size", "state", "mainColor", "count", "imgUrl", "style", "alt", "txtAvatar"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Avatar = function Avatar(_ref) {
  var type = _ref.type,
    size = _ref.size,
    state = _ref.state,
    mainColor = _ref.mainColor,
    count = _ref.count,
    imgUrl = _ref.imgUrl,
    style = _ref.style,
    alt = _ref.alt,
    txtAvatar = _ref.txtAvatar,
    props = _objectWithoutProperties(_ref, _excluded);
  var _getSize = (0, _AvatarUtils.getSize)(size),
    textClass = _getSize.textClass,
    offset = _getSize.offset;
  var typeValue = (0, _AvatarUtils.getType)(type);
  var badgeSizeClass = (0, _AvatarUtils.getBadgeSizeClass)(size, state);
  var _getAvatarSizeClass = (0, _AvatarUtils.getAvatarSizeClass)(size),
    avatarSizeClass = _getAvatarSizeClass.avatarSizeClass,
    containerSquareClass = _getAvatarSizeClass.containerSquareClass;
  var InitialStateContent = function InitialStateContent() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _AvatarModule.default['content-initial'],
      style: {
        backgroundColor: mainColor
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _AvatarModule.default[textClass]
    }, count || txtAvatar));
  };
  var renderAvatarWithBadge = function renderAvatarWithBadge() {
    if (state === 'notification') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_AvatarModule.default.container, " ").concat(containerSquareClass)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: badgeSizeClass
      }, /*#__PURE__*/_react.default.createElement(_antd.Badge, _extends({
        count: count,
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: mainColor
        })
      }, props), /*#__PURE__*/_react.default.createElement("div", {
        className: avatarSizeClass
      }, /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
        shape: typeValue,
        icon: state === 'initial' ? /*#__PURE__*/_react.default.createElement(InitialStateContent, null) : /*#__PURE__*/_react.default.createElement("img", _extends({
          src: imgUrl,
          alt: alt
        }, props))
      })))));
    } else if (state === 'badge') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_AvatarModule.default.container, " ").concat(containerSquareClass)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: badgeSizeClass
      }, /*#__PURE__*/_react.default.createElement(_antd.Badge, _extends({
        dot: true,
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: mainColor
        }),
        offset: offset
      }, props), /*#__PURE__*/_react.default.createElement("div", {
        className: avatarSizeClass
      }, /*#__PURE__*/_react.default.createElement(Avatar, {
        shape: typeValue,
        icon: state === 'initial' ? /*#__PURE__*/_react.default.createElement(InitialStateContent, null) : /*#__PURE__*/_react.default.createElement("img", _extends({
          src: imgUrl,
          alt: alt
        }, props))
      })))));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_AvatarModule.default.container, " ").concat(containerSquareClass)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: avatarSizeClass
      }, /*#__PURE__*/_react.default.createElement(Avatar, _extends({
        shape: typeValue,
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: mainColor
        })
      }, props, {
        icon: state === 'initial' ? /*#__PURE__*/_react.default.createElement(InitialStateContent, null) : /*#__PURE__*/_react.default.createElement("img", {
          src: imgUrl,
          alt: alt
        })
      }))));
    }
  };
  return renderAvatarWithBadge();
};
Avatar.propTypes = {
  type: _propTypes.default.oneOf(['circle', 'square']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  state: _propTypes.default.oneOf(['initial', 'default', 'notification', 'badge']),
  mainColor: _propTypes.default.string,
  count: _propTypes.default.number,
  imgUrl: _propTypes.default.string,
  style: _propTypes.default.object,
  alt: _propTypes.default.string,
  txtAvatar: _propTypes.default.string
};
Avatar.defaultProps = {
  type: "circle",
  size: "md",
  state: "default",
  count: 0,
  imgUrl: _AvatarDefault.default,
  style: {},
  alt: "",
  txtAvatar: ""
};
var _default = Avatar;
exports.default = _default;