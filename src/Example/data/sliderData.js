export const IMPORT_SLIDER_EXAMPLE = `import {SLIDER_V_2_0_1} from 'nexcomponent-ui';`;

export const USAGE_SLIDER_EXAMPLE = ` <SLIDER_V_2_0_1 />`

export const CONTROLLED_SLIDER_EXAMPLE = `const [inputValue, setInputValue] = useState(1);
const onChange = (newValue) => {
  setInputValue(newValue);
};
return (
  <App>
    <p>{formatTimeFromSeconds(inputValue)}</p>
    <SLIDER_V_2_0_1
      tooltip={{ formatter: (value) => formatTimeFromSeconds(value) }}
      min={0}
      max={180}
      value={inputValue}
      onChange={onChange}
    />
    <p>{formatTimeFromSeconds(180)}</p>
    <InputNumber
      min={0}
      max={180}
      style={{
        margin: "0 16px",
      }}
      value={inputValue}
      onChange={onChange}
    />
  </App>
);
`

export const API_PROPS_SLIDER = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "9",
    name: "color",
    desc: "set color badge",
    default: "",
    type: "string",
    example: "#1D1D1D",
  },
  {
    key: "8",
    name: "min",
    desc: "set min slider",
    default: "0",
    type: "number",
    example: "2",
  },
  {
    key: "9",
    name: "max",
    desc: "set max slider",
    default: "100",
    type: "number",
    example: "180",
  },
  {
    key: "9",
    name: "max",
    desc: "set max slider",
    default: "100",
    type: "number",
    example: "180",
  },
  {
    key: "10",
    name: "value",
    desc: "set value slider",
    default: "",
    type: "number",
    example: "60",
  },
  {
    key: "11",
    name: "onChange",
    desc: "\tCallback function that is fired when the user changes the slider's value",
    default: "",
    type: "(value) => void",
    example: "(val) => val",
  },
]
