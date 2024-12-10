import React from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Table from '../../../Atomic/Table/Table/Table';
import { classNameDefault } from '../../../Enum/classNameDefault';
import { propsDefault } from '../../../Enum/PropsDefault';
import TableBody from '../TableBody/TableBody';
import TableFooter from '../TableFooter/TableFooter';
import TableHeader from '../TableHeader/TableHeader';
import style from './DataTable.module.css';

const DataTable = props => {
  const tabel = fixFirstCol => {
    if (fixFirstCol) {
      return `${style.ContainerFixXCol} ${classNameDefault.containerFixXCol}`;
    } else {
      return style.Container;
    }
  };
  const rounded = (footer, customHeader) => {
    if (footer && customHeader !== undefined) {
      return style.HalfRoundBottom;
    } else if (footer) {
      return style.FullRound;
    } else {
      return style.HalfRound;
    }
  };
  return (
    <Div
      id={props.id}
      className={`${style.Shadow} ${classNameDefault.shadowTable} ${props.className}`}
    >
      <Div className={style.BorderContentHeader}>{props.customHeader}</Div>
      <Div
        id={props.id + "content"}
        className={`${tabel(props.fixFirstCol)}  ${rounded(props.footer, props.customHeader)} ${
          props.classTableBox
        }`}
        style={{maxHeight: props.height, minHeight: props.fixHeader ? "160px" : ""}}
        mTop={props.mTop}
      >
        <Table
          id={props.id + "table"}
          className={`${tabel(props.fixFirstCol)} ${props.classTable}`}
          fixHeader={props.fixHeader}
        >
            <TableHeader
              id={props.id + "header"}
              className={`${style.TableHeader} ${classNameDefault.tableHeader}`}
              columns={props.columns}
              selectable={props.selectable}
              sortClick={props.sortClick}
              selectAll={props.selectAll}
              checkBoxAll={props.checkBoxAll}
              data={props.data}
              fixHeader={props.fixHeader}
              fixHeaderBg={props.fixHeaderBg}
            />
            <TableBody
              id={props.id}
              data={props.data}
              selectable={props.selectable}
              column={props.columns}
              fixHeader={props.fixHeader}
              overflowY={props.overflowY}
              rowLink={props.rowLink}
              keyLink={props.keyLink}
              rowClick={item => props.rowClick(item)}
              empty={props.empty}
              checkBoxPartial={props.checkBoxPartial}
            />
          {props.footer ? (
            <TableFooter
              id={props.id}
              limitation={props.limitation}
              length={props.columns.length}
              totalRow={props.totalRow}
              selectable={props.selectable}
              footerLabel={props.footerLabel}
              tableLimit={props.tableLimit}
              pagination={props.pagination}
              fixHeader={props.fixHeader}
              fixHeaderBg={props.fixHeaderBg}
            />
          ) : (
            <></>
          )}
        </Table>
      </Div>
      {props.customFooter}
    </Div>
  );
};

export default DataTable;
DataTable.defaultProps = {
  className: propsDefault.stringEmpty,
  width: "100",
};
