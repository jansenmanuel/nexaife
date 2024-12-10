import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Space, Switch } from 'antd';
import style from "./toggle.module.scss"
import { BLACK_COLOR, BLUE_COLOR, GRAY_DISABLED_COLOR } from '../../Constant/colorConstant';
import { renderSpace } from '../../Utils/Toggle/ToggleSize';

const Toggle = ({
  id,
  onChange = () => {},
  label,
  size,
  disabled,
  labelColor = BLACK_COLOR,
  checkColor = BLUE_COLOR,
  checked,
  ...props
  
} = {}) => {
  const renderLabel = `${style[`Label${size.toLowerCase()}`]}`;
  const renderSwitch = `${style[`Switch${size.toLowerCase()}`]}`;
  const checkStyle = {
    '--background-color': checkColor
  };

  return (
    <>
      <Space size={renderSpace(size)} direction='horizontal' className='toggle' id={id}>
        <div className={renderSwitch} style={checkStyle}>
          <Switch
            onChange={onChange}
            disabled={disabled}
            checked={checked}
            {...props}
          />
        </div>
        <label
          className={renderLabel}
          style={{
            color: disabled ? GRAY_DISABLED_COLOR : labelColor
          }}>
          {label}
        </label>
      </Space>
    </>
  )
}

Toggle.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  disabled: PropTypes.bool,
  labelColor: PropTypes.string,
};

Toggle.defaultProps = {
  size: "md",
}

export default Toggle;


