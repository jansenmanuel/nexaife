import React from "react";
import { Checkbox as CheckboxAntd } from "antd";
import {STATUS} from "../../../Constant/generalConstant";


export default function CheckboxLocation(props) {
  const { indeterminate, checked, id, compute, children, ...rest } = props;

  return (
    <CheckboxAntd
      {...rest}
      checked={checked}
      indeterminate={indeterminate}
      onChange={(e) => {
        const newStatus = e.target.checked
          ? STATUS.checked
          : STATUS.unchecked;
        compute(id, newStatus);
      }}
    >
      {children}
    </CheckboxAntd>
  );
}
