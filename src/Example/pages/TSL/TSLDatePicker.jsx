import moment from "moment";
import React, { useState } from "react";
import { DatePickers } from "../../../Component";
import _ from "lodash";
import { useSelector } from "react-redux";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";
import {
  datepickerDataPage,
  IMPORT_DATEPICKER_EXAMPLE,
  RANGE_DATEPICKER_EXAMPLE,
  SIZES_DATEPICKER_EXAMPLE,
  USAGE_DATEPICKER_EXAMPLE,
} from "../../data";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import { SIZES_DEFAULT } from "../../Constant/generalConstant";

const TSLDatePicker = () => {
  const { mainColor } = useSelector((state) => state.properties);
  const [dateRange, setDateRange] = useState({
    startDate: moment(new Date()).toISOString(),
    initDate: moment(new Date()).toISOString(),
    endDate: moment(new Date()).toISOString(),
    previousStartDate: moment(new Date()).toISOString(),
    previousEndDate: moment(new Date()).toISOString(),
  });

  const [dateOne, setDateOne] = useState({
    dateValue: moment(new Date()).toISOString(),
    initDateValue: moment(new Date()).toISOString(),
    previousDateValue: moment(new Date()).toISOString(),
  });

  const [date, setDate] = useState(null);

  const onChangeDateWithNull = (val) => {
    setDate(moment(val?._d).toISOString());
  };

  const onChangeDate = (value) => {
    setDateOne((prevsValue) => {
      return {
        ...prevsValue,
        dateValue: moment(value?._d).toISOString(),
        initDateValue: moment(value?._d).toISOString(),
      };
    });
  };

  const onChangeRange = (value) => {
    _.map(value, (el, index) => {
      setDateRange((prevsValue) => {
        if (index === 0) {
          return {
            ...prevsValue,
            startDate: moment(el._d).toISOString(),
            initDate: moment(el._d).toISOString(),
          };
        } else if (index === 1) {
          return {
            ...prevsValue,
            endDate: moment(el._d).toISOString(),
          };
        }
      });
    });
  };

  const onConfirmDateOne = () => {
    setDateOne((prevsValue) => {
      return {
        ...prevsValue,
        previousDateValue: dateOne.dateValue,
        initDateValue: undefined,
      };
    });
  };

  const onCancelDateOne = () => {
    setDateOne((prevsValue) => {
      return {
        ...prevsValue,
        dateValue: dateOne.previousDateValue,
        initDateValue: undefined,
      };
    });
  };

  const onOpenDateOne = () => {
    setDateOne((prevsValue) => {
      return {
        ...prevsValue,
        initDateValue: undefined,
      };
    });
  };

  const onConfirmDateRange = () => {
    setDateRange((prevsValue) => {
      return {
        ...prevsValue,
        previousStartDate: dateRange.startDate,
        previousEndDate: dateRange.endDate,
        initDate: undefined,
      };
    });
  };

  const onCancelDateRange = () => {
    setDateRange((prevsValue) => {
      return {
        ...prevsValue,
        startDate: dateRange.previousStartDate,
        endDate: dateRange.previousEndDate,
        initDate: undefined,
      };
    });
  };

  const onOpenDateRange = () => {
    setDateRange((prevsValue) => {
      return {
        ...prevsValue,
        initDate: undefined,
      };
    });
  };

  return (
    <MainSection>
      <HeaderSection
        title={"DatePicker"}
        subtitle={
          "A picker to choose date. This picker consist datepicker with a value and range picker between the date"
        }
      />
      <ImportSection code={IMPORT_DATEPICKER_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_DATEPICKER_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Card>
          {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
            <span key={key} style={{ marginRight: 4 }}>
              <DatePickers
                id={size}
                onConfirm={onConfirmDateOne}
                onCancel={onCancelDateOne}
                onOpen={onOpenDateOne}
                mainColor={mainColor}
                size={size}
                onChangeDate={onChangeDate}
                startDate={dateOne.dateValue}
              />
            </span>
          ))}
        </Card>
        <CodeBlock code={SIZES_DATEPICKER_EXAMPLE} />
      </Section>
      <Section title={"Date Picker Range"}>
        <Card>
          <DatePickers
            id={'picker-custom'}
            onConfirm={onConfirmDateRange}
            onCancel={onCancelDateRange}
            onOpen={onOpenDateRange}
            type={"range"}
            mainColor={mainColor}
            size={"sm"}
            onChangeDate={onChangeRange}
            startDate={dateRange?.startDate}
            endDate={dateRange?.endDate}
          />
        </Card>
        <CodeBlock code={RANGE_DATEPICKER_EXAMPLE} />
      </Section>
      <ApiPropsTable
        title={"Date Picker"}
        dataSource={datepickerDataPage}
        columns={exampleApiCol}
      />
    </MainSection>
  );
};

export default TSLDatePicker;
