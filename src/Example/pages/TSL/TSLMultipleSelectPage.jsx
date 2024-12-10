// Utils or libraries
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { exampleApiCol } from "../../config";
import {
  CONTROLLED_MULTIPLE_SELECT_EXAMPLE,
  IMPORT_MULTIPLE_SELECT_EXAMPLE,
  multipleSelectData,
  SIZES_MULTIPLE_SELECT_EXAMPLE,
  USAGE_MULTIPLE_SELECT_EXAMPLE,
} from "../../data";
import { ERROR_MESSAGES } from "../../Constant/generalConstant";

// Components
import MULTIPLE_SELECT_2_0_3 from "../../../Component/Atomic/Selector/MultipleSelect/MultipleSelect";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { Button, Card } from "antd";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";

const selectedOptionsFetch = [
  {
    id: 1,
    value: "delectus aut autem",
    checked: true,
  },
];
const TSLMultipleSelectPage = () => {
  const options = [];
  const { mainColor } = useSelector((state) => state.properties);

  for (let i = 10; i < 15; i++) {
    const value = i.toString(36) + i;
    options.push({
      id: i,
      label: `Long Label: ${value}`,
      value,
    });
  }

  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(10);
  const [search, setSearch] = useState("");

  const [valueExample, setValueExample] = useState([]);

  const handleChangeFetch = (res, isAll) => {
    setValue(res);
  };

  const handleChangMSS = (response) => {
    setValueExample(response);
  };

  let arraySize = ["sm", "md", "lg", "xl", "xxl"];

  const handlePage = () => {
    setPage((e) => e + 10);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const filteredOptions = useMemo(
    () =>
      data.filter((option) =>
        option.value.toLowerCase().includes(search.toLowerCase()),
      ),
    [options, search],
  );

  const fetching = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${page}`,
      );
      const data = await response.json();
      const mapper = data?.map((e) => {
        return {
          id: e.id,
          value: e.title,
          check: false,
        };
      });
      setData(mapper);
    } catch (error) {
      console.error("error fetching", error);
    } finally {
    }
  };

  useEffect(() => {
    fetching();
  }, [page]);

  return (
    <MainSection>
      <HeaderSection
        title={"Multiple Select"}
        subtitle={"A select with multiple checkbox options"}
      />
      <ImportSection code={IMPORT_MULTIPLE_SELECT_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_MULTIPLE_SELECT_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {_.map(arraySize, (el) => (
            <div style={{ marginBottom: 20 }}>
              <MULTIPLE_SELECT_2_0_3
                id={el}
                isAll={true}
                size={el}
                handleChange={handleChangMSS}
                count_data={options?.length}
                mainColors={mainColor}
                options={options}
                selectedValues={valueExample}
              />
            </div>
          ))}
        </Card>
        <CodeBlock code={SIZES_MULTIPLE_SELECT_EXAMPLE} />
      </Section>
      <Section title={"Controlled"}>
        <Button
          type="primary"
          onClick={() => {
            setValue(selectedOptionsFetch);
          }}
          size={"large"}
        >
          Push data
        </Button>
        <MULTIPLE_SELECT_2_0_3
          id={'multiple-select-dynamic-data'}
          textLabel={"Label"}
          isAll={true}
          handleChange={handleChangeFetch}
          count_data={data.length}
          mainColors={mainColor}
          options={filteredOptions}
          selectedValues={value}
          size={"md"}
          onBottomScroll={handlePage}
          handleSearch={handleSearch}
          valid={value.length > 0}
          errormessage={ERROR_MESSAGES.LONG_ERROR_MESSAGE}
          maxWidthError={200}
        />
        <CodeBlock code={CONTROLLED_MULTIPLE_SELECT_EXAMPLE} />
      </Section>
      <ApiPropsTable
        dataSource={multipleSelectData}
        columns={exampleApiCol}
      />
    </MainSection>
  );
};

export default TSLMultipleSelectPage;