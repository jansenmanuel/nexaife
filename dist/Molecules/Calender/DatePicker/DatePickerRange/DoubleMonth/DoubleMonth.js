"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dateNow = void 0;
require("./DoubleMonth.css");
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _Component = require("../../../../../../Component");
var _reactCalendar = _interopRequireDefault(require("react-calendar"));
var _UseComponentVisible = _interopRequireDefault(require("../../../../../Utils/CustomHook/UseComponentVisible"));
var _ActionDatePicker = _interopRequireDefault(require("../../ActionDatePicker/ActionDatePicker"));
var _DateRangeModule = _interopRequireDefault(require("./DateRange.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var dateNow = new Date();
exports.dateNow = dateNow;
var DoubleMonth = function DoubleMonth(props) {
  var _useState = (0, _react.useState)([new Date(), new Date()]),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useComponentVisible = (0, _UseComponentVisible.default)({
      initialIsVisible: false,
      onClickOutside: props.onMenuClose
    }),
    componentRef = _useComponentVisible.ref,
    menuOpen = _useComponentVisible.isComponentVisible,
    setMenuOpen = _useComponentVisible.setIsComponentVisible;
  var nonClickableItem = function nonClickableItem(target) {
    if (target.hasAttribute("clickable") || target.parentNode.hasAttribute("clickable") || target.parentNode.parentNode.hasAttribute("clickable") || target.parentNode.parentNode.parentNode.hasAttribute("clickable")) {
      return false;
    }
    return true;
  };
  var checkIsDropdownHandle = function checkIsDropdownHandle(target) {
    if (target.hasAttribute("dropdown-handle") || target.parentNode.hasAttribute("dropdown-handle") || target.parentNode.parentNode.hasAttribute("dropdown-handle")) {
      return true;
    }
  };
  var openMenu = function openMenu(_ref) {
    var target = _ref.target;
    if (nonClickableItem(target)) {
      if (checkIsDropdownHandle(target)) {
        if (!menuOpen) {
          setMenuOpen(true);
        } else {
          setMenuOpen(false);
          props.onMenuClose();
        }
      } else if (target.id === "btndone" || target.id === "btncancel") {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    }
  };
  var clickDone = function clickDone(evt) {
    evt.preventDefault();
    setMenuOpen(false);
    props.doneClick();
    var e = {
      target: {
        name: props.name,
        value: date,
        type: "date"
      }
    };
    props.onChange(e);
  };
  var clickClose = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(evt) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            evt.preventDefault();
            props.closeClick();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function clickClose(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getActiveClass = function getActiveClass() {
    var el = componentRef.current;
    var rect = el.getBoundingClientRect();
    var position = _DateRangeModule.default.SlcOptionDown;
    if (rect.top > 400) {
      position = _DateRangeModule.default.SlcOptionUp;
    }
    return position;
  };
  // const getWidth = () => {
  //   const el = componentRef.current;
  //   var rect = el.getBoundingClientRect();
  //   let position = rect.width;

  //   return position;
  // };

  var handleVisibility = function handleVisibility(menuOpen) {
    var display = "none";
    if (menuOpen) {
      display = "block";
    }
    return display;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Component.Div, {
    id: props.id,
    ref: componentRef,
    onClick: openMenu,
    tabIndex: "0",
    className: _DateRangeModule.default.SlcContainer
  }, /*#__PURE__*/_react.default.createElement(_Component.Div, {
    className: _DateRangeModule.default.Input
  }, /*#__PURE__*/_react.default.createElement(_Component.Input, {
    id: props.id,
    size: props.size,
    type: "text",
    className: props.classInput,
    name: props.name,
    value: props.inputDate
    // defaultValue={props.defaultValue}
    ,
    onClick: props.disabled ? function () {} : props.handleVisibility,
    onChange: function onChange() {},
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    disabled: props.disabled,
    pattern: props.pattern,
    title: props.message,
    required: props.required
  }), /*#__PURE__*/_react.default.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0.959625 12C0.70515 12 0.461092 11.8989 0.281151 11.719C0.10121 11.539 0.00012207 11.295 0.00012207 11.0405V1.205C0.00012207 0.885416 0.127077 0.578917 0.353058 0.352936C0.579039 0.126955 0.885538 1.03806e-07 1.20512 1.03806e-07H10.7951C10.9534 -6.56057e-05 11.1101 0.031065 11.2563 0.0915986C11.4026 0.152132 11.5354 0.240876 11.6473 0.352783C11.7592 0.464691 11.848 0.597563 11.9085 0.74379C11.9691 0.890017 12.0002 1.04674 12.0001 1.205V11.0405C12.0001 11.295 11.899 11.539 11.7191 11.719C11.5392 11.8989 11.2951 12 11.0406 12H0.959625ZM1.00012 11H11.0001V3.89549H1.00012V11ZM1.00012 1.205V2.88901H11.0001V1.205C11 1.15067 10.9783 1.09861 10.9399 1.0602C10.9015 1.02178 10.8494 1.00013 10.7951 1H1.20512C1.1508 1.00013 1.09873 1.02178 1.06031 1.0602C1.02189 1.09861 1.00025 1.15067 1.00012 1.205ZM6.69612 9.129C6.41435 8.74503 6.27632 8.27433 6.30612 7.799V7.0195C6.27548 6.54338 6.41298 6.0716 6.69463 5.68649C6.82908 5.52923 6.99802 5.40515 7.1883 5.32388C7.37858 5.24262 7.58504 5.20639 7.79162 5.218C7.99893 5.20628 8.20615 5.24275 8.397 5.32455C8.58786 5.40636 8.75716 5.53127 8.89162 5.6895C9.17392 6.07435 9.31197 6.54619 9.28162 7.02251V7.8C9.31217 8.27627 9.17469 8.74816 8.89312 9.1335C8.75908 9.29046 8.59064 9.41439 8.40089 9.49565C8.21115 9.57691 8.00523 9.61331 7.79913 9.60201C7.59125 9.61355 7.38351 9.57687 7.19217 9.49481C7.00082 9.41276 6.83105 9.28755 6.69612 9.129ZM7.42112 6.19051C7.33146 6.39106 7.28888 6.60945 7.29662 6.82899V7.91901C7.28118 8.15852 7.32228 8.39831 7.41662 8.619C7.45176 8.68893 7.50651 8.7471 7.57417 8.78644C7.64182 8.82577 7.71947 8.84456 7.79762 8.8405C7.87358 8.84367 7.94886 8.82513 8.01466 8.78705C8.08045 8.74897 8.13403 8.69294 8.16912 8.6255C8.26323 8.41313 8.30556 8.18143 8.29263 7.94949V6.895C8.3063 6.65981 8.26522 6.42463 8.17262 6.20799C8.13859 6.13679 8.08426 6.07726 8.01646 6.03687C7.94867 5.99647 7.87043 5.97704 7.79162 5.981C7.71624 5.97647 7.64115 5.99383 7.57542 6.03101C7.50968 6.06818 7.45609 6.12357 7.42112 6.19051ZM3.44862 9.44051C3.22826 9.35001 3.03929 9.19684 2.90512 9C2.78109 8.80874 2.7167 8.58493 2.72012 8.35699H3.71362C3.71374 8.42173 3.72792 8.48568 3.7552 8.54439C3.78249 8.6031 3.82221 8.65518 3.87162 8.69701C3.97835 8.79279 4.11777 8.84396 4.26112 8.84C4.41354 8.84774 4.56296 8.79573 4.67762 8.69501C4.72855 8.64787 4.76878 8.59037 4.7956 8.52637C4.82242 8.46237 4.83522 8.39337 4.83312 8.32401C4.84172 8.24067 4.83173 8.15646 4.80389 8.07744C4.77606 7.99842 4.73105 7.92655 4.67212 7.867C4.54422 7.77086 4.38636 7.72319 4.22662 7.7325H3.74612V6.99699H4.21212C4.28642 7.00844 4.36237 7.00244 4.43394 6.97943C4.50551 6.95642 4.57074 6.91705 4.62445 6.86446C4.67816 6.81186 4.71889 6.74748 4.74339 6.67641C4.7679 6.60533 4.77551 6.52953 4.76562 6.455C4.76804 6.39171 4.75759 6.3286 4.7349 6.26947C4.71221 6.21034 4.67775 6.15642 4.63362 6.11099C4.58394 6.06463 4.52533 6.02889 4.46137 6.00594C4.39741 5.98298 4.32944 5.9733 4.26162 5.97749C4.13806 5.97513 4.01752 6.01579 3.92062 6.0925C3.87569 6.12497 3.83911 6.16765 3.8139 6.21703C3.78869 6.2664 3.77557 6.32106 3.77562 6.3765H2.78812C2.78521 6.16164 2.85089 5.95147 2.97562 5.7765C3.10828 5.59457 3.28807 5.45229 3.49562 5.36501C3.72607 5.26373 3.97541 5.21259 4.22712 5.215C4.62629 5.19232 5.0212 5.30701 5.34612 5.53999C5.47958 5.64631 5.58601 5.78268 5.65675 5.93796C5.72748 6.09324 5.7605 6.26303 5.75312 6.4335C5.75222 6.62011 5.69334 6.80183 5.58463 6.95351C5.45936 7.12724 5.29005 7.26445 5.09412 7.351C5.30413 7.42142 5.48924 7.55115 5.62712 7.7245C5.75997 7.9031 5.8282 8.12153 5.82063 8.34399C5.82616 8.52051 5.78911 8.69577 5.71261 8.85495C5.63611 9.01413 5.52241 9.15254 5.38112 9.2585C5.04622 9.49982 4.63944 9.62055 4.22712 9.601C3.95971 9.60332 3.69486 9.54878 3.45012 9.44099L3.44862 9.44051Z",
    fill: "#666666"
  }))), /*#__PURE__*/_react.default.createElement(_Component.Div, {
    id: "ddl" + props.id,
    style: {
      display: handleVisibility(menuOpen)
      // width: menuOpen && getWidth(),
    },

    display: "",
    className: "".concat(_DateRangeModule.default.SlcOption, " ").concat(menuOpen && getActiveClass())
  }, /*#__PURE__*/_react.default.createElement(_Component.Div, {
    className: "react-calendar-container-double ".concat(props.classCalender)
  }, /*#__PURE__*/_react.default.createElement(_Component.Div, {
    className: "react-datepickerrange__toper"
  }, /*#__PURE__*/_react.default.createElement(_Component.Div, {
    className: "react-datepickerrange__start"
  }, /*#__PURE__*/_react.default.createElement(_Component.Paragraph, {
    className: "react-datepicker__headYear",
    value: props.date[0] === undefined || props.date[0] === null ? "" : props.date[0].getFullYear().toString()
  }), /*#__PURE__*/_react.default.createElement(_Component.Paragraph, {
    className: "react-datepicker__headDate",
    value: props.date[0] === undefined || props.date[0] === null ? "" : (0, _moment.default)(props.date[0]).format("ddd, MMM DD").toString()
  })), /*#__PURE__*/_react.default.createElement(_Component.Div, {
    className: "react-datepickerrange__end"
  }, /*#__PURE__*/_react.default.createElement(_Component.Paragraph, {
    className: "react-datepicker__headYear",
    value: props.date[1] === undefined || props.date[1] === null ? "" : props.date[1].getFullYear().toString()
  }), /*#__PURE__*/_react.default.createElement(_Component.Paragraph, {
    className: "react-datepicker__headDate",
    value: props.date[1] === undefined || props.date[1] === null ? "" : (0, _moment.default)(props.date[1]).format("ddd, MMM DD").toString()
  }))), /*#__PURE__*/_react.default.createElement(_reactCalendar.default, {
    onChange: setDate,
    value: date,
    selectRange: true,
    showDoubleView: true,
    tileClassName: "double",
    formatMonth: function formatMonth(locale, date) {
      return (0, _moment.default)(new Date(date)).format("MMM");
    },
    formatShortWeekday: function formatShortWeekday(locale, date) {
      return (0, _moment.default)(new Date(date)).format("dd").substr(0, 1);
    }
  }), /*#__PURE__*/_react.default.createElement(_Component.Div, null, /*#__PURE__*/_react.default.createElement(_ActionDatePicker.default, {
    className: "actionBoxDouble",
    closeClick: clickClose,
    labelCancel: props.labelCancel,
    doneClick: clickDone,
    labelDone: props.labelDone
  }))))));
};
var _default = DoubleMonth;
exports.default = _default;
DoubleMonth.defaultProps = {
  value: dateNow,
  labelCancel: "Cancel",
  labelDone: "Done"
};