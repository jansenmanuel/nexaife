import React from "react";
import { Badge as BADGE_V_2_0_2 } from "../../../Component";
import NcCheck from "../../../Component/Asset/Icon/NcCheck";
import styled from "./BadgePage.module.css";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  API_PROPS_BADGE_EXAMPLE,
  IMPORT_BADGE_EXAMPLE,
  SIZES_BADGE_EXAMPLE,
  TYPES_BADGE,
  TYPES_BADGE_EXAMPLE,
  USAGE_BADGE_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const STYLE_STRING = `Record<SemanticDOM, CSSProperties>`;

const BadgePage = () => {
  return (
    <MainSection>
      <HeaderSection
        title={"Badge"}
        subtitle={
          "Badges are used to inform the user of the status of specific data."
        }
      />
      <ImportSection code={IMPORT_BADGE_EXAMPLE} />
      <Section title={"Usage"}>
        <Card>
          <BADGE_V_2_0_2 type={"Pill"} content={"99+"} />
        </Card>
        <CodeBlock code={USAGE_BADGE_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          <div style={{ display: "flex", gap: 40 }}>
            {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
              <span key={key}>
                <BADGE_V_2_0_2 size={size} type={"Pill"} content={"99"} />
              </span>
            ))}
          </div>
        </Card>
        <CodeBlock code={SIZES_BADGE_EXAMPLE} />
      </Section>
      <Section title={"Type"}>
        <Card>
          <div style={{ display: "flex", gap: 40 }}>
            {TYPES_BADGE.map((type, key) => (
              <span key={key}>
                <BADGE_V_2_0_2
                  size={"Md"}
                  type={type.type}
                  content={type.content}
                />
              </span>
            ))}
          </div>
        </Card>
        <CodeBlock code={TYPES_BADGE_EXAMPLE} />
      </Section>
      <ApiPropsTable
        columns={exampleApiCol}
        dataSource={API_PROPS_BADGE_EXAMPLE}
      />
    </MainSection>
  );
};

export default BadgePage;
