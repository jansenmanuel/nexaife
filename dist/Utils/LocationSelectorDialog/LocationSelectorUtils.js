"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverse = exports.setStatus = exports.searchMapper = exports.locationMapperChecked = exports.isAnyChecked = exports.computeStatus = void 0;
var _generalConstant = require("../../Constant/generalConstant");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var locationMapperChecked = function locationMapperChecked() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var checked = [];
  var traverse = function traverse(item) {
    if (item.status === _generalConstant.STATUS.checked) {
      checked.push(item);
      return;
    }
    // If the item has children, traverse through them
    if (item.items && item.items.length > 0) {
      item.items.forEach(traverse);
    }
  };
  items.forEach(traverse);
  return checked;
};
exports.locationMapperChecked = locationMapperChecked;
var isAnyChecked = function isAnyChecked() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isChecked = false;
  var traverse = function traverse(item) {
    if (item.status === _generalConstant.STATUS.checked) {
      isChecked = true;
      return;
    }
    if (item.items && item.items.length > 0) {
      item.items.forEach(traverse);
    }
  };
  items.forEach(traverse);
  return isChecked;
};
exports.isAnyChecked = isAnyChecked;
var setStatus = function setStatus(root, status) {
  if (Array.isArray(root)) {
    return root.map(function (item) {
      return setStatus(item, status);
    });
  }
  var newRoot = _objectSpread(_objectSpread({}, root), {}, {
    status: status
  });
  if (Array.isArray(root.items)) {
    newRoot.items = root.items.map(function (item) {
      return setStatus(item, status);
    });
  }
  return newRoot;
};
exports.setStatus = setStatus;
var computeStatus = function computeStatus(items) {
  var checkedCount = items.filter(function (item) {
    return item.status === _generalConstant.STATUS.checked;
  }).length;
  var indeterminateCount = items.filter(function (item) {
    return item.status === _generalConstant.STATUS.indeterminate;
  }).length;
  if (checkedCount === items.length) {
    return _generalConstant.STATUS.checked;
  } else if (checkedCount > 0 || indeterminateCount > 0) {
    return _generalConstant.STATUS.indeterminate;
  } else {
    return _generalConstant.STATUS.unchecked;
  }
};
exports.computeStatus = computeStatus;
var traverse = function traverse(root, needle, status) {
  if (Array.isArray(root)) {
    return root.map(function (item) {
      return traverse(item, needle, status);
    });
  }
  if (root.id === needle) {
    return setStatus(root, status);
  }
  if (!root.items) {
    return root;
  }
  var updatedItems = root.items.map(function (item) {
    return traverse(item, needle, status);
  });
  return _objectSpread(_objectSpread({}, root), {}, {
    items: updatedItems,
    status: computeStatus(updatedItems)
  });
};
exports.traverse = traverse;
var searchMapper = function searchMapper(items, _ref) {
  var id = _ref.id,
    name = _ref.name;
  return items.map(function (e) {
    var mappedItem = {
      value: e[id],
      label: e[name]
    };
    if (e.children && e.children.length > 0) {
      mappedItem.children = searchMapper(e.children, {
        id: id,
        name: name
      });
    }
    return mappedItem;
  });
};
exports.searchMapper = searchMapper;