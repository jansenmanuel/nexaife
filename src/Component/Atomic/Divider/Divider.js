import React from 'react'
import style from './Divider.module.scss'
import PropTypes from 'prop-types'
const Divider = ({ size }) => {
  const dividerClass = `${style.divider} ${size ? style[size] : ''}`
  return (
    <div className={dividerClass}></div>
  )
}

Divider.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Divider.defaultProps = {
  size: 'sm',
};

export default Divider

