import React from "react";
import style from "./checkbox.module.scss";
import _ from "lodash";
import NcCheck from "../../../Asset/Icon/NcCheck";
import { BLACK_COLOR, GRAY_DISABLED_COLOR, WHITE_COLOR } from "../../../Constant/colorConstant";
const CheckBoxv1 = ({
  onChange = () => {},
  size = "Md",
  check,
  label,
  color = BLACK_COLOR,
  labelColor = BLACK_COLOR,
  checkColor = WHITE_COLOR,
  id,
  value,
  disabled,
} = {}) => {
  const renderCheckBox = `${style[`Container${size.toLowerCase()}`]}`;
  const renderLabel = `${style[`Label${size.toLowerCase}`]}`;
  const whiteColor = `#fffcfc`;

  const renderCheckSize = () => {
    let value;
    if (size.toLowerCase() === "sm") {
      value = 12;
    }
    if (size.toLowerCase() === "md") {
      value = 12;
    }
    if (size.toLowerCase() === "lg") {
      value = 14;
    }
    if (size.toLowerCase() === "xl") {
      value = 16;
    }
    if (size.toLowerCase() === "xxl") {
      value = 18;
    }
    return value;
  };

  const renderColorBackground = () => {
    let colors;
    if (disabled) {
      colors = GRAY_DISABLED_COLOR;
    } else {
      if (check) {
        colors = color;
      } else {
        colors = whiteColor;
      }
    }
    return colors;
  };

  const renderIcon = () => {
    if (disabled) {
      return <NcCheck size={renderCheckSize} color={checkColor} />;
    } else {
      if (check) {
        return <NcCheck size={renderCheckSize} color={checkColor} />;
      } else {
        return <></>;
      }
    }
  };

  return (
    <>
      <label htmlFor={id} style={{ display: "flex", alignItems: "center" }}>
        {/* Checkbox dengan tanda centang kustom */}
        <input
          type="checkbox"
          id={id}
          checked={disabled ? true : check}
          onChange={disabled ? null : () => onChange(value)}
          style={{ display: "none" }} // Sembunyikan input checkbox bawaan
          disabled={disabled}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: renderColorBackground(),
          }}
          className={renderCheckBox}
        >
          {renderIcon()} {/* Tampilkan ikon jika checkbox tercentang */}
        </div>
        <div
          className={renderLabel}
          style={{
            color: disabled ? GRAY_DISABLED_COLOR : labelColor,
          }}
        >
          {label}
        </div>
      </label>
    </>
  );
};

export default CheckBoxv1;
