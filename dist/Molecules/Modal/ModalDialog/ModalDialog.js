"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("../../../Atomic/Container/Div/Div"));
var _Modal = _interopRequireDefault(require("../../../Atomic/Modal/Modal/Modal"));
var _ModalBody = _interopRequireDefault(require("../ModalBody/ModalBody"));
var _ModalFooter = _interopRequireDefault(require("../ModalFooter/ModalFooter"));
var _ModalHeader = _interopRequireDefault(require("../ModalHeader/ModalHeader"));
var _ModalDialogModule = _interopRequireDefault(require("./ModalDialog.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ModalDialog = function ModalDialog(props) {
  var closeOnEscapeKeyDown = function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: props.show,
    unmountOnExit: true,
    timeout: 200
  }, /*#__PURE__*/_react.default.createElement(_Div.default, {
    id: props.id,
    className: "".concat(props.className, " ").concat(_ModalDialogModule.default.Modal, "  ").concat(props.show ? _ModalDialogModule.default.EnterDone : _ModalDialogModule.default.Exit, "  modal-dialogs"),
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    id: props.id + "content",
    className: "".concat(props.classContent, " ").concat(_ModalDialogModule.default.ModalContent, " modal-contents"),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(_ModalHeader.default, {
    id: props.id + "header",
    className: "".concat(props.classHeader, " ").concat(_ModalDialogModule.default.ModalHeader),
    title: props.title,
    closeIcon: props.closeIcon,
    onClose: props.onClose,
    hideClose: props.hideClose
  }), /*#__PURE__*/_react.default.createElement(_ModalBody.default, {
    id: props.id + "body",
    message: props.content,
    className: "".concat(_ModalDialogModule.default.ModalBody, " ").concat(props.classBody)
  }), /*#__PURE__*/_react.default.createElement(_ModalFooter.default, {
    id: props.id + "footer",
    className: "".concat(props.classFooter, " ").concat(_ModalDialogModule.default.ModalFooter, " "),
    content: props.footer
  })))), document.getElementById("root"));
};
var _default = ModalDialog;
exports.default = _default;
ModalDialog.defaultProps = {
  footerContent: "",
  id: ""
};