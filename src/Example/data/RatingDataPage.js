import Rating from "../../Component/Molecules/Rating/Rating";
import {InputNumber} from "antd";
import style from "../pages/DataEntry/RatePage.module.css";
import React from "react";

export const IMPORT_RATING_EXAMPLE = `import {Rating} from 'nexcomponent-ui';`;

export const USAGE_RATING_EXAMPLE = `<Rating size={"Sm"} defaultValue={2.5} />`;

export const SIZES_RATING_EXAMPLE = `{SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
<span key={key} style={{ marginRight: 4 }}>
  <Rating size={size} />
  </span>
))}`;

export const CONTROLLED_RATING_EXAMPLE = `<Rating size={"Sm"} value={valueInput} disabled />
<InputNumber
  onChange={onChangeInput}
  value={valueInput}
  className={style.ValueControlled}
/>`

export const RATING_PROPS_EXAMPLE = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "2",
    name: "onChange",
    desc: "Callback function when change",
    default: "",
    type: "function(e)",
    example: "(e) => console.log(e)",
  },
  {
    key: "91",
    name: "defaultValue",
    desc: "set default value to the rating",
    default: "0",
    type: "2.5",
    example: "(e) => console.log(e)",
  },
  {
    key: "7",
    name: "size",
    desc: "set size component",
    default: "md",
    type: "string (sm, md, lg)",
    example: "md",
  },
  {
    key: "8",
    name: "color",
    desc: "set stars color",
    default: "",
    type: "",
    example: "#FFF",
  },
  {
    key: "12",
    name: "disabled",
    desc: "change state component to disable",
    default: "false",
    type: "boolean",
    example: "true",
  },
];
