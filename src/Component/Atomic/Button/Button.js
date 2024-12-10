import React from "react";
import PropTypes from "prop-types";
import {
  buttonSizeClass,
  buttonSizeOnlyIcon,
  buttonSizeSuffPreffIcon,
} from "../../Utils/Button/ButtonSizeClass";
import {
  buttonBorderTypeSize,
  buttonTypeStyle,
} from "../../Utils/Button/ButtonTypeStyle";
import style from "./Button.module.scss";
import _ from "lodash";
import { Badge } from "antd";

const Button = (propss) => {
  const {
    id,
    disabled,
    onClick,
    type,
    label,
    className,
    mainColor,
    secondaryColor,
    prefixIcon,
    suffixIcon,
    buttonType,
    size,
    icon,
    roundedIcon,
    error,
    badge,
    ...props
  } = propss;
  const mainColors = "--main-color";
  const secondaryColors = "--secondary-color";
  return (
    <>
      <div className={style[`badgeStyle${_.startCase(size)}`]}>
        <Badge dot={badge}>
          <button
            id={id}
            className={`${className} ${
              label === null && icon
                ? style[buttonSizeOnlyIcon(size)]
                : prefixIcon || suffixIcon
                ? style[buttonSizeSuffPreffIcon(size, buttonType)]
                : buttonSizeClass(size, buttonType)
            } ${style[buttonTypeStyle(buttonType)]} ${
              label === null && roundedIcon && style.roundedIcon
            }  ${error && style.errorButton} ${
              style[buttonBorderTypeSize(buttonType, size)]
            }`}
            {...props}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
              [mainColors]: mainColor,
              [secondaryColors]: secondaryColor,
            }}
          >
            {label === null && icon ? (
              <div className={style.containerButtonIcon}>
                <div className={style.onlyIcon}>
                  {{
                    ...icon,
                    props: {
                      ...icon.props,
                      color: disabled
                        ? "#ACACAC"
                        : icon.props?.color
                        ? icon.props?.color
                        : "#1D1D1D",
                    },
                  }}
                </div>
              </div>
            ) : (
              <div className={props.inputbutton && !disabled ? style.containerButtonIb : buttonType === "link" && !disabled ? style.containerButtonLink :  style.containerButton}>
                {prefixIcon && (
                  <div className={style[`iconPrefix${_.startCase(size)}`]}>
                    {{
                      ...prefixIcon,
                      props: {
                        ...prefixIcon.props,
                        color: disabled
                          ? "#ACACAC"
                          : buttonType === "link"
                          ? "#0068BE"
                          : prefixIcon?.props?.color
                          ? prefixIcon?.props?.color
                          : "#1D1D1D",
                      },
                    }}
                  </div>
                )}
                <div>
                  <span>{label}</span>
                </div>
                {suffixIcon && (
                  <div className={style.iconSuffix}>
                    {{
                      ...suffixIcon,
                      props: {
                        ...suffixIcon.props,
                        color: disabled
                          ? "#ACACAC"
                          : buttonType === "link"
                          ? "#0068BE"
                          : suffixIcon.props.color
                          ? suffixIcon?.props?.color
                          : "#1D1D1D",
                      },
                    }}
                  </div>
                )}
              </div>
            )}
            {/* <hr style={{ backgroundColor:'#0068BE',visibility:onHover && !disabled && buttonType === "link" ? "" : "hidden",margin: 0, opacity:1 }} /> */}
          </button>
            {/* <hr style={{display:onHover && !disabled ? "hidden" : "hidden"}} /> */}
            
        </Badge>
      </div>
    </>
  );
};

export default Button;
Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  label: null,
  type: "submit",
  onClick: () => {},
  disabled: false,
  size: "md",
  icon: null,
  roundedIcon: false,
};
