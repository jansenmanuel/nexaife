import React from "react";
import style from "./Breadcrumb.module.scss";
import ChevronRight from "../../Asset/Icon/ChevronRight";
import PropTypes from "prop-types";

const Breadcrumb = ({items, id, onClick, ...props}) => {
  return (
    <div className={style.breadcrumb} {...props} id={id}>
      {items?.map((item, index) => ( 
        <div onClick={() => onClick(item)} id={item.key} key={item.key} className={style.breadcrumbItem}>
          <div to={item.to} className={`${style.breadcrumbItemText} ${index === items.length - 1 ? style.breadcrumbCurrent : ''}`}>
            {item.label}
          </div>
          {index < items.length - 1 && (
            <ChevronRight size={15} color="#ACACAC" />
          )}
        </div>
      ))}
    </div>
  );
}

// Define PropTypes for the component
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string, 
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  })),
  onClick: PropTypes.func,
  id: PropTypes.string
};

Breadcrumb.defaultProps = {
  items: [],
  onClick: () => {},
  id: ''
};

export default Breadcrumb;
