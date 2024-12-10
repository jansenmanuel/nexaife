// Utils and Libraries
import React from "react";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import {
  COLORED_LEGEND_EXAMPLE,
  GROUP_LEGEND_EXAMPLE,
  IMPORT_LEGEND_EXAMPLE, ITEMS_LEGEND_EXAMPLE,
  LEGEND_DATA_PAGE,
  LEGEND_GROUP_DATA_PAGE,
  SIZES_LEGEND_EXAMPLE,
  USAGE_LEGEND_EXAMPLE,
} from "../../data";

// Components
import { LegendGroup as LEGEND_GROUP_V_1_0_0, Legend as LEGEND_V_1_0_0 } from "../../../Component";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const LegendPage = () => {

  return (
    <MainSection>
      <HeaderSection
        title={"Legend"}
        subtitle={
          "Visual guide in interfaces, particularly in data visualizations (like charts, maps, or graphs)"
        }
      />
      <ImportSection code={IMPORT_LEGEND_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_LEGEND_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter(
            (size) => size !== "xs" && size !== "xl" && size !== "xxl",
          ).map((size, key) => (
            <div style={{ marginTop: 20 }}>
              <LEGEND_V_1_0_0 size={size} title={"Caption Legend"} />
            </div>
          ))}
        </Card>
        <CodeBlock code={SIZES_LEGEND_EXAMPLE} />
      </Section>
      <Section title={"Group"}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <LEGEND_GROUP_V_1_0_0 items={ITEMS_LEGEND_EXAMPLE} size={"lg"} />
            <LEGEND_GROUP_V_1_0_0 items={ITEMS_LEGEND_EXAMPLE} size={"md"} />
            <LEGEND_GROUP_V_1_0_0 items={ITEMS_LEGEND_EXAMPLE} size={"sm"} />
          </div>
        </Card>
        <CodeBlock code={GROUP_LEGEND_EXAMPLE} />
      </Section>
      <Section title={"Colored"}>
        <Card>
          <LEGEND_V_1_0_0
            color={"#0020f6"}
            style={{ marginBottom: 20 }}
            title={"Caption Legend"}
          />
          <LEGEND_GROUP_V_1_0_0 items={ITEMS_LEGEND_EXAMPLE} />
        </Card>
        <CodeBlock code={COLORED_LEGEND_EXAMPLE} />
      </Section>
      <ApiPropsTable
        title={"Legend"}
        columns={exampleApiCol}
        dataSource={LEGEND_DATA_PAGE}
      />
      <ApiPropsTable
        title={"Group"}
        columns={exampleApiCol}
        dataSource={LEGEND_GROUP_DATA_PAGE}
      />
    </MainSection>
  );
};

export default LegendPage;
