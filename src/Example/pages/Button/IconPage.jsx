import { useSelector } from "react-redux";
import { Button as ButtonV223, Col, ContainerFluid, Div, Row } from "../../../Component";
import NcInfo from "../../../Component/Asset/Icon/NcInfo";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";
import {
  BUTTON_DATA_EXAMPLE,
  IMPORT_BUTTON_ICON_EXAMPLE,
  USAGE_BUTTON_ICON_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";

const IconPage = () => {
  const { mainColor } = useSelector((state) => state.properties);
  return (
    <MainSection>
      <HeaderSection
        title={"Button Icon"}
        subtitle={"Button displayed with icon"}
      />
      <ImportSection code={IMPORT_BUTTON_ICON_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_BUTTON_ICON_EXAMPLE} />
      </Section>
      <ContainerFluid>
        <Row>
          <Col width={4}>
            <h1>Icon Xs</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                />
              </Row>
            </Div>
            <h1>Icon Sm</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                />
              </Row>
            </Div>
            <h1>Icon Md</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                />
              </Row>
            </Div>
            <h1>Icon Lg</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                />
              </Row>
            </Div>
            <h1>Icon Xl</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                />
              </Row>
            </Div>
            <h1>Icon Xxl</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                />
              </Row>
            </Div>
          </Col>
          <Col width={4}>
            <h1>Icon Xs</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xs"}
                  roundedIcon
                />
              </Row>
            </Div>
            <h1>Icon Sm</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={16} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"sm"}
                  roundedIcon
                />
              </Row>
            </Div>
            <h1>Icon Md</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={22} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  roundedIcon
                />
              </Row>
            </Div>
            <h1>Icon Lg</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={28} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"lg"}
                  roundedIcon
                />
              </Row>
            </Div>
            <h1>Icon Xl</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={36} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xl"}
                  roundedIcon
                />
              </Row>
            </Div>
            <h1>Icon Xxl</h1>
            <Div>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
              </Row>
              <Row style={{ gap: "20px", marginBottom: "10px" }}>
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"primary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={mainColor} />}
                  buttonType={"secondary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
                <ButtonV223
                  icon={<NcInfo size={40} color={"white"} />}
                  buttonType={"tertiary"}
                  mainColor={mainColor}
                  disabled
                  secondaryColor={"white"}
                  size={"xxl"}
                  roundedIcon
                />
              </Row>
            </Div>
          </Col>
        </Row>
      </ContainerFluid>
      <ApiPropsTable columns={exampleApiCol} dataSource={BUTTON_DATA_EXAMPLE}/>
    </MainSection>
  );
};

export default IconPage;
