import React from 'react';


import NcArrowLeft from '../../../Asset/Icon/NcArrowLeft';
import NcArrowRight from '../../../Asset/Icon/NcArrowRight';
import Li from '../../../Atomic/List/Li/Li';
import Ul from '../../../Atomic/List/Ul/Ul';
import { classNameDefault } from '../../../Enum/classNameDefault';
import { propsDefault } from '../../../Enum/PropsDefault';
import { firstIndex } from '../../../Utils/Math/FirstIndex';
import { lastIndex } from '../../../Utils/Math/LastIndex';
import { mid } from '../../../Utils/Math/Midle';
import { activePage } from '../../../Utils/Pagination/ActivePage';
import { pageSlice } from '../../../Utils/Pagination/PageSlice';
import style from './PaginationTable.module.css';

function PaginationTable(props) {
  return (
    <>
      {props.pageNumber.length <= 7 ? (
        <Ul className={style.Container}>
          <Li onClick={props.currentPage === 1 ? props.firstClick : props.previousClick}>
            <NcArrowLeft size={propsDefault.iconSizeSm} color={props.colorArrow} />
          </Li>
          {props.pageNumber.map((number) => (
            <Li
              key={number}
              className={activePage(props.currentPage, number)}
              onClick={() => props.pageClick(number)}
            >
              {number}
            </Li>
          ))}
          <Li
            onClick={
              props.currentPage === lastIndex(props.pageNumber) ? props.lastClick : props.nextClick
            }
          >
            <NcArrowRight size={propsDefault.iconSizeSm} color={props.colorArrow} />
          </Li>
        </Ul>
      ) : (
        <Ul className={style.Container}>
          <Li onClick={props.currentPage === 1 ? props.firstClick : props.previousClick}>
            <NcArrowLeft size={propsDefault.iconSizeSm} color={props.colorArrow} />
          </Li>
          <Li
            onClick={props.firstClick}
            className={activePage(props.currentPage, firstIndex(props.pageNumber))}
          >
            {firstIndex(props.pageNumber)}
          </Li>
          {props.currentPage >= mid(props.totalRow, props.rowLimit) ? (
            <Li className={`${style.DisablePagination} ${classNameDefault.disablePagination}`}>
              ...
            </Li>
          ) : (
            " "
          )}

          {pageSlice(props.pageNumber).slice(props.startPage, props.endPage).map((number) => (
            <Li
              key={number}
              className={activePage(props.currentPage, number)}
              onClick={() => props.pageClick(number)}
            >
              {number}
            </Li>
          ))}
          {props.currentPage <= mid(props.totalRow, props.rowLimit) ? (
            <Li className={`${style.DisablePagination} ${classNameDefault.disablePagination}`}>
              ...
            </Li>
          ) : (
            " "
          )}
          <Li
            onClick={props.lastClick}
            className={activePage(props.currentPage, lastIndex(props.pageNumber))}
          >
            {lastIndex(props.pageNumber)}
          </Li>
          <Li
            onClick={
              props.currentPage === lastIndex(props.pageNumber) ? props.lastClick : props.nextClick
            }
          >
            <NcArrowRight size={propsDefault.iconSizeSm} color={props.colorArrow} />
          </Li>
        </Ul>
      )}
    </>
  );
}

export default PaginationTable;
PaginationTable.defaultProps = {
  startPage: propsDefault.startPage,
  endPage: propsDefault.endPage,
  pageClick: propsDefault.func,
};
