import React from "react";
import "./custom-table.scss";
import NcArrowDown from "../../../Component/Asset/Icon/NcArrowDown";

const CustomTable = ({ columns, dataSource }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((data, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "white" : "#F9F9F9" }}
            >
              {columns?.map((column, index) => (
                <td key={index} style={{ width: column?.width ?? "" }}>
                  {data[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
