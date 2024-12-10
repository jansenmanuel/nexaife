// Components
import { Button, Col, ContainerFluid, Div, Row } from "../../../Component";
import NcArrowRight from "../../../Component/Asset/Icon/NcArrowRight";
import NcFilter from "../../../Component/Asset/Icon/NcFilter";
import NcInfo from "../../../Component/Asset/Icon/NcInfo";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";

// Utils or Libraries
import { useSelector } from "react-redux";
import {
  BUTTON_DATA_EXAMPLE,
  IMPORT_BUTTON_EXAMPLE,
  USAGE_BUTTON_EXAMPLE,
} from "../../data";
import { exampleApiCol } from "../../config";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { useTranslation } from "react-i18next";

const ButtonPage = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const { t, i18n } = useTranslation();
  return (
    <MainSection>
      <HeaderSection
        title={"Button"}
        subtitle={
          "Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation."
        }
      />
      <ImportSection title={"Import"} code={IMPORT_BUTTON_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_BUTTON_EXAMPLE} />
      </Section>  
      <ContainerFluid>
        <Row>
          <Col>
            <h1>Button Size Xs</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xs"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xs"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Sm</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"sm"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"sm"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Md</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Lg</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                    
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"lg"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"lg"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Xl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xl"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xl"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Xxl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xxl"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    size={"xxl"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Button Size Icon Xs</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    // prefixIcon={<NcInfo size={"0.63vw"} color={"white"} />}
                    prefixIcon={<NcInfo size={16} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={mainColor} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    size={"xs"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={mainColor} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={"white"} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={mainColor} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                    // badge
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={"white"} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={mainColor} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={"white"} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={16} color={"white"} />}
                    // prefixIcon={<NcInfo size={"0.63vw"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Icon Sm</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    size={"sm"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                    // badge
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"18px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Icon Md</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={"white"} />}
                    buttonType={"link"}
                    // badge
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo color={mainColor} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Icon Lg</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    size={"lg"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                    // badge
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"26px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Icon Xl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    size={"xl"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                    // badge
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"32px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Icon Xxl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    size={"xxl"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                    // badge
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    prefixIcon={<NcInfo size={"40px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
              </Row>
            </Div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Button Size Xs</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={"white"} />
                      // <NcArrowRight size={"0.63vw"} color={"white"} />
                    }
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={mainColor} />
                      // <NcArrowRight size={"0.63vw"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={mainColor} />
                      // <NcArrowRight size={"0.63vw"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={mainColor} />
                      // <NcArrowRight size={"0.63vw"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={"white"} />
                      // <NcArrowRight size={"0.63vw"} color={"white"} />
                    }
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={mainColor} />
                      // <NcArrowRight size={"0.63vw"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={"white"} />
                      // <NcArrowRight size={"0.63vw"} color={"white"} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"16px"} color={"white"} />
                      // <NcArrowRight size={"0.63vw"} color={"white"} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xs"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Sm</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"18px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"18px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"18px"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"18px"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"18px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"18px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"18px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"18px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"sm"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Md</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={mainColor} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={mainColor} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={mainColor} />}
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Lg</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"22px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"22px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"22px"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"22px"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"22px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"22px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"22px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"22px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"lg"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Xl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"28px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"28px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"28px"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"28px"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"28px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"28px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"28px"} color={"white"} />}
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"28px"} color={"white"} />}
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xl"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Size Xxl</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"36px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
              </Row>
              <Row>
                <Col width={3}>
                  <Button
                    suffixIcon={<NcArrowRight size={"36px"} color={"white"} />}
                    buttonType={"primary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"secondary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"tertiary"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
                <Col width={3}>
                  <Button
                    suffixIcon={
                      <NcArrowRight size={"36px"} color={mainColor} />
                    }
                    buttonType={"link"}
                    mainColor={mainColor}
                    disabled
                    secondaryColor={"white"}
                    label="Button"
                    size={"xxl"}
                  />
                </Col>
              </Row>
            </Div>
            <h1>Button Filter Badge</h1>
            <Div>
              <Row>
                <Col width={3}>
                  <h2>Button Badge Xs</h2>
                  <br />
                  <Button
                    size={"xs"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="16px" color={"white"} />}
                  />
                </Col>
                <Col width={3}>
                  <h2>Button Badge Sm</h2>
                  <br />
                  <Button
                    size={"sm"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="18px" color={"white"} />}
                  />
                </Col>
                <Col width={3}>
                  <h2>Button Badge Md</h2>
                  <br />
                  <Button
                    size={"md"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="20px" color={"white"} />}
                  />
                </Col>
                <Col width={3}>
                  <h2>Button Badge Lg</h2>
                  <br />
                  <Button
                    size={"lg"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="26px" color={"white"} />}
                  />
                </Col>
                <Col width={3}>
                  <h2>Button Badge Xl</h2>
                  <br />
                  <Button
                    size={"xl"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="32px" color={"white"} />}
                  />
                </Col>
                <Col width={3}>
                  <h2>Button Badge Xxl</h2>
                  <br />
                  <Button
                    size={"xxl"}
                    buttonType={"primary"}
                    badge
                    label={"Button"}
                    prefixIcon={<NcFilter size="40px" color={"white"} />}
                  />
                </Col>
              </Row>
            </Div>
          </Col>
        </Row>
      </ContainerFluid>
      <ApiPropsTable columns={exampleApiCol} dataSource={BUTTON_DATA_EXAMPLE} />
    </MainSection>
  );
};

export default ButtonPage;
