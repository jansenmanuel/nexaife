import React from "react";
import NcInfo from "../../Asset/Icon/NcInfo";
import { ERROR_COLOR } from "../../Constant/colorConstant";
import { Typography } from "antd";

const { Paragraph } = Typography;

const ErrorInformation = ({ text, size = "md", maxWidth } = {}) => {
  const renderSize = () => {
    const sizeToLowerCase = size?.toLowerCase();
    let value;
    if (sizeToLowerCase === "xxl") {
      value = {
        labelSize: "24px",
        iconSize: "18px",
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
        alignItems: "baseline",
        padding: "5px",
      }}
    >
      <NcInfo size={renderSize()?.iconSize} color={ERROR_COLOR} />
      <Paragraph
        style={{
          fontSize: renderSize()?.labelSize,
          fontFamily: "Roboto",
          marginLeft: renderSize()?.marginLeft,
          color: ERROR_COLOR,
          fontWeight: "400",
          width: maxWidth
        }}
        ellipsis={{
          tooltip: <div>{text}</div>
        }}
      >
        {text}
      </Paragraph>
    </div>
  );
};

export default ErrorInformation;
