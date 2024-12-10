export const IMPORT_TRANSFER_FILE_EXAMPLE = `import TRANSFER_FILE_V2_0_2 from 'nexcomponent-ui';`;
export const USAGE_TRANSFER_FILEL_EXAMPLE = `
  <TRANSFER_FILE_V2_0_2
    listData={mockData}
    targetKeys={targetKeys}
    handleChangeData={handleChange}
    titleLeft={"Judul Kiri"}
  />
`;

export const TRANSFER_FILE_PROPS_DATA = [
  {
    key: "1",
    name: "listData",
    desc: "Props containing a data object list. Each object in the list must contain a key and title property. The key is used for data transfer in the list.",
    default: "[{}]",
    type: "array of objects",
    example: "[{ key: 0, title: 'content1', description: 'description of content1' }]",
  },
  {
    key: "2",
    name: "targetKeys",
    desc: "List of IDs for the target list.",
    default: "[]",
    type: "array",
    example: "[1, 2, 3, 4]",
  },
  {
    key: "3",
    name: "handleChangeData",
    desc: "Function to handle the list of IDs that are transferred.",
    default: "-",
    type: "function",
    example: `const handleChange = (newTargetKeys) => { setTargetKeys(newTargetKeys); }`,
  },
  {
    key: "4",
    name: "titleLeft",
    desc: "Title for the source list.",
    default: "Title Left",
    type: "string",
    example: "Left",
  },
  {
    key: "5",
    name: "titleRight",
    desc: "Title for the target list.",
    default: "Title Right",
    type: "string",
    example: "Right",
  },
];
