import {ERROR_MESSAGES} from "../Constant/generalConstant";
import MULTIPLE_SELECT_2_0_3 from "../../Component/Atomic/Selector/MultipleSelect/MultipleSelect";
import React from "react";

export const IMPORT_MULTIPLE_SELECT_EXAMPLE = `import {MULTIPLE_SELECT_2_0_3} from 'nexcomponent-ui';`;
export const USAGE_MULTIPLE_SELECT_EXAMPLE =    `<MULTIPLE_SELECT_2_0_3
  isAll={true}
  size={'sm'}
  handleChange={handleChangMSS}
  count_data={options?.length}
  mainColors={mainColor}
  options={options}
  selectedValues={valueExample}
/>`

export const SIZES_MULTIPLE_SELECT_EXAMPLE = `{_.map(arraySize, (el) => (
  <div style={{marginBottom: 20}}>
    <MULTIPLE_SELECT_2_0_3
      id={el}
      isAll={true}
       size={el}
       handleChange={handleChangMSS}
       count_data={options?.length}
       mainColors={mainColor}
       options={options}
       selectedValues={valueExample}
    />
  </div>
))}`

export const CONTROLLED_MULTIPLE_SELECT_EXAMPLE = `<MULTIPLE_SELECT_2_0_3
  textLabel={"Label"}
  isAll={true}
  handleChange={handleChangeFetch}
  count_data={data.length}
  mainColors={mainColor}
  options={filteredOptions}
  selectedValues={value}
  size={"md"}
  onBottomScroll={handlePage}
  handleSearch={handleSearch}
  valid={value.length > 0}
  errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
  maxWidthError={200}
/>`

export const multipleSelectData = [
  {
    key: "1",
    name: "disabled",
    desc: "Controls the disable of the input.",
    type: "bool",
    default: "false",
    example: "",
  },
  {
    key: "2",
    name: "size",
    desc: "Specifies the size of multiple select.",
    type: "oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])",
    default: "'md'",
    example: "sm",
  },
  {
    key: "3",
    name: "valid",
    desc: "Validation of the multiple select input.",
    type: "any",
    default: "null",
    example: "",
  },
  {
    key: "4",
    name: "errormessage",
    desc: "Message of the error.",
    type: "string",
    default: '""',
    example: "",
  },
  {
    key: "5",
    name: "handleChange",
    desc: "Callback function that is called when there's change in input.",
    type: "func",
    default: "() => {}",
    example: "",
  },
  {
    key: "6",
    name: "options",
    desc: "Option for the mss.",
    type: "arrayOfObject",
    default: "[]",
    example: "",
  },
  {
    key: "7",
    name: "id",
    desc: "id for component.",
    type: "string",
    default: "''",
    example: "",
  },
  {
    key: "8",
    name: "mainColor",
    desc: "Props for changing the main color of multiple select.",
    type: "string",
    default: '""',
    example: "",
  },
  {
    key: "9",
    name: "count_data",
    desc: "The amount of data in the list.",
    type: "number",
    default: "2",
    example: "",
  },
  {
    key: "10",
    name: "selectedValue",
    desc: "controlled value that checked",
    type: "arrayOfObject",
    default: "[]",
    example: JSON.stringify([
      {
        id: 211,
        value: "First choice",
        checked: true,
      },
    ]),
  },
  {
    key: "11",
    name: "textLabel",
    desc: "Set label above input, will be hidden if not passed",
    type: "string",
    default: "",
    example: "Label",
  },
  {
    key: "12",
    name: "placeholderSearch",
    desc: "set placeholder to search input",
    type: "string",
    default: "",
    example: "Search ...",
  },
  {
    key: "13",
    name: "handleSearch",
    desc: "callback for input search",
    type: "func(event: input)",
    default: "() => {}",
    example: "(e) => {}",
  },
  {
    key: "14",
    name: "maxWidthError",
    desc: "set max width to the error message and will be displayed tooltips",
    default: "",
    type: "string | number",
    example: "100px",
  },
];
