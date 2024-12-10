// Utils and Libraries
import React, { useState } from "react";
import style from "./RatePage.module.css";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import { exampleApiCol } from "../../config";

// Components
import Rating from "../../../Component/Molecules/Rating/Rating";
import { Card, InputNumber } from "antd";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import {
  CONTROLLED_RATING_EXAMPLE,
  IMPORT_RATING_EXAMPLE,
  RATING_PROPS_EXAMPLE,
  SIZES_RATING_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";

const RatePage = () => {
  const [valueInput, setValueInput] = useState(3);

  const onChangeInput = (e) => {
    setValueInput(e);
  };

  return (
    <MainSection>
      <HeaderSection title={"Rating Star"} subtitle={"Rating with star icon"} />
      <ImportSection title={"Import"} code={IMPORT_RATING_EXAMPLE} />
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter(
            (size) => size !== "xs" && size !== "xl" && size !== "xxl",
          ).map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <Rating size={size} />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_RATING_EXAMPLE} />
      </Section>
      <Section title={"Controlled"}>
        <Card>
          <div style={{ display: "flex" }}>
            <Rating size={"Sm"} value={valueInput} disabled />
            <InputNumber
              onChange={onChangeInput}
              value={valueInput}
              className={style.ValueControlled}
            />
          </div>
        </Card>
        <CodeBlock code={CONTROLLED_RATING_EXAMPLE} />
      </Section>
      <ApiPropsTable
        columns={exampleApiCol}
        dataSource={RATING_PROPS_EXAMPLE}
      />
    </MainSection>
  );
};

export default RatePage;
