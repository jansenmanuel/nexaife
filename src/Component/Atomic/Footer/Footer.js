import React from 'react';

import PropTypes from 'prop-types';

import style from './Footer.module.css';

const Footer = (props) => {
  const { className, onClick, value } = props;
  return (
    <footer id={props.id} className={`${style.Footer} ${className}`} onClick={onClick}>
      {value}
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  onClick: PropTypes.func,
};

Footer.defaultProps = {
  className: undefined,
  onClick: undefined,
  value: null,
};
