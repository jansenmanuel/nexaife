export const IMPORT_BUTTON_EXAMPLE = `import {ButtonV223} from 'nexcomponent-ui';`;
export const IMPORT_BUTTON_ICON_EXAMPLE =
  "import {ButtonV223} from 'nexcomponent-ui';";
export const IMPORT_BUTTON_GROUP_EXAMPLE =
  "import {ButtonGroup} from 'nexcomponent-ui';";
export const IMPORT_BUTTON_LOGIN_WITH_GROCHAT =  `import { BUTTON_LOGIN_GROCHAT_V_2_0_3 } from "nexcomponent-ui";`;

export const USAGE_BUTTON_EXAMPLE = `
  <ButtonV223
    buttonType={"primary"}
    mainColor={mainColor}
    secondaryColor={"white"}
    label="Button"
    size={"xs"}
  />`;

export const USAGE_BUTTON_ICON_EXAMPLE = `
  <ButtonV223
    icon={<NcInfo size={16} color={"white"} />}
    buttonType={"primary"}
    mainColor={mainColor}
    secondaryColor={"white"}
    label="Button"
    size={"xs"}
  />
`;

export const USAGE_BUTTON_GROUP_EXAMPLE = `
<ButtonGroup
  cancel="Cancel"
  confirm="OK"
  mainColor={mainColor}
  secondaryColor="#FFFFFF"
  size="xs"
/>
`;

export const USAGE_BUTTON_LOGIN_WITH_GROCHAT = `
  <BUTTON_LOGIN_GROCHAT_V_2_0_3
    size={"s"} 
    onClick={handleDataFromChild} 
    mainColor={mainColor}
  />
`;

export const SIZES_BUTTON_GROUP_EXAMPLE = `
{SIZES_DEFAULT.map((size) => (
  <span key={size} style={{ marginRight: 2 }}>
    <ButtonGroup
      cancel="Cancel"
      confirm="OK"
      mainColor={mainColor}
      secondaryColor="#FFFFFF"
      size={size}
    />
  </span>
))}
`;

export const DIRECTION_BUTTON_GROUP_EXAMPLE = `
{['horizontal', 'vertical'].map((direction) => (
  <span key={size} style={{ marginRight: 2 }}>
    <ButtonGroup
      cancel="Cancel"
      confirm="OK"
      mainColor={mainColor}
      secondaryColor="#FFFFFF"
      direction={direction}
    />
  </span>
))}
`;

export const ICON_BUTTON_GROUP_EXAMPLE = `
<ButtonGroup
  iconConfirm={<nexIcon.NcInfo size={14} color={"white"} />}
  iconCancel={<nexIcon.NcInfo size={14} color={mainColor} />}
  cancel="Cancel"
  confirm="OK"
  mainColor={mainColor}
  secondaryColor="#FFFFFF"
  size="xs"
/>
`;

export const BUTTON_DATA_EXAMPLE = [
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
    name: "onClick",
    desc: "Callback function click",
    default: "",
    type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
    example: "(e) => console.log(e)",
  },
  {
    key: "3",
    name: "size",
    desc: "set size for the input component",
    type: "string (xs, sm, md, xl, lg, xxl)",
    default: "md",
    example: "sm",
  },
  {
    key: "4",
    name: "label",
    desc: "set label to the button",
    type: "String",
    default: "",
    example: "Button name",
  },
  {
    key: "5",
    name: "disabled",
    desc: "Disabled the button",
    type: "boolean",
    default: "false",
    example: "true",
  },
  {
    key: "6",
    name: "type",
    desc: "Set type button html",
    type: "string",
    default: "submit",
    example: "submit",
  },
  {
    key: "7",
    name: "className",
    desc: "Set className to component",
    type: "string",
    default: "",
    example: "btnClass",
  },
  {
    key: "8",
    name: "mainColor",
    desc: "set main color to the button",
    type: "string",
    default: "",
    example: "white",
  },
  {
    key: "9",
    name: "secondaryColor",
    desc: "set secondary color to the button",
    type: "string",
    default: "",
    example: "white",
  },
  {
    key: "10",
    name: "prefixIcon",
    desc: "set icon to prefix in button",
    type: "ReactNode",
    default: "",
    example: "<SearchIcon />",
  },
  {
    key: "11",
    name: "suffixIcon",
    desc: "set icon to suffix in button",
    type: "ReactNode",
    default: "",
    example: "<SearchIcon />",
  },
  {
    key: "12",
    name: "buttonType",
    desc: "set type to component",
    type: "string (primary, secondary, tertiary, link)",
    default: "",
    example: "primary",
  },
  {
    key: "13",
    name: "roundedIcon",
    desc: "set rounded to the button",
    type: "boolean",
    default: false,
    example: "true",
  },
  {
    key: "14",
    name: "error",
    desc: "set error border to the button",
    type: "boolean",
    default: false,
    example: "true",
  },
  {
    key: "15",
    name: "badge",
    desc: "set the badge to the button",
    type: "boolean",
    default: false,
    example: "true",
  },
  {
    key: "16",
    name: "icon",
    desc: "set as icon and set an icon",
    type: "react node",
    default: null,
    example: '<NcInfo size={40} color="white" />',
  },
];

export const BUTTON_LOGIN_GROCHAT_DATA_EXAMPLE = [
  {
    key: "1",
    name: "id",
    desc: "Unique identifier for the button component.",
    default: "null",
    type: "string",
    example: '"123"',
  },
  {
    key: "2",
    name: "size",
    desc: "Set the size of button.",
    default: "m",
    type: "oneOf(['s', 'm', 'l', 'xl'])",
    example: '"s"',
  },
  {
    key: "3",
    name: "onClick",
    desc: "Set the handler to handle click event.",
    default: "-",
    type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
    example: "(e) => console.log(e)",
  },
  {
    key: "4",
    name: "label",
    desc: "Text displayed on the button indicating its purpose or action.",
    default: "Login with GroChat",
    type: "string",
    example: '"Login with GroChat"',
  },
  {
    key: "5",
    name: "mainColor",
    desc: "Control border color when the button is hovered.",
    default: "BLACK",
    type: "string",
    example: '"BLUE"',
  },
];


export const BUTTON_GROUP_PROPS_EXAMPLE = [
  {
    key: "1",
    name: "idConfirm",
    desc: "Given id to the component confirm button",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "2",
    name: "idCancel",
    desc: "Given id to the component confirm button",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "3",
    name: "confirm",
    desc: "Set label to confirm button",
    default: "-",
    type: "string",
    example: "confirm euy",
  },
  {
    key: "22",
    name: "confirm",
    desc: "Set label to confirm button",
    default: "-",
    type: "string",
    example: "confirm euy",
  },
  {
    key: "4",
    name: "cancel",
    desc: "Set label to cancel button",
    default: "-",
    type: "string",
    example: "confirm euy",
  },
  {
    key: "5",
    name: "onConfirm",
    desc: "Callback function confirm button",
    default: "",
    type: "func()",
    example: "() => console.log('hit')",
  },
  {
    key: "6",
    name: "onCancel",
    desc: "Callback function cancel button",
    default: "",
    type: "func()",
    example: "() => console.log('hit')",
  },
  {
    key: "7",
    name: "mainColor",
    desc: "set main color to the button",
    type: "string",
    default: "",
    example: "black",
  },
  {
    key: "8",
    name: "secondaryColor",
    desc: "set secondary color to the button",
    type: "string",
    default: "",
    example: "white",
  },
  {
    key: "9",
    name: "className",
    desc: "set classname to parent div",
    type: "string",
    default: "",
    example: "p-4",
  },
  {
    key: "10",
    name: "size",
    desc: "set secondary color to the button",
    type: "string",
    default: "",
    example: "white",
  },
  {
    key: "11",
    name: "size",
    desc: "set size",
    type: "string (xs, sm, md, xl, lg, xxl)",
    default: "md",
    example: "sm",
  },
  {
    key: "12",
    name: "iconConfirm",
    desc: "set icon confirm button",
    type: "ReactNode",
    default: null,
    example: "<Icon />",
  },
  {
    key: "13",
    name: "iconCancel",
    desc: "set icon cancel button",
    type: "ReactNode",
    default: null,
    example: "<Icon />",
  },
  {
    key: "14",
    name: "propsConfirm",
    desc: "set props button to confirm button",
    type: "obj",
    default: "",
    example: "{error: true}",
  },
  {
    key: "15",
    name: "propsCancel",
    desc: "set props button to cancel button",
    type: "obj",
    default: "",
    example: "{error: true}",
  },
  {
    key: "16",
    name: "direction",
    desc: "set direction",
    type: "horizontal | vertical",
    default: "horizontal",
    example: "vertical",
  },
];
