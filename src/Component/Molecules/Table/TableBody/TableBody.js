import React from 'react';

import Tbody from '../../../Atomic/Table/Tbody/Tbody';
import Td from '../../../Atomic/Table/Td/Td';
import Tr from '../../../Atomic/Table/Tr/Tr';
import { classNameDefault } from '../../../Enum/classNameDefault';
import style from './TableBody.module.css';

function TableBody(props) {
  const selectableRow = props.selectable;
  const data = props.data;

  return (
    <Tbody
      id={props.id + "body"}
      className={`${style.TableList} ${classNameDefault.tableList}`}
      fixHeader={props.fixHeader}
      height={props.height}
      overflowY={props.overflowY}
    >
      {data === null || data.length <= 0 ? (
        <Tr id={props.id + "row"} fixHeader={props.fixHeader}>
          <Td id={props.id + "data"} colSpan={props.column.length + 1}>
            {props.empty}
          </Td>
        </Tr>
      ) : (
        <>
          {data.map((item, indexItem) => {
            return (
              <Tr
                id={props.id + "row" + indexItem}
                className={props.rowLink ? style.RowLink : ""}
                key={indexItem}
                onClick={props.rowLink ? () => props.rowClick(item) : undefined}
              >
                {selectableRow ? (
                  <>
                    <Td id={props.id + "row" + indexItem} style={{maxWitdh: "10px"}}>
                      {props.checkBoxPartial(item)}
                    </Td>
                  </>
                ) : (
                  <></>
                )}
                {props.column.map((columnItem, index) => {
                  const component = columnItem.component;
                  const handleKey = item => {
                    let key = "";
                    if (item !== undefined) {
                      key = item.replace("_", "");
                    }
                    return key;
                  };
                  return (
                    <Td
                      id={props.id + "data" + handleKey(columnItem.key) + indexItem}
                      key={index}
                      className={`${style.ItemLink} ${classNameDefault.itemLink}`}
                      style={props.styleBody}
                      textAlign={columnItem.textAlignRow}
                      padding={columnItem.padding}
                      width={columnItem.width}
                    >
                      {component === true
                        ? columnItem.selector(item)
                        : item[`${columnItem.selector}`]}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </>
      )}
    </Tbody>
  );
}

export default TableBody;
