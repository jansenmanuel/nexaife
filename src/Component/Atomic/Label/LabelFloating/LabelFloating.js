import React from 'react';

import PropTypes from 'prop-types';

import style from './LabelFloating.module.css';

const LabelFloating = (props) => {
  const { className, value } = props;
  return <label className={`${style.Label} ${className}`}>{value}</label>;
};

export default LabelFloating;
LabelFloating.propTypes = {
  value: PropTypes.string,
};

LabelFloating.defaultProps = {
  value: null,
};
