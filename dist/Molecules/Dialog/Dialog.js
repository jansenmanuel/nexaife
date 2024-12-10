"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _CloseIcon = _interopRequireDefault(require("../../Asset/Icon/CloseIcon.js"));
var _EmptyIllustrations = _interopRequireDefault(require("../../Asset/Icon/EmptyIllustrations.png"));
var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));
var _DialogUtils = require("../../Utils/Dialog/DialogUtils.js");
var _Button = _interopRequireDefault(require("../../Atomic/Button/Button.js"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup.js"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ImageUrlDefault = _interopRequireDefault(require("../../Asset/Icon/ImageUrlDefault.png"));
var _Select = _interopRequireDefault(require("../../Atomic/Selector/Select/Select.js"));
var _TextArea = _interopRequireDefault(require("../../Atomic/Input/TextArea/TextArea.js"));
var _Input = _interopRequireDefault(require("../../Atomic/Input/Input/Input.js"));
var _utils = require("../../Services/utils.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _excluded = ["id", "isVideo", "title", "contentTitle", "onOkTitle", "onCancelTitle", "message", "type", "size", "open", "onOk", "onCancel", "content", "items", "mediaUrl", "alt", "mainColor", "mainBtnCancelColor", "singleButton", "onFuncClickCancel", "onFuncClickOk", "desc", "onSubmit", "children", "footer", "ilustrationImg"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var Dialog = function Dialog(_ref) {
  var id = _ref.id,
    isVideo = _ref.isVideo,
    title = _ref.title,
    contentTitle = _ref.contentTitle,
    onOkTitle = _ref.onOkTitle,
    onCancelTitle = _ref.onCancelTitle,
    message = _ref.message,
    type = _ref.type,
    size = _ref.size,
    open = _ref.open,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    content = _ref.content,
    items = _ref.items,
    mediaUrl = _ref.mediaUrl,
    alt = _ref.alt,
    mainColor = _ref.mainColor,
    mainBtnCancelColor = _ref.mainBtnCancelColor,
    singleButton = _ref.singleButton,
    onFuncClickCancel = _ref.onFuncClickCancel,
    onFuncClickOk = _ref.onFuncClickOk,
    desc = _ref.desc,
    onSubmit = _ref.onSubmit,
    children = _ref.children,
    footer = _ref.footer,
    ilustrationImg = _ref.ilustrationImg,
    props = _objectWithoutProperties(_ref, _excluded);
  var _getSize = (0, _DialogUtils.getSize)(size),
    dialogSize = _getSize.dialogSize,
    inputSize = _getSize.inputSize;
  var sizeClass = (0, _DialogUtils.getSizeClass)(type, size);
  var sizeDetailContentClass = (0, _DialogUtils.getSizeDetailContentClass)(size);
  var videoRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    optionValue = _useState2[0],
    setOptionValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    options = _useState4[0],
    setOptions = _useState4[1];
  var initialFormValues = items.reduce(function (values, item) {
    values[item.name] = item.defaultValue || "";
    return values;
  }, {});
  var _useState5 = (0, _react.useState)(initialFormValues),
    _useState6 = _slicedToArray(_useState5, 2),
    formValues = _useState6[0],
    setFormValues = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFormValid = _useState8[0],
    setIsFormValid = _useState8[1];
  (0, _react.useEffect)(function () {
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
    validateForm(initialFormValues); // Validate form on open
  }, [open]);

  // const handleInputChange = (name, value) => {
  //     const newFormValues = {
  //         ...formValues,
  //         [name]: value
  //     };
  //     setFormValues(newFormValues);
  //     validateForm(newFormValues);
  // };

  var handleInputChange = function handleInputChange(name, value) {
    console.log(name, value);
    // Find the corresponding form item
    var formItem = items.find(function (item) {
      return item.name === name;
    });

    // If formItem exists and has an onChange handler, call it
    if (formItem && typeof formItem.onChange === "function") {
      formItem.onChange(value);
    }

    // Update form values
    var newFormValues = _objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, value));
    setFormValues(newFormValues);

    // Validate the form with the new values
    validateForm(newFormValues);
  };
  var _handleSearch = function handleSearch(evt) {
    var value = evt.target.value;
    var resultFind = _lodash.default.filter(optionValue, function (el) {
      if (el.value.toLowerCase().includes(value.toLowerCase())) {
        return el.value;
      }
    });
    setOptions((0, _utils.selectOption)([], resultFind, "value"));
  };
  var setValueOption = function setValueOption(itemOptions) {
    var option = itemOptions;
    setOptionValue(option);
    setOptions((0, _utils.selectOption)([], option, "value"));
  };
  (0, _react.useEffect)(function () {
    items.forEach(function (item) {
      if (item.inputType === "select") {
        setValueOption(item.options);
      }
    });
  }, [items]);
  var validateForm = function validateForm(values) {
    var isValid = items.every(function (item) {
      if (item.required) {
        return values[item.name] !== "";
      }
      return true;
    });
    setIsFormValid(isValid);
  };
  var handleFormSubmit = function handleFormSubmit() {
    if (isFormValid) {
      onSubmit(formValues);
      setFormValues(initialFormValues);
    }
  };
  var defaultContent = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["default-content"]
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("p", null, message));

  // Custom footer
  var defaultFooter = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["default-footer"]
  }, singleButton ? /*#__PURE__*/_react.default.createElement(_Button.default, {
    mainColor: mainColor,
    buttonType: "primary",
    size: "md",
    label: onOkTitle,
    onClick: onFuncClickOk || onOk,
    disabled: !isFormValid
  }) : /*#__PURE__*/_react.default.createElement(_ButtonGroup.default, {
    cancel: onCancelTitle,
    confirm: onOkTitle,
    mainColor: mainColor,
    secondaryColor: "#FFFFFF",
    size: "md",
    onConfirm: onFuncClickOk || (type === "form" ? handleFormSubmit : onOk),
    onCancel: onFuncClickCancel || onCancel,
    disableConfirm: !isFormValid
  }));
  var ilustrationContent = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["ilustration-content"]
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: ilustrationImg || _EmptyIllustrations.default,
    alt: "empty illustrations"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["text-container"]
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("p", null, message)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    mainColor: mainColor,
    buttonType: "primary",
    size: "md",
    label: onOkTitle,
    onClick: onFuncClickOk || onOk
  }));
  var detailContentClass = size === "sm" ? "detail-content-body-item-sm" : "detail-content-body-item";
  var formContentClass;
  if (size === "sm") {
    formContentClass = "detail-content-body-item-sm";
  } else if (size === "md") {
    formContentClass = "detail-content-body-item-sm";
  } else {
    formContentClass = "detail-content-body-item";
  }
  var detailContent = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["detail-content-container"]
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(sizeDetailContentClass, " ").concat(_DialogModule.default["detail-content"])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["detail-content-body"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default[detailContentClass]
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      id: index,
      className: _DialogModule.default["detail-content-item"]
    }, /*#__PURE__*/_react.default.createElement("h1", null, item.title), /*#__PURE__*/_react.default.createElement("p", null, item.description));
  })))));
  var renderFormItem = function renderFormItem(item) {
    if (item.inputType === "select") {
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        onChange: function onChange(e) {
          return handleInputChange(item.name, e);
        },
        option: options,
        errorMessage: item.errorMessage,
        textLabel: item.textLabel || item.title,
        size: "md",
        isOptional: item.isOptional,
        value: formValues[item.name],
        width: item.width || inputSize.width,
        search: true,
        name: item.name,
        handleSearch: function handleSearch(e) {
          return _handleSearch(e);
        }
      });
    } else if (item.inputType === "input") {
      return /*#__PURE__*/_react.default.createElement(_Input.default, {
        width: inputSize.width,
        label: item.title,
        size: "md",
        placeholder: item.placeholder,
        value: formValues[item.name],
        onChange: function onChange(e) {
          return handleInputChange(item.name, e);
        },
        disabled: item.disabled,
        pattern: item.pattern,
        maxLength: item.maxLength,
        required: item.required,
        type: item.type,
        defaultValue: item.defaultValue,
        onClick: props.onClick,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        checked: item.checked,
        name: item.name
      });
    } else if (item.inputType === "textarea") {
      return /*#__PURE__*/_react.default.createElement(_TextArea.default, {
        width: inputSize.width,
        placeholder: item.placeholder,
        size: "lg"
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_Input.default, {
        width: inputSize.width,
        label: item.title,
        size: "md",
        placeholder: item.placeholder,
        value: formValues[item.name],
        onChange: function onChange(e) {
          return handleInputChange(item.name, e.target.value);
        },
        disabled: item.disabled,
        pattern: item.pattern,
        maxLength: item.maxLength,
        required: item.required,
        type: item.type,
        defaultValue: item.defaultValue,
        onClick: props.onClick,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        checked: item.checked,
        name: item.name
      });
    }
    return null;
  };
  var FormContent = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["detail-content-container"]
  }, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("p", null, desc), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(sizeDetailContentClass, " ").concat(_DialogModule.default["detail-content"])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["detail-content-body"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default[formContentClass]
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      id: index,
      className: _DialogModule.default["detail-content-item"]
    }, /*#__PURE__*/_react.default.createElement("h2", null, item.title), renderFormItem(item));
  })))));
  var dialogBodyClass = type === "media" ? "dialog-body-image" : "dialog-body";
  var imageContent = /*#__PURE__*/_react.default.createElement("div", {
    className: _DialogModule.default["image-content"]
  }, isVideo ? /*#__PURE__*/_react.default.createElement("video", {
    controls: true,
    ref: videoRef,
    key: mediaUrl
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: mediaUrl,
    type: "video/mp4"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: mediaUrl,
    type: "video/ogg"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: mediaUrl,
    type: "video/avi"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: mediaUrl,
    type: "video/mov"
  }), "Your browser does not support the video tag.") : /*#__PURE__*/_react.default.createElement("img", {
    src: mediaUrl,
    alt: alt
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, title || alt)));

  // Define getType inside the component
  var getType = function getType(type) {
    var typeLower = type.toLowerCase();
    switch (typeLower) {
      case "default":
        return {
          footerComponent: defaultFooter,
          contentType: defaultContent
        };
      case "ilustration":
        return {
          footerComponent: null,
          contentType: ilustrationContent
        };
      case "detail":
        return {
          footerComponent: defaultFooter,
          contentType: detailContent
        };
      case "media":
        return {
          footerComponent: null,
          contentType: imageContent
        };
      case "form":
        return {
          footerComponent: defaultFooter,
          contentType: FormContent
        };
      default:
        return {
          footerComponent: null,
          contentType: defaultContent
        };
    }
  };
  var _getType = getType(type),
    footerComponent = _getType.footerComponent,
    contentType = _getType.contentType;
  return /*#__PURE__*/_react.default.createElement(_antd.Modal, _extends({
    wrapClassName: "".concat(_DialogModule.default.container, " ").concat(sizeClass),
    width: dialogSize,
    open: open,
    onOk: onOk,
    onCancel: onCancel,
    centered: true,
    footer: footer || footerComponent,
    closeIcon: _CloseIcon.default || /*#__PURE__*/_react.default.createElement(_CloseIcon.default, {
      color: "#424242",
      size: 18,
      style: {
        cursor: "pointer",
        position: "absolute",
        top: "24px",
        right: "24px"
      },
      onClick: onCancel,
      content: content
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: dialogBodyClass,
    id: id
  }, content ? content : contentType, children));
};
Dialog.propTypes = {
  type: _propTypes.default.oneOf(["default", "ilustration", "detail", "media", "form"]),
  title: _propTypes.default.string,
  content: _propTypes.default.node,
  dialogSize: _propTypes.default.oneOf(["sm", "md", "lg", "xl"]),
  image: _propTypes.default.string,
  onOk: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string,
      value: _propTypes.default.string
    }))
  })),
  mediaUrl: _propTypes.default.string,
  message: _propTypes.default.string,
  contentTitle: _propTypes.default.string,
  onOkTitle: _propTypes.default.string,
  onCancelTitle: _propTypes.default.string,
  mainColor: _propTypes.default.string,
  alt: _propTypes.default.string,
  mainBtnCancelColor: _propTypes.default.string,
  singleButton: _propTypes.default.bool,
  isVideo: _propTypes.default.bool,
  onFuncClickCancel: _propTypes.default.func,
  onFuncClickOk: _propTypes.default.func,
  desc: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  footer: _propTypes.default.node
};
Dialog.defaultProps = {
  type: "default",
  title: "",
  content: "",
  dialogSize: "md",
  image: "",
  onOk: function onOk() {},
  items: [],
  mediaUrl: _ImageUrlDefault.default,
  message: "",
  contentTitle: "",
  onOkTitle: "Ok",
  onCancelTitle: "Cancel",
  mainColor: "",
  alt: "",
  mainBtnCancelColor: "",
  singleButton: false,
  isVideo: false,
  onFuncClickCancel: null,
  onFuncClickOk: null,
  onSubmit: function onSubmit() {},
  footer: null
};
var _default = Dialog;
exports.default = _default;