import React from 'react';
import { Slider as AntdSlider } from "antd";
import styled from "./Slider.module.scss"
import PropTypes from "prop-types";

const Slider = ({color, className, tooltip, ...props}) => {
  const {trackStyle, id} = props
  const {open} = tooltip || {open: false}
  return (
    <div id={id} className={`${styled.sliderContainer} ${className}`}>
      <AntdSlider trackStyle={{...trackStyle, backgroundColor: color}} tooltip={{...tooltip, open: open}} {...props}/>
    </div>
  );
};

Slider.defaultProps = {
  color: "#424242",
  className: "",
}

Slider.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default Slider;