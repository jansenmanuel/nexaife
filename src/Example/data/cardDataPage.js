export const IMPORT_CARD_EXAMPLE = `import Cardv2_1_2 from 'nexcomponent-ui';`;
export const USAGE_CARD_EXAMPLE = `
  <Cardv2_1_2
    onClickProps={onClickIcon}
    actionProps={2}
    titileCard="Pt Nestle"
    roleName="Admin"
    datagroupName="All access"
    optionDropdown={example}
  />
`;

export const CARD_COMPONENT_PROPS_DATA = [
  {
    key: "1",
    name: "id",
    desc: "Props to provide an ID for the component.",
    default: "",
    type: "string",
    example: "",
  },
  {
    key: "2",
    name: "actionProps",
    desc: "Determines the type of action: single or multi-action. Use 1 or 2 for multi-action, and -1 to remove the icon.",
    default: "1",
    type: "Int",
    example: "1",
  },
  {
    key: "3",
    name: "onClickProps",
    desc: "Handles the onClick function if there is only a single action.",
    default: "",
    type: "function",
    example: "",
  },
  {
    key: "4",
    name: "titleCard",
    desc: "Sets the title of the card.",
    default: "Pt. Title Card",
    type: "string",
    example: "PT. Nestle",
  },
  {
    key: "5",
    name: "roleName",
    desc: "Sets the role name displayed on the card.",
    default: "Role Name Card",
    type: "string",
    example: "Administrator Nestle",
  },
  {
    key: "6",
    name: "datagroupName",
    desc: "Sets the data group name displayed on the card.",
    default: "Data group card",
    type: "string",
    example: "Data Group Nestle",
  },
  {
    key: "7",
    name: "optionDropdown",
    desc: "Provides a list of action items for the dropdown.",
    default: `[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 1
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 2
                        </a>
                    ),
                },
              ]`,
    type: "array of objects",
    example: `[
                {
                    key: '1',
                    label: (
                        <Button>
                            test
                        </Button>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 2
                        </a>
                    ),
                },
              ]`,
  },
];
