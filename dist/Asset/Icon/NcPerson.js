"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PropsDefault = require("../../Enum/PropsDefault");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NcPerson = function NcPerson(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: props.className,
    width: props.width,
    height: props.height,
    viewBox: "0 0 17 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 24.0001V18.0001C0.000283491 16.8183 0.262399 15.6513 0.767456 14.5829C1.27251 13.5146 2.00799 12.5714 2.92102 11.8211C3.06002 11.9611 3.20101 12.101 3.35101 12.231C3.45101 12.331 3.56102 12.411 3.67102 12.501C3.69587 12.5233 3.7226 12.5435 3.75098 12.5611C3.87516 12.6623 4.00542 12.7557 4.14099 12.841C4.45113 13.0495 4.77905 13.2302 5.12097 13.381C5.16797 13.405 5.21297 13.4261 5.25897 13.4461C5.30497 13.4661 5.369 13.4891 5.422 13.5101C5.50459 13.5507 5.59194 13.5809 5.68201 13.6C5.77352 13.6391 5.86737 13.6725 5.96301 13.7H5.97198C6.15338 13.7572 6.33763 13.805 6.52399 13.8431L6.56097 13.851C6.70234 13.8851 6.84614 13.9086 6.99103 13.9211H7.03198C7.14686 13.9465 7.26355 13.9628 7.38098 13.97H7.39099C7.52914 13.9891 7.66857 13.9971 7.80798 13.9941H7.84003H7.87201C7.91482 14.0023 7.95844 14.0057 8.00201 14.0041C8.04559 14.0056 8.0892 14.0023 8.13202 13.9941H8.23199C8.3604 13.9953 8.48876 13.9872 8.61603 13.97H8.62701C8.74444 13.9628 8.86113 13.9464 8.97601 13.9211H9.01599C9.14328 13.9108 9.26961 13.8911 9.39398 13.8621L9.44598 13.851C9.64526 13.8119 9.84225 13.7619 10.036 13.7011H10.045C10.1406 13.6737 10.2345 13.6402 10.326 13.601C10.4161 13.5819 10.5034 13.5517 10.586 13.511L10.74 13.45C10.789 13.429 10.84 13.406 10.886 13.381C11.2281 13.2306 11.5561 13.0498 11.866 12.841C11.9865 12.765 12.103 12.6829 12.215 12.595L12.256 12.5611C12.2813 12.5452 12.3054 12.5275 12.328 12.5081L12.336 12.501C12.4472 12.4166 12.554 12.3264 12.656 12.231C12.805 12.101 12.946 11.9611 13.086 11.8211C13.2623 11.9601 13.4293 12.1103 13.586 12.2711C13.7498 12.4207 13.9035 12.581 14.046 12.751C14.186 12.921 14.327 13.0911 14.456 13.2711C14.585 13.4511 14.706 13.6211 14.826 13.8111C14.9059 13.932 14.9761 14.0591 15.036 14.1911C15.106 14.3211 15.176 14.4511 15.236 14.5811C15.253 14.6058 15.2665 14.6327 15.276 14.6611C15.346 14.8111 15.416 14.972 15.476 15.131C15.5645 15.3526 15.6383 15.5798 15.697 15.8111L15.709 15.8531L15.716 15.8781V15.887C15.745 15.987 15.77 16.0971 15.794 16.2011C15.834 16.3511 15.864 16.5121 15.894 16.6721C15.924 16.8921 15.954 17.1111 15.974 17.3321C15.994 17.5531 16.004 17.782 16.004 18.002V24.002L0 24.0001ZM2 18.0001V22.0001H14V18.0001C13.9992 16.7655 13.6186 15.561 12.91 14.5501C11.4472 15.4965 9.74219 15.9999 8 15.9999C6.25781 15.9999 4.55277 15.4965 3.09003 14.5501L3.05701 14.5971C2.36876 15.5985 2.00022 16.785 2 18.0001ZM2 6.00006C2 4.81337 2.35188 3.65338 3.01117 2.66668C3.67046 1.67999 4.60756 0.910848 5.70392 0.456723C6.80027 0.00259688 8.00665 -0.116219 9.17053 0.115292C10.3344 0.346803 11.4035 0.918267 12.2426 1.75738C13.0817 2.5965 13.6532 3.66564 13.8847 4.82953C14.1162 5.99341 13.9974 7.19984 13.5433 8.2962C13.0891 9.39256 12.3201 10.3295 11.3334 10.9888C10.3467 11.6481 9.18669 12.0001 8 12.0001C6.4087 12.0001 4.8826 11.368 3.75739 10.2427C2.63217 9.11751 2 7.59136 2 6.00006ZM3.97101 6.00006C3.97101 6.79716 4.2074 7.57632 4.65027 8.23907C5.09313 8.90182 5.7226 9.41845 6.45905 9.72345C7.19549 10.0284 8.00583 10.1082 8.7876 9.95257C9.56937 9.79699 10.2874 9.41301 10.851 8.8493C11.4146 8.28559 11.7983 7.56751 11.9537 6.7857C12.1091 6.00389 12.0291 5.19358 11.7239 4.45721C11.4188 3.72084 10.9021 3.09144 10.2392 2.64874C9.57633 2.20604 8.7971 1.96983 8 1.97003C6.93143 1.97056 5.9068 2.39537 5.15131 3.15106C4.39581 3.90674 3.97127 4.93149 3.97101 6.00006Z",
    fill: props.color
  }));
};
var _default = NcPerson;
exports.default = _default;
NcPerson.defaultProps = {
  width: _PropsDefault.propsDefault.iconSize,
  height: _PropsDefault.propsDefault.iconSize,
  color: _PropsDefault.propsDefault.iconColor
};