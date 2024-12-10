import {TEXT_AREA_V_2_0_2} from "../../Component";
import React from "react";

export const IMPORT_TEXT_AREA_EXAMPLE = `\import { TEXT_AREA_V_2_0_2 } from "nexcomponent-ui";`;

export const USAGE_TEXT_AREA_EXAMPLE = `<TEXT_AREA_V_2_0_2
  id={1}
  placeholder={"text area"}
  size={"Sm"}
  style={{ height: 160 }}
/>`

export const SIZES_TEXT_AREA_EXAMPLE = `{["Sm", "Md", "Lg", "Xl", "2Xl"].map((size, key) => (<TEXT_AREA_V_2_0_2
  id={key}
  placeholder={"text area"}
  size={size}
  style={{ height: 160, marginTop: 20 }}
 />
))}`

export const STATES_TEXT_AREA_EXAMPLE = `<>
  <TEXT_AREA_V_2_0_2
    placeholder={"text area"}
    size={"Sm"}
    style={{ height: 160, margin: 2 }}
    status={"error"}
   />
  <TEXT_AREA_V_2_0_2
    maxWidthError={100}
    valid={false}
    errorMessage={"Error Message Long"}
    placeholder={"Text area"}
    size={"Sm"}
    style={{ height: 160, margin: 2 }}
    status={"error"}
  />
  <TEXT_AREA_V_2_0_2
    placeholder={"text area"}
    size={"Md"}
    style={{ height: 160, margin: 2 }}
    status={"warning"}
  />
  <TEXT_AREA_V_2_0_2
    placeholder={"text area"}
    size={"Lg"}
    style={{ height: 160, margin: 2 }}
    disabled
  />
</>`

export const CONTROLLED_TEXT_AREA_EXAMPLE = `import React, { useState } from 'react';
import { TEXT_AREA_V_2_0_2 } from "nexcomponent-ui";
const App = () => {
  const [value, setValue] = useState("Edit me");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <TEXT_AREA_V_2_0_2
        placeholder={"text area"}
        style={{ height: 160 }}
        value={value}
        onChange={onChange}
      />
      <p style={{ marginTop: 10 }}>Value: {value}</p>
    </>
  );
};
export default App;`

export const textAreaDataPage = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string",
    example: "2",
  },
  {
    key: "3",
    name: "size",
    desc: "set size for the input component",
    type: "string (sm, md, xl, lg, 2xl)",
    default: "sm",
    example: "sm",
  },
  {
    key: "4",
    name: "defaultValue",
    desc: "set default value to the component",
    type: "String",
    default: "",
    example: "#FFFFFF",
  },
  {
    key: "5",
    name: "disabled",
    desc: "Disabled the input",
    type: "boolean",
    default: "false",
    example: "true",
  },
  {
    key: "6",
    name: "onChange",
    desc: "Callback function to get the value",
    type: "function(e)",
    default: "",
    example: "(e) => e.target.value",
  },
  {
    key: "7",
    name: "valid",
    desc: "set error message and border",
    type: "boolean",
    default: "",
    example: "true",
  },
  {
    key: "8",
    name: "value",
    desc: "set value to the component",
    type: "string",
    default: "",
    example: "this is value",
  },
  {
    key: "9",
    name: "errorMessage",
    desc: "set message error",
    type: "string",
    default: "",
    example: "This is error message",
  },
  {
    key: "13",
    name: "maxWidthError",
    desc: "set max width to the error message and will be displayed tooltips",
    default: "",
    type: "string | number",
    example: "100px",
  },
];
