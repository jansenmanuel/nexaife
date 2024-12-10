"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreviewAds;
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _AdsVideoGroup = _interopRequireDefault(require("../../Asset/Icon/AdsVideoGroup.png"));
var _ImageFooterAds = _interopRequireDefault(require("../../Asset/Icon/ImageFooterAds.png"));
var _ImageHeaderAds = _interopRequireDefault(require("../../Asset/Icon/ImageHeaderAds.png"));
var _imageSkeleton = _interopRequireDefault(require("../../Asset/Icon/imageSkeleton.png"));
require("./PreviewAds.scss");
var _reactI18next = require("react-i18next");
var _Div = _interopRequireDefault(require("../../Atomic/Container/Div/Div"));
var _i18nConfig = _interopRequireDefault(require("../../config/i18nConfig"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PreviewAdsBase = function PreviewAdsBase(_ref) {
  var id = _ref.id,
    primaryColor = _ref.primaryColor,
    previewType = _ref.previewType,
    fileList = _ref.fileList,
    customTitle = _ref.customTitle;
  // const mainColors = "--main-color"
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    internalFileList = _useState2[0],
    setInternalFileList = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    videoFIle = _useState4[0],
    setVideoFIle = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    singleVideoFile = _useState6[0],
    setSingleVideoFile = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    doubleVideoFile = _useState8[0],
    setDoubleVideoFile = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    carouselFile = _useState10[0],
    setCarouselFile = _useState10[1];
  (0, _react.useEffect)(function () {
    if (previewType === 'video') {
      if ((fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0) {
        var videoPreview = fileList.map(function (fileItem) {
          var fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }

          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setVideoFIle(videoPreview);
      } else {
        setVideoFIle([]);
      }
    } else if (previewType === 'singleVideo') {
      if ((fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0) {
        var _videoPreview = fileList.map(function (fileItem) {
          var fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }

          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setSingleVideoFile(_videoPreview);
      } else {
        setSingleVideoFile([]);
      }
    } else if (previewType === 'doubleVideo') {
      if ((fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0) {
        var _videoPreview2 = fileList.map(function (fileItem) {
          var fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }
          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setDoubleVideoFile(_videoPreview2);
      } else {
        setDoubleVideoFile([]);
      }
    } else if (previewType === 'carousel' || previewType === 'image') {
      if ((fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0) {
        var previews = fileList.map(function (fileItem) {
          var fileObj = fileItem.originFileObj;
          // Pengecekan jika fileObj valid (Blob atau File)
          if (!fileItem.url && !fileObj.preview) {
            return getBase64(fileObj).then(function (base64) {
              return base64; // Mengembalikan base64 dari setiap file
            }).catch(function (error) {
              return null;
            });
          } else {
            return fileItem.url || fileObj.preview;
          }
        });
        // Tunggu semua promises selesai sebelum update state
        Promise.all(previews).then(function (result) {
          setCarouselFile(result.filter(Boolean)); // Hanya simpan hasil yang valid
          setInternalFileList(result.filter(Boolean));
        });
      } else {
        setCarouselFile([]);
        setInternalFileList([]);
      }
    } else {
      if ((fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0) {
        if (!fileList[0].url && !fileList[0].preview) {
          getBase64(fileList[0].originFileObj).then(function (base64) {
            fileList[0].preview = base64;
            setInternalFileList(fileList[0].preview);
          }).catch(function (error) {
            return console.error('Error converting to base64:', error);
          });
        } else {
          setInternalFileList(fileList[0].preview || fileList[0].url);
        }
      } else {
        setInternalFileList([]);
      }
    }
  }, [fileList]);
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
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "custom-preview-ads"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-preview-ads"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _ImageHeaderAds.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-preview"
  }, previewType === 'image' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "body-image-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-middle-image-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-middle-image-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-carousel"
  }, internalFileList.length > 0 ? /*#__PURE__*/_react.default.createElement(_antd.Carousel, {
    arrows: true,
    autoplay: true
  }, internalFileList.map(function (file, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-preview",
      key: index
    }, file ? /*#__PURE__*/_react.default.createElement(_antd.Image, {
      src: file,
      preview: false
    }) : /*#__PURE__*/_react.default.createElement("b", {
      style: {
        color: '#fff',
        fontWeight: '400'
      }
    }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")));
  })) : /*#__PURE__*/_react.default.createElement(_antd.Carousel, {
    arrows: true,
    autoplay: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-sekeleton"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-carousel",
    style: {
      height: '100px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-middle-image-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-middle-image-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  }))))) : previewType === 'video' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-video-carousel",
    style: {
      // backgroundColor:"red",
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ads-video-preview",
    style: {
      // backgroundColor:'grey'
      border: "none",
      display: 'flex',
      gap: '6px',
      marginLeft: "-30px"
    }
  }, videoFIle.length === 3 || videoFIle.length < 1 ? function () {
    var videoElements = [];
    for (var index = 0; index < 3; index++) {
      videoElements.push( /*#__PURE__*/_react.default.createElement("div", {
        key: videoFIle[index],
        className: "video-preview",
        style: {
          marginLeft: '0px'
        }
      }, videoFIle[index] ? /*#__PURE__*/_react.default.createElement("video", {
        style: {
          width: "100px",
          height: "200px",
          borderRadius: '8px'
        }
      }, /*#__PURE__*/_react.default.createElement("source", {
        src: videoFIle[index],
        type: "video/mp4"
      }), /*#__PURE__*/_react.default.createElement("source", {
        src: videoFIle[index],
        type: "video/quicktime"
      })) : /*#__PURE__*/_react.default.createElement("div", {
        style: {
          alignItems: 'center',
          display: 'flex',
          width: "100px",
          height: "196px",
          borderRadius: '6px',
          backgroundColor: '#818181'
        }
      }, /*#__PURE__*/_react.default.createElement("b", {
        style: {
          color: '#fff',
          fontWeight: '400'
        }
      }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))));
    }
    return videoElements;
  }() : /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image",
    style: {
      height: "150px",
      display: "flex",
      gap: "20px",
      marginLeft: "40px"
    }
  }, videoFIle.length === 2 ? function () {
    var videoElements = [];
    for (var index = 0; index < 2; index++) {
      videoElements.push( /*#__PURE__*/_react.default.createElement("div", {
        key: doubleVideoFile[index],
        className: "border-skeleton-image"
      }, videoFIle[index] ? /*#__PURE__*/_react.default.createElement("video", {
        style: {
          width: "100%",
          height: "100%",
          borderRadius: '3px'
        }
      }, /*#__PURE__*/_react.default.createElement("source", {
        src: videoFIle[index],
        type: "video/mp4"
      }), /*#__PURE__*/_react.default.createElement("source", {
        src: videoFIle[index],
        type: "video/quicktime"
      })) : /*#__PURE__*/_react.default.createElement("div", {
        style: {
          alignItems: 'center',
          display: 'flex',
          width: "100%",
          height: "100%",
          borderRadius: '3px',
          backgroundColor: '#a2a2a2' // Placeholder styling for empty slots
        }
      }, /*#__PURE__*/_react.default.createElement("b", {
        style: {
          color: '#fff',
          fontWeight: '400'
        }
      }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))));
    }
    return videoElements;
  }() : /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image",
    style: {
      height: "150px",
      display: "flex",
      gap: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, videoFIle.length === 1 ? /*#__PURE__*/_react.default.createElement("video", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: '3px'
    }
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: videoFIle,
    type: "video/mp4"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: videoFIle,
    type: "video/quicktime"
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignItems: 'center',
      display: 'flex',
      height: "100%",
      borderRadius: '3px',
      backgroundColor: '#818181'
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-sekeleton"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-carousel",
    style: {
      height: '100px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  }))))) : previewType === 'singleVideo' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-video-carousel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image",
    style: {
      height: "150px",
      display: "flex",
      gap: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, singleVideoFile.length !== 0 ? /*#__PURE__*/_react.default.createElement("video", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: '3px'
    }
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: singleVideoFile,
    type: "video/mp4"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: singleVideoFile,
    type: "video/quicktime"
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignItems: 'center',
      display: 'flex',
      height: "100%",
      borderRadius: '3px',
      backgroundColor: '#818181'
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-sekeleton"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-carousel",
    style: {
      height: '100px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  }))))) : previewType === 'doubleVideo' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-top"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-ads-video-carousel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image",
    style: {
      height: "150px"
    }
  }, doubleVideoFile.length !== 0 ? function () {
    var videoElements = [];
    for (var index = 0; index < 2; index++) {
      videoElements.push( /*#__PURE__*/_react.default.createElement("div", {
        key: doubleVideoFile[index],
        className: "border-skeleton-image"
      }, doubleVideoFile[index] ? /*#__PURE__*/_react.default.createElement("video", {
        style: {
          width: "100%",
          height: "100%",
          borderRadius: '3px'
        }
      }, /*#__PURE__*/_react.default.createElement("source", {
        src: doubleVideoFile[index],
        type: "video/mp4"
      }), /*#__PURE__*/_react.default.createElement("source", {
        src: doubleVideoFile[index],
        type: "video/quicktime"
      })) : /*#__PURE__*/_react.default.createElement("div", {
        style: {
          alignItems: 'center',
          display: 'flex',
          width: "100%",
          height: "100%",
          borderRadius: '3px',
          backgroundColor: '#a2a2a2' // Placeholder styling for empty slots
        }
      }, /*#__PURE__*/_react.default.createElement("b", {
        style: {
          color: '#fff',
          fontWeight: '400'
        }
      }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))));
    }
    return videoElements;
  }() : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignItems: 'center',
      display: 'flex',
      width: "100%",
      height: "100%",
      borderRadius: '3px',
      backgroundColor: '#818181' // Placeholder styling for empty slots
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignItems: 'center',
      display: 'flex',
      width: "100%",
      height: "100%",
      borderRadius: '3px',
      backgroundColor: '#818181' // Placeholder styling for empty slots
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-sekeleton"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-carousel",
    style: {
      height: '100px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-ads-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  }))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "body-carousel-adj"
  }, previewType === 'carousel' && carouselFile.length > 0 ? /*#__PURE__*/_react.default.createElement(_antd.Carousel, {
    arrows: true,
    autoplay: true
  }, carouselFile.map(function (file, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-preview",
      key: index
    }, file ? /*#__PURE__*/_react.default.createElement(_antd.Image, {
      src: file,
      preview: false
    }) : /*#__PURE__*/_react.default.createElement("b", {
      style: {
        color: '#fff',
        fontWeight: '400'
      }
    }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")));
  })) : /*#__PURE__*/_react.default.createElement(_antd.Carousel, {
    arrows: true,
    autoplay: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj",
    style: {
      // backgroundColor: 'red !important',
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-preview-adj"
  }, /*#__PURE__*/_react.default.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: '400'
    }
  }, customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-image-video"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-image",
    style: {
      height: "150px",
      display: "flex",
      gap: "20px",
      paddingLeft: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "body-sekeleton"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skeleton-carousel",
    style: {
      height: '100px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-skeleton-image-bottom"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _imageSkeleton.default
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-preview"
  }, /*#__PURE__*/_react.default.createElement(_antd.Image, {
    preview: false,
    src: _ImageFooterAds.default
  }))));
};
PreviewAds.defaultProps = {
  id: "",
  sizeField: "sm",
  primaryColor: "black",
  previewType: ''
};
function PreviewAds(props) {
  return /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: _i18nConfig.default
  }, /*#__PURE__*/_react.default.createElement(PreviewAdsBase, props));
}