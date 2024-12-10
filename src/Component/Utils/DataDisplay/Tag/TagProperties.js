import { 
  BLACK_COLOR, 
  COLOR_BACKGROUND_DISABLED, 
  COLOR_BACKGROUND_GRAY, 
  COLOR_BORDER, COLOR_TEXT, 
  COLOR_TEXT_DISABLED, 
  COLOR_TEXT_INVERSE, 
  GRAY_BORDER_COLOR, 
  GRAY_DEFAULT_COLOR, 
} from "../../../Constant/colorConstant";

export const getProperties = (state) => {
  const stateLower = state ? state.toLowerCase() : "";

  switch (stateLower) {
    case 'default':
      return {
        backgroundColor: COLOR_BACKGROUND_GRAY,
        borderColor: COLOR_BORDER,
        fontColor: COLOR_TEXT,
      };
    case 'outlined':
      return {
        backgroundColor: '',
        borderColor: COLOR_BORDER,
        fontColor: COLOR_TEXT,
      };
    case 'colored':
      return {
        backgroundColor: '',
        borderColor: '',
        fontColor: COLOR_TEXT_INVERSE,
      };
    case 'disabled':
      return {
        backgroundColor: COLOR_BACKGROUND_DISABLED,
        borderColor: COLOR_BORDER,
        fontColor: COLOR_TEXT_DISABLED,
      };
    default:
      return {
        backgroundColor: COLOR_BACKGROUND_GRAY,
        borderColor: COLOR_BORDER,
        fontColor: COLOR_TEXT,
      }
  }
}
