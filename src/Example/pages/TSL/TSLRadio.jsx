import { useState } from "react";
import { ContainerFluid, Div, Row, Col } from "../../../Component";
import { Row as RowAntd } from "antd";
import RadioV1 from "../../../Component/Atomic/Radio/Radio/Radio";
import { useSelector } from "react-redux";
import { BLACK_COLOR } from "../../../Component/Constant/colorConstant";
import { HeaderSection, ImportSection, MainSection, Section } from "../../componentsExample/Section";
import { IMPORT_RADIO_EXAMPLE, USAGE_RADIO_EXAMPLE } from "../../data/tslDataPage";
import CodeBlock from "../../componentsExample/CodeBlock";

const TSLRadio = () => {
  const { mainColor } = useSelector((state) => state.properties);
  //   sm
  const [valueSmall, setValueSmall] = useState("labeltext");
  const [checkSmall, setCheckedSmall] = useState(false);
  //   md
  const [valueMiddle, setValueMiddle] = useState("labeltext");
  const [checkMiddle, setCheckedMiddle] = useState(false);
  //   lg
  const [valueLarge, setValueLarge] = useState("labeltext");
  const [checkLarge, setCheckedLarge] = useState(false);
  //   xl
  const [valueXtraLarge, setValueXtraLarge] = useState("labeltext");
  const [checkXtraLarge, setCheckedXtraLarge] = useState(false);
  //   xxl
  const [valueXtraXtraLarge, setValueXtraXtraLarge] = useState("labeltext");
  const [checkXtraXtraLarge, setCheckedXtraXtraLarge] = useState(false);

  return (
    <>
      <MainSection>
        <HeaderSection title="Radio" subtitle="Radio" />
        <ImportSection title="Import" code={IMPORT_RADIO_EXAMPLE} />
        <Section title="Usage">
          <CodeBlock code={USAGE_RADIO_EXAMPLE} />
        </Section>
      </MainSection>
      <ContainerFluid>
        <Row>
          <Col>
            {/* Sm */}
            <h1>Radio Size Sm</h1>
            <Div>
              <RowAntd justify="center" align="middle">
                <RadioV1
                  onChange={() => setCheckedSmall((prev) => !prev)}
                  size="Sm"
                  value={valueSmall}
                  check={checkSmall}
                  label={"Label Text"}
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
                <RadioV1
                  onChange={() => setCheckedSmall((prev) => !prev)}
                  size="Sm"
                  value={valueSmall}
                  check={checkSmall}
                  label={"Label Text Disabled"}
                  disabled
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
              </RowAntd>
            </Div>
          </Col>
        </Row>
        {/* Md */}
        <Row>
          <Col>
            <h1>Radio Size Md</h1>
            <Div>
              <RowAntd justify="center" align="middle">
                <RadioV1
                  onChange={() => setCheckedMiddle((prev) => !prev)}
                  size="Md"
                  value={valueMiddle}
                  check={checkMiddle}
                  label={"Label Text"}
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
                <RadioV1
                  onChange={() => setCheckedMiddle((prev) => !prev)}
                  size="Md"
                  value={valueMiddle}
                  check={checkMiddle}
                  label={"Label Text Disabled"}
                  disabled
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
              </RowAntd>
            </Div>
          </Col>
        </Row>
        {/* Lg */}
        <Row>
          <Col>
            <h1>Radio Size Lg</h1>
            <Div>
              <RowAntd justify="center" align="middle">
                <RadioV1
                  onChange={() => setCheckedLarge((prev) => !prev)}
                  size="Lg"
                  value={valueLarge}
                  check={checkLarge}
                  label={"Label Text"}
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
                <RadioV1
                  onChange={() => setCheckedLarge((prev) => !prev)}
                  size="Lg"
                  value={valueLarge}
                  check={checkLarge}
                  label={"Label Text Disabled"}
                  disabled
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
              </RowAntd>
            </Div>
          </Col>
        </Row>
        {/* Xl */}
        <Row>
          <Col>
            <h1>Radio Size Xl</h1>
            <Div>
              <RowAntd justify="center" align="middle">
                <RadioV1
                  onChange={() => setCheckedXtraLarge((prev) => !prev)}
                  size="Xl"
                  value={valueXtraLarge}
                  check={checkXtraLarge}
                  label={"Label Text"}
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
                 <RadioV1
                  onChange={() => setCheckedXtraLarge((prev) => !prev)}
                  size="Xl"
                  value={valueXtraLarge}
                  check={checkXtraLarge}
                  label={"Label Text Disabled"}
                  disabled
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
              </RowAntd>
            </Div>
          </Col>
        </Row>
        {/* XXl */}
        <Row>
          <Col>
            <h1>Radio Size 2Xl</h1>
            <Div>
              <RowAntd justify="center" align="middle">
                <RadioV1
                  onChange={() => setCheckedXtraXtraLarge((prev) => !prev)}
                  size="XXl"
                  value={valueXtraXtraLarge}
                  check={checkXtraXtraLarge}
                  label={"Label Text"}
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
                 <RadioV1
                  onChange={() => setCheckedXtraXtraLarge((prev) => !prev)}
                  size="XXl"
                  value={valueXtraXtraLarge}
                  check={checkXtraXtraLarge}
                  label={"Label Text Disabled"}
                  disabled
                  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
                />
              </RowAntd>
            </Div>
          </Col>
        </Row>
      </ContainerFluid>
    </>
  );
};

export default TSLRadio;
