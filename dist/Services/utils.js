"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOption = exports.getSizeIconSameSize = exports.getSizeDivider = exports.getHeightDivider = exports.getBorderRadius = exports.dropdownCustom = exports._ignoreBackspace = void 0;
var _antd = require("antd");
var _Input = _interopRequireDefault(require("../Atomic/Input/Input/Input"));
var _utilsModule = _interopRequireDefault(require("./utils.module.scss"));
var _react = _interopRequireDefault(require("react"));
var _Helpers = require("../Utils/Helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // import Option from "../Atomic/Selector/Option/Option";
var Option = _antd.Select.Option;
var selectOption = function selectOption(currentData, previousData, label) {
  var data = _toConsumableArray(currentData);
  var arrayOfKey = currentData.map(function (obj) {
    return obj.key;
  });
  if (previousData && previousData !== currentData) {
    var _iterator = _createForOfIteratorHelper(previousData),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        !arrayOfKey.includes(value.id.toString()) && data.push( /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
          key: value.id,
          value: value.id,
          id: "option-".concat(value.id)
        }, value[label]));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return data;
};
exports.selectOption = selectOption;
var _ignoreBackspace = function _ignoreBackspace(e) {
  if (e.key === "Backspace") {
    e.stopPropagation();
  }
};
exports._ignoreBackspace = _ignoreBackspace;
var dropdownCustom = function dropdownCustom(t, menu, search, id, placeholder, value) {
  var idGenerate;
  if (!id) {
    idGenerate = (0, _Helpers.generateId)('dropdown');
  } else {
    idGenerate = id;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "2px 8px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    id: "".concat(idGenerate, "-input-search"),
    className: _utilsModule.default.containerDropdownRender,
    placeholder: placeholder || t('COMMON:SEARCH'),
    size: "sm",
    selectSearch: true,
    onChange: search
    // allowClear
    ,
    value: value,
    defaultValue: value,
    onKeyDown: function onKeyDown(e) {
      _ignoreBackspace(e);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 2
    }
  }, menu));
};
exports.dropdownCustom = dropdownCustom;
var getSizeIconSameSize = function getSizeIconSameSize(value) {
  var ValueToLower = value.toLowerCase();
  if (ValueToLower === "sm") {
    return 12;
  } else if (ValueToLower === "md") {
    return 15;
  } else if (ValueToLower === "lg") {
    return 18;
  } else if (ValueToLower === "xl") {
    return 21;
  } else if (ValueToLower === "xxl") {
    return 27;
  }
};
exports.getSizeIconSameSize = getSizeIconSameSize;
var getBorderRadius = function getBorderRadius(value) {
  var ValueToLower = value.toLowerCase();
  if (ValueToLower === "sm") {
    return "6px";
  } else if (ValueToLower === "md") {
    return "8px";
  } else if (ValueToLower === "lg") {
    return "10px";
  } else if (ValueToLower === "xl") {
    return "12px";
  } else if (ValueToLower === "xxl") {
    return "14px";
  }
};
exports.getBorderRadius = getBorderRadius;
var getHeightDivider = function getHeightDivider() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "sm";
  var ValueToLower = value.toLowerCase();
  if (ValueToLower === "sm") {
    return "6px";
  } else if (ValueToLower === "md") {
    return "8px";
  } else if (ValueToLower === "lg") {
    return "10px";
  } else if (ValueToLower === "xl") {
    return "12px";
  } else if (ValueToLower === "xxl") {
    return "14px";
  }
};
exports.getHeightDivider = getHeightDivider;
var getSizeDivider = function getSizeDivider(sized) {
  if (sized === "sm") {
    return "16px";
  } else if (sized === "md") {
    return "24px";
  } else if (sized === "lg") {
    return "30px";
  } else if (sized === "xl") {
    return "36px";
  } else if (sized === "xxl") {
    return "44px";
  }
};
exports.getSizeDivider = getSizeDivider;