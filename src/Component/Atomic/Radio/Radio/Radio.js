import _ from "lodash";
import style from "./radio.module.scss";
import { BLACK_COLOR, GRAY_DISABLED_COLOR } from "../../../Constant/colorConstant";
const RadioV1 = ({
  onChange = () => {},
  size = "Md",
  check,
  label,
  color = BLACK_COLOR,
  id,
  value,
  disabled,
} = {}) => {
  const renderRadio = `${style[`Radio${size.toLowerCase()}`]}`;
  const renderRadioUncheck = `${style[`RadioUncheck${size.toLowerCase()}`]}`;
  const renderLabel = `${style[`labelRadio${size.toLowerCase()}`]}`;
  const renderWrapper = `${style[`Wrapper${size.toLowerCase()}`]}`;
  const renderWrapperUncheck = `${
    style[`WrapperUncheck${size.toLowerCase()}`]
  }`;
  const wrapperStyle = {
    border: `2px solid ${color}`,
  };
  const wrapperStyleDisabled = {
    border: `2px solid ${GRAY_DISABLED_COLOR}`,
  };
  const normalStyle = {
    background: color,
  };
  const styleDisabled = {
    background: GRAY_DISABLED_COLOR,
  };
  const renderStyleWrapper = () => {
    let style;
    if (check && !disabled) {
      style = wrapperStyle;
    } else if (check && disabled) {
      style = wrapperStyleDisabled;
    } else if (!check && disabled) {
      style = wrapperStyleDisabled;
    } else {
      style = null;
    }
    return style;
  };
  const renderStyle = () => {
    let style;
    if (check && !disabled) {
      style = normalStyle;
    } else if (check && disabled) {
      style = styleDisabled;
    } else if (!check && disabled) {
      style = styleDisabled;
    } else {
      style = null;
    }
    return style;
  };
  return (
    <>
      <input
        type="radio"
        hidden
        defaultChecked={check}
        readOnly
        value={value}
        disabled={disabled}
      />
      <div
        style={{
          display: "flex",
          margin: "5px",
          alignItems: "center",
        }}
        onClick={disabled ? null : () => onChange(value)}
      >
        <div>
          <div
            className={check ? renderWrapper : renderWrapperUncheck}
            style={renderStyleWrapper()}
            id={id}
          >
            <div
              className={check ? renderRadio : renderRadioUncheck}
              style={renderStyle()}
            ></div>
          </div>
        </div>
        <label
          className={renderLabel}
          style={{
            color: disabled ? GRAY_DISABLED_COLOR : color,
          }}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioV1;
