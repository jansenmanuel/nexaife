export const IMPORT_INPUT_BUTTON_EXAMPLE = `import {InputButton_V_2_2_3} from 'nexcomponent-ui';`

export const USAGE_INPUT_BUTTON_EXAMPLE = `  <InputButton_V_2_2_3 mainColor={mainColor} size={"xl"} />`

export const SIZES_INPUT_BUTTON_EXAMPLE = `{SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <InputButton_V_2_2_3
                mainColor={mainColor}
                size={size}
                labelButton={"Button"}
              />
            </span>
          ))}`

export const INPUT_BUTTON_PROPS_EXAMPLE = [
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
];