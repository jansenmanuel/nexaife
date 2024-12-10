import React from 'react';

import { PropTypes } from 'prop-types';

import { propsDefault } from '../../../Enum/PropsDefault';

const SideBarTitle = (props) => {
  const { className, onClick, value } = props;
  return (
    <p id={props.id}className={className} onClick={onClick}>
      {value}
    </p>
  );
};

export default SideBarTitle;
SideBarTitle.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
SideBarTitle.defaultProps = {
  onClick: undefined,
  value: "",
  id: propsDefault.stringEmpty,
};
