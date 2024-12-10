"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageNotification = exports.iconNotification = exports.borderNotification = void 0;
var _Icon = require("../../Asset/Icon");
var borderNotification = function borderNotification(type) {
  var styles = "info";
  if (type === "SUCCESS") {
    styles = "success";
  } else if (type === "ERROR") {
    styles = "error";
  } else if (type === "WARNING") {
    styles = "warning";
  } else if (type === "INFO") {
    styles = "info";
  }
  return styles;
};
exports.borderNotification = borderNotification;
var iconNotification = function iconNotification(type) {
  var icons = _Icon.Icon.NcInfo;
  if (type === "SUCCESS") {
    icons = _Icon.Icon.NcSuccess;
  } else if (type === "ERROR") {
    icons = _Icon.Icon.NcError;
  } else if (type === "WARNING") {
    icons = _Icon.Icon.NcWarning;
  } else if (type === "INFO") {
    icons = _Icon.Icon.NcInfo;
  }
  return icons;
};
exports.iconNotification = iconNotification;
var messageNotification = function messageNotification(message) {
  var messages = "Enter Your Message";
  if (message !== "") {
    messages = message;
  }
  return messages;
};
exports.messageNotification = messageNotification;