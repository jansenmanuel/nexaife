import style from '../../Organisms/Layout/LayoutPage/LayoutPage.module.css';

export const contentStyle = (collapse, menu) => {
  let contentClass = style.ContentExpand;
  if (collapse && menu !== undefined) {
    contentClass = style.Content;
  }
  return contentClass;
};
