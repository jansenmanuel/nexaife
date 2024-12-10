import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, ContainerFluid, Div, Row } from "../../../Component";
import InputPhoneNumber from "../../../Component/Molecules/InputPhoneNumber/InputPhoneNumber";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  IMPORT_INPUT_PHONE_NUMBER_EXAMPLE,
  SIZES_INPUT_PHONE_NUMBER_EXAMPLE,
  USAGE_INPUT_PHONE_NUMBER_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";
import { Card } from "antd";

function TSLPhoneNumberPage() {
  const { mainColor } = useSelector((state) => state.properties);

  const [inputVal, setInputVal] = useState("");
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onChangeInput = (e) => {
    console.log('value input', e?.value.target.value)
    console.log('code', e?.code)
  };

  const onChangeSelect = (e) => {
    console.log('value input', e?.value)
    console.log('code', e?.code)
  }

  const onChange = (e) => {};

  const onBlur = (e) => {
    let value = e.target.value;
    setInputVal(/[2-9]+[0-9]+/.exec(value)[0]);
  };

  return (
    <MainSection>
      <HeaderSection
        title={"Input Phone Number"}
        subtitle={"Input with phone number style"}
      />
      <ImportSection code={IMPORT_INPUT_PHONE_NUMBER_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_INPUT_PHONE_NUMBER_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <InputPhoneNumber
                mainColor={mainColor}
                onChange={onChange}
                size={size}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_INPUT_PHONE_NUMBER_EXAMPLE} />
      </Section>
      {/*<ContainerFluid>*/}
      {/*  <h1>Phone Number</h1>*/}
      {/*  <Row>*/}
      {/*    <Col>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Sm</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={3}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              mainColor={mainColor}*/}
      {/*              onChange={onChange}*/}
      {/*              size={"sm"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Md</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber mainColor={mainColor} size={"md"} />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Lg</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber mainColor={mainColor} size={"lg"} />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber mainColor={mainColor} size={"xl"} />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xxl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber mainColor={mainColor} size={"xxl"} />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  <h1>Phone Number Disable</h1>*/}
      {/*  <Row>*/}
      {/*    <Col>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Sm</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={3}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              disabled*/}
      {/*              mainColor={mainColor}*/}
      {/*              onChange={onChange}*/}
      {/*              size={"sm"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Md</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              disabled*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"md"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Lg</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              disabled*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"lg"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              disabled*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"xl"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xxl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              disabled*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"xxl"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  <h1>Phone Number Error</h1>*/}
      {/*  <Row>*/}
      {/*    <Col>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Sm</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={3}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              errormessage={"Error bos"}*/}
      {/*              mainColor={mainColor}*/}
      {/*              onChange={onChange}*/}
      {/*              size={"sm"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Md</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              errormessage={"Error bos"}*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"md"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Lg</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              errormessage={"Error bos"}*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"lg"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              errormessage={"Error bos"}*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"xl"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*      <Div>*/}
      {/*        <Row>*/}
      {/*          <Col*/}
      {/*            style={{*/}
      {/*              display: "flex",*/}
      {/*              position: "relative",*/}
      {/*              alignItems: "center",*/}
      {/*            }}*/}
      {/*            width={2}*/}
      {/*          >*/}
      {/*            <label>Phone Number Xxl</label>*/}
      {/*          </Col>*/}
      {/*          <Col width={2}>*/}
      {/*            <InputPhoneNumber*/}
      {/*              errormessage={"Error bos"}*/}
      {/*              mainColor={mainColor}*/}
      {/*              size={"xxl"}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        </Row>*/}
      {/*      </Div>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}

      {/*  /!* <ButtonGroupPage/> *!/*/}
      {/*  /!* <TslPage/> *!/*/}

      {/*  /!* <InputPhoneNumber*/}
      {/*    size={"sm"}*/}
      {/*    propsInput={{*/}
      {/*      placeholder: "Phone Number",*/}
      {/*      onBlur: (e) => onBlur(e),*/}
      {/*      value:inputVal,*/}
      {/*    }}*/}
      {/*    onChangeInput={(e) => onChange(e)}*/}
      {/*    onChangeSelect={(e) => onChange(e, "select")}*/}
      {/*  />*/}
      {/*  <InputPhoneNumber*/}
      {/*    propsInput={{*/}
      {/*      placeholder: "Phone Number",*/}
      {/*      onBlur: (e) => onBlur(e),*/}
      {/*      value:inputVal,*/}
      {/*    }}*/}
      {/*    onChangeInput={(e) => onChange(e)}*/}
      {/*    onChangeSelect={(e) => onChange(e, "select")}*/}
      {/*  />*/}
      {/*  <InputPhoneNumber*/}
      {/*    size={"lg"}*/}
      {/*    propsInput={{*/}
      {/*      placeholder: "Phone Number",*/}
      {/*      onBlur: (e) => onBlur(e),*/}
      {/*      value:inputVal,*/}
      {/*    }}*/}
      {/*    onChangeInput={(e) => onChange(e)}*/}
      {/*    onChangeSelect={(e) => onChange(e, "select")}*/}
      {/*  />*/}
      {/*  <InputPhoneNumber*/}
      {/*    size={"xl"}*/}
      {/*    propsInput={{*/}
      {/*      placeholder: "Phone Number",*/}
      {/*      onBlur: (e) => onBlur(e),*/}
      {/*      value:inputVal,*/}
      {/*    }}*/}
      {/*    onChangeInput={(e) => onChange(e)}*/}
      {/*    onChangeSelect={(e) => onChange(e, "select")}*/}
      {/*  /> *!/*/}
      {/*</ContainerFluid>*/}
    </MainSection>
  );
}

export default TSLPhoneNumberPage;
