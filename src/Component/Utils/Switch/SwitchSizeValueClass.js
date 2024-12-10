import { propsDefault } from '../../Enum/PropsDefault';
import { sizeDefault } from '../../Enum/sizeDefault';
import style from '../../Molecules/Switch/Switch.module.css';

export const switchSizeValueClass = (size) => {
  let className = propsDefault.stringEmpty;
  if (size === sizeDefault.sm) {
    className = style.ValueSm;
  }
  return className 
};