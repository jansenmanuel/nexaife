import React from "react";
import { Table } from "antd";

const data = [
  {
    key: "1",
    name: "id",
    desc: "Given id to the component",
    default: "-",
    type: "string | number",
    example: "2",
  },
  {
    key: "2",
    name: "loading",
    desc: "loading state component",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "3",
    name: "open",
    desc: "state to open the modal",
    default: "false",
    type: "boolean",
    example: "true",
  },
  {
    key: "4",
    name: "items",
    desc: "list items on checkbox left panel",
    default: "[]",
    type: "Location[]",
    example: JSON.stringify({
      id: "2",
      name: "Bali",
      status: 1,
      items: [
        {
          id: "12124",
          name: "Aceh Barat",
        },
      ],
    }),
  },
  {
    key: "5",
    name: "displayItems",
    desc: "list checked items on the right panel",
    default: "[]",
    type: "Location[]",
    example: JSON.stringify({
      id: "2",
      name: "Bali",
      status: 1,
      items: [
        {
          id: "12124",
          name: "Aceh Barat",
        },
      ],
    }),
  },
  {
    key: "6",
    name: "activeKey",
    desc: "set activekey for open and close accordion",
    default: "{}",
    type: "[key: number]: string[]",
    example:
      "{\n" +
      '  "0": [\n' +
      '    "1",\n' +
      '    "2"\n' +
      "  ],\n" +
      '  "1": [\n' +
      '    "12124"\n' +
      "  ],\n" +
      '  "2": [\n' +
      '    "12313"\n' +
      "  ]\n" +
      "}",
  },
  {
    key: "7",
    name: "inputValue",
    desc: "set value to search input",
    default: "",
    type: "string",
    example: "find something",
  },
  {
    key: "8",
    name: "onClear",
    desc: "Called when clear",
    default: "",
    type: "function",
    example: "() => {}",
  },
  {
    key: "9",
    name: "handleChangeCheck",
    desc: "called when checkbox on list check or uncheck",
    default: "() => {}",
    type: "function(items)",
    example: "true",
  },
  {
    key: "10",
    name: "handlePanel",
    desc: "called when panel is open or close",
    default: "() => {}",
    type: "function(panelKey, level)",
    example: "(k, lvl) => console.log(k, lvl)",
  },
  {
    key: "11",
    name: "handleOpenCloseDialog",
    desc: "called when dialog is close or open",
    type: "() => {}",
    default: "",
    example: "() => {}",
  },
  {
    key: "12",
    name: "handleChangeSearch",
    desc: "called when typing on search input",
    default: "() => {}",
    type: "function(string)",
    example: "(e) => console.log(e)",
  },
  {
    key: "13",
    name: "titleDialog",
    desc: "set title dialog",
    default: "Default Title",
    type: "string",
    example: "Title",
  },
  {
    key: "14",
    name: "choseLocationLabel",
    desc: "set label location on right side panel",
    default: "Choose a location",
    type: "string",
    example: "Choose a location",
  },
  {
    key: "15",
    name: "onSubmit",
    desc: "called when click submit button",
    default: "() => {}",
    type: "function()",
    example: "() => console.log('submit')",
  },
  {
    key: "16",
    name: "cancelLabel",
    desc: "set label cancel button",
    default: "Cancel",
    type: "string",
    example: "Cancel",
  },
  {
    key: "17",
    name: "submitLabel",
    desc: "set label submit button",
    default: "Apply",
    type: "string",
    example: "Apply",
  },
  {
    key: "18",
    name: "disableSubmit",
    desc: "disable state for submit button",
    default: "false",
    type: "boolean",
    example: "true",
  },
];

const columns = [
  {
    title: "Props Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Default",
    dataIndex: "default",
    key: "default",
  },
  {
    title: "Example",
    dataIndex: "example",
    key: "example",
  },
];

const RegionSelectorPropsApi = () => {
  return (
    <Table
      pagination={false}
      style={{
        marginTop: 40,
      }}
      dataSource={data}
      columns={columns}
    />
  );
};

export default RegionSelectorPropsApi;
