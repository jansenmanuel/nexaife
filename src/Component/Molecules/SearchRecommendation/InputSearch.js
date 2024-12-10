import React from "react";
import { AutoComplete, Input } from "antd";
import _ from "lodash";
import { Icon } from "../../Asset/Icon";
import style from "./InputSearch.module.scss";
import { getSizeIconSameSize } from "../../Services/utils";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18nConfig from "../../config/i18nConfig";
const InputSearchBase = ({
  className,
  size,
  options,
  value,
  onChange,
  onPopupScroll,
  onSelect,
  mainColor,
  disabled,
  placeholder,
  onClear,
  ...props
}) => {

  const {t} = useTranslation()
  const [clickInput, setClickInput] = React.useState(false);
  const getSize = (value) => {
    if (value === "sm") {
      return "40px";
    } else if (value === "md") {
      return "50px";
    } else if (value === "lg") {
      return "60px";
    } else if (value === "xl") {
      return "72px";
    } else if (value === "xxl") {
      return "80px";
    }
  };

  const getSizeFont = (value) => {
    if (value === "sm") {
      return "16px";
    } else if (value === "md") {
      return "20px";
    } else if (value === "lg") {
      return "24px";
    } else if (value === "xl") {
      return "32px";
    } else if (value === "xxl") {
      return "40px";
    }
  };

  const mainColors = "--main-color-autocomplete";
  return (
    <div
      className={`${
        style[`containerAll${_.startCase(size)}`]
      } ${className} ${disabled && style.containerDisabled}`}
      style={{
        width: props.width,
        ...props.style,
      }}
      id={props.id}
    >
      <AutoComplete
        value={value}
        options={options}
        style={{ [mainColors]: mainColor, width: props.width }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            // this.onSelectRecommendation(
            //   this.state.searchRecommendation
            // );
          }
        }}
        onClick={() => setClickInput(!clickInput)}
        onBlur={() => setClickInput(false)}
        popupClassName={style[`option${_.startCase(size)}`]}
        onSelect={onSelect}
        onChange={onChange}
        disabled={disabled}
        onPopupScroll={onPopupScroll}
        children={
          <Input
            style={{
              width: props.width || 500,
              height: getSize(size.toLowerCase()),
              fontSize: getSizeFont(size.toLowerCase()),
            }}
            placeholder={placeholder || t('COMMON:SEARCH')}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                // this.onSelectRecommendation(
                //   this.state.searchRecommendation
                // );
              }
            }}
            suffix={
              value ? (
                <div onClick={onClear}>
                  <Icon.NcClose
                    color={disabled ? "#ACACAC" : "#C6C6C6"}
                    size={getSizeIconSameSize(size)}
                  />
                </div>
              ) : (
                <Icon.NcSearch
                  color={disabled ? "#ACACAC" : "#424242"}
                  size={getSizeIconSameSize(size)}
                />
              )
            }
          />
        }
      />
    </div>
  );
};

export default function InputSearch(props) {
  return (
    <I18nextProvider i18n={i18nConfig}>
      <InputSearchBase {...props} />
    </I18nextProvider>
  );
}

InputSearch.defaultProps = {
  size: "md",
  disabled: undefined,
};
