import React from 'react';

import NcSortable from '../../../Asset/Icon/NcSortable';
import Th from '../../../Atomic/Table/Th/Th';
import Thead from '../../../Atomic/Table/Thead/Thead';
import Tr from '../../../Atomic/Table/Tr/Tr';
import { classNameDefault } from '../../../Enum/classNameDefault';
import style from './TableHeader.module.css';

function TableHeader(props) {
  const selectableRow = props.selectable;

  return (
    <Thead
      id={props.id + "tableheader"}
      className={props.className}
      fixHeader={props.fixHeader}
      fixHeaderBg={props.fixHeaderBg}
    >
      <Tr id={props.id + "tablerowheader"}>
        {selectableRow === true ? (
          <>
            <Th id={props.id + "tablecheckboxall"} className={style.HeaderCheck}>
              {props.checkBoxAll}
            </Th>
          </>
        ) : (
          <></>
        )}
        {props.columns.map((item, index) => {
          let colorStatus = (status) => {
            if (status === true) {
              return classNameDefault.iconActive;
            } else {
              return classNameDefault.iconDeactive;
            }
          };
          return (
            <Th
              id={props.id + index}
              key={index}
              style={props.styleHeader}
              textAlign={item.textAlignHead}
              padding={item.padding}
              width={item.width}
              className={`${style.Th} ${classNameDefault.th}`}
            >
              {item.name + " "}
              {item.sortable === true ? (
                <NcSortable
                  onClick={() => props.sortClick(item)}
                  size="16"
                  classAsc={colorStatus(item.asc)}
                  classDesc={colorStatus(item.desc)}
                />
              ) : (
                ""
              )}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
}

export default TableHeader;
