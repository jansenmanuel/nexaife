// Libs
import React, { useCallback } from "react";
import styles from "./ListCollapse.module.scss";

// Constants
import {STATUS} from "../../../Constant/generalConstant";

// Components
import { Collapse } from "antd";
import CheckBoxLocation from "../components/Checkbox";

const { Panel } = Collapse;

const CollapseLocation = ({
  items,
  checkedValues,
  handleCheck,
  compute,
  handlePanel,
  activeKey = [],
  ...props
}) => {
  const { activePanels, setActivePanels } = props;

  const onCollapseChange = useCallback(
    (keys, level) => {
      setActivePanels((prev) => {
        const returnedData = { ...prev, [level]: keys };
        handlePanel(returnedData, level);
        return returnedData;
      });
    },
    [handlePanel, setActivePanels],
  );

  const renderItems = (items, currentLevel = 0) => {
    return (
      <Collapse
        expandIconPosition="end"
        ghost
        className={styles.collapseCustom}
        destroyInactivePanel={true}
        onChange={(e) => onCollapseChange(e, currentLevel)}
        activeKey={activePanels[currentLevel]}
      >
        {items.map((opt) => {
          if (opt.items && opt.items.length > 0) {
            return (
              <Panel
                collapsible={"icon"}
                extra={
                  <CheckBoxLocation
                    id={opt.id}
                    name={opt.name}
                    checked={opt.status === STATUS.checked}
                    indeterminate={opt.status === STATUS.indeterminate}
                    compute={compute}
                  />
                }
                header={`${opt.name}`}
                key={opt.id}
              >
                {renderItems(opt.items, currentLevel + 1)}
              </Panel>
            );
          } else {
            return (
              <div key={opt.id} style={{ paddingTop: 8, paddingBottom: 6 }}>
                <CheckBoxLocation
                  id={opt.id}
                  name={opt.name}
                  checked={opt.status === STATUS.checked}
                  indeterminate={opt.status === STATUS.indeterminate}
                  compute={compute}
                >
                  {opt.name}
                </CheckBoxLocation>
              </div>
            );
          }
        })}
      </Collapse>
    );
  };

  return <div>{renderItems(items)}</div>;
};

export default CollapseLocation;
