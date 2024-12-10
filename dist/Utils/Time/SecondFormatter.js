"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTimeFromSeconds = formatTimeFromSeconds;
function formatTimeFromSeconds(totalSeconds) {
  totalSeconds = parseInt(totalSeconds);
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    return "Invalid time";
  }
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return formattedMinutes + ":" + formattedSeconds;
}