"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Image = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@tiptap/react");
var _starterKit = require("@tiptap/starter-kit");
var _HtmlAreaModule = _interopRequireDefault(require("./HtmlArea.module.scss"));
var _extensionImage = _interopRequireDefault(require("@tiptap/extension-image"));
var _extensionUnderline = _interopRequireDefault(require("@tiptap/extension-underline"));
var _extensionLink = _interopRequireDefault(require("@tiptap/extension-link"));
var _extensionPlaceholder = require("@tiptap/extension-placeholder");
var _Toolbar = require("./Toolbar");
var _excluded = ["content", "onChange", "disable", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HtmlArea = function HtmlArea(_ref) {
  var content = _ref.content,
    onChange = _ref.onChange,
    _ref$disable = _ref.disable,
    disable = _ref$disable === void 0 ? false : _ref$disable,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Type what you see is what you get" : _ref$placeholder,
    props = _objectWithoutProperties(_ref, _excluded);
  var id = props.id;
  var editor = (0, _react2.useEditor)({
    content: content,
    editable: !disable,
    editorProps: {
      attributes: {
        class: "".concat(_HtmlAreaModule.default.Content, " ").concat(disable ? _HtmlAreaModule.default.disabled : "")
      }
    },
    extensions: [_starterKit.StarterKit, _extensionUnderline.default, Image, _extensionPlaceholder.Placeholder.configure({
      placeholder: placeholder
    }), _extensionLink.default.configure({
      openOnClick: true,
      autolink: true
    })],
    onUpdate: function onUpdate(_ref2) {
      var editor = _ref2.editor;
      var html = editor.getHTML();
      if (onChange) {
        onChange(html);
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    id: id,
    className: "".concat(_HtmlAreaModule.default.Rte, " ").concat(props.className)
  }, props), /*#__PURE__*/_react.default.createElement(_Toolbar.Toolbar, {
    editor: editor,
    disable: disable
  }), /*#__PURE__*/_react.default.createElement(_react2.EditorContent, {
    onChange: onChange,
    editor: editor
  }));
};
var _default = HtmlArea;
exports.default = _default;
var Image = _extensionImage.default.extend({
  addOptions: _objectSpread(_objectSpread({}, _extensionImage.default.options), {}, {
    allowBase64: true
  })
});
exports.Image = Image;