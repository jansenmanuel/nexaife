export const IMPORT_DATA_TAG_EXAMPLE = `import { TAG_V_2_0_2 } from 'nexcomponent-ui';`;

export const USAGE_TAG_EXAMPLE = `
  <TAG_V_2_0_2
    id={"outlined1"}
    title="Outlined"
    state={"outlined"}
    size={"xs"}
    fontColorProps={"red"}
  />
`;

export const TAG_DATA_EXAMPLE = [
  {
    key: "1",
    name: "id",
    desc: "Unique identifier for the tag component.",
    default: "-",
    type: "string",
    example: '"tag-123"',
  },
  {
    key: "2",
    name: "iconLeft",
    desc: "Set the left icon.",
    default: "-",
    type: "element",
    example: "<LeftIcon />",
  },
  {
    key: "3",
    name: "closable",
    desc: "Activate the right icon, use this to show the right icon.",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "4",
    name: "iconRight",
    desc: "Use this to customize the right icon.",
    default: "close icon",
    type: "element",
    example: "<CloseIcon />",
  },
  {
    key: "5",
    name: "title",
    desc: "The title of the tag.",
    default: "-",
    type: "string",
    example: '"Tag Title"',
  },
  {
    key: "6",
    name: "size",
    desc: "The size of the tag.",
    default: "md",
    type: "oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])",
    example: '"lg"',
  },
  {
    key: "7",
    name: "state",
    desc: "Set state/type of the tag.",
    default: "default",
    type: "oneOf(['default', 'colored', 'outlined', 'disabled'])",
    example: '"colored"',
  },
  {
    key: "8",
    name: "color",
    desc: "Set tag background color if state is colored.",
    default: "-",
    type: "string",
    example: '"blue"',
  },
  {
    key: "9",
    name: "onClose",
    desc: "Callback function that is called when the close button is clicked (iconRight).",
    default: "-",
    type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
    example: "(e) => console.log(e)",
  },
  {
    key: "10",
    name: "colorFontProps",
    desc: "To set font color.",
    default: '""',
    type: "string",
    example: '"red"',
  },
];
