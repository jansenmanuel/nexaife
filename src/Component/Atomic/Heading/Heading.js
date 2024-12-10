import React from 'react';

import PropTypes from 'prop-types';

import style from './Heading.module.css';

const Heading = props => {
  const {className, color, value, size, onClick} = props;

  function handleColor(color) {
    let setColor = "default";
    if (color === "primer") {
      setColor = "primer";
    } else if (color === "secondary") {
      setColor = "secondary";
    } else if (color === "success") {
      setColor = "success";
    } else if (color === "warning") {
      setColor = "warning";
    } else if (color === "danger") {
      setColor = "danger";
    } else if (color === "info") {
      setColor = "info";
    } else if (color === "light") {
      setColor = "light";
    } else if (color === "dark") {
      setColor = "dark";
    }
    return setColor;
  }
  const sizeClass = size => {
    let setSize = style.H6;
    if (size === 1) {
      setSize = style.H1;
    } else if (size === 2) {
      setSize = style.H2;
    } else if (size === 3) {
      setSize = style.H3;
    } else if (size === 4) {
      setSize = style.H4;
    } else if (size === 5) {
      setSize = style.H5;
    } else if (size === 6) {
      setSize = style.H6;
    }
    return setSize;
  };

  // if (size === 2) {
  return (
    <h6
      id={props.id}
      className={`${style.Heading} ${handleColor(color)} ${sizeClass(size)} ${className}`}
      onClick={onClick}
    >
      {value}
    </h6>
  );
  // } else if (size === 3) {
  //   return (
  //     <h3 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h3>
  //   );
  // } else if (size === 4) {
  //   return (
  //     <h4 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h4>
  //   );
  // } else if (size === 5) {
  //   return (
  //     <h5 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h5>
  //   );
  // } else if (size === 6) {
  //   return (
  //     <h6 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h6>
  //   );
  // } else {
  //   return (
  //     <h1 className={`${style.Heading} ${handleColor(color)} ${className}`} onClick={onClick}>
  //       {value}
  //     </h1>
  //   );
  // }
};

export default Heading;

Heading.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
};

Heading.defaultProps = {
  className: undefined,
  onClick: undefined,
  value: null,
  size: 6,
  color: "default",
};
