export function formatTimeFromSeconds(totalSeconds) {
  totalSeconds = parseInt(totalSeconds);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    return "Invalid time";
  }

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return formattedMinutes + ":" + formattedSeconds;
}