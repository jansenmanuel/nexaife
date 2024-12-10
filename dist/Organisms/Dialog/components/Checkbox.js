"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxLocation;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _generalConstant = require("../../../Constant/generalConstant");
var _excluded = ["indeterminate", "checked", "id", "compute", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function CheckboxLocation(props) {
  var indeterminate = props.indeterminate,
    checked = props.checked,
    id = props.id,
    compute = props.compute,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, _extends({}, rest, {
    checked: checked,
    indeterminate: indeterminate,
    onChange: function onChange(e) {
      var newStatus = e.target.checked ? _generalConstant.STATUS.checked : _generalConstant.STATUS.unchecked;
      compute(id, newStatus);
    }
  }), children);
}