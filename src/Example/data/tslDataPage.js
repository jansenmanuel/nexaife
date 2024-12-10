
export const IMPORT_CHECKBOX_EXAMPLE = "import {CheckBoxv1} from 'nexcomponent-ui';";
export const IMPORT_CHECKBOX_GROUP_EXAMPLE =
  "import {CheckBoxGroupV1} from 'nexcomponent-ui';";
export const IMPORT_RADIO_EXAMPLE = "import {RadioV1} from 'nexcomponent-ui';";
export const IMPORT_RADIO_EXAMPLE_GROUP = "import {RadioGroupV1} from 'nexcomponent-ui';";
export const USAGE_CHECKBOX_EXAMPLE = `
<CheckBoxv1
  label={"Test Label"}
  disabled={false}
  check={isCheckedSm}
  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
  onChange={()=>handleCheckboxChange("Sm")}
  size="Sm"
/>
`;

export const USAGE_CHECKBOX_GROUP_EXAMPLE = `
<CheckboxGroupV1
  onChange={(v) => {
  handleCheckboxChangeObject(v);
  }}
  options={checkboxes}
  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
  horizontal={false}
  labelInformation={"Information"}
  errorInformation={"Error Text"}
  size="Sm"
/>
`;

export const USAGE_RADIO_EXAMPLE = `
<RadioV1
  label={"Test Label"}
  disabled={false}
  check={isCheckedSm}
  color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
  onChange={()=>handleCheckboxChange("Sm")}
  size="Sm"
/>
`;
export const USAGE_RADIO_EXAMPLE_GROUP = `
<RadioGroupV1
    options={optionss}
    onChange={(v) => setData({ value: v })}
    size="Sm"
    color={mainColor.length > 0 ? mainColor : BLACK_COLOR}
    horizontal={false}
    labelInformation={"Information"}
    errorInformation={"Error Text"}
    labelTitle={"Label Text"}
/>
`