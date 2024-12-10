import React, { useEffect, useState } from "react";
import TABLE_V_2_0_1 from "../../../Component/Molecules/Table_v2_0_1/Table";
import "./table-page-style.scss";
import { Divider, Table } from "antd";
import {buttonDataPage, tableDataPage} from "../../data";
import { exampleApiCol } from "../../config";
import HeaderPage from "../../componentsExample/HeaderPage";
import Title from "antd/lib/typography/Title";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";

const TablePage = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  const [loading, setLoading] = useState(false);
  const [dataFetch, setDataFetch] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      align: "right",
    },
    {
      title: "Address",
      dataIndex: "address",
      onFilter: (value, record) => record.address.startsWith(value),
      // filterSearch: true,
      // width: "40%",
    },
  ];
  const columnsFetch = [
    {
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "5",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "6",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "7",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "8",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "9",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "10",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "11",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "12",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "14",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "15",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "16",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "17",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      key: "18",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "19",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "20",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const fetchUsers = async (page, size) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${page}&per_page=${size}&delay=1`,
      );
      const json = await response.json();
      setDataFetch(json.data);
      setTotalData(json.total);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (page) => {
    fetchUsers(page, perPage);
    setCurrentPage(page);
  };

  const handleChangePageSize = (page, size) => {
    fetchUsers(page, size);
    setCurrentPage(page);
    setPerPage(size);
  };

  useEffect(() => {
    fetchUsers(1, perPage);
  }, []);

  return (
    <div className="table-page-container">
      <HeaderPage
        title={"Table"}
        subtitle={"A header with common actions and design elements built in."}
      />
      <Title level={4} aria-level={4}>
        Fetching
      </Title>
      <TABLE_V_2_0_1
        currentPage={currentPage}
        currentPageSize={perPage}
        loading={loading}
        onChangePage={(e) => {
          handleChangePage(e);
        }}
        onChangePageSize={(curr, size) => {
          handleChangePageSize(curr, size);
        }}
        onChangeSorter={() => {}}
        totalData={totalData}
        columns={columnsFetch} // v
        dataSource={dataFetch} // v
        pageSizeOptions={[10, 50, 100]}
        rowKey={"id"}
      />
      <br />
      <Title level={4} aria-level={4}>
        Sorting
      </Title>
      <TABLE_V_2_0_1
        currentPage={1}
        currentPageSize={10}
        loading={false}
        onChangePage={(e) => {
          console.log(e, "data");
        }}
        onChangePageSize={() => {}}
        onChangeSorter={() => {}}
        totalData={data?.length}
        columns={columns}
        dataSource={data}
        pageSizeOptions={[10, 50, 100]}
        pageSize={data.length}
      />
      <br />
      <Title level={4} aria-level={4}>
        Checkbox
      </Title>
      <TABLE_V_2_0_1
        currentPage={1}
        currentPageSize={10}
        loading={false}
        onChangePage={() => {}}
        onChangePageSize={() => {}}
        onChangeSorter={() => {}}
        totalData={data?.length}
        columns={columns}
        dataSource={data}
        pageSizeOptions={[10, 50, 100]}
        pageSize={data.length}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
      <ApiPropsTable dataSource={tableDataPage} columns={exampleApiCol}/>
    </div>
  );
};

export default TablePage;
