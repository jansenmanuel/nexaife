import React from "react";
import PropTypes, { bool, func, string } from "prop-types";
import PinInput from "react-pin-input";
import Div from "../Container/Div/Div";
import "./Pin.scss";
import _ from "lodash";
import ErrorInformation from "../Error/ErrorInformation";

const PIN_V_2_2_3 = ({ lengthPin = 4, error, maxWidthError = '100px', ...props }) => {
  const mainColors = "--main-color";
  const handleChange = (value, index) => {
    let splitValue = value?.split("");
    props.onChange(splitValue, index);
  };

  const handleOnComplete = (value, index) => {
    let splitValue = value?.split("");
    props.onComplete(splitValue, index);
  };
  return (
    <>
      <Div
        style={{ textAlign: "left" }}
        className={
          props.disabled
            ? `Pin${_.startCase(props.size)}Disabled`
            : `Pin${_.startCase(props.size)}`
        }
      >
        <PinInput
          {...props}
          initialValue={props.value}
          length={lengthPin}
          secret={props.hidden}
          secretDelay={props.hidden ? 100 : undefined}
          onChange={(value, index) => handleChange(value, index)}
          type="numeric"
          inputMode="number"
          style={{ padding: "10px", [mainColors]: props?.color }}
          inputStyle={{ borderColor: error ? "red" : "#DADCDE" }}
          inputFocusStyle={{ borderColor: props.color }}
          onComplete={(value, index) => handleOnComplete(value, index)}
          autoSelect={true}
          regexCriteria={props.regex}
        />
        {props.errorMessage && (
          <ErrorInformation
            size={props?.size}
            text={props?.errorMessage}
            maxWidth={maxWidthError}
          />
        )}
      </Div>
    </>
  );
};

PIN_V_2_2_3.defaultProps = {
  hidden: false,
  size: "sm",
  onChange: () => {},
  onComplete: () => {},
  regex: /^[ A-Za-z0-9_@./#&+-]*$/,
};

PIN_V_2_2_3.propTypes = {
  hidden: bool,
  size: string,
  onChange: func,
  onComplete: func,
};

export default PIN_V_2_2_3;
