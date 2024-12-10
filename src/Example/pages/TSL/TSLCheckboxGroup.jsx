import { useState } from "react";
import { useSelector } from "react-redux";
import { Div, Row } from "../../../Component";
import CheckboxGroupV1 from "../../../Component/Molecules/CheckboxGroup/CheckboxGroup";
import { BLACK_COLOR } from "../../../Component/Constant/colorConstant";
import { HeaderSection, ImportSection, MainSection, Section } from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";
import { IMPORT_CHECKBOX_GROUP_EXAMPLE, USAGE_CHECKBOX_GROUP_EXAMPLE } from "../../data/tslDataPage";

const TSLCheckboxGroup = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const [checkedOptions, setCheckedOptions] = useState([]); /// ini data yang mau di pake sebagai payload

  const checkboxes = [
    { value: "checkbox1", label: "One", checked: true, disabled: false },
    { value: "checkbox2", label: "Two", checked: false, disabled: false },
    { value: "checkbox3", label: "Three", checked: false, disabled: false },
    { value: "checkbox4", label: "Four", checked: false, disabled: false },
  ];
  const checkboxesDisabled = [
    { value: "checkbox1", label: "One", checked: true, disabled: false },
    { value: "checkbox2", label: "Two", checked: false, disabled: false },
    { value: "checkbox3", label: "Three", checked: false, disabled: false },
    { value: "checkbox4", label: "Four", checked: false, disabled: true },
  ];

  // gunakan function ini jika hanya ingin mendapatkan array of valuenya saja
  const handleCheckboxChange = (newCheckedOptions) => {
    setCheckedOptions(newCheckedOptions);
  };
  /// gunakan function ini jika ingin mendapatkan array of object keseluruhan nya
  const handleCheckboxChangeObject = (v) => {
    setCheckedOptions(
      checkboxes
        .filter((checkbox) => v.includes(checkbox.value))
        .map((checkbox) => ({
          value: checkbox.value,
          label: checkbox.label,
        }))
    );
  };

  return (
    <>
    <MainSection>
      <HeaderSection
        title={"Checkbox Group"}
        subtitle={"Checkbox with group"}
      />
      <ImportSection code={IMPORT_CHECKBOX_GROUP_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_CHECKBOX_GROUP_EXAMPLE} />
      </Section>
    </MainSection>
      {/* Vertical */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Vertical</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Sm</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Sm"
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Md</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Md"
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Lg</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Lg"
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Xl</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Xl"
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox XXl</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="XXl"
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
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Sm</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Sm"
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Md</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Md"
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Lg</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Lg"
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Xl</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Xl"
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox XXl</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxes}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="XXl"
            />
          </div>
        </Row>
      </Div>
      {/* Vertical Disabled*/}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Vertical Disabled</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Sm</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Sm"
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Md</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Md"
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Lg</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Lg"
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Xl</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Xl"
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox XXl</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={false}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="XXl"
            />
          </div>
        </Row>
      </Div>
      {/* Horizonta; Disabled */}
      <Div style={{ marginBottom: "40px" }}>
        <h1>Horizontal Disabled</h1>
        {/* Sm */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Checkbox Sm</h1>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Sm"
            />
          </div>
        </Row>
        {/* Md */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Md</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Md"
            />
          </div>
        </Row>
        {/* Lg */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Lg</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Lg"
            />
          </div>
        </Row>
        {/* Xl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox Xl</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="Xl"
            />
          </div>
        </Row>
        {/* XXl */}
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
              }}
            >
              <h1>Checkbox XXl</h1>
            </div>
            <CheckboxGroupV1
              onChange={(v) => {
                handleCheckboxChangeObject(v);
              }}
              //    onChange={handleCheckboxChange}
              options={checkboxesDisabled}
              color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
              horizontal={true}
              labelInformation={"Information"}
              errorInformation={"Error Text"}
              size="XXl"
            />
          </div>
        </Row>
      </Div>
    </>
  );
};

export default TSLCheckboxGroup;
