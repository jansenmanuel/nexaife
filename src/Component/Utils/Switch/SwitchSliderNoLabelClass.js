import { propsDefault } from '../../Enum/PropsDefault';
import style from '../../Molecules/Switch/Switch.module.css';

export const switchSliderNoLabelClass = (label) => {
  let className = propsDefault.stringEmpty;
  if (label === propsDefault.null) {
    className = style.SliderNoLabel;
  }
  return className 
};