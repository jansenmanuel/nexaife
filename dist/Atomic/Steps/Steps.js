"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _StepsModule = _interopRequireDefault(require("./Steps.module.scss"));
var _colorConstant = require("../../Constant/colorConstant");
var _excluded = ["id", "items", "current", "mainColor"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Step = _antd.Steps.Step;
var Steps = function Steps(_ref) {
  var id = _ref.id,
    items = _ref.items,
    current = _ref.current,
    mainColor = _ref.mainColor,
    props = _objectWithoutProperties(_ref, _excluded);
  var stepsStyle = {
    '--main-color': mainColor
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _StepsModule.default.container,
    style: stepsStyle
  }, /*#__PURE__*/_react.default.createElement(_antd.Steps, _extends({
    id: id,
    current: current
  }, props), items === null || items === void 0 ? void 0 : items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Step, {
      id: item.id,
      title: item.title,
      description: item.description
    });
  })));
};
Steps.propTypes = {
  id: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    description: _propTypes.default.string
  })).isRequired,
  current: _propTypes.default.number.isRequired
};
Steps.defaultProps = {
  items: [],
  current: 0,
  mainColor: _colorConstant.BLUE_COLOR
};
var _default = Steps;
exports.default = _default;