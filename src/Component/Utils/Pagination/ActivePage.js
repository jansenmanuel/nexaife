import { classNameDefault } from '../../Enum/classNameDefault';
import { propsDefault } from '../../Enum/PropsDefault';

export const activePage = (currentPage, number) => {
  if (number === currentPage) {
    return classNameDefault.activePage;
  } else {
    return propsDefault.stringEmpty;
  }
};