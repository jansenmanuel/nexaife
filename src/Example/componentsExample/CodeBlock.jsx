import { Highlight, themes } from "prism-react-renderer";
import {Button as ButtonV223 } from "../../Component";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const CodeBlock = ({ code = '', language = "jsx", ...props }) => {
  return (
    <div {...props}>
      <Highlight code={code} language={language} theme={themes.jettwaveDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
              position: "relative",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}

            <Text
              style={{
                position: "absolute",
                top: "8px",
                right: "16px",
                cursor: "pointer",
              }}
              copyable={{
                tooltips: false,
                text: code,
                icon: [
                  <ButtonV223
                    buttonType={"primary"}
                    mainColor={"blue"}
                    secondaryColor={"white"}
                    label="COPY"
                    size={"xs"}
                  />,
                  <ButtonV223
                    buttonType={"primary"}
                    mainColor={"blue"}
                    secondaryColor={"white"}
                    label="COPIED"
                    size={"xs"}
                  />,
                ],
              }}
            />
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
