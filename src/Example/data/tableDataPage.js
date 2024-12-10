export const tableDataPage = [
  {
    key: "1",
    name: "dataSource",
    desc: "data source for current page",
    default: "",
    type: "object[]",
    example: JSON.stringify([
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]),
  },
  {
    key: "2",
    name: "columns",
    desc: "set columns options object similar to `antd`(https://4x.ant.design/components/table/#Column)",
    type: "ColumnsType[]",
    default: "md",
    example: "sm",
  },
  {
    key: "3",
    name: "currentPage",
    desc: "set current page number",
    type: "number",
    default: "",
    example: "2",
  },
  {
    key: "4",
    name: "currentPageSize",
    desc: "set page size",
    type: "number",
    default: "",
    example: "1",
  },
  {
    key: "5",
    name: "loading",
    desc: "set loading",
    type: "boolean",
    default: "false",
    example: "true",
  },
  {
    key: "6",
    name: "onChangePage",
    desc: "callback function when change page",
    type: "(page: string) => void",
    default: "",
    example: "function(e) {console.log(e)}",
  },
  {
    key: "7",
    name: "onChangePageSize",
    desc: "callback function when change page size",
    type: "(size) => void",
    default: "",
    example: "(size) => console.log(`hit``)",
  },
  {
    key: "8",
    name: "onChangeSorter",
    desc: "callback function when there is changes",
    type: "(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter }) => void",
    default: "() => void",
    example:
      "(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter }) => console.log(pagination)",
  },
  {
    key: "9",
    name: "totalData",
    desc: "total data",
    type: "number",
    default: "",
    example: "100",
  },
  {
    key: "10",
    name: "pageSizeOptions",
    desc: "set options to page size",
    type: "string[]",
    default: "[10, 20, 50, 100]",
    example: "[100]",
  },
  {
    key: "11",
    name: "rowKey",
    desc: "Row's unique key, could be a string or function that returns a string",
    default: "key",
    type: "string | function(record): string",
    example: "id",
  },
  {
    key: "13",
    name: "rowSelection",
    desc: "Row selection config see https://4x.ant.design/components/table/#rowSelection",
    default: "",
    type: "object",
    example: "",
  },
  {
    key: "14",
    name: "placeholder",
    desc: "set placeholder input",
    default: "",
    type: "string",
    example: "-",
  },
];
