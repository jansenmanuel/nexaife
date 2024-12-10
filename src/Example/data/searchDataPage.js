import InputSearch from "../../Component/Molecules/SearchRecommendation/InputSearch";

export const IMPORT_SEARCH_EXAMPLE =
  "import {InputSearch} from 'nexcomponent-ui';";

export const USAGE_SEARCH_EXAMPLE = `
  <InputSearch
   placeholder={"Search..."}
   mainColor={mainColor}
   options={options}
   value={value}
   onSelect={onSelect}
   onChange={(e) => onChange(e)}
   size={"sm"}
   onClear={()=>setValue("")}
  />`;

export const SIZES_SEARCH_EXAMPLE = `
{SIZES_DEFAULT.map((size) => (
  <span key={size} style={{ marginRight: 2 }}>
   <InputSearch
     placeholder={"Search..."}
     mainColor={mainColor}
     options={options}
     value={value}
     onSelect={onSelect}
     onChange={(e) => onChange(e)}
     size={size}
     onClear={()=>setValue("")}
   />
  </span>
))}
`;

export const INPUT_SEARCH_PROPS_EXAMPLE = [
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
    key: "99",
    name: "options",
    desc: "Select options. Will get better perf than jsx definition",
    default: "",
    type: "{ label, value }[]",
    example: "-",
  },
  {
    key: "929",
    name: "onPopupScroll",
    desc: "Called when dropdown scrolls",
    default: "",
    type: "(event: UIEvent) => void",
    example: "-",
  },
  {
    key: "4",
    name: "onSelect",
    desc: "Called when a option is selected. param is option's value and option instance",
    default: "",
    type: "function(value, option)",
    example: "-",
  },
  {
    key: "3",
    name: "onClear",
    desc: "Called when clear",
    default: "",
    type: "function",
    example: "-",
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
];
