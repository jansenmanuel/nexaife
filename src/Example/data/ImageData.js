export const IMPORT_IMAGE_EXAMPLE = `\import { IMAGE_V_2_0_1 } from "nexcomponent-ui";`;

export const USAGE_IMAGE_EXAMPLE =
  "<IMAGE_V_2_0_1\n" +
  '  aspectRatio="1:1"\n' +
  '  orientation="portrait"\n' +
  "  src={IMAGE_URL}\n" +
  '  alt="Descriptive Text"\n' +
  "/>;";

export const FALLBACK_IMAGE_EXAMPLE = `<IMAGE_V_2_0_1
  aspectRatio="5:3"
  orientation="landscape"
  src={""}
  fallback={IMAGE_FALLBACK}
  alt="Placeholder"
/>;`;

export const PROPS_API_IMAGE = [
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
    name: "aspectRatio",
    desc: "Set aspect ratio for the image",
    default: "1:1",
    type: "string",
    example: "1:1",
  },
  {
    key: "3",
    name: "src",
    desc: "set image source",
    default: "",
    type: "string",
    example: "https://placehold.co/600x400",
  },
  {
    key: "4",
    name: "fallback",
    desc: "set image fallback",
    default: "",
    type: "string",
    example: "https://placehold.co/600x400",
  },
  {
    key: "5",
    name: "orientation",
    desc: "set image orientation",
    default: "portrait",
    type: "string",
    example: "landscape",
  },
];
