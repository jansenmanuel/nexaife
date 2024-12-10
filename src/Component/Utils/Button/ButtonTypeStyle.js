export const buttonTypeStyle = (style) => {
  let typeStyle = "button-primary";
  if (style === "secondary") {
    typeStyle = "button-secondary";
  } else if (style === "tertiary") {
    typeStyle = "button-tertiary";
  } else if (style === "link") {
    typeStyle = "button-link"
  }
  return typeStyle;
};

export const buttonBorderTypeSize = (type, size="sm") => {
  let value = size.toLowerCase()
  if (type === "secondary") {
    let borderStyle = "borderSmall"
    if (value === "xl" || value === "xxl") {
      borderStyle = "borderLarge"
    }
    return borderStyle
  }
}