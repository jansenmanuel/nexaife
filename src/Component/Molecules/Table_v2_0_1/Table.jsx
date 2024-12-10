import React, {useCallback, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {Table as AntdTable} from "antd";
import Pagination from "../Pagination/Pagination";
import "./table-style.scss";
import NoData from "./_components/NoData";
import {calculateItemsOnCurrentPage} from "../../Utils/Pagination/CurrentPage";

const Table = ({
                         currentPage,
                         currentPageSize,
                         loading,
                         onChangePage,
                         onChangePageSize,
                         onChangeSorter,
                         totalData,
                         columns,
                         dataSource,
                         pageSizeOptions,
                         rowSelection,
                         rowKey
                       }) => {
  const [pageSize, setPageSize] = useState(currentPageSize);

  const handleChangePage = useCallback(
    (page) => {
      onChangePage(page);
    },
    [onChangePage]
  );

  const handleChangePageSize = useCallback(
    (current, size) => {
      setPageSize(size);
      onChangePageSize(current, size);
    },
    [onChangePageSize]
  );

  const getRowClassName = useCallback((_, index) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  }, []);

  const itemsOnCurrentPage = useMemo(() => calculateItemsOnCurrentPage(currentPage, currentPageSize, totalData),
    [currentPage, currentPageSize, totalData])

  window.scrollTo(0, 0);
  return (
    <div className="table-container">
      <AntdTable
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowClassName={getRowClassName}
        onChange={onChangeSorter}
        loading={loading}
        locale={{emptyText: <NoData/>}}
        rowSelection={rowSelection}
        rowKey={rowKey}
        showSorterTooltip={false}
      />

      {dataSource?.length > 0 && (
        <Pagination
          currentRow={itemsOnCurrentPage}
          currentPage={currentPage}
          data={dataSource}
          defaultCurrent={1}
          total={totalData}
          pageSize={pageSize}
          onChange={handleChangePage}
          handleChangePage={handleChangePage}
          pageSizeOptions={pageSizeOptions}
          handleChangePageSize={handleChangePageSize}
        />
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageSize: PropTypes.number,
  loading: PropTypes.bool,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
  onChangeSorter: PropTypes.func,
  totalData: PropTypes.number,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  rowKey: PropTypes.string
};

export default Table;
