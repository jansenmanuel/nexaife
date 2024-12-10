import React from 'react';
import PropTypes from "prop-types";
import styled from './Legend.module.css'
import _ from "lodash";

const sizeMap = {
  Sm: 'TextSm',
  Md: 'TextMd',
  Lg: 'TextLg'
};


const sizeIcon = ['Md', 'Lg']

const Legend = ({size = 'sm', title = 'Caption Title', color = '#1D1D1D', className = '', ...props}) => {

  const fontSize = sizeMap[_.startCase(size)] || sizeMap.Md;
  const circleSizeClass = sizeIcon.find((e) => e.toLowerCase() === size.toLowerCase());

  return (
    <div className={`${styled.Wrap} ${className}`} {...props}>
      <div className={`${styled.Circle} ${styled[`Circle${circleSizeClass}`] || ''}`} style={{backgroundColor: color}}/>
      <p className={styled[fontSize]}>{title}</p>
    </div>
  );
};

Legend.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Legend;