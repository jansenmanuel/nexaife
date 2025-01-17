"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _generateId = require("./generateId");
Object.keys(_generateId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _generateId[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generateId[key];
    }
  });
});