import React from "react";
import {Pagination as AntdPagination} from "antd";
import "./pagination-style.scss";
import SizeChanger from "./components/SizeChanger";
import {I18nextProvider, useTranslation} from "react-i18next";

import i18n from "../../config/i18nConfig";

const PaginationBased = ({
                      pageSizeOptions,
                      pageSize,
                      handleChangePageSize,
                      total,
                      defaultCurrent,
                      data,
                      currentPage,
                      handleChangePage,
                      currentRow
                    }) => {

                      const {t} = useTranslation();
  return (

    

    <div className="pagination-container">
      <span className="select-from-total-page">{`${currentRow} ${t('COMMON:OF')} ${total}`}</span>

      <div className="pagination-changer">
        <span className="row-per-page-text">{t('COMMON:ROW_PER_PAGE')}</span>
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
          pageSize={pageSize}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default function Pagination(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <PaginationBased {...props} />
    </I18nextProvider>
  );
}
