import React from 'react';
import PropTypes from "prop-types";
import styled from './Badge.module.scss'
import _ from "lodash";

const Badge = ({size, content, type, color, className, style, ...props}) => {

  const sizeMap = {
    Sm: 'SmBase',
    Md: 'MdBase',
    Lg: 'LgBase',
    Xl: 'XlBase',
    Xxl: 'XxlBase'
  }

  const sizeResult = sizeMap[_.startCase(size)] || sizeMap.Sm;
  const typeSize = type ? styled[size + type] : "" 

  return (
    <div className={`${styled.Badge} ${styled[sizeResult]} ${typeSize} ${className}`}
         style={{...style, backgroundColor: color}} {...props}>
      {content}
    </div>
  );
};

Badge.defaultProps = {
  size: 'Sm',
  color: '#D02F1A',
  content: "",
  type: "",
  style: {}
};

Badge.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  type: PropTypes.oneOf(['Pill', 'Legend', 'Icon', '']),
  color: PropTypes.string,
  content: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Badge;