// Utils and Libraries
import React, { useState } from "react";
import { exampleApiCol } from "../../config";
import {
  CONTROLLED_TEXT_AREA_EXAMPLE,
  IMPORT_TEXT_AREA_EXAMPLE,
  SIZES_TEXT_AREA_EXAMPLE,
  STATES_TEXT_AREA_EXAMPLE,
  textAreaDataPage,
  USAGE_TEXT_AREA_EXAMPLE,
} from "../../data";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";

// Components
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import { TextArea as TEXT_AREA_V_2_0_2 } from "../../../Component";
import { Card } from "antd";
import CodeBlock from "../../componentsExample/CodeBlock";

const TextAreaPage = () => {
  const [value, setValue] = useState("Edit me");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MainSection>
      <HeaderSection
        title={"Text Area"}
        subtitle={
          "Basic widget for getting the user input is a text field area"
        }
      />
      <ImportSection code={IMPORT_TEXT_AREA_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_TEXT_AREA_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {["sm", "md", "lg", "xl", "xxl"].map((size, key) => (
            <TEXT_AREA_V_2_0_2
              id={key}
              placeholder={"text area"}
              size={size}
              style={{ height: 160, margin: 2 }}
            />
          ))}
        </Card>
        <CodeBlock code={SIZES_TEXT_AREA_EXAMPLE} />
      </Section>
      <Section title={"States"}>
        <Card>
          <TEXT_AREA_V_2_0_2
            placeholder={"text area"}
            size={"sm"}
            style={{ height: 160, margin: 2 }}
            status={"error"}
          />
          <TEXT_AREA_V_2_0_2
            maxWidthError={100}
            valid={false}
            errorMessage={"Error Message Long"}
            placeholder={"Text area"}
            size={"sm"}
            style={{ height: 160, margin: 2 }}
            status={"error"}
          />
          <TEXT_AREA_V_2_0_2
            placeholder={"text area"}
            size={"md"}
            style={{ height: 160, margin: 2 }}
            status={"warning"}
          />
          <TEXT_AREA_V_2_0_2
            placeholder={"text area"}
            size={"lg"}
            style={{ height: 160, margin: 2 }}
            disabled
          />
        </Card>
        <CodeBlock code={STATES_TEXT_AREA_EXAMPLE} />
      </Section>
      <Section title={"Controlled"}>
        <Card>
          <TEXT_AREA_V_2_0_2
            placeholder={"text area"}
            style={{ height: 160 }}
            size="md"
            value={value}
            onChange={onChange}
          />
          <p style={{ marginTop: 10 }}>Value: {value}</p>
        </Card>
        <CodeBlock code={CONTROLLED_TEXT_AREA_EXAMPLE} />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={textAreaDataPage} />
    </MainSection>
  );
};

export default TextAreaPage;
