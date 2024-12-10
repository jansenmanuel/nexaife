import { useState } from "react";
import { useSelector } from "react-redux";
import {ButtonGroup, Col, Row} from "../../../Component";
import InputSearch from "../../../Component/Molecules/SearchRecommendation/InputSearch";
import {HeaderSection, ImportSection, MainSection, Section} from "../../componentsExample/Section";
import {
  IMPORT_BUTTON_GROUP_EXAMPLE,
  SIZES_BUTTON_GROUP_EXAMPLE,
  USAGE_BUTTON_GROUP_EXAMPLE
} from "../../data/buttonDataPage";
import {
  IMPORT_SEARCH_EXAMPLE,
  INPUT_SEARCH_PROPS_EXAMPLE,
  inputDataPage,
  SIZES_SEARCH_EXAMPLE,
  USAGE_SEARCH_EXAMPLE
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import {Card} from "antd";
import {SIZES_DEFAULT} from "../../Constant/generalConstant";
import {exampleApiCol} from "../../config";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const SearchRecommendationPage = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const { mainColor } = useSelector((state) => state.properties);

  const onChange = (value) => {
    setValue(value);
    setOptions(onSearch(value));
  };

  const onSearch = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data) => {
    setValue(data);
  };

  const handleSelectRecommendation = (value) => {};

  return (
    <MainSection>
      <HeaderSection
        title={"Search Input"}
        subtitle={"Input with search recommendation"}
      />
      <ImportSection code={IMPORT_SEARCH_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_SEARCH_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size) => (
            <span style={{ marginRight: 2 }}>
             <InputSearch
               mainColor={mainColor}
               options={options}
               value={value}
               onSelect={onSelect}
               onChange={(e) => onChange(e)}
               size={size}
               onClear={()=>setValue("")}
             />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_SEARCH_EXAMPLE} />
      </Section>
      <ApiPropsTable dataSource={INPUT_SEARCH_PROPS_EXAMPLE} columns={exampleApiCol} />
    </MainSection>
  );
};

export default SearchRecommendationPage;
