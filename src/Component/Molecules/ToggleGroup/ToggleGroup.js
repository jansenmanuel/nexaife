import React from 'react'
import TOGGLE_V_2_0_2 from '../../Atomic/Toggle/Toggle';
import PropTypes from 'prop-types';
import style from "./ToggleGroup.module.scss";
import ErrorInformation from '../../Atomic/Error/ErrorInformation';
import Information from '../../Atomic/Information/Information';
import { BLACK_COLOR, BLUE_COLOR } from '../../Constant/colorConstant';

const ToggleGroup = ({
  id,
  size,
  label,
  toggleLabel,
  informationTop,
  informationBottom,
  errorInformation,
  labelColor,
  checkColor = BLUE_COLOR,
  disabled,
  onChange = () => { },
}) => {
  const renderLabel = `${style[`Label${size.toLowerCase()}`]}`;
  const renderInfoText = `${style[`InfoText${size.toLowerCase()}`]}`;

  return (
    <div
      id={id}
      onChange={onChange}
      className={style.toggleGroup}
    >
      <label className={renderLabel}>{label}</label>
      {informationTop ? (
        <p className={renderInfoText}>{informationTop}</p>) : (
        <></>
      )}
      <TOGGLE_V_2_0_2
        size={size}
        label={toggleLabel}
        labelColor={labelColor}
        checkColor={checkColor}
        disabled={disabled}
      />
      {informationBottom ? (
        <Information text={informationBottom} size={size} />
      ) : (
        <></>
      )}
      {errorInformation ? (
        <ErrorInformation text={errorInformation} size={size} />
      ) : (
        <></>
      )}
    </div>
  )
}

ToggleGroup.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  toggleLabel: PropTypes.string,
  informationTop: PropTypes.string,
  informationBottom: PropTypes.string,
  errorInformation: PropTypes.string,
  labelColor: PropTypes.string,
  onChange: PropTypes.func,
  checkColor: PropTypes.string,
};

ToggleGroup.defaultProps = {
  size: "md",
  label: "label",
  toggleLabel: "toggle label",
  informationTop: "information top",
  informationBottom: "information bottom",
  errorInformation: "error information",
}

export default ToggleGroup;