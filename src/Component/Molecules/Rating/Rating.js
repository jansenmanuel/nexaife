import React from 'react';
import {Rate} from "antd";
import _ from "lodash";
import PropTypes from "prop-types";
import styles from "./Rating.module.scss";

const sizeMap = {
  Sm: 32,
  Md: 42,
  Lg: 56
};

const Rating = ({size = 'md', color = "#F9BC59", ...props}) => {
  const fontSize = sizeMap[_.startCase(size)] || sizeMap.Md;
  return (
    <div className={styles.RatingNexContainer}>
      <Rate style={{color: color, fontSize}} allowHalf {...props} />
    </div>
  );
};

Rating.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default Rating;