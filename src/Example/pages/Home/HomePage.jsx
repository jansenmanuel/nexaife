import React from "react";
import { MainSection, Section } from "../../componentsExample/Section";
import { Typography } from "antd";
import CodeBlock from "../../componentsExample/CodeBlock";
import {
  HOOKS_LANGUAGE,
  IMPORT_DATA,
  INSTALL_DATA,
  UPDATE_DATA,
  USAGE_LANGUAGE,
} from "../../data";
import Title from "antd/lib/typography/Title";

const { Paragraph, Text } = Typography;

const HomePage = () => {
  return (
    <MainSection>
      <Section title={"Components Overview"}>
        <Typography>
          <Paragraph style={{ lineHeight: 2 }}>
            Welcome to NexComponent UI! This section offers a quick look at all
            the available components in our library, many of which are built
            with and extend features from Ant Design (AntD) to provide
            additional functionality and customization. Explore each component
            to see how it can simplify your development workflow and enhance
            your application's user interface.
          </Paragraph>
        </Typography>
      </Section>
      <Section title={"Installation"}>
        <Text style={{ lineHeight: 2 }}>
          How to install and set up Chakra UI in your project
        </Text>
        <div>
          <Text strong style={{ marginBottom: 4 }}>
            How to install
          </Text>
          <CodeBlock style={{ marginTop: 8 }} code={INSTALL_DATA} />
        </div>
        <div>
          <Text strong style={{ marginBottom: 4 }}>
            How to update
          </Text>
          <CodeBlock style={{ marginTop: 8 }} code={UPDATE_DATA} />
        </div>
        <div>
          <Text strong style={{ marginBottom: 4 }}>
            How to import
          </Text>
          <CodeBlock style={{ marginTop: 8 }} code={IMPORT_DATA} />
        </div>
      </Section>
      <Section title={"Language Provider"}>
        <Typography>
          <Paragraph style={{ lineHeight: 2 }}>
            The Language Provider is a context component designed to handle and
            manage language settings throughout your application. It allows you
            to easily switch languages, making your app accessible to a broader
            audience. This provider leverages i18n (internationalization) to
            enable seamless language updates and supports custom configurations,
            so you can add or modify languages as needed.
          </Paragraph>
          <Paragraph style={{ lineHeight: 2 }}>
            Simply wrap your app or specific sections with the{" "}
            <Text code>LanguageProvider</Text>
            to ensure consistent language settings across all components. Below
            is an example of how to import and use the Language Provider in your
            project.
          </Paragraph>
        </Typography>
        <div>
          <Title level={4} strong style={{ marginBottom: 4 }}>
            How to use
          </Title>
          <Paragraph>Apps should be wrapped by language provider</Paragraph>
          <CodeBlock style={{ marginTop: 8 }} code={USAGE_LANGUAGE} />
        </div>
        <div>
          <Title level={4} strong style={{ marginBottom: 4 }}>
            How to use Hook useLanguage
          </Title>
          <Paragraph>
            <Text code>useLanguage()</Text> hooks must be wrapped in language provider. Hooks contains two
            parameters. language to read the current language and changeLanguage
            to set the language
          </Paragraph>
          <CodeBlock style={{ marginTop: 8 }} code={HOOKS_LANGUAGE} />
        </div>
      </Section>
    </MainSection>
  );
};

export default HomePage;
