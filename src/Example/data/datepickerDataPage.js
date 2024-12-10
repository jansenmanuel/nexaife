import {DatePickers} from "../../Component";
import React from "react";

export const IMPORT_DATEPICKER_EXAMPLE = "import {DatePickers} from 'nexcomponent-ui';"

export const USAGE_DATEPICKER_EXAMPLE = `
  <DatePickers
    onConfirm={onConfirmDateOne}
    onCancel={onCancelDateOne}
    onOpen={onOpenDateOne}
    mainColor={mainColor}
    size="sm"
    onChangeDate={onChangeDate}
    startDate={dateOne.dateValue}
  />
`;

export const SIZES_DATEPICKER_EXAMPLE = `{SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
  <span key={key} style={{ marginRight: 4 }}>
    <DatePickers
      onConfirm={onConfirmDateOne}
      onCancel={onCancelDateOne}
      onOpen={onOpenDateOne}
      mainColor={mainColor}
      size={size}
      onChangeDate={onChangeDate}
      startDate={dateOne.dateValue}
    />
  </span>
))}`

export const RANGE_DATEPICKER_EXAMPLE = `
<DatePickers
  onConfirm={onConfirmDateRange}
  onCancel={onCancelDateRange}
  onOpen={onOpenDateRange}
  type="range"
  mainColor={mainColor}
  size="sm"
  onChangeDate={onChangeRange}
  startDate={dateRange?.startDate}
  endDate={dateRange?.endDate}
/>
`

export const datepickerDataPage = [
  {
    key: "1",
    name: "disabled",
    desc: "Controls the disable of the input.",
    type: "bool",
    default: "false",
    example: "",
  },
  {
    key: "2",
    name: "size",
    desc: "Specifies the size of multiple select.",
    type: "oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])",
    default: "'sm'",
    example: "md",
  },
  {
    key: "3",
    name: "mainColor",
    desc: "Props for changing the main color.",
    type: "string",
    default: '""',
    example: "#FFF",
  },
  {
    key: "4",
    name: "type",
    desc: "set type date picker between default or range picker",
    type: "not_range | range",
    default: 'not_range',
    example: "not_range",
  },
  {
    key: "5",
    name: "handleChange",
    desc: "Callback function that is called when there's change in input.",
    type: "func",
    default: "() => {}",
    example: "",
  },
  {
    key: "6",
    name: "startDate",
    desc: "set value to the input",
    type: "moment",
    default: "null",
    example: "moment('2015/01/01')",
  },
  {
    key: "7",
    name: "id",
    desc: "id for component.",
    type: "string",
    default: "''",
    example: "",
  },
  {
    key: "8",
    name: "onChangeDate",
    desc: "Callback function, can be executed when the selected time is changing",
    type: "function(date: moment, dateString: string)",
    default: '',
    example: "(date, dateString) => {}",
  },
  {
    key: "9",
    name: "onConfirm",
    desc: "callback function called when click confirm button",
    type: "function",
    default: "() => {}",
    example: "() => {}",
  },
  {
    key: "10",
    name: "onCancel",
    desc: "callback function called when click cancel button",
    type: "function",
    default: "() => {}",
    example: "() => {}"
  },
  {
    key: "11",
    name: "onOpen",
    desc: "callback function called when open datepicker",
    type: "function",
    default: "() => {}",
    example: "() => {}"
  },
  {
    key: "12",
    name: "placeholder",
    desc: "set placeholder to component",
    type: "string",
    default: null,
    example: "placeholder bouss"
  }
];
