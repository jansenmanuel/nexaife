import React from 'react';
import PropTypes from "prop-types";
import styled from './Badge.module.css'
import _ from "lodash";

const BADGE_V_2_0_1 = ({size, content, type, color, className, style, ...props}) => {

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

BADGE_V_2_0_1.defaultProps = {
  size: 'Sm',
  color: '#1D1D1D',
  content: "",
  type: "",
  style: {}
};

BADGE_V_2_0_1.propTypes = {
  size: PropTypes.oneOf(['Sm', 'Md', 'Lg', 'Xl', 'Xxl']),
  type: PropTypes.oneOf(['Pill', 'Legend', 'Icon', '']),
  color: PropTypes.string,
  content: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default BADGE_V_2_0_1;