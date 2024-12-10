import { useState } from "react";
import { Col, Div, Input, Label, Row } from "../../../Component";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";
import {IMPORT_PASSWORD_EXAMPLE, inputDataPage, SIZES_PASSWORD_EXAMPLE, USAGE_PASSWORD_EXAMPLE} from "../../data";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import { Card } from "antd";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import {exampleApiCol} from "../../config";
// import Input from "../../../Component/Atomic/Input/Input/Input"

const TSLPasswordPage = () => {
  const [valuePassword, setValuePassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <MainSection>
      <HeaderSection
        title={"Input Password"}
        subtitle={"Input with password state"}
      />
      <ImportSection code={IMPORT_PASSWORD_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_PASSWORD_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <Input
                placeholder="Password"
                size={size}
                type="password"
                value={valuePassword}
                onChange={(e) => setValuePassword(e.target.value)}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_PASSWORD_EXAMPLE}/>
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={inputDataPage}/>
    </MainSection>
  );
};

export default TSLPasswordPage;
