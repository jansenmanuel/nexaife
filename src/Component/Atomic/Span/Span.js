import React from 'react';

import PropTypes from 'prop-types';

const Span = (props) => {
  return (
    <span id={props.id} className={props.className} onClick={props.onClick}>
      {props.value}
    </span>
  );
};

export default Span;
Span.propTypes = {
  onClick: PropTypes.func,
};
Span.defaultProps = {
  onClick: undefined,
  value: "",
};
