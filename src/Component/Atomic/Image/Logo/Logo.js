import React from 'react';

import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <img
      id={props.id}
      className={props.className}
      src={props.src}
      width={props.width}
      alt={props.alt}
      onClick={props.onClick}
    />
  );
};

export default Logo;

Logo.propTypes = {
  onClick: PropTypes.func,
  alt: PropTypes.string,
  width: PropTypes.string,
};

Logo.defaultProps = {
  className: undefined,
  onClick: undefined,
  alt: null,
  width: null,
};
