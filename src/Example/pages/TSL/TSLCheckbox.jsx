import { Row as RowAntd } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Div } from "../../../Component";
import CheckBoxv1 from "../../../Component/Atomic/Checkbox/Checkbox/Checkbox";
import { BLACK_COLOR } from "../../../Component/Constant/colorConstant";
import { HeaderSection, ImportSection, MainSection, Section } from "../../componentsExample/Section";
import { IMPORT_CHECKBOX_EXAMPLE, USAGE_CHECKBOX_EXAMPLE } from "../../data/tslDataPage";
import CodeBlock from "../../componentsExample/CodeBlock";
const TSLCheckbox = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const [isCheckedSm, setIsCheckedSm] = useState(false);
  const [isCheckedMd, setIsCheckedMd] = useState(false);
  const [isCheckedLg, setIsCheckedLg] = useState(false);
  const [isCheckedXl, setIsCheckedXl] = useState(false);
  const [isCheckedXXl, setIsCheckedXXl] = useState(false);

  const handleCheckboxChange = (size) => {
    if (size?.toLowerCase() === "sm") {
      setIsCheckedSm(!isCheckedSm,);
    } else if (size?.toLowerCase() === "md") {
      setIsCheckedMd(!isCheckedMd);
    } else if (size?.toLowerCase() === "lg") {
      setIsCheckedLg(!isCheckedLg);
    } else if (size?.toLowerCase() === "xl") {
      setIsCheckedXl(!isCheckedXl);
    } else if (size?.toLowerCase() === "xxl") {
      setIsCheckedXXl(!isCheckedXXl);
    }
  };
  return (
    <>
      <MainSection>
        <HeaderSection
          title={"Checkbox"}
          subtitle={"Checkbox component"}
        />
        <ImportSection title={"Import"} code={IMPORT_CHECKBOX_EXAMPLE} />
        <Section title={"Usage"}>
          <CodeBlock code={USAGE_CHECKBOX_EXAMPLE} />
        </Section>
      </MainSection>
      <Div>
        {/* Sm */}
        <h1>Sm</h1>
        <RowAntd justify="center" align="middle">
          <CheckBoxv1
            label={"Test Label"}
            disabled={false}
            check={isCheckedSm}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            onChange={()=>handleCheckboxChange("Sm")}
            size="Sm"
          />
          <CheckBoxv1
            label={"Test Label"}
            disabled={true}
            check={isCheckedSm}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            size="Sm"
          />
        </RowAntd>
      </Div>
      <Div>
        {/* Md */}
        <h1>Md</h1>
        <RowAntd justify="center" align="middle">
          <CheckBoxv1
            label={"Test Label"}
            disabled={false}
            check={isCheckedMd}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            onChange={()=>handleCheckboxChange("Md")}
            size="Md"
          />
          <CheckBoxv1
            label={"Test Label"}
            disabled={true}
            check={isCheckedMd}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            size="Md"
          />
        </RowAntd>
      </Div>
      <Div>
        {/* Lg */}
        <h1>Lg</h1>
        <RowAntd justify="center" align="middle">
          <CheckBoxv1
            label={"Test Label"}
            disabled={false}
            check={isCheckedLg}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            onChange={()=>handleCheckboxChange("Lg")}
            size="Lg"
          />
          <CheckBoxv1
            label={"Test Label"}
            disabled={true}
            check={isCheckedLg}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            size="Lg"
          />
        </RowAntd>
      </Div>
      <Div>
        {/* Xl */}
        <h1>Xl</h1>
        <RowAntd justify="center" align="middle">
          <CheckBoxv1
            label={"Test Label"}
            disabled={false}
            check={isCheckedXl}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            onChange={()=>handleCheckboxChange("Xl")}
            size="Xl"
          />
          <CheckBoxv1
            label={"Test Label"}
            disabled={true}
            check={isCheckedXl}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            size="Xl"
          />
        </RowAntd>
      </Div>
      <Div>
        {/* XXl */}
        <h1>XXl</h1>
        <RowAntd justify="center" align="middle">
          <CheckBoxv1
            label={"Test Label"}
            disabled={false}
            check={isCheckedXXl}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            onChange={()=>handleCheckboxChange("XXl")}
            size="XXl"
          />
          <CheckBoxv1
            label={"Test Label"}
            disabled={true}
            check={isCheckedXXl}
            color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
            size="XXl"
          />
        </RowAntd>
      </Div>
    </>
  );
};

export default TSLCheckbox;
