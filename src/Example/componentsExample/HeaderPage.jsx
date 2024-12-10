import React from "react";
import { Divider, Typography } from "antd";
import PropTypes from "prop-types";

const { Title, Paragraph, Text } = Typography;

/**
 * HeaderPage component renders a page header with a title, subtitle, and a section for examples.
 *
 * @component
 * @example
 * // Basic usage with title and subtitle
 * <HeaderPage title="Home Page" subtitle="Welcome to the home page" />
 *
 * @example
 * // Using the default title and subtitle
 * <HeaderPage />
 *
 * @prop {string} title - The main title displayed at the top.
 * @prop {string} subtitle - The subtitle text displayed below the title.
 *
 * @returns {JSX.Element} The rendered HeaderPage component.
 */

const HeaderPage = ({ title, subtitle }) => {
  return (
    <section style={{ display: "flex", gap: 20, flexDirection: "column" }}>
      <div>
        <Title level={2}>{title}</Title>
        <Paragraph>
          <Text>{subtitle}</Text>
        </Paragraph>
      </div>
      <div>
        <Title level={3}>Examples</Title>
        <Divider style={{ marginTop: 2 }} />
      </div>
    </section>
  );
};

HeaderPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

HeaderPage.defaultProps = {
  title: "Title Page",
  subtitle: "Subtitle Page",
};

export default HeaderPage;
