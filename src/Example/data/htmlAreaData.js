import {HTML_AREA_V_1_0_1} from "../../Component";
import React from "react";

export const IMPORT_HTML_EXAMPLE = `import { HTML_AREA_V_1_0_1 } from "nexcomponent-ui";`

export const USAGE_HTML_EXAMPLE = `<HTML_AREA_V_1_0_1 id={12} onChange={handleEditorChange} />`

export const SUBMIT_HTML_EXAMPLE = `<Card>
  <HTML_AREA_V_1_0_1
    style={{
      width: "100%",
      marginBottom: 20,
    }}
    id={12}
    onChange={handleEditorChange}
  />
  <div>
    <Button
      style={{
        padding: 4,
        marginBottom: 20,
      }}
      type={"primary"}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </div>
  <div style={{ width: "450px", textAlign: "left", textWrap: "wrap" }}>
    <p>Content Submit</p>
    <div style={{ textWrap: "wrap", fontSize: 10 }}>{submit}</div>
  </div>
</Card>;
`

export const INITIAL_HTML_EXAMPLE = ` <HTML_AREA_V_1_0_1 content={CONTENT_HTML} />`

export const CONTENT_HTML = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
<p>
          Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web"><b>world wide web</b></a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
</p>
`;

export const HTML_DATA_EXAMPLE = [
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
    desc: "Callback function when user type",
    default: "",
    type: "function(value: String)",
    example: "(e) => console.log(e)",
  },
  {
    key: "3",
    name: "content",
    desc: "Sets the content inside html area",
    default: "",
    type: "function(value: String)",
    example: "(e) => console.log(e)",
  },
  {
    key: "4",
    name: "disable",
    desc: "set the input to disable",
    default: "false",
    type: "boolean",
    example: "true",
  },
]