import { useCallback } from "react";
import { useState } from "react";
import CheckBoxv1 from "../../Atomic/Checkbox/Checkbox/Checkbox";
import ErrorInformation from "../../Atomic/Error/ErrorInformation";
import Information from "../../Atomic/Information/Information";

const CheckboxGroupV1 = ({
  options,
  onChange,
  id,
  size = "md",
  color,
  defaultValue,
  horizontal = false,
  labelInformation,
  errorInformation,
}) => {
  const [selected, setSelected] = useState(defaultValue ?? []);
  const _onChange = useCallback(
    (value) => {
      let newSelected;
      if (selected.includes(value)) {
        // Nilai sudah ada dalam array, hapus dari array
        newSelected = selected.filter((item) => item !== value);
      } else {
        // Nilai belum ada dalam array, tambahkan ke array
        newSelected = [...selected, value];
      }
      setSelected(newSelected);
      onChange && onChange(newSelected);
    },
    [onChange, selected]
  );
  const VerticalCheckboxGroup = () => {
    return (
      <div id={id}>
        {options?.map((val, index) => {
          return (
            <CheckBoxv1
              key={index}
              disabled={val.disabled}
              label={val.label}
              check={selected.includes(val.value)}
              value={val.value}
              onChange={() => _onChange(val.value)}
              color={color}
              size={size}
            />
          );
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

  const HorizontalCheckboxGroup = () => {
    return (
      <>
        <div
          id={id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {options?.map((val, index) => {
            return (
              <CheckBoxv1
                key={index}
                disabled={val.disabled}
                label={val.label}
                check={selected.includes(val.value)}
                value={val.value}
                onChange={() => _onChange(val.value)}
                color={color}
                size={size}
              />
            );
          })}
        </div>
        <div>
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
      </>
    );
  };

  return (
    <>{horizontal ? <HorizontalCheckboxGroup /> : <VerticalCheckboxGroup />}</>
  );
};

export default CheckboxGroupV1;
