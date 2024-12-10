"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _getAspectRatio = require("../../Utils/View/getAspectRatio");
var _VideoModule = _interopRequireDefault(require("./Video.module.css"));
var _excluded = ["aspectRatio", "orientation", "src", "autoPlay", "controls", "type", "poster", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Video = function Video(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? "1:1" : _ref$aspectRatio,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? 'landscape' : _ref$orientation,
    src = _ref.src,
    autoPlay = _ref.autoPlay,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? true : _ref$controls,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "video/mp4" : _ref$type,
    _ref$poster = _ref.poster,
    poster = _ref$poster === void 0 ? '' : _ref$poster,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var calculatedAspectRatio = (0, _getAspectRatio.getAspectRatio)(aspectRatio, orientation);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _VideoModule.default.videoContainer,
    style: {
      aspectRatio: calculatedAspectRatio
    }
  }, /*#__PURE__*/_react.default.createElement("video", _extends({
    className: _VideoModule.default.videoContent,
    autoPlay: autoPlay,
    controls: controls,
    poster: poster
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: src,
    type: type
  }), children));
};
var _default = Video;
exports.default = _default;