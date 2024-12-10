export const getAspectRatio = (ar, orientation) => {
  const [width, height] = ar.split(":").map(Number);
  return orientation === "portrait"
    ? `${height} / ${width}`
    : `${width} / ${height}`;
};