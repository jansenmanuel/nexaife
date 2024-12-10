"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Option = _interopRequireDefault(require("../../../Atomic/Selector/Option/Option"));
var _Select = _interopRequireDefault(require("../../../Atomic/Selector/Select/Select"));
var _classNameDefault = require("../../../Enum/classNameDefault");
var _IdAdditional = require("../../../Enum/IdAdditional");
var _PropsDefault = require("../../../Enum/PropsDefault");
var _TableLimitModule = _interopRequireDefault(require("./TableLimit.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TableLimit(props) {
  return /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(_TableLimitModule.default.SelectBox, " ").concat(_classNameDefault.classNameDefault.selectBox)
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    id: props.id + _IdAdditional.idAdditional.select,
    onChange: function onChange(evt) {
      return props.selectClick(evt);
    }
  }, props.option.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Option.default, {
      id: props.id + _IdAdditional.idAdditional.select + index,
      key: index,
      value: item,
      selected: item === props.defaultOption ? true : false
    }, item);
  })));
}
var _default = TableLimit;
exports.default = _default;
TableLimit.defaultProps = {
  id: _PropsDefault.propsDefault.stringEmpty,
  selectClick: function selectClick() {},
  option: _PropsDefault.propsDefault.option
};