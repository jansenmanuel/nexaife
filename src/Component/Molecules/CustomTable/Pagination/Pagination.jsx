import React from "react";
import { Pagination as AntdPagination } from "antd";
import "./pagination-style.scss";
import SizeChanger from "./components/SizeChanger";

const Pagination = ({
  pageSizeOptions,
  pageSize,
  handleChangePageSize,
  total,
  defaultCurrent,
  data,
  currentPage,
  handleChangePage,
}) => {
  return (
    <div className="pagination-container">
      <span className="select-from-total-page">{`${data.length} of ${total}`}</span>

      <div className="pagination-changer">
        <span className="row-per-page-text">Row per Page</span>
        <SizeChanger
          pageSizeOptions={pageSizeOptions}
          pageSize={pageSize}
          onPageSizeChange={handleChangePageSize}
        />

        <AntdPagination
          current={currentPage}
          onChange={handleChangePage}
          defaultCurrent={defaultCurrent}
          total={total}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Pagination;
