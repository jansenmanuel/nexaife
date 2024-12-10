"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MultipleSelect;
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../../../Asset/Icon");
var _utils = require("../../../Services/utils");
var _ErrorInformation = _interopRequireDefault(require("../../Error/ErrorInformation"));
var _MultipleSelectModule = _interopRequireDefault(require("./MultipleSelect.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _List = _interopRequireDefault(require("../../List/List"));
var _lodash = _interopRequireDefault(require("lodash"));
var _Tag = _interopRequireDefault(require("../../Tag/Tag"));
var _index = require("../../../index");
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../../config/i18nConfig"));
var _excluded = ["mainColors", "size", "handleChange", "error", "valid", "count_data", "selectedValues", "options", "onBottomScroll", "handleSearch", "placeholderSearch", "maxWidthError"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InputSearch = function InputSearch(_ref) {
  var placeholder = _ref.placeholder,
    size = _ref.size,
    onChange = _ref.onChange,
    id = _ref.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    style: {
      padding: "14px 10px",
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Input, {
    placeholder: placeholder,
    size: size,
    onChange: onChange,
    width: "100%"
  }));
};
function MultipleSelectBase(_ref2) {
  var mainColors = _ref2.mainColors,
    size = _ref2.size,
    handleChange = _ref2.handleChange,
    error = _ref2.error,
    valid = _ref2.valid,
    count_data = _ref2.count_data,
    _ref2$selectedValues = _ref2.selectedValues,
    selectedValues = _ref2$selectedValues === void 0 ? [] : _ref2$selectedValues,
    _ref2$options = _ref2.options,
    options = _ref2$options === void 0 ? [] : _ref2$options,
    onBottomScroll = _ref2.onBottomScroll,
    handleSearch = _ref2.handleSearch,
    placeholderSearch = _ref2.placeholderSearch,
    maxWidthError = _ref2.maxWidthError,
    props = _objectWithoutProperties(_ref2, _excluded);
  var optionsRef = _react.default.useRef(null);
  var _useState = (0, _react.useState)({
      open: false,
      isoptionclick: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  (0, _index.useScrollBottom)(optionsRef, onBottomScroll, 30, isOpen.open);
  var isAllSelected = (0, _react.useMemo)(function () {
    return selectedValues.length === count_data;
  }, [selectedValues, options, count_data]);
  var toggleDropdown = function toggleDropdown() {
    setIsOpen(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        open: !e.open
      });
    });
  };
  var handleSelectAllChange = function handleSelectAllChange() {
    if (isAllSelected) {
      handleChange([]);
    } else {
      var selectedAllOptions = options.map(function (option) {
        return option;
      });
      handleChange(_toConsumableArray(selectedAllOptions));
    }
  };
  var handleOptionChange = function handleOptionChange(opt) {
    var data = opt.data;
    if (selectedValues.find(function (e) {
      return e.id === data.id;
    })) {
      var updatedValues = selectedValues.filter(function (selectedValue) {
        return selectedValue.id !== data.id;
      });
      var optionAllSelected = updatedValues.length === count_data;
      handleChange(updatedValues, optionAllSelected);
    } else {
      var _updatedValues = [].concat(_toConsumableArray(selectedValues), [data]);
      var _optionAllSelected = _updatedValues.length === count_data;
      handleChange(_updatedValues, _optionAllSelected);
    }
  };
  var handleRemoveTag = function handleRemoveTag(value) {
    handleChange(selectedValues.filter(function (selectedValue) {
      return selectedValue.id !== value.id;
    }));
  };
  var isAtBottom = function isAtBottom() {
    if (!selectRef.current) return false;
    var selectBounds = selectRef.current.getBoundingClientRect();
    return window.innerHeight - selectBounds.bottom - 10 < selectBounds.height;
  };
  var getFontRight = function getFontRight() {
    if (props !== null && props !== void 0 && props.disabled) {
      return _MultipleSelectModule.default["Multiple_Select_DB_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    } else if (selectedValues === null || selectedValues.length === 0) {
      return _MultipleSelectModule.default["Multiple_Select_PH_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    } else {
      return _MultipleSelectModule.default["Multiple_Select_ACT_".concat(_lodash.default.startCase(size), "_V2_0_3")];
    }
  };
  var mainColor = "--main-color-select";
  var renderValueInput = (0, _react.useMemo)(function () {
    var disabled = props.disabled,
      placeholder = props.placeholder;

    // If no values are selected, show the placeholder or a default value
    if (selectedValues.length === 0) {
      return placeholder || t("COMMON:MULTIPLE_SELECT.PLACEHOLDER");
    }

    // If "All" is selected, render the "All" tag
    if (isAllSelected) {
      return /*#__PURE__*/_react.default.createElement(_Tag.default, {
        closable: !disabled,
        onClose: function onClose() {
          return handleSelectAllChange();
        },
        title: "All",
        size: size
      });
    }

    // Render individual selected values as tags
    return selectedValues.map(function (el) {
      return /*#__PURE__*/_react.default.createElement(_Tag.default, {
        key: el.id // Add a unique key
        ,
        closable: !disabled,
        onClose: function onClose() {
          return handleRemoveTag(el);
        },
        title: el.value,
        size: size
      });
    });
  }, [isAllSelected, selectedValues, props.disabled, props.placeholder, size]);
  var getClassContainerSelect = function getClassContainerSelect() {
    if (props.disabled) {
      return _MultipleSelectModule.default["MultipleSelectSize".concat(_lodash.default.startCase(size), "Disabled")];
    } else if (valid === false) {
      return _MultipleSelectModule.default["MultipleSelectSize".concat(_lodash.default.startCase(size), "Error")];
    } else {
      return _MultipleSelectModule.default["MultipleSelectSize".concat(_lodash.default.startCase(size))];
    }
  };
  var getGapSelect = function getGapSelect() {
    if (size.toLowerCase() === "sm") {
      return "4px";
    } else if (size.toLowerCase() === "md") {
      return "6px";
    } else if (size.toLowerCase() === "lg") {
      return "8px";
    } else if (size.toLowerCase() === "xl") {
      return "10px";
    } else if (size.toLowerCase() === "xxl") {
      return "12px";
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, props.textLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: _MultipleSelectModule.default["LabelText".concat(_lodash.default.startCase(size))]
  }, /*#__PURE__*/_react.default.createElement("label", null, props.textLabel)), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      toggleDropdown();
    },
    style: _defineProperty({}, mainColor, mainColors),
    id: props.id,
    ref: selectRef,
    className: getClassContainerSelect()
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      gap: getGapSelect(),
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: getFontRight()
  }, renderValueInput), /*#__PURE__*/_react.default.createElement("div", null, isOpen !== null && isOpen !== void 0 && isOpen.open ? /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcChevronUp, {
    color: mainColors ? mainColors : "#818181",
    size: (0, _utils.getSizeIconSameSize)(size)
  }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon.NcChevronDown, {
    color: mainColors ? mainColors : "#818181",
    size: (0, _utils.getSizeIconSameSize)(size)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _MultipleSelectModule.default.containerOptions,
    style: {
      bottom: isAtBottom() ? "100%" : "auto",
      top: isAtBottom() ? "auto" : "100%"
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    } // prevent parent input dropdown triggered by children
    ,
    ref: optionsRef
  }, (isOpen === null || isOpen === void 0 ? void 0 : isOpen.open) && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "white"
    },
    id: "dropdown-".concat(props.id)
  }, handleSearch && /*#__PURE__*/_react.default.createElement(InputSearch, {
    id: "".concat(props.id, "-input-search-mss"),
    placeholder: placeholderSearch || t("COMMON:SEARCH"),
    size: size,
    onChange: handleSearch
  }), props.isAll && /*#__PURE__*/_react.default.createElement(_List.default, {
    key: 0,
    isCheckbox: true,
    size: size,
    titleLabel: "All",
    isSelect: true,
    onClickList: function onClickList(evt) {
      return handleSelectAllChange(evt);
    },
    isCheckboxSelected: isAllSelected,
    id: 0
  }), _lodash.default.map(options, function (el, index) {
    return /*#__PURE__*/_react.default.createElement(_List.default, {
      value: _lodash.default.map(selectedValues, function (el) {
        return el.id;
      }),
      key: index,
      isCheckbox: true,
      size: size,
      isSelect: true,
      id: el.id,
      titleLabel: el.value,
      onClickList: function onClickList(evt) {
        return handleOptionChange(evt);
      }
    });
  }))))), valid === false && /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    size: size,
    text: props === null || props === void 0 ? void 0 : props.errormessage,
    maxWidth: maxWidthError
  }));
}
function MultipleSelect(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(MultipleSelectBase, props));
}
MultipleSelect.propTypes = {
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  valid: _propTypes.default.any,
  errormessage: _propTypes.default.string,
  value: _propTypes.default.any,
  option: _propTypes.default.arrayOf(_propTypes.default.object),
  handleChange: _propTypes.default.func,
  mainColor: _propTypes.default.string,
  id: _propTypes.default.string,
  textLabel: _propTypes.default.string,
  onBottomScroll: _propTypes.default.func,
  placeholderSearch: _propTypes.default.string,
  handleSearch: _propTypes.default.func,
  maxWidthError: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
MultipleSelect.defaultProps = {
  size: "md",
  disabled: false,
  valid: null,
  errormessage: "",
  selectedValues: [],
  handleChange: function handleChange() {},
  onBottomScroll: function onBottomScroll() {},
  options: [],
  mainColor: "",
  id: "",
  count_data: 2,
  textLabel: "",
  handleSearch: null
};