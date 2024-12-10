
export const IMPORT_LEGEND_EXAMPLE = `import { LEGEND_GROUP_V_1_0_0, LEGEND_V_1_0_0 } from "nexcomponent-ui";`;

export const USAGE_LEGEND_EXAMPLE = `<LEGEND_V_1_0_0
  size={"Sm"}
  style={{ marginBottom: 6 }}
  title={"Caption Legend"}
 />`;

export const SIZES_LEGEND_EXAMPLE = `{SIZES_DEFAULT.filter(
  (size) => size !== "xs" && size !== "xl" && size !== "xxl",
  ).map((size, key) => (
    <div style={{marginTop: 20}}>
      <LEGEND_V_1_0_0 size={size} title={"Caption Legend"} />
    </div>
  ))}`;

export const GROUP_LEGEND_EXAMPLE = `<LEGEND_GROUP_V_1_0_0 items={items} size={"Lg"} />
<LEGEND_GROUP_V_1_0_0 items={items} size={"Md"} />
<LEGEND_GROUP_V_1_0_0 items={items} size={"Sm"} />`;

export const COLORED_LEGEND_EXAMPLE = `<LEGEND_V_1_0_0
  color={"#0020f6"}
  style={{ marginBottom: 20 }}
  title={"Caption Legend"}
  />
  
<LEGEND_GROUP_V_1_0_0 items={items} />`;

export const LEGEND_DATA_PAGE = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "8",
    name: "color",
    desc: "set stars color",
    default: "",
    type: "",
    example: "#FFF",
  },
  {
    key: "2",
    name: "title",
    desc: "set title",
    default: "",
    type: "string",
    example: "this is title",
  },
  {
    key: "7",
    name: "size",
    desc: "set size component",
    default: "md",
    type: "string (sm, md, lg)",
    example: "md",
  },
];

export const LEGEND_GROUP_DATA_PAGE = [
  {
    key: "7",
    name: "size",
    desc: "set size component",
    default: "md",
    type: "string (sm, md, lg)",
    example: "md",
  },
  {
    key: "8",
    name: "items",
    desc: "list item content for the legend group",
    default: "[]",
    type: "object[]",
    example: "\n" +
      "  legendItemType: PropTypes.arrayOf(\n" +
      "    PropTypes.shape({\n" +
      "      title: PropTypes.string.isRequired,\n" +
      "      color: PropTypes.string,\n" +
      "    })\n" +
      "  )\n" +
      "",
  },
];

export const ITEMS_LEGEND_EXAMPLE = [
  {
    title: "Caption Legend",
  },
  {
    title: "Africa",
  },
  {
    title: "Americas",
  },
  {
    title: "Australia",
  }
];