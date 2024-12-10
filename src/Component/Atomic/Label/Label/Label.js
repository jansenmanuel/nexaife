import React from 'react';

import PropTypes from 'prop-types';

import style from './Label.module.css';

const Label = (props) => {
  return (
    <label id={props.id} className={`${style.Label} label ${props.className}`}>
      {props.value}
    </label>
  );
};

export default Label;
Label.propTypes = {
  value: PropTypes.string,
};

Label.defaultProps = {
  value: null,
};
