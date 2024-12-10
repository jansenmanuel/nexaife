import React, { useState } from "react";
import { HtmlArea as HTML_AREA_V_1_0_1 } from "../../../Component";
import { Button, Card } from "antd";
import styled from "./HtmlAreaPage.module.css";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  CONTENT_HTML,
  HTML_DATA_EXAMPLE,
  IMPORT_HTML_EXAMPLE, INITIAL_HTML_EXAMPLE,
  SUBMIT_HTML_EXAMPLE,
  USAGE_HTML_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const HtmlAreaPage = () => {
  const content = `
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

  const [htmlContent, setHtmlContent] = useState("");
  const [submit, setSubmit] = useState("");

  const handleEditorChange = (html) => {
    setHtmlContent(html);
  };

  const handleSubmit = (val) => {
    setSubmit(htmlContent);
  };

  return (
    <MainSection>
      <HeaderSection
        title="HTML Area"
        subtitle="A flexible and interactive rich text editor for creating HTML-formatted content. Ideal for blogs, CMS, and collaborative platforms."
      />
      <ImportSection code={IMPORT_HTML_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_HTML_EXAMPLE} />
      </Section>
      <Section title={"Submit Example"}>
        <Card>
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
        </Card>
        <CodeBlock code={SUBMIT_HTML_EXAMPLE} />
      </Section>
      <Section title={"Initial Value"}>
        <Card>
          <HTML_AREA_V_1_0_1 content={CONTENT_HTML} />
        </Card>
        <CodeBlock code={INITIAL_HTML_EXAMPLE}/>
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={HTML_DATA_EXAMPLE} />
    </MainSection>
  );
};

export default HtmlAreaPage;
