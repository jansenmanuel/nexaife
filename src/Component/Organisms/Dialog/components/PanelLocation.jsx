import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const PanelLocation = ({ header, text, key }) => {
  return (
    <Panel
      header={header}
      key={key}
      extra={
        <Checkbox
          style={{
            order: -1,
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
    >
      <div>{text}</div>
    </Panel>
  );
};

export default PanelLocation;
