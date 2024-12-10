export const switchValue = (isChecked, active, deactive) => {
  if (isChecked) {
    return active;
  }
  return deactive;
};
