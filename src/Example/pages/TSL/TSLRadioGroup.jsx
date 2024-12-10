import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, ContainerFluid, Div, Row } from "../../../Component";
import RadioGroupV1 from "../../../Component/Molecules/RadioGroup/RadioGroup";
import { BLACK_COLOR } from "../../../Component/Constant/colorConstant";
import { HeaderSection, ImportSection, MainSection, Section } from "../../componentsExample/Section";
import { IMPORT_RADIO_EXAMPLE_GROUP, USAGE_RADIO_EXAMPLE_GROUP } from "../../data/tslDataPage";
import CodeBlock from "../../componentsExample/CodeBlock";

const TSLRadioGroup = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const [data, setData] = useState({}); // use data for hit api purpose
  const optionss = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const optionsDisabled = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3", disabled: true },
  ];
  return (
    <>
      <MainSection>
        <HeaderSection title="Radio Group" subtitle={"Radio Group"}/>
        <ImportSection title={"Import"} code={IMPORT_RADIO_EXAMPLE_GROUP} />
        <Section>
          <CodeBlock code={USAGE_RADIO_EXAMPLE_GROUP} />
        </Section>
      </MainSection>
      {/* Vertical */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Vertical</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Sm</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Sm"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              //   defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Md</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Md"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Lg</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Lg"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Xl</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Xl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group XXl</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="XXl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
      </Div>
      {/* Horizontal */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Horizontal</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Sm</h1>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Sm"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Md</h1>
            </div>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Md"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Lg</h1>
            </div>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Lg"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Xl</h1>
            </div>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="Xl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group XXl</h1>
            </div>
            <RadioGroupV1
              options={optionss}
              onChange={(v) => setData({ value: v })}
              size="XXl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
      </Div>
      {/* Vertical Disabled */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Vertical Disabled</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Sm</h1>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Sm"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Md</h1>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Md"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Lg</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Lg"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Xl</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Xl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group XXl</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="XXl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
      </Div>
      {/* Horizontal Disabled */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Horizontal Disabled</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Sm</h1>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Sm"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>Radio Group Md</h1>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Md"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Lg</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Lg"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group Xl</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="Xl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Radio Group XXl</h1>
            </div>
            <RadioGroupV1
              options={optionsDisabled}
              onChange={(v) => setData({ value: v })}
              size="XXl"
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              defaultValue={"option1"}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              labelTitle={"Label Text"}
            />
          </div>
        </Row>
      </Div>
    </>
  );
};

export default TSLRadioGroup;
