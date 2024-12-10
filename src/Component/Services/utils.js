// import Option from "../Atomic/Selector/Option/Option";
import { Select } from "antd";
import Input from "../Atomic/Input/Input/Input";
import style from "./utils.module.scss"
import React from "react";
import { generateId } from "../Utils/Helpers";

const { Option } = Select;

export const selectOption = (currentData, previousData, label) => {
  let data = [...currentData];
  let arrayOfKey = currentData.map((obj) => obj.key);

  if (previousData && previousData !== currentData) {
    for (let value of previousData) {
      !arrayOfKey.includes(value.id.toString()) &&
      data.push(
        <Select.Option key={value.id} value={value.id} id={`option-${value.id}`}>
          {value[label]}
        </Select.Option>
      );
    }
  }

  return data;
};

export const _ignoreBackspace = (e) => {
  if (e.key === "Backspace") {
    e.stopPropagation();
  }
};

export const dropdownCustom = (t, menu, search, id, placeholder, value) => {

  let idGenerate;

  if (!id) {
    idGenerate = generateId('dropdown');
  } else {
    idGenerate = id;
  }


  return (
    <>
      <div style={{ padding: "2px 8px" }}
      >
        <Input
          id={`${idGenerate}-input-search`}
          className={style.containerDropdownRender}
          placeholder={placeholder || t('COMMON:SEARCH')}
          size="sm"
          selectSearch
          onChange={search}
          // allowClear
          value={value}
          defaultValue={value}
          onKeyDown={(e) => {
            _ignoreBackspace(e);
          }}
        />
      </div>
      <div style={{ padding: 2 }}>{menu}</div>
    </>
  );
}

export const getSizeIconSameSize = (value) => {
  let ValueToLower = value.toLowerCase()
  if (ValueToLower === "sm") {
    return 12;
  } else if (ValueToLower === "md") {
    return 15;
  } else if (ValueToLower === "lg") {
    return 18;
  } else if (ValueToLower === "xl") {
    return 21;
  } else if (ValueToLower === "xxl") {
    return 27;
  }
};

export const getBorderRadius = (value) => {
  let ValueToLower = value.toLowerCase()
  if (ValueToLower === "sm") {
    return "6px";
  } else if (ValueToLower === "md") {
    return "8px";
  } else if (ValueToLower === "lg") {
    return "10px";
  } else if (ValueToLower === "xl") {
    return "12px";
  } else if (ValueToLower === "xxl") {
    return "14px";
  }
}

export const getHeightDivider = (value = "sm") => {
  let ValueToLower = value.toLowerCase()
  if (ValueToLower === "sm") {
    return "6px";
  } else if (ValueToLower === "md") {
    return "8px";
  } else if (ValueToLower === "lg") {
    return "10px";
  } else if (ValueToLower === "xl") {
    return "12px";
  } else if (ValueToLower === "xxl") {
    return "14px";
  }
}

export const getSizeDivider = (sized) => {
  if (sized === "sm") {
    return "16px"
  } else if (sized === "md") {
    return "24px"
  } else if (sized === "lg") {
    return "30px"
  } else if (sized === "xl") {
    return "36px"
  } else if (sized === "xxl") {
    return "44px"
  }
}