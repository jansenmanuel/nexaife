import { propsDefault } from '../../Enum/PropsDefault';
import style from '../../Molecules/Switch/Switch.module.css';

export const switchLabelClass = (label) => {
  let className = propsDefault.stringEmpty;
  if (label === propsDefault.null) {
    className = `${style.SwitchNoLabel} switch-no-label`;
  }
  return className;
};
