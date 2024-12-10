import _ from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Select as SELECT_V_2_2_3 } from "../../../Component";
import { selectOption } from "../../../Component/Services/utils";
import {
  IMPORT_SELECT_EXAMPLE,
  SELECT_DATA_EXAMPLE,
  USAGE_SELECT_EXAMPLE,
} from "../../data";
import { exampleApiCol } from "../../config";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { ERROR_MESSAGES } from "../../Constant/generalConstant";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";

const TSLSelect = () => {
  const [options, setOptions] = useState([]);
  const [optionValue, setOptionValue] = useState([]);
  const { mainColor } = useSelector((state) => state.properties);
  const [valueSelect, setValueSelect] = useState("4");
  const [valid, setValid] = useState(null);

  const handleSearch = (evt) => {
    let { value } = evt.target;
    let resultFind = _.filter(optionValue, (el) => {
      if (el.value.toLowerCase().includes(value.toLowerCase())) {
        return el.value;
      }
    });
    setOptions(selectOption([], resultFind, "value"));
  };

  const handleClick = (evt) => {
    if (evt == 1) {
      setValid(false);
    } else {
      setValid(null);
    }
    setValueSelect(evt);
  };

  const setValueOption = () => {
    const option = [
      { id: "1", value: "Apel" },
      { id: "2", value: "Jambu" },
      { id: "3", value: "Jeruk" },
      { id: "4", value: "Mangga" },
      { id: "5", value: "Durian" },
      { id: "6", value: "Anggur" },
      { id: "7", value: "Melon" },
      { id: "8", value: "Markisa" },
      { id: "9", value: "Semangka" },
      { id: "10", value: "Salak" },
      { id: "11", value: "Pisang" },
    ];
    setOptionValue(option);
    setOptions(selectOption(options, option, "value"));
  };

  useEffect(() => {
    setValueOption();
  }, []);
  return (
    <MainSection>
      <HeaderSection
        title="Select"
        subtitle="A dropdown menu for displaying choices with or without search"
      />
      <ImportSection code={IMPORT_SELECT_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_SELECT_EXAMPLE} />
      </Section>
      <div>
        <h1>Select Normal</h1>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Sm</label>
          </Col>
          <Col width={4}>
            <div style={{ display: "flex", gap: 4 }}>
              <SELECT_V_2_2_3
                width={200}
                isOptional
                disabled={true}
                value={valueSelect}
                onChange={handleClick}
                option={options}
                mainColors={mainColor}
                size={"sm"}
              />
              <SELECT_V_2_2_3
                width={400}
                isOptional
                disabled={true}
                value={valueSelect}
                onChange={handleClick}
                option={options}
                mainColors={mainColor}
                size={"sm"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Md</label>
          </Col>
          <Col width={4}>
            <div style={{ display: "flex", gap: 3 }}>
              <SELECT_V_2_2_3
                id={"23123123"}
                width={400}
                placeholder={"121"}
                placeholderSearch={'Cari bro'}
                textlabel="Label"
                handleSearch={(e) => handleSearch(e)}
                option={options}
                search={true}
                mainColors={mainColor}
                size={"md"}
                valid={false}
                maxWidthError={200}
                errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
              />
              <SELECT_V_2_2_3
                id={"345345345"}
                width={400}
                isOptional
                textlabel="Label"
                handleSearch={(e) => handleSearch(e)}
                option={options}
                search={true}
                mainColors={mainColor}
                size={"md"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Lg</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3
              isOptional
              valid={valid}
              onChange={(evt) => handleClick(evt)}
              value={valueSelect}
              errorMessage={"Salah bos"}
              textlabel="Select Lg"
              option={options}
              mainColors={mainColor}
              size={"lg"}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Xl</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3
              option={options}
              mainColors={mainColor}
              size={"xl"}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Xxl</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3
              option={options}
              mainColors={mainColor}
              size={"xxl"}
            />
          </Col>
        </Row>
        <h1>Select Disabled</h1>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Sm</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3
              disabled
              option={options}
              mainColors={mainColor}
              size={"sm"}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Md</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3
              disabled
              handleSearch={(e) => handleSearch(e)}
              option={options}
              search={true}
              mainColors={mainColor}
              size={"md"}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Lg</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3 disabled mainColors={mainColor} size={"lg"} />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Xl</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3 disabled mainColors={mainColor} size={"xl"} />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }} width={2}>
            <label>Select Xxl</label>
          </Col>
          <Col width={4}>
            <SELECT_V_2_2_3 disabled mainColors={mainColor} size={"xxl"} />
          </Col>
        </Row>
        <ApiPropsTable
          columns={exampleApiCol}
          dataSource={SELECT_DATA_EXAMPLE}
        />
      </div>
    </MainSection>
  );
};

export default TSLSelect;
