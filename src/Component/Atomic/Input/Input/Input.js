import _ from "lodash";
import React, {useRef, useState} from "react";

import {Icon} from "../../../Asset/Icon";
import useOutsideClick from "../../../Utils/useOutsideClick";
import Div from "../../Container/Div/Div";
import style from "./Input.module.scss";
import {Divider} from "antd";
import {getSizeDivider} from "../../../Services/utils";
import ErrorInformation from "../../Error/ErrorInformation";
import PropTypes from "prop-types";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "../../../config/i18nConfig";

const InputBase = (props) => {
  const wrapperInput = useRef(null);
  const [clickedInput, setClickedInput] = useState(false);
  const {t} = useTranslation()

  useOutsideClick(
    wrapperInput,
    props.disabled ? () => {
    } : (e) => setClickedInput(e)
  );
  const validClass = (valid) => {
    let isValid = style.Input;
    if (valid === true) {
      isValid = style.Valid;
    } else if (valid === false) {
      isValid = style.Invalid;
    }
    return isValid;
  };

  const sizeClass = (size) => {
    let setSize = style[_.startCase(size)];
    return setSize;
  };

  const getIconSize = (size) => {
    if (size === "sm") {
      return "12px";
    } else if (size === "md") {
      return "14px";
    } else if (size === "lg") {
      return "18px";
    } else if (size === "xl") {
      return "21px";
    } else if (size === "xxl") {
      return "27px";
    }
  };

  const widthClass = (width) => {
    let setWidth = style.MinWidth;
    if (width === "max") {
      setWidth = style.MaxWidth;
    } else if (props.phonenumber || props.selectSearch) {
      setWidth = undefined;
    }
    return setWidth;
  };

  const disabledClass = (disabled) => {
    let setDisabled = null;
    if (disabled === true && props.phonenumber) {
      return style.DisabledPhoneNumber;
    } else if (disabled === true) {
      return style.Disabled;
    } else {
      return null
    }
  };


  const [visible, setVisible] = useState(false);
  const visibleClick = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const iconByVisibility = (visible) => {
    if (visible === true) {
      return <Icon.NcEyesOpen/>;
    }
    return <Icon.NcEyesClose/>;
  };

  const getPadding = (value) => {
    if (value === "sm") {
      return "12px"
    } else if (value === "md") {
      return "14px"
    } else if (value === "lg") {
      return "16px"
    } else if (value === "xl") {
      return "18px"
    } else if (value === "xxl") {
      return "20px"
    }
  };

  const typeByVisibility = (visible) => {
    let setType = "password";
    if (visible === true) {
      return "text";
    }
    return setType;
  };
  const mainColors = "--main-color";
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Label */}
        {props.textlabel && (
          <div
            className={
              props.textlabel && style[`LabelText${_.startCase(props.size)}`]
            }
          >
            {props?.phonenumber === false && <label>{props.textlabel}</label>}{" "}
            {props?.isOptional && (
              <label className={style.optionalText}>({t('COMMON:OPTIONAL')})</label>
            )}
          </div>
        )}
        {/* Input */}
        <div>
          {props.type === "password" ? (
            <Div
              style={{
                width: props.width,
              }}
              className={`
              ${props.valid === false && `${style.passwordBoxIsInvalid}`}
          ${disabledClass(props.disabled)} 
          ${
            clickedInput && style[`PasswordBox${_.startCase(props.size)}Click`]
          } ${style[`PasswordBox${_.startCase(props.size)}`]} 
        `}
            >
              <input
                ref={wrapperInput}
                {...props}
                id={props.id}
                style={{
                  [mainColors]: props?.mainColor,
                  cursor: props.disabled && "not-allowed",
                }}
                className={`${style.placeholderInputPassword} ${props.className}`}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
                onKeyUp={props.onKeyUp}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                checked={props.checked}
                onKeyDown={props.onKeyDown}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                pattern={props.pattern}
                title={props.message}
                maxLength={props.maxLength}
                required={props.required}
                type={typeByVisibility(visible)}
              />
              <div onClick={props.disabled === undefined && visibleClick}>
                {visible ? (
                  <Icon.NcHiddenEye
                    size={getIconSize(props.size?.toLowerCase())}
                    color={props.disabled && "#ACACAC"}
                  />
                ) : (
                  <Icon.NcShowEye
                    size={getIconSize(props.size?.toLowerCase())}
                    color={props.disabled && "#ACACAC"}
                  />
                )}
              </div>
            </Div>
          ) : props.button ? (
            <>
              <Div
                style={{
                  width: props.width || 500,
                }}
                className={`
          ${disabledClass(props.disabled)} 
          ${
            clickedInput && style[`ButtonBox${_.startCase(props.size)}Click`]
          } ${style[`ButtonBox${_.startCase(props.size)}`]} 
        `}
              >
                <input
                  ref={wrapperInput}
                  {...props}
                  id={props.id}
                  style={{
                    [mainColors]: props?.mainColor,
                    cursor: props.disabled && "not-allowed",
                  }}
                  className={`
              ${props.className}
              `}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  onClick={props.onClick}
                  onKeyUp={props.onKeyUp}
                  placeholder={props.placeholder}
                  defaultValue={props.defaultValue}
                  checked={props.checked}
                  onKeyDown={props.onKeyDown}
                  defaultChecked={props.defaultChecked}
                  disabled={props.disabled}
                  pattern={props.pattern}
                  title={props.message}
                  maxLength={props.maxLength}
                  required={props.required}
                />
                <Divider
                  type="vertical"
                  style={{ margin: 0, height: getSizeDivider(props.size) }}
                />
                <div>{props.button}</div>
              </Div>
            </>
          ) : (
            <>
              {/* Commentar for Label */}
              <Div
                className={style.containerInput}
                style={{ width: props.width }}
              >
                <input
                  {...props}
                  id={props.id}
                  className={`
                      ${validClass(props.valid)} ${sizeClass(props.size)} 
                      ${disabledClass(props.disabled)} ${props.className}
                  `}
                  style={{
                    [mainColors]: props?.mainColor,
                    width: props.width || 500,
                  }}
                  type={props.type}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  onClick={props.onClick}
                  onKeyUp={props.onKeyUp}
                  placeholder={props.placeholder}
                  defaultValue={props.defaultValue}
                  checked={props.checked}
                  onKeyDown={props.onKeyDown}
                  defaultChecked={props.defaultChecked}
                  disabled={props.disabled}
                  pattern={props.pattern}
                  title={props.message}
                  required={props.required}
                  maxLength={props.maxLength}
                />
                {props?.icon && (
                  <Div className={style.iconInput}>{props?.icon?.image}</Div>
                )}
              </Div>
            </>
          )}
        </div>
      </div>
      {props?.valid === false && (
        <ErrorInformation maxWidth={props.maxWidthError} size={props?.size} text={props?.errormessage} />
      )}
    </>
  );
};

export default function Input(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <InputBase {...props} />
    </I18nextProvider>
  );
}

Input.defaultProps = {
  value: null,
  size: "md",
  onChange: () => {
  },
  disabled: undefined,
  phonenumber: false
};

Input.propTypes = {
  maxWidthError: PropTypes.oneOfType([PropTypes.string, PropTypes.number])}