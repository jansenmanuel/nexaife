import { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "../../../Component";
import { Card } from "antd";
import {
  ERROR_INPUT_EXAMPLE,
  IMPORT_INPUT_EXAMPLE,
  inputDataPage,
  LABEL_INPUT_EXAMPLE,
  SIZES_INPUT_EXAMPLE,
  USAGE_INPUT_EXAMPLE,
} from "../../data";
import { exampleApiCol } from "../../config";
import { ERROR_MESSAGES, SIZES_DEFAULT } from "../../Constant/generalConstant";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";

const TslPage = () => {
  const { mainColor } = useSelector((state) => state.properties);

  const [value, setValue] = useState("");

  const onChanges = (e) => {
    let { value } = e.target;
    setValue(value);
  };

  const onKeyDown = (e) => {
    console.log(e);
  };

  return (
    <MainSection>
      <HeaderSection
        title={"Input"}
        subtitle={
          "Input component is a component that is used to get user input in a text field."
        }
      />
      <ImportSection code={IMPORT_INPUT_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_INPUT_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <Input
                width={"100%"}
                placeholder="Input Field"
                size={size}
                required
                mainColor={mainColor}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_INPUT_EXAMPLE} />
      </Section>
      <Section title={"Input with label"}>
        <Card>
          <Input
            width={"100%"}
            textlabel={"Label"}
            placeholder="Text Field"
            size="sm"
            isOptional
            mainColor={mainColor}
          />
        </Card>
        <CodeBlock code={LABEL_INPUT_EXAMPLE} />
      </Section>
      <Section title={"Input error"}>
        <Card>
          <Input
            valid={false}
            errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
            maxWidthError={100}
            placeholder="Text Field"
            size="sm"
            required
            mainColor={mainColor}
          />
        </Card>
        <CodeBlock code={ERROR_INPUT_EXAMPLE} />
      </Section>
      <ApiPropsTable dataSource={inputDataPage} columns={exampleApiCol} />
    </MainSection>
  );
};

export default TslPage;
