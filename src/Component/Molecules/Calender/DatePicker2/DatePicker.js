import { DatePicker as DatePickerAntd } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import NcCalendarIcon from "../../../Asset/Icon/NcCalendarIcon";
import Button from "../../../Atomic/Button/Button";
import Div from "../../../Atomic/Container/Div/Div";
import style from "../DatePickerStyle.module.scss";
import { I18nextProvider, useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import i18nConfig from "../../../config/i18nConfig";
import { generateId } from "../../../Utils/Helpers";
import { useMemo } from "react";

const DatePickerBase = ({
  mainColor = "purple",
  size,
  onConfirm,
  onCancel,
  onOpen,
  onChangeDate,
  value,
  startDate,
  endDate,
  className,
  type,
  disabled,
  ...props
}) => {
  const { RangePicker } = DatePickerAntd;

  const { t } = useTranslation();

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: moment(new Date()).toISOString(),
    endDate: moment(new Date()).toISOString(),
  });

  const mainColors = "--main-color-date";

  const getHeight = (size) => {
    if (size === "sm") {
      return "40px";
    } else if (size === "md") {
      return "50px";
    } else if (size === "lg") {
      return "60px";
    } else if (size === "xl") {
      return "72px";
    } else if (size === "xxl") {
      return "80px";
    }
  };

  const getBorderRadius = (size) => {
    if (size === "sm") {
      return "6px";
    } else if (size === "md") {
      return "8px";
    } else if (size === "lg") {
      return "10px";
    } else if (size === "xl") {
      return "12px";
    } else if (size === "xxl") {
      return "14px";
    }
  };

  const onConfirmButton = () => {
    setOpenDate(false);
    onConfirm();
  };

  const onCancelButton = () => {
    setOpenDate(false);
    onCancel();
  };

  const getSizeIcon = (size) => {
    if (size === "sm") {
      return "16px";
    } else if (size === "md") {
      return "20px";
    } else if (size === "lg") {
      return "24px";
    } else if (size === "xl") {
      return "28px";
    } else if (size === "xxl") {
      return "36px";
    }
  };

  const getPadding = (size) => {
    if (size === "sm") {
      return " 8px 12px";
    } else if (size === "md") {
      return "10px 14px";
    } else if (size === "lg") {
      return "12px 16px";
    } else if (size === "xl") {
      return "14px 18px";
    } else if (size === "xxl") {
      return "16px 20px";
    }
  };

  const id = useMemo(() => {
    if (!props.id) {
      return generateId("date-picker");
    }
    return props.id;
  }, [props.id]);

  return (
    <>
      <Div
        id={id}
        style={{ [mainColors]: mainColor }}
        className={`${className} ${style.DatePicker} ${
          style[`DatePicker${_.startCase(size)}`]
        }`}
      >
        {type === "not_range" ? (
          <DatePickerAntd
            {...props}
            getPopupContainer={(node) => document.getElementById(id)}
            placeholder={props.placeholder}
            allowClear={false}
            inputReadOnly
            popupStyle={{ [mainColors]: mainColor }}
            dropdownClassName={
              disabled !== undefined
                ? style.createDateRangePickerDisabled
                : style.createDateRangePicker
            }
            style={{
              padding: getPadding(size.toLowerCase()),
              borderRadius: getBorderRadius(size),
              width: props.width || 500,
              height: getHeight(size.toLowerCase()),
            }}
            suffixIcon={
              <NcCalendarIcon
                color={disabled ? "#424242" : ""}
                size={getSizeIcon(size.toLowerCase())}
              />
            }
            dateRender={(current) => {
              const styles = {};
              if (
                moment(current).format("DD-MMMM-YYYY") ===
                moment(startDate).format("DD-MMMM-YYYY")
              ) {
                styles.border = `1px solid ${mainColor}`;
                styles.borderRadius = "50%";
                styles.background = mainColor;
              }
              return (
                <div className={`ant-picker-cell-inner `} style={styles}>
                  {current.date()}
                </div>
              );
            }}
            open={openDate}
            renderExtraFooter={() => {
              return (
                <Div className={style.containerActionButtonDate}>
                  <Button
                    size={"sm"}
                    buttonType={"secondary"}
                    onClick={() => onCancelButton()}
                    label={t("COMMON:RESET")}
                    mainColor={mainColor}
                  />
                  <Button
                    size={"sm"}
                    buttonType={"primary"}
                    onClick={() => onConfirmButton()}
                    label={t("COMMON:APPLY")}
                    mainColor={mainColor}
                  />
                </Div>
              );
            }}
            onClick={() => setOpenDate(true)}
            value={startDate && moment(startDate)}
            onChange={onChangeDate}
            className={
              disabled !== undefined
                ? style.createDateRangePickerDisabled
                : style.createDateRangePicker
            }
            showToday={false}
            disabled={disabled}
          />
        ) : (
          <RangePicker
            {...props}
            getPopupContainer={(node) => document.getElementById(id)}
            popupStyle={{ [mainColors]: mainColor }}
            className={
              disabled !== undefined
                ? style.createDateRangePickerDisabled
                : style.createDateRangePicker
            }
            open={openDate}
            dropdownClassName={
              disabled !== undefined
                ? style.createDateRangePickerDisabled
                : style.createDateRangePicker
            }
            onClick={() => {
              setOpenDate(true);
              onOpen();
            }}
            disabled={disabled}
            allowClear={false}
            inputReadOnly
            value={[moment(startDate), moment(endDate)]}
            separator={"-"}
            style={{
              padding: getPadding(size.toLowerCase()),
              width: "500px",
              height: getHeight(size.toLowerCase()),
              borderRadius: getBorderRadius(size),
            }}
            suffixIcon={
              <NcCalendarIcon
                color={disabled && "#424242"}
                size={getSizeIcon(size.toLowerCase())}
              />
            }
            onChange={onChangeDate}
            dateRender={(current) => {
              const styles = {};
              if (
                moment(current).format("DD-MMMM-YYYY") ===
                  moment(startDate).format("DD-MMMM-YYYY") ||
                moment(current).format("DD-MMMM-YYYY") ===
                  moment(endDate).format("DD-MMMM-YYYY")
              ) {
                styles.border = `1px solid ${mainColor}`;
                styles.borderRadius = "50%";
              }
              return (
                <div className={`ant-picker-cell-inner `} style={styles}>
                  {current.date()}
                </div>
              );
            }}
            renderExtraFooter={() => {
              return (
                <Div className={style.containerActionButtonDate}>
                  <Button
                    size="sm"
                    buttonType={"secondary"}
                    onClick={() => onCancelButton()}
                    label={t("COMMON:RESET")}
                    mainColor={mainColor}
                  />
                  <Button
                    size="sm"
                    buttonType={"primary"}
                    onClick={() => onConfirmButton()}
                    label={t("COMMON:APPLY")}
                    mainColor={mainColor}
                  />
                </Div>
              );
            }}
          />
        )}
      </Div>
    </>
  );
};

export default function DatePicker(props) {
  return (
    <I18nextProvider i18n={i18nConfig}>
      <DatePickerBase {...props} />
    </I18nextProvider>
  );
}

DatePicker.propTypes = {
  mainColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onOpen: PropTypes.func,
  onChangeDate: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
    PropTypes.number,
  ]),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  type: PropTypes.oneOf(["not_range", "range"]),
  disabled: PropTypes.bool,
};

DatePicker.defaultProps = {
  size: "Sm",
  type: "not_range",
  onConfirm: () => {},
  onCancel: () => {},
  onOpen: () => {},
  startDate: null,
  endDate: null,
  disabled: undefined,
};
