import _ from "lodash";
import React, { useEffect, useState } from "react";
import Div from "../../Atomic/Container/Div/Div";
import Input from "../../Atomic/Input/Input/Input";
import Select from "../../Atomic/Selector/Select/Select";
import {
  getBorderRadius,
  getSizeDivider,
  selectOption,
} from "../../Services/utils";
import style from "./InputPhoneNumber.module.scss";
import Paragraph from "../../Atomic/Paragraph/Paragraph";
import { Divider } from "antd";
import ErrorInformation from "../../Atomic/Error/ErrorInformation";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "../../config/i18nConfig";

const InputPhoneNumberBase = ({
  option = [
    { id: "+62", value: "+62" },
    { id: "+14", value: "+14" },
    { id: "+13", value: "+13" },
  ],
  size,
  errormessage,
  onChange,
  propsSelect,
  propsInput,
  disabled,
  mainColor,
  placeholder,
  ...props
}) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState({});
  const [clickInputPhoneNumber, setClickInputPhoneNumber] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setValueInputNumber(option);
  }, []);

  useEffect(() => {
    sentToParent(value);
  }, [value]);

  const sentToParent = (value) => {
    onChange(value);
  };

  const setValueInputNumber = (optionVal) => {
    setOptions(selectOption([], optionVal, "value"));
  };

  const onChangeNumber = (value, namespace) => {
    setValue((prevsValue) => ({
      ...prevsValue,
      [namespace]: value,
    }));
  };

  const validClass = (valid) => {
    let isValid = "standart";
    if (valid === true) {
      isValid = "success";
    } else if (valid === false) {
      isValid = "error";
    }
    return isValid;
  };

  const setWidthSelect = (size) => {
    if (size === "sm") {
      return "10%";
    } else if (size === "md") {
      return "13%";
    } else if (size === "lg") {
      return "16%";
    } else if (size === "xl") {
      return "18%";
    } else if (size === "xxl") {
      return "24.5%";
    }
  };

  const mainColors = "--main-color";

  return (
    <>
      <Div
        id={props?.id}
        onClick={() => {
          setClickInputPhoneNumber(!clickInputPhoneNumber);
        }}
        onBlur={() => setClickInputPhoneNumber(false)}
        className={` ${disabled && style.containerInputPhoneNumberDisable} ${
          errormessage
            ? style.containerInputPhoneNumberError
            : style.containerInputPhoneNumber
        } ${
          clickInputPhoneNumber &&
          errormessage === undefined &&
          style.containerInputPhoneNumberClick
        }`}
        style={{
          borderRadius: getBorderRadius(size),
          [mainColors]: mainColor,
          width: props.width,
        }}
      >
        {/* <Row> */}
        <Select
          {...propsSelect}
          value={propsSelect?.value}
          mainColors={!disabled ? mainColor : "#ACACAC"}
          id={`selectphone_${props?.id}`}
          phonenumber={true}
          onChange={(e) => onChangeNumber(e, "code")}
          disabled={disabled}
          size={size}
          option={options}
          // width={setWidthSelect(size)}
          className={`${style[`InputPhoneNumberSize${_.startCase(size)}`]} 
          ${style[`selectBorderNone${_.startCase(size)}`]} ${style.containerSelectLinePhoneNumber}`}
        />
        <Divider
          style={{ height: getSizeDivider(size?.toLowerCase()), margin: 0 }}
          type="vertical"
        />
        <Input
          {...propsInput}
          phonenumber={true}
          disabled={disabled}
          id={`tslphone_${props?.id}`}
          placeholder={placeholder || t("COMMON:PHONE.PLACEHOLDER")}
          onChange={(e) => onChangeNumber(e, "value")}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          size={size}
          className={`${style[`InputPhoneNumberSize${_.startCase(size)}`]} ${
            style.inputBorderNone
          }`}
        />
        {/* </Row> */}
      </Div>
      {errormessage && (
        <ErrorInformation size={props?.size} text={errormessage} />
      )}
    </>
  );
};

export default function InputPhoneNumber(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <InputPhoneNumberBase {...props} />
    </I18nextProvider>
  );
}

InputPhoneNumber.defaultProps = {
  onChange: () => {},
  size: "lg",
  errormessage: undefined,
  propsSelect: {
    value: "+62",
  },
};
