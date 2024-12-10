import React from "react";
// import  from '../../../Component/Atomic/Pin/Pin'
import { useSelector } from "react-redux";
import { Col, Div, Pin as PIN_V_2_2_3, Row } from "../../../Component";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  IMPORT_INPUT_PIN_EXAMPLE,
  INPUT_PIN_EXAMPLE_DATA,
  SIZES_INPUT_PIN,
  USAGE_INPUT_PIN_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import InputSearch from "../../../Component/Molecules/SearchRecommendation/InputSearch";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";
import { ERROR_STATE_INPUT_PIN } from "../../data/Input/inputPinData";

function PinPage() {
  const { mainColor } = useSelector((state) => state.properties);

  const onChangePin = (e, index) => {};

  const onCompletePin = (value, index) => {};

  return (
    <MainSection>
      <HeaderSection
        title={"Pin"}
        subtitle={
          "The Pin Component is typically used to capture a sequence of numerical or alphanumeric inputs, such as in PIN (Personal Identification Number) forms. This component is particularly useful for authentication processes, verification codes, or secure access inputs where users need to enter a specific number or code sequence."
        }
      />
      <ImportSection code={IMPORT_INPUT_PIN_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_INPUT_PIN_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size) => (
            <span style={{ marginRight: 2 }}>
              <PIN_V_2_2_3
                mainColor={mainColor}
                onChange={(e, i) => onChangePin(e, i)}
                size={size}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_INPUT_PIN} />
      </Section>
      <Section title={"Error State"}>
        <Card>
          <PIN_V_2_2_3
            mainColor={mainColor}
            onChange={(e, i) => onChangePin(e, i)}
            error
            errorMessage={"riptod"}
          />
        </Card>
        <CodeBlock code={ERROR_STATE_INPUT_PIN} />
      </Section>
      <ApiPropsTable
        columns={exampleApiCol}
        dataSource={INPUT_PIN_EXAMPLE_DATA}
      />
    </MainSection>
  );
}

export default PinPage;
