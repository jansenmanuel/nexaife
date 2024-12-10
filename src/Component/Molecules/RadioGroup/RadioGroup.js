import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Row as RowAntd } from "antd";
import RadioV1 from "../../Atomic/Radio/Radio/Radio";
import Information from "../../Atomic/Information/Information";
import ErrorInformation from "../../Atomic/Error/ErrorInformation";
import style from "./RadioGroup.module.scss";
const RadioGroupV1 = ({
  options,
  onChange,
  id,
  size = "Md",
  color,
  defaultValue,
  horizontal = false,
  labelInformation,
  errorInformation,
  labelTitle,
} = {}) => {
  const [selected, setSelected] = useState(defaultValue ?? "");
  const renderText = `${style[`RadioTitle${size.toLowerCase()}`]}`;
  const _onChange = useCallback(
    (value) => {
      setSelected(value);
      onChange && onChange(value);
    },
    [onChange]
  );
  const VerticalRadioGroup = () => {
    return (
      <div id={id}>
        <p className={renderText}>{labelTitle}</p>
        {options?.map((val, index) => {
          return React.cloneElement(<RadioV1 />, {
            key: index,
            value: val.value,
            label: val.label,
            onChange: _onChange,
            check: val.value === selected,
            disabled: val.disabled,
            size: size,
            color: color,
          });
        })}
        {labelInformation ? (
          <Information text={labelInformation} size={size} />
        ) : (
          <></>
        )}
        {errorInformation ? (
          <ErrorInformation text={errorInformation} size={size} />
        ) : (
          <></>
        )}
      </div>
    );
  };
  const HorizontalRadioGroup = () => {
    return (
      <div id={id}>
        <p className={renderText}>{labelTitle}</p>
        <RowAntd
          align="middle"
          // justify="center"
        >
          {options?.map((val, index) => {
            return React.cloneElement(<RadioV1 />, {
              key: index,
              value: val.value,
              label: val.label,
              onChange: _onChange,
              check: val.value === selected,
              disabled: val.disabled,
              size: size,
              color: color,
            });
          })}
        </RowAntd>
        {labelInformation ? (
          <Information text={labelInformation} size={size} />
        ) : (
          <></>
        )}
        {errorInformation ? (
          <ErrorInformation text={errorInformation} size={size} />
        ) : (
          <></>
        )}
      </div>
    );
  };

  return <>{horizontal ? <HorizontalRadioGroup /> : <VerticalRadioGroup />}</>;
};

export default RadioGroupV1;
