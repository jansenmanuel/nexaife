import React from "react";
import InputButton_V_2_2_3 from "../../../Component/Molecules/InputButton/InputButton";
import { useSelector } from "react-redux";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  IMPORT_INPUT_BUTTON_EXAMPLE,
  INPUT_BUTTON_PROPS_EXAMPLE,
  SIZES_INPUT_BUTTON_EXAMPLE,
  USAGE_INPUT_BUTTON_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import { Card } from "antd";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const TSLInputButtonPage = () => {
  const { mainColor } = useSelector((state) => state.properties);

  return (
    <MainSection>
      <HeaderSection
        title={"Input Button"}
        subtitle={"Input text with button on side"}
      />
      <ImportSection title={"Import"} code={IMPORT_INPUT_BUTTON_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_INPUT_BUTTON_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <InputButton_V_2_2_3
                mainColor={mainColor}
                size={size}
                labelButton={"Button"}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_INPUT_BUTTON_EXAMPLE} />
      </Section>
      <ApiPropsTable
        columns={exampleApiCol}
        dataSource={INPUT_BUTTON_PROPS_EXAMPLE}
      />
    </MainSection>
  );
};

export default TSLInputButtonPage;
