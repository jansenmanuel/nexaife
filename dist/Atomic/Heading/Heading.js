"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _HeadingModule = _interopRequireDefault(require("./Heading.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Heading = function Heading(props) {
  var className = props.className,
    color = props.color,
    value = props.value,
    size = props.size,
    onClick = props.onClick;
  function handleColor(color) {
    var setColor = "default";
    if (color === "primer") {
      setColor = "primer";
    } else if (color === "secondary") {
      setColor = "secondary";
    } else if (color === "success") {
      setColor = "success";
    } else if (color === "warning") {
      setColor = "warning";
    } else if (color === "danger") {
      setColor = "danger";
    } else if (color === "info") {
      setColor = "info";
    } else if (color === "light") {
      setColor = "light";
    } else if (color === "dark") {
      setColor = "dark";
    }
    return setColor;
  }
  var sizeClass = function sizeClass(size) {
    var setSize = _HeadingModule.default.H6;
    if (size === 1) {
      setSize = _HeadingModule.default.H1;
    } else if (size === 2) {
      setSize = _HeadingModule.default.H2;
    } else if (size === 3) {
      setSize = _HeadingModule.default.H3;
    } else if (size === 4) {
      setSize = _HeadingModule.default.H4;
    } else if (size === 5) {
      setSize = _HeadingModule.default.H5;
    } else if (size === 6) {
      setSize = _HeadingModule.default.H6;
    }
    return setSize;
  };

  // if (size === 2) {
  return /*#__PURE__*/_react.default.createElement("h6", {
    id: props.id,
    className: "".concat(_HeadingModule.default.Heading, " ").concat(handleColor(color), " ").concat(sizeClass(size), " ").concat(className),
    onClick: onClick
  }, value);
  // } else if (size === 3) {
  //   return (
  //     <h3 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h3>
  //   );
  // } else if (size === 4) {
  //   return (
  //     <h4 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h4>
  //   );
  // } else if (size === 5) {
  //   return (
  //     <h5 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h5>
  //   );
  // } else if (size === 6) {
  //   return (
  //     <h6 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h6>
  //   );
  // } else {
  //   return (
  //     <h1 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h1>
  //   );
  // }
};
var _default = Heading;
exports.default = _default;
Heading.propTypes = {
  onClick: _propTypes.default.func,
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
Heading.defaultProps = {
  className: undefined,
  onClick: undefined,
  value: null,
  size: 6,
  color: "default"
};