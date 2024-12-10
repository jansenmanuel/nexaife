import React from 'react';

import PropTypes from 'prop-types';

const Paragraph = (props) => {
  return (
    <p id={props.id} className={props.className} onClick={props.onClick}>
      {props.value}
    </p>
  );
};

export default Paragraph;
Paragraph.propTypes = {
  onClick: PropTypes.func,
};
Paragraph.defaultProps = {
  onClick: undefined,
};
