import NcInfo from "../../Asset/Icon/NcInfo";
import { INFORMATION_COLOR } from "../../Constant/colorConstant";

const Information = ({ text, color = INFORMATION_COLOR, size = "md" } = {}) => {
  const renderSize = () => {
    const sizeToLowerCase = size?.toLowerCase();
    let value;
    if (sizeToLowerCase === "xxl") {
      value = {
        labelSize: "24px",
        iconSize: "18",
        marginLeft: "6px",
      };
    }
    if (sizeToLowerCase === "xl") {
      value = {
        labelSize: "20px",
        iconSize: "16.5px",
        marginLeft: "4px",
      };
    }
    if (sizeToLowerCase === "lg") {
      value = {
        labelSize: "18px",
        iconSize: "15px",
        marginLeft: "4px",
      };
    }
    if (sizeToLowerCase === "md") {
      value = {
        labelSize: "14px",
        iconSize: "13.5px",
        marginLeft: "2px",
      };
    }
    if (sizeToLowerCase === "sm") {
      value = {
        labelSize: "12px",
        iconSize: "12px",
        marginLeft: "2px",
      };
    }
    return value;
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <NcInfo size={renderSize()?.iconSize} color={color} />
      <label
        style={{
          fontSize: renderSize()?.labelSize,
          fontFamily: "Roboto",
          marginLeft: renderSize()?.marginLeft,
          fontWeight: "400",
        }}
      >
        {text}
      </label>
    </div>
  );
};

export default Information;
