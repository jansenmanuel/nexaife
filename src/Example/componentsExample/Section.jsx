import React from "react";
import { Typography } from "antd";
import CodeBlock from "./CodeBlock";

const { Title, Paragraph, Text } = Typography;

const MainSection = ({ children, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        textAlign: "left",
        gap: 20,
        height: "100%",
        flexDirection: "column",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const HeaderSection = ({ title, subtitle, children, ...props }) => {
  return (
    <div {...props}>
      <Title level={2} style={{ fontWeight: "bold" }}>
        {title}
      </Title>
      <Paragraph>
        <Text>{subtitle}</Text>
      </Paragraph>
      {children}
    </div>
  );
};

HeaderSection.defaultProps = {
  title: "Default Title",
  subtitle: "This is a default subtitle.",
};

const ImportSection = ({ code = "", title = "Import", children, ...props }) => {
  return (
    <div {...props}>
      <Title level={3} style={{ fontWeight: "bold" }}>
        {title}
      </Title>
      <CodeBlock
        style={{
          padding: "16px 0px",
        }}
        code={code}
      />
      {children}
    </div>
  );
};

const Section = ({ title = "Title", children, ...props }) => {
  return (
    <div {...props}>
      <Title level={3} style={{ fontWeight: "bold" }}>
        {title}
      </Title>
      {children && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {children}
        </div>
      )}
    </div>
  );
};

export { MainSection, HeaderSection, ImportSection, Section };
