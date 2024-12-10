// Components
import ErrorInformation from "../../../Atomic/Error/ErrorInformation";
import {Button as ButtonV223 } from "../../../index";
import { TimePicker as TimeAntd } from "antd";

// Libs
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./TimePickerStyle.module.scss";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../../config/i18nConfig";
import { useMemo } from "react";
import { generateId } from "../../../Utils/Helpers";

function getSize(size, sizes) {
  const sizeRes = sizes[size];
  return sizeRes ? sizeRes : "sm";
}

const Label = ({ children }) => {
  const labelContent = typeof children === "string" ? children : children.title;
  return (
    <div className={styles.label}>
      <p>{labelContent}</p>
      {typeof children !== "string" && children.subtitle && (
        <p className={styles.subtitle}>{children.subtitle}</p>
      )}
    </div>
  );
};

const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
};

/**
 * TimePicker Component Version 2.0.2
 *
 * @param {Object} props - The properties object for the TimePicker.
 * @param {boolean} [props.openState=false] - The state of whether the picker is open or not.
 * @param {string} [props.size="sm"] - The size of the time picker. Options: "sm", "md", "lg", "xl", "xxl".
 * @param {string} props.mainColor - The main color of the time picker.
 * @param {boolean} [props.disabled=false] - Controls whether the time picker is disabled.
 * @param {function} [props.onChange=(time) => {}] - The function to handle time change events.
 * @param {boolean} props.valid - Determines if the picker is in a valid state.
 * @param {any} [props.value=null] - The selected value for the time picker.
 * @param {string} props.format - The format in which time should be displayed.
 * @param {string|Object} props.label - The label for the picker. Can be a string or an object with `title` and `subtitle`.
 * @param {boolean} [props.closeAble=false] - Determines whether the picker can be closed by clicking outside.
 * @param {Object} props.style - Additional styles for the picker.
 * @param {Object} props.errorMessage - The error message to be displayed when validation fails.
 * @param {string|number} props.id - The unique identifier for the picker.
 * @param {Object} props...restProps - Any additional properties passed to the component.
 *
 * @returns {JSX.Element} The rendered TimePicker component.
 */
const TimePickerBase = ({
  openState = false,
  size = "sm",
  mainColor,
  disabled = false,
  onChange = (time) => {},
  placeholder,
  valid,
  value = null,
  format,
  label,
  closeAble = false,
  maxWidthError,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(value);
  const { t } = useTranslation();

  /**
   * Handles confirmation of the selected time.
   *
   * @param {Date} time - The selected time.
   */
  const onConfirm = (time) => {
    onChange(time);
  };

  /**
   * Handles selection of a time value.
   *
   * @param {Date} selected - The selected time value.
   */
  const onSelect = (selected) => {
    setSelect(selected);
  };

  const sizeClass = getSize(size.toLowerCase(), sizes);
  const mainColors = "--main-color";

  const id = useMemo(() => {
    if (!props.id) {
      return generateId("time-picker");
    }
    return props.id;
  }, [props.id]);

  const isError = valid === false;

  useEffect(() => {
    if (value !== null) {
      setSelect(value);
    }
  }, [value]);

  return (
    <div className={styles[sizeClass]} id={id}>
      {label && <Label children={label} />}
      <TimeAntd
        {...props}
        getPopupContainer={(node) => document.getElementById(id)}
        placeholder={placeholder || t("COMMON:TIME_PICKER.PLACEHOLDER")}
        format={format}
        status={isError ? "error" : ""}
        disabled={disabled}
        style={{ [mainColors]: mainColor, ...props.style }}
        inputReadOnly={true}
        allowClear={true}
        value={select}
        onSelect={(e) => {
          onSelect(e);
        }}
        onChange={(e) => {
          if (!e) {
            onSelect(() => {
              onConfirm(e);
              return e;
            });
          }
        }}
        className={styles.sm}
        popupClassName={styles.noFooterTimePick}
        showNow={false}
        open={open}
        onOpenChange={(e) => {
          if (closeAble) {
            setOpen(e);
          }
        }}
        onClick={() => {
          setOpen(true);
        }}
        needConfirm={false}
        renderExtraFooter={() => {
          return (
            <div
              style={{ display: "flex", gap: 4, flexDirection: "row-reverse" }}
            >
              <ButtonV223
                size={"sm"}
                mainColor={mainColor}
                buttonType={"primary"}
                label={t("COMMON:OK")}
                onClick={() => {
                  setOpen(false);
                  onConfirm(select);
                }}
              />
              <ButtonV223
                mainColor={mainColor}
                size={"sm"}
                buttonType={"secondary"}
                label={t("COMMON:NOW")}
                onClick={() => {
                  setSelect(moment());
                }}
              />
            </div>
          );
        }}
      />
      {valid === false && (
        <ErrorInformation
          size={size}
          text={props?.errorMessage}
          maxWidth={maxWidthError}
        />
      )}
    </div>
  );
};

export default function TimePicker(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <TimePickerBase {...props} />
    </I18nextProvider>
  );
}

TimePicker.propTypes = {
  openState: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  mainColor: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidthError: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valid: PropTypes.bool,
  value: PropTypes.any,
  errorMessage: PropTypes.string,
  format: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    }),
  ]),
  closeAble: PropTypes.bool,
};
