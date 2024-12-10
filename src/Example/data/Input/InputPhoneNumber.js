import {SIZES_DEFAULT} from "../../Constant/generalConstant";

export const IMPORT_INPUT_PHONE_NUMBER_EXAMPLE = `import {InputPhoneNumber} from 'nexcomponent-ui';`

export const USAGE_INPUT_PHONE_NUMBER_EXAMPLE = `<InputPhoneNumber
 mainColor={mainColor}
 onChange={onChange}
 size={"sm"}
/>`

export const SIZES_INPUT_PHONE_NUMBER_EXAMPLE = `
  {SIZES_DEFAULT.filter((size) => size !== "xs").map((size, key) => (
    <span key={key} style={{ marginRight: 4 }}>
      <InputPhoneNumber
        mainColor={mainColor}
        onChange={onChange}
        size={size}
      />
    </span>
  ))}
`;
