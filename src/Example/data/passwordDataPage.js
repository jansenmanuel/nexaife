export const IMPORT_PASSWORD_EXAMPLE = `import {Input} from 'nexcomponent-ui';`;

export const USAGE_PASSWORD_EXAMPLE = `<Input
  placeholder="Password"
  size="md"
  type="password"
  value={valuePassword}
  onChange={(e) => setValuePassword(e.target.value)}
/>`

export const SIZES_PASSWORD_EXAMPLE = `
{SIZES_DEFAULT.filter(size => size !== "xs").map((size, key) => (
  <span key={key} style={{ marginRight: 4 }}>
    <Input
      placeholder="Password"
      size={size}
      type="password"
      value={valuePassword}
      onChange={(e) => setValuePassword(e.target.value)}
    />
  </span>
))}`