import { classNameDefault } from '../../Enum/classNameDefault';

export const switchValueClass = (isChecked) => {
  if (isChecked) {
    return classNameDefault.valueToggleActive;
  }
  return classNameDefault.valueToggle;
};