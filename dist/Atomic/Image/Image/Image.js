"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ImageModule = _interopRequireDefault(require("./Image.module.css"));
var _generalConstant = require("../../../Constant/generalConstant");
var _excluded = ["aspectRatio", "orientation", "src", "alt", "fallback"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Image = function Image(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? '1:1' : _ref$aspectRatio,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
    src = _ref.src,
    alt = _ref.alt,
    _ref$fallback = _ref.fallback,
    fallback = _ref$fallback === void 0 ? _generalConstant.IMAGE_FALLBACK : _ref$fallback,
    props = _objectWithoutProperties(_ref, _excluded);
  var _aspectRatio$split$ma = aspectRatio.split(":").map(Number),
    _aspectRatio$split$ma2 = _slicedToArray(_aspectRatio$split$ma, 2),
    width = _aspectRatio$split$ma2[0],
    height = _aspectRatio$split$ma2[1];
  var calculatedAspectRatio = orientation === "portrait" ? "".concat(height, " / ").concat(width) : "".concat(width, " / ").concat(height);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImageModule.default.imageContainer,
    style: {
      aspectRatio: calculatedAspectRatio
    }
  }, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: src,
    onError: function onError(e) {
      return e.currentTarget.src = fallback;
    },
    alt: alt,
    className: _ImageModule.default.imageContent
  }, props)));
};
Image.propTypes = {
  aspectRatio: _propTypes.default.string.isRequired,
  orientation: _propTypes.default.oneOf(["portrait", "landscape"]).isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  fallback: _propTypes.default.string
};
var _default = Image;
exports.default = _default;