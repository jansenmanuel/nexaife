import React from 'react';

import Li from '../../../Atomic/List/Li/Li';
import Ul from '../../../Atomic/List/Ul/Ul';
import Td from '../../../Atomic/Table/Td/Td';
import Tfoot from '../../../Atomic/Table/Tfoot/Tfoot';
import Tr from '../../../Atomic/Table/Tr/Tr';
import { classNameDefault } from '../../../Enum/classNameDefault';
import style from './TableFooter.module.css';

function TableFooter(props) {
  const selectableRow = props.selectable;
  return (
    <Tfoot
      id={props.id + "footer"}
      className={`${style.TableFooter} ${classNameDefault.tableFooter}`}
      fixHeader={props.fixHeader}
      fixHeaderBg={props.fixHeaderBg}
    >
      <Tr id={props.id + "footerrow"}>
        <Td id={props.id + "footerdata"} colSpan={selectableRow ? props.length + 1 : props.length}>
          <Ul id={props.id + "footerul"} className={style.List}>
            <Li
              id={props.id + "footerlabel"}
              className={`${style.Label} ${classNameDefault.labelFooter}`}
            >
              {props.footerLabel}
            </Li>
            <Li id={props.id + "footerlimit"}>{props.tableLimit}</Li>
            <Li
              id={props.id + "footerpagination"}
              className={`${style.Pagination} ${classNameDefault.pagination}`}
            >
              {props.pagination}
            </Li>
          </Ul>
        </Td>
      </Tr>
    </Tfoot>
  );
}

export default TableFooter;
