import React from "react";
import TextAreaAntd from "antd/es/input/TextArea";
import styled from "./textArea.module.css";
import PropTypes from "prop-types";
import ErrorInformation from "../../Error/ErrorInformation";
import startCase from "lodash/startCase";

const TextArea = ({
  size = "Md",
  className = "",
  valid,
  maxWidthError,
  ...props
}) => {

  const textSize = `text${startCase(size)}`;

  return (
    <>
      <TextAreaAntd
        className={`${styled.customTextArea} ${styled[textSize]} ${className}`}
        {...props}
      />
      {valid === false && (
        <ErrorInformation
          maxWidth={maxWidthError}
          size={size}
          text={props?.errorMessage}
        />
      )}
    </>
  );
};

TextArea.propTypes = {
  size: PropTypes.oneOf(["Sm", "Md", "Lg", "Xl", "2Xl"]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  maxWidthError: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextArea;
