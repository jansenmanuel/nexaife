import { Select as SelectAntd } from "antd";
import _ from "lodash";
import React, { useMemo } from "react";
import { Icon } from "../../../Asset/Icon/index";
import { dropdownCustom, getSizeIconSameSize } from "../../../Services/utils";
import Div from "../../Container/Div/Div";
import style from "./select.module.scss";
import ErrorInformation from "../../Error/ErrorInformation";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18nConfig from "../../../config/i18nConfig";

const SELECT_V_2_2_3_BASE = ({
  width,
  option,
  size,
  className,
  mainColors,
  valid,
  search,
  handleSearch,
  disabled,
  maxWidthError,
  ...props
}) => {
  const [clickSelect, setClickSelect] = React.useState(false);
  const { t } = useTranslation();

  const getSize = (size) => {
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

  const { Option } = SelectAntd;

  const getWidthPhoneNumber = (size) => {
    if (size === "sm") {
      return "56px";
    } else if (size === "md") {
      return "72px";
    } else if (size === "lg") {
      return "79px";
    } else if (size === "xl") {
      return "88px";
    } else if (size === "xxl") {
      return "106px";
    }
  };

  const getSelectStyling = (size) => {
    if (props.phonenumber) {
      return;
    } else if (valid === false && props.phonenumber === false) {
      return style[`selectSize${_.startCase(size)}Error`];
    } else if (clickSelect) {
      return style[`selectSize${_.startCase(size)}Active`];
    } else if (disabled) {
      return style[`selectSize${_.startCase(size)}Disabled`];
    } else {
      return style[`selectSize${_.startCase(size)}`];
    }
  };

  const propsWidth = "--width-select";
  const mainColor = "--main-color-select";

  const Label = useMemo(() => {
    if (!props.textlabel) return;
    return (
      <div
        className={props.textlabel && style[`LabelText${_.startCase(size)}`]}
      >
        {props?.phonenumber === false && <label>{props.textlabel}</label>}{" "}
        {props.isOptional && (
          <label className={style.optionalText}>(Optional)</label>
        )}
      </div>
    );
  }, []);

  return (
    <>
      <div id={props.id} style={{ display: "flex", flexDirection: "column" }}>
        {Label}
        <div>
          <Div
            style={{
              [mainColor]: mainColors,
              alignItems: "center",
              display: "flex",
              [propsWidth]: width,
              // backgroundColor: disabled ? "#eeeeee" : "transparant",
            }}
            className={` ${
              props.phoneNumber
                ? style.containerSelectLinePhoneNumber
                : style.containerSelectLine
            } ${
              clickSelect && props.phoneNumber === false
                ? style[`selectContainerActive${_.startCase(size)}`]
                : disabled && props.phoneNumber === false
                  ? style.selectContainerDisabled
                  : style.containerSelect
            } ${
              props.phoneNumber === false &&
              style[`selectContainer${_.startCase(size)}`]
            }`}
          >
            <SelectAntd
              {...props}
              popupClassName={`${style[`itemOption${_.startCase(size)}`]}`}
              className={`${getSelectStyling(size)} ${className}`}
              bordered={props.phoneNumber ? false : true}
              disabled={disabled}
              placeholder={props?.placeholder}
              style={{
                [mainColor]: mainColors,
                width: props.phoneNumber
                  ? getWidthPhoneNumber(size.toLowerCase())
                  : width
                    ? width
                    : "500px",
                lineHeight: "normal",
              }}
              onClick={
                disabled
                  ? () => {}
                  : (evt) => {
                      setClickSelect(!clickSelect);
                      props?.onClick(evt);
                    }
              }
              dropdownRender={(menu) => {
                const customDropdown = search
                  ? dropdownCustom(
                      t,
                      menu,
                      (value) => handleSearch(value),
                      props.id,
                      props?.placeholderSearch,
                    )
                  : menu;
                return (
                  <div
                    id={props.id ? `${props.id}-dropdown` : "custom-dropdown"}
                  >
                    {customDropdown}
                  </div>
                );
              }}
              onBlur={() => setClickSelect(false)}
              suffixIcon={
                clickSelect ? (
                  <Icon.NcChevronUp
                    color={mainColors ? mainColors : "#818181"}
                    size={getSizeIconSameSize(size)}
                  />
                ) : (
                  <Icon.NcChevronDown
                    color={mainColors ? mainColors : "#818181"}
                    size={getSizeIconSameSize(size)}
                  />
                )
              }
            >
              {option ? _.map(option, (el) => el) : <></>}
            </SelectAntd>
          </Div>
          {valid === false && (
            <ErrorInformation
              maxWidth={maxWidthError}
              size={size}
              text={props?.errormessage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default function SELECT_V_2_2_3(props) {
  return (
    <I18nextProvider i18n={i18nConfig}>
      <SELECT_V_2_2_3_BASE {...props} />
    </I18nextProvider>
  );
}

SELECT_V_2_2_3.defaultProps = {
  width: "500px",
  empty: "No Data",
  phonenumber: false,
  search: false,
  handleSearch: () => {},
  onClick: () => {},
};
