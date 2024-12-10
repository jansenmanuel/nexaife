"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FILEUPLOAD_V_2_0_3;
var _antd = require("antd");
var _Dragger = _interopRequireDefault(require("antd/lib/upload/Dragger"));
var _react = _interopRequireWildcard(require("react"));
var _UploadIcon = _interopRequireDefault(require("../../Asset/Icon/UploadIcon"));
var _Dialog = _interopRequireDefault(require("../Dialog/Dialog"));
require("./FileUploadCss.scss");
var _lodash = require("lodash");
var _ErrorInformation = _interopRequireDefault(require("../../Atomic/Error/ErrorInformation"));
var _reactI18next = require("react-i18next");
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FILEUPLOAD_BASE = function FILEUPLOAD_BASE(_ref) {
  var _ref4;
  var id = _ref.id,
    maxCount = _ref.maxCount,
    sizeField = _ref.sizeField,
    primaryColor = _ref.primaryColor,
    fileType = _ref.fileType,
    handleFileListChange = _ref.handleFileListChange,
    fileSize = _ref.fileSize,
    messageErrorFileType = _ref.messageErrorFileType,
    messageErrorFileSize = _ref.messageErrorFileSize,
    errorField = _ref.errorField,
    errorInformation = _ref.errorInformation,
    initialFileList = _ref.initialFileList,
    disabled = _ref.disabled,
    customRequest = _ref.customRequest;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    internalFileList = _useState2[0],
    setInternalFileList = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previewOpen = _useState4[0],
    setPreviewOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    previewTitle = _useState6[0],
    setPreviewTitle = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    mediaUrl = _useState8[0],
    setMediaUrl = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    isVideo = _useState10[0],
    setIsvideo = _useState10[1];
  var mainColors = "--main-color";
  var visibleComponent = "--visible-component";
  var borderColorCondition = "--border-color-condition";
  var handleCancelDialog = function handleCancelDialog() {
    setPreviewOpen(false);
  };
  (0, _react.useEffect)(function () {
    setInternalFileList(initialFileList);
  }, [initialFileList]);

  //onChange sebelumnya
  // const onChangeFormFile = (info) => {
  //     setInternalFileList(prevFileList => {
  //         if (info.file.status === "done") {
  //             console.log("in onChange done",info )
  //             handleFileListChange(info.fileList); // Update parent state
  //         }
  //         else if (info.file.status === 'removed') {
  //             // File is removed
  //             console.log("in onChange removed", info )
  //             const removedFileUid = info.file.uid;
  //             console.log("removedFileUid", removedFileUid)
  //             setInternalFileList(prevFileList => {
  //                 const updatedFileList = prevFileList.filter(file => file.uid !== removedFileUid);
  //                 handleFileListChange(updatedFileList); // Update parent state
  //                 return updatedFileList;
  //             });
  //         }
  //         else{
  //             console.log("info file else", info)
  //             info.file.status === "error" ? console.log("ada error") : console.log("gaada") 
  //         }
  //         return info.fileList;

  //     });

  //     // if (info.file.status === 'done') {
  //     //     const reader = new FileReader();

  //     //     reader.onload = (e) => {

  //     //         const base64WithoutPrefix = e.target.result.split(',')[1];
  //     //         const fileNameWithExtension = info.file.name;
  //     //         const fileExtension = fileNameWithExtension.slice(((fileNameWithExtension.lastIndexOf(".") - 1) >>> 0) + 2);
  //     //         const fileNameWithoutExtension = fileNameWithExtension.replace(`.${fileExtension}`, '');

  //     //         // File is uploaded
  //     //         const file = {
  //     //             uid: info.file.uid,
  //     //             name: info.file.name,
  //     //             size: info.file.size,
  //     //             url: info.file.response ? info.file.response.url : '',
  //     //             file_name: fileNameWithoutExtension,
  //     //             type: `.${fileExtension}`,
  //     //             base_64: base64WithoutPrefix,
  //     //             originFileObj: info.file.originFileObj
  //     //         };
  //     //         setInternalFileList(prevFileList => {
  //     //             const updatedFileList = [...prevFileList, file];
  //     //             handleFileListChange(updatedFileList); // Update parent state
  //     //             return updatedFileList;
  //     //         });
  //     //     }
  //     //     reader.readAsDataURL(info.file.originFileObj);
  //     // 
  // };

  var onChangeFormFile = function onChangeFormFile(info) {
    setInternalFileList(function (prevFileList) {
      if (info.file.status === "done") {
        handleFileListChange(info.fileList); // Update parent state
      } else if (info.file.status === 'removed' || info.file.status === "error") {
        // File is removed
        var removedFileUid = info.file.uid;
        var updatedFileList = prevFileList.filter(function (file) {
          return file.uid !== removedFileUid;
        });
        handleFileListChange(updatedFileList); // Update parent state
        return updatedFileList;
      }
      return info.fileList; // Return the updated file list in other cases
    });
  };

  var beforeUpload = function beforeUpload(file) {
    // Function to check if file type matches any in the fileType array
    var isFileTypeAllowed = function isFileTypeAllowed(file) {
      return fileType.includes(file.type);
    };
    if (!isFileTypeAllowed(file)) {
      messageErrorFileType("You can only upload ".concat(fileType.join(', '), " file!"));
      // message.error(`You can only upload ${fileType.join(', ')} file!`);
      return _Dragger.default.LIST_IGNORE;
    }
    var isLt2M = file.size / 1024 / 1024 < fileSize;
    if (!isLt2M) {
      messageErrorFileSize("File must smaller than ".concat(fileSize, "MB!"));
      // message.error('Image must smaller than 5MB!');
      return _Dragger.default.LIST_IGNORE;
    }
    return true;
  };

  //mas rofi existing
  // const customRequest = ({ file, onSuccess, onProgress, onError }) => {
  //     // const shouldUpload = beforeUpload(file);
  //     console.log("file", file);
  //     const isFileTypeAllowed = fileType.includes(file.type)
  //     const isFileSizeAllowed = file.size / 1024 / 1024 < fileSize
  //     if (!isFileSizeAllowed || !isFileTypeAllowed) {
  //         // If beforeUpload returns false, don't proceed with customRequest
  //         return onError();
  //     }
  //     // Simulate progressive loading progress
  //     let progress = 0;
  //     const simulateProgress = () => {
  //         if (progress <= 70) {
  //             progress += 30;
  //         } else if (progress > 70) {
  //             progress += 15;
  //         }
  //         console.log("progress", progress);

  //         onProgress({ percent: progress }, { loaded: progress, total: 100 });

  //         if (progress < 100) {
  //             setTimeout(simulateProgress, 500); // Adjust the delay here (currently set to 500 milliseconds)
  //         } else {
  //             setTimeout(() => {
  //                 onSuccess();
  //             }, 500);
  //         }
  //     };

  //     setTimeout(simulateProgress, 500); // Start the initial progress after a delay
  // }

  //handleCustomrrequest

  var customRequestHandler = function customRequestHandler(_ref2) {
    var file = _ref2.file,
      onSuccess = _ref2.onSuccess,
      onError = _ref2.onError,
      onProgress = _ref2.onProgress;
    // Logika hardcoded
    var isFileTypeAllowed = fileType.includes(file.type);
    var isFileSizeAllowed = file.size / 1024 / 1024 < fileSize;
    if (!isFileSizeAllowed || !isFileTypeAllowed) {
      return onError();
    }

    // Menggunakan customRequest yang diteruskan dari parent
    if (customRequest) {
      return customRequest({
        file: file,
        onSuccess: onSuccess,
        onError: onError,
        onProgress: onProgress
      });
    }

    // Simulasi progres pengunggahan
    var progress = 0;
    var simulateProgress = function simulateProgress() {
      progress += 10; // Naikkan progres
      onProgress({
        percent: progress
      }, {
        loaded: progress,
        total: 100
      });
      if (progress < 100) {
        setTimeout(simulateProgress, 500); // Perbarui setiap 500 ms
      } else {
        setTimeout(function () {
          onSuccess(file); // Panggil onSuccess saat selesai
        }, 500);
      }
    };
    simulateProgress(); // Mulai simulasi
  };

  // const handlePreview = async (file) => {
  //     if (file.type === 'video/mp4') {
  //         const fileObj = file.originFileObj;

  //         // Generate a URL for the file
  //         const videoUrl = URL.createObjectURL(fileObj);
  //         setIsvideo(true)
  //         setMediaUrl(videoUrl);
  //     } else {
  //         if (!file.url && !file.preview) {
  //             file.preview = await getBase64(file.originFileObj);
  //         }
  //         setMediaUrl(file.url || file.preview);
  //         setIsvideo(false)
  //     }

  //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  //     setPreviewOpen(true);
  // };

  // const handlePreview = async (file) => {
  //     console.log("file", file);
  //     const isVideoLink = (url) => {
  //         return url && /\.(mp4|webm|ogg|mov)$/i.test(url);
  //     };

  //     if (file.type === ('video/mp4' || 'video/quicktime') || isVideoLink(file.url)) {
  //         const videoUrl = file.url || URL.createObjectURL(file.originFileObj);
  //         setIsvideo(true);
  //         setMediaUrl(videoUrl);
  //     } else {
  //         if (!file.url && !file.preview) {
  //             file.preview = await getBase64(file.originFileObj);
  //         }
  //         setMediaUrl(file.url || file.preview);
  //         setIsvideo(false);
  //     }

  //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  //     setPreviewOpen(true);
  // };

  var handlePreview = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
      var isVideoLink, isVideoFileType, videoUrl;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isVideoLink = function isVideoLink(url) {
              return /\.(mp4|webm|ogg|mov)$/i.test(url);
            };
            isVideoFileType = function isVideoFileType(type) {
              return type === 'video/mp4' || type === 'video/quicktime';
            };
            videoUrl = '';
            if (!(isVideoFileType(file.type) || isVideoLink(file.url))) {
              _context.next = 8;
              break;
            }
            videoUrl = file.url || URL.createObjectURL(file.originFileObj);
            setIsvideo(true);
            _context.next = 13;
            break;
          case 8:
            if (!(!file.url && !file.preview)) {
              _context.next = 12;
              break;
            }
            _context.next = 11;
            return getBase64(file.originFileObj);
          case 11:
            file.preview = _context.sent;
          case 12:
            setIsvideo(false);
          case 13:
            setMediaUrl(videoUrl || file.url || file.preview);
            setPreviewTitle(file.name || file.url && file.url.substring(file.url.lastIndexOf('/') + 1) || 'Untitled');
            setPreviewOpen(true);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePreview(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getBase64 = function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        return resolve(reader.result);
      };
      reader.onerror = function (error) {
        return reject(error);
      };
    });
  };
  var getFileTypeDisplay = function getFileTypeDisplay(fileType) {
    var hasMatroska = false;
    return fileType.reduce(function (acc, type) {
      if (type === "video/mp4") {
        acc.push("video/mp4");
      } else if ((type === "video/x-matroska" || type === "video/matroska") && !hasMatroska) {
        acc.push("video/mkv");
        hasMatroska = true;
      } else if (type === "video/quicktime") {
        acc.push("video/mov");
      } else if (type !== "video/x-matroska" && type !== "video/matroska") {
        acc.push(type);
      }
      return acc;
    }, []).join(', ');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      // justifyContent: 'center'
      flexDirection: 'column'
    },
    className: "customize-size-".concat(sizeField)
  }, /*#__PURE__*/_react.default.createElement(_Dragger.default, {
    disabled: disabled,
    id: id,
    style: (_ref4 = {}, _defineProperty(_ref4, mainColors, primaryColor), _defineProperty(_ref4, visibleComponent, (internalFileList === null || internalFileList === void 0 ? void 0 : internalFileList.length) >= maxCount ? "none" : "flex"), _defineProperty(_ref4, borderColorCondition, errorField ? "#ff4d4f" : "#DADCDE"), _ref4),
    className: "dragger-customize-".concat(sizeField),
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      strokeWidth: 3,
      format: function format(percent) {
        return percent && "".concat(parseFloat(percent.toFixed(2)), "%");
      }
    },
    listType: "picture",
    multiple: false,
    maxCount: maxCount,
    beforeUpload: beforeUpload,
    onChange: onChangeFormFile,
    disabledClick: false,
    customRequest: customRequestHandler,
    onPreview: handlePreview,
    fileList: internalFileList
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_UploadIcon.default, {
    color: primaryColor,
    size: sizeField === "sm" ? 16 : sizeField === "md" ? 20 : sizeField === "lg" ? 24 : sizeField === "xl" ? 28 : 36
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-form-perubahan size-".concat(sizeField)
  }, t("COMMON:FILE_UPLOAD.DESCRIPTION")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-upload-file-sub-title size-".concat(sizeField)
  }, getFileTypeDisplay(fileType))), errorInformation && errorField ? /*#__PURE__*/_react.default.createElement(_ErrorInformation.default, {
    text: errorInformation,
    size: sizeField
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    type: "media",
    open: previewOpen,
    onOk: function onOk() {
      return handleCancelDialog();
    },
    onCancel: function onCancel() {
      return handleCancelDialog();
    },
    size: "md",
    onOkTitle: "Yes",
    onCancelTitle: "No",
    title: previewTitle,
    mainColor: primaryColor,
    alt: "image-popup.png",
    mediaUrl: mediaUrl,
    isVideo: isVideo
  }));
};
FILEUPLOAD_V_2_0_3.defaultProps = {
  id: "",
  sizeField: "sm",
  primaryColor: "black",
  fileType: ['image/jpeg', 'image/png'],
  fileSize: 20,
  messageErrorFileType: "",
  messageErrorFileSize: "",
  handleFileListChange: function handleFileListChange() {},
  maxCount: 1,
  errorInformation: "",
  disabled: false,
  customRequest: null
};
function FILEUPLOAD_V_2_0_3(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(FILEUPLOAD_BASE, props));
}

// this code below is to customize file preview
// itemRender={(originNode, file, fileList) => (
//     <div className="ant-upload-list-item ant-upload-list-item-done">
//         <div className="ant-upload-list-item-info">
//             <span>
//                 <img className="ant-upload-list-item-thumbnail" src={file.url}  />
//                 <a className="ant-upload-list-item-name" title={file.name} href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
//             </span>
//             <span className="ant-upload-list-item-card-actions">
//                 <DeleteOutlined onClick={() => this.handleRemoveFile(file.uid)} />
//             </span>
//         </div>
//         <span className="ant-upload-list-item-size">{this.formatFileSize(file.size)}</span>
//     </div>
// )}
// previewFile={this.previewFile}