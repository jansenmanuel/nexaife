import React, { useState } from "react";
import { Slider as SLIDER_V_2_0_1 } from "../../../Component";
import styled from "./SliderPage.module.css";
import { formatTimeFromSeconds } from "../../../Component/Utils/Time/SecondFormatter";
import { Card, InputNumber, Typography } from "antd";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  API_PROPS_SLIDER,
  IMPORT_SLIDER_EXAMPLE,
  USAGE_SLIDER_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const SliderPage = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <MainSection>
      <HeaderSection
        title={"Slider"}
        subtitle={
          "A Slider component for displaying current value and intervals in range."
        }
      />
      <ImportSection code={IMPORT_SLIDER_EXAMPLE} />
      <Section title={"Usage"}>
        <Card>
          <SLIDER_V_2_0_1 color={"rgb(255,132,116)"} />
        </Card>
        <CodeBlock code={USAGE_SLIDER_EXAMPLE} />
      </Section>
      <Section title={"Controlled"}>
        <Card>
          <h5>Controlled</h5>
          <div className={styled.Wrapper}>
            <p>{formatTimeFromSeconds(inputValue)}</p>
            <SLIDER_V_2_0_1
              tooltip={{ formatter: (value) => formatTimeFromSeconds(value) }}
              min={0}
              max={180}
              value={inputValue}
              onChange={onChange}
            />
            <p>{formatTimeFromSeconds(180)}</p>
          </div>
          <InputNumber
            min={0}
            max={180}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Card>
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={API_PROPS_SLIDER} />
    </MainSection>
  );
};

export default SliderPage;
