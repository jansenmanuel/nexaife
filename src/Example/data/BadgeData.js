import NcCheck from "../../Component/Asset/Icon/NcCheck";
import React from "react";

export const IMPORT_BADGE_EXAMPLE = `\import { BADGE_V_2_0_2 } from "nexcomponent-ui";`;

export const USAGE_BADGE_EXAMPLE =
  '<BADGE_V_2_0_2 type={"Pill"} content={"99+"} />';

export const TYPES_BADGE = [
  {
    type: "Pill",
    content: "99+",
  },
  {
    type: "Icon",
    content: <NcCheck color={"#FFF"} size={16} />,
  },
  {
    type: "",
    content: "99",
  },
  {
    type: "Legend",
    content: "",
  },
];

export const SIZES_BADGE_EXAMPLE =
  "{\n" +
  '  SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (\n' +
  "    <span key={key}>\n" +
  '      <BADGE_V_2_0_2 size={size} type={"Pill"} content={"99"} />\n' +
  "    </span>\n" +
  "  ));\n" +
  "}";

export const TYPES_BADGE_EXAMPLE =
  "{\n" +
  "  TYPES_BADGE.map((type, key) => (\n" +
  "    <span key={key}>\n" +
  '      <BADGE_V_2_0_2 size={"Md"} type={type.type} content={type.content} />\n' +
  "    </span>\n" +
  "  ));\n" +
  "}\n";

export const API_PROPS_BADGE_EXAMPLE = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "7",
    name: "size",
    desc: "set size component",
    default: "md",
    type: "string (sm, md, lg, xs, xxl)",
    example: "sm",
  },
  {
    key: "8",
    name: "type",
    desc: "set type badge",
    default: "",
    type: "string (Pill, Legend, Icon, '')",
    example: "Icon",
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
    key: "10",
    name: "content",
    desc: "set content badge",
    default: "",
    type: "ReactNode",
    example: "<Icon />",
  },
];
