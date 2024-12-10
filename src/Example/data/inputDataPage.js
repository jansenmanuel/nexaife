import {Input} from "../../Component";
import {ERROR_MESSAGES, SIZES_DEFAULT} from "../Constant/generalConstant";

export const IMPORT_INPUT_EXAMPLE = `import {Input} from 'nexcomponent-ui';`;

export const SIZES_INPUT_EXAMPLE = `
  {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
    <span key={key} style={{ marginRight: 4 }}>
      <Input
        width="100%"
        placeholder="Input Field"
        size={size}
        required
        mainColor={mainColor}
      />
    </span>
  ))}
`;

export const LABEL_INPUT_EXAMPLE = `
  <Input
    width="100%"
    isOptional
    textlabel="Label"
    placeholder="Text Field"
    size="sm"
    required
    mainColor={mainColor}
  />
`;

export const ERROR_INPUT_EXAMPLE = `
<Input
  valid={false}
  errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
  maxWidthError={100}
  placeholder="Text Field"
  size="sm"
  required
  mainColor={mainColor}
/>
`


export const USAGE_INPUT_EXAMPLE =
  `<Input
  valid={false}
  errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
  maxWidthError={100}
  placeholder="Text Field"
  size="sm"
  required
  mainColor={mainColor}
/>`;


export const inputDataPage = [
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
    name: "onKeyDown",
    desc: "event handler that listens for keydown events",
    default: "",
    type: "function(e)",
    example: "(e) => console.log(e)",
  },
  {
    key: "4",
    name: "valid",
    desc: "set error state to component",
    default: false,
    type: "boolean",
    example: "true",
  },
  {
    key: "5",
    name: "erromessage",
    desc: "set error message label input",
    default: "",
    type: "string",
    example: "salah bos",
  },
  {
    key: "6",
    name: "placeholder",
    desc: "set placeholder to component",
    default: "",
    type: "string",
    example: "input your component",
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
    name: "mainColor",
    desc: "set main color component",
    default: "",
    type: "string",
    example: "#FFF",
  },
  {
    key: "9",
    name: "isOptional",
    desc: "added optional label",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "10",
    name: "pattern",
    desc: "Set pattern regexp to input validation",
    default: "",
    type: "regexp",
    example: "[A-Za-z]{3}",
  },
  {
    key: "11",
    name: "value",
    desc: "set value",
    type: "string | number",
    default: "",
    example: "1",
  },
  {
    key: "12",
    name: "disabled",
    desc: "change state component to disable",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "13",
    name: "textlabel",
    desc: "set label input",
    default: "",
    type: "string",
    example: "label",
  },
  {
    key: "14",
    name: "maxWidthError",
    desc: "set max width to the error message and will be displayed tooltips",
    default: "",
    type: "string | number",
    example: "100px",
  },
  {
    key: "15",
    name: "type",
    desc: "set type to input",
    default: "",
    type: "string",
    example: "password",
  },
];
