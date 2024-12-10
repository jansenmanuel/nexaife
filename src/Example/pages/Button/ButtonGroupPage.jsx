import { useSelector } from "react-redux";
import {
  ButtonGroup,
  nexIcon,
} from "../../../Component";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  BUTTON_GROUP_PROPS_EXAMPLE,
  DIRECTION_BUTTON_GROUP_EXAMPLE, ICON_BUTTON_GROUP_EXAMPLE,
  IMPORT_BUTTON_GROUP_EXAMPLE,
  SIZES_BUTTON_GROUP_EXAMPLE,
  USAGE_BUTTON_GROUP_EXAMPLE,
} from "../../data/buttonDataPage";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import {exampleApiCol} from "../../config";

const ButtonGroupPage = () => {
  const { mainColor } = useSelector((state) => state.properties);
  return (
    <MainSection>
      <HeaderSection
        title={"Button Group"}
        subtitle={"Button group shows buttons next to each other."}
      />
      <ImportSection code={IMPORT_BUTTON_GROUP_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_BUTTON_GROUP_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.map((size) => (
            <span style={{ marginRight: 2 }}>
              <ButtonGroup
                mainColor={mainColor}
                secondaryColor={"#FFFFFF"}
                size={size}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_BUTTON_GROUP_EXAMPLE} />
      </Section>
      <Section title={"Direction"}>
        <Card>
          <div style={{ display: "flex", gap: 100 }}>
            {["horizontal", "vertical"].map((direction) => (
              <ButtonGroup
                mainColor={mainColor}
                secondaryColor={"#FFFFFF"}
                direction={direction}
              />
            ))}
          </div>
        </Card>
        <CodeBlock code={DIRECTION_BUTTON_GROUP_EXAMPLE} />
      </Section>
      <Section title={"Button Group Icon"}>
        <Card>
          <ButtonGroup
            iconConfirm={<nexIcon.NcInfo size={14} color={"white"} />}
            iconCancel={<nexIcon.NcInfo size={14} color={mainColor} />}
            mainColor={mainColor}
            secondaryColor={"#FFFFFF"}
            size={"xs"}
          />
        </Card>
        <CodeBlock code={ICON_BUTTON_GROUP_EXAMPLE} />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={BUTTON_GROUP_PROPS_EXAMPLE}/>
    </MainSection>
  );
};

export default ButtonGroupPage;
