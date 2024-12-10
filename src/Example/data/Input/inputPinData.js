export const IMPORT_INPUT_PIN_EXAMPLE = `import {PIN_V_2_2_3} from 'nexcomponent-ui';`;

export const USAGE_INPUT_PIN_EXAMPLE = `<PIN_V_2_2_3
  onChange={(e, i) => onChangePin(e, i)}
  color={mainColor}
/>`;

export const SIZES_INPUT_PIN = `{SIZES_DEFAULT.filter((size) => size !== "xs").map((size) => (
  <span style={{ marginRight: 2 }}>
    <PIN_V_2_2_3
    mainColor={mainColor}
    disabled
    onChange={(e, i) => onChangePin(e, i)}
    size={size}
  />
  </span>
))}`;

export const ERROR_STATE_INPUT_PIN = `<PIN_V_2_2_3
  mainColor={mainColor}
  onChange={(e, i) => onChangePin(e, i)}
  error
  errorMessage={"riptod"}
/>;`

export const INPUT_PIN_EXAMPLE_DATA = [
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
    type: "function(value, index)",
    example: "(e) => console.log(e)",
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
    key: "12",
    name: "disabled",
    desc: "change state component to disable",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "111",
    name: "value",
    desc: "Sets the initial value of the PIN input fields.",
    default: "",
    type: "string | number",
    example: "1234",
  },
  {
    key: "222",
    name: "lengthPin",
    desc: "Specifies the number of input fields to display for the PIN.",
    default: "4",
    type: "number",
    example: "6",
  },
  {
    key: "333",
    name: "hidden",
    desc: "Determines if input should be masked for security, using a delay if enabled.",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "11",
    name: "handleOnComplete",
    desc: "Callback triggered when all fields are filled, providing the complete value and last field index.",
    default: "(value, index) => console.log(value, index)",
    type: "(value: string | number, index: number) => void",
    example: "(value, index) => alert(`Completed: ${value}`)",
  },
  {
    key: "13",
    name: "regex",
    desc: "Specifies a regular expression to validate each input field against.",
    default: "props.regex",
    type: "RegExp",
    example: "/[0-9]/",
  },
  {
    key: "14",
    name: "errorMessage",
    desc: "set error message to component",
    default: "",
    type: "string",
    example: "this is error message",
  },
  {
    key: "15",
    name: "error",
    desc: "set border to red",
    default: "false",
    type: "boolean",
    example: "true",
  },
];
