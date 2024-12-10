export const IMPORT_VIDEO_EXAMPLE = `\import { VIDEO_V_2_0_1 } from "nexcomponent-ui";`;

export const USAGE_VIDEO_EXAMPLE =
  "<VIDEO_V_2_0_1\n" +
  '  aspectRatio="1:1"\n' +
  '  orientation="portrait"\n' +
  "  src={VIDEO_URL}\n" +
  '  alt="Descriptive Text"\n' +
  "/>;";

export const FALLBACK_VIDEO_EXAMPLE = `<VIDEO_V_2_0_1
  aspectRatio="5:3"
  orientation="landscape"
  src={""}
  fallback={VIDEO_FALLBACK}
  alt="Placeholder"
/>;`;

export const OTHER_PROPS_EXAMPLE = `<div className={styled.Container}>
  <div>
    <VIDEO_V_2_0_1 src={VIDEO_SRC} autoPlay={true} />
    <p>Autoplay true</p>
  </div>
  <div>
    <VIDEO_V_2_0_1 src={VIDEO_SRC} poster={"https://placehold.co/600x400"} />
    <p>With Poster</p>
  </div>
  <div>
    <VIDEO_V_2_0_1 src={VIDEO_SRC}>
      <p>
        Your browser doesn't support HTML5 video.{" "}
        <a href="https://www.w3schools.com/html/mov_bbb.mp4">
          Download the video
        </a>{" "}
        instead.
      </p>
    </VIDEO_V_2_0_1>
    <p>With fallback</p>
  </div>
</div>;`

export const PROPS_API_VIDEO = [
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
    desc: "set video source",
    default: "",
    type: "string",
    example: "https://placehold.co/600x400",
  },
  {
    key: "4",
    name: "fallback",
    desc: "set video fallback",
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
  {
    key: "6",
    name: "autoplay",
    desc: "set video to autoplay",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "7",
    name: "controls",
    desc: "set video to autoplay",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "8",
    name: "type",
    desc: "set type of video",
    default: "video/mp4",
    type: "string",
    example: "video/mp4",
  },
  {
    key: "9",
    name: "poster",
    desc: "set poster/thumbnail to the video",
    default: "video/mp4",
    type: "string",
    example: "video/mp4",
  },
  {
    key: "8",
    name: "children",
    desc: "custom children inside the video tag",
    default: "",
    type: "reactNode",
    example: "",
  },
];
