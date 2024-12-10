export const USAGE_SELECT_EXAMPLE = `
  <SELECT_V_2_2_3
    width={200}
    isOptional
    disabled={true}
    value={valueSelect}
    onChange={handleClick}
    option={options}
    mainColors={mainColor}
    size={"sm"}
  />
`;

export const IMPORT_SELECT_EXAMPLE = `import {SELECT_V_2_2_3} from 'nexcomponent-ui';`

export const SELECT_DATA_EXAMPLE = [
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
    key: "3",
    name: "isOptional",
    desc: "added optional label",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "4",
    name: "disabled",
    desc: "change state component to disable",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "5",
    name: "value",
    desc: "set value",
    type: "string | number",
    default: "",
    example: "1",
  },
  {
    key: "6",
    name: "mainColors",
    desc: "set main color component",
    default: "",
    type: "string",
    example: "#FFF",
  },
  {
    key: "7",
    name: "size",
    desc: "set size component",
    default: "md",
    type: "string (sm, md, lg, xl, xxl)",
    example: "sm",
  },
  {
    key: "8",
    name: "option",
    desc: "set options to select component",
    default: "[]",
    type: "selectOption(currentData, previousData, label)",
    example: 'selectOption([], [{id : 1, value: "apple"}], value)',
  },
  {
    key: "9",
    name: "width",
    desc: "set width component",
    default: "",
    type: "int",
    example: '300',
  },
  {
    key: "10",
    name: "valid",
    desc: "set valid to the component",
    default: "false",
    type: "boolean",
    example: 'true',
  },
  {
    key: "11",
    name: "search",
    desc: "set as search select",
    default: "false",
    type: "boolean",
    example: 'true',
  },
  {
    key: "12",
    name: "handleSearch",
    desc: "handle to search on select",
    default: "",
    type: "function(e)",
    example: '(e) => console.log(e)',
  },
  {
    key: "13",
    name: "maxWidthError",
    desc: "set max width to the error message and will be displayed tooltips",
    default: "",
    type: "string | number",
    example: '100px',
  }
]