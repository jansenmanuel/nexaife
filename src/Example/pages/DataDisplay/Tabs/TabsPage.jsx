import React, { useState } from "react";
import TAB_V_2_0_2 from "../../../../Component/Atomic/Tab/Tab";
import { useSelector } from "react-redux";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import TabIcons from "../../../../Component/Asset/Icon/TabIcons";
import style from "./TabsPage.module.scss";

const TabsPage = () => {
  const mainColor = useSelector((state) => state.properties.mainColor);

  const items = [
    {
      key: "1",
      label: "Home",
    },
    {
      key: "2",
      label: "Profile",
    },
    {
      key: "3",
      label: "About Us",
    },
    {
      key: "4",
      label: "Contact",
    },
    {
      key: "5",
      label: "Location",
    },
    {
      key: "6",
      label: "Settings",
    },
    {
      key: "7",
      label: "Social Media",
    },
    {
      key: "8",
      label: "Address",
    },
    {
      key: "9",
      label: "Account",
    },
    {
      key: "10",
      label: "Gallery",
    },
  ];

  const tabItems = [
    {
      key: "1",
      label: "Android",
      icon: AndroidOutlined,
      children: "Content of Tab Pane 3",
      isError: false,
    },
    {
      key: "2",
      label: "Apple",
      icon: AppleOutlined,
      children: "Content of Tab Pane 2",
      isError: true,
    },
    {
      key: "3",
      label: "Apple",
      icon: TabIcons,
      children: "Content of Tab Pane 1",
      isError: false,
    },
  ];

  const [activeTabKey, setActiveTabKey] = useState("1");

  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };

  console.log("activeTabKey",activeTabKey)

  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>TabsPage</h1>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
      >
        <div
          style={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <div style={{ display: "flex", gap: "50px" }}>
            <h2>Size SM</h2>
            <TAB_V_2_0_2
              defaultActiveKey="1"
              items={tabItems}
              size="sm"
              showIcon={true}
              activeColor={mainColor ? mainColor : "#1D1D1D"}
              onChange={handleTabChange}
            />
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <h2>Size MD</h2>
            <TAB_V_2_0_2
              defaultActiveKey="1"
              items={tabItems}
              size="md"
              showIcon={true}
              activeColor={mainColor ? mainColor : "#1D1D1D"}
              onChange={handleTabChange}
            />
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <h2>Size LG</h2>
            <TAB_V_2_0_2
              defaultActiveKey="1"
              items={tabItems}
              size="lg"
              showIcon={true}
              activeColor={mainColor ? mainColor : "#1D1D1D"}
              onChange={handleTabChange}
            />
          </div>
        </div>
        <div>
          <TAB_V_2_0_2
            defaultActiveKey="4"
            items={items}
            size="sm"
            showIcon={true}
            activeColor={mainColor ? mainColor : "#1D1D1D"}
            onChange={handleTabChange}
          />
          <TAB_V_2_0_2
            defaultActiveKey="1"
            items={items}
            size="md"
            showIcon={true}
            activeColor={mainColor ? mainColor : "#1D1D1D"}
            onChange={handleTabChange}
          />
          <TAB_V_2_0_2
            defaultActiveKey="1"
            items={items}
            size="lg"
            showIcon={true}
            activeColor={mainColor ? mainColor : "#1D1D1D"}
            onChange={handleTabChange}
          />
        </div>
      </div>
      <section className={style.section}>
        <h2>Props Explanation for TAB_V_2_0_2</h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>array object</code>
              </td>
              <td>
                <code>
                  [key: string, label: string, Icon: elementType, children:
                  ReactNode]
                </code>
              </td>
              <td>
                <code>[]</code>
              </td>
              <td>
                Specifies the tabs to be rendered, each with a unique key,
                label, and optional icon.
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>oneOf(['sm', 'md', 'lg'])</code>
              </td>
              <td>
                <code>'md'</code>
              </td>
              <td>Size of the tabs, affecting icon size and spacing.</td>
            </tr>
            <tr>
              <td>
                <code>showIcon</code>
              </td>
              <td>
                <code>bool</code>
              </td>
              <td>
                <code>true</code>
              </td>
              <td>Controls whether the icon is displayed in each tab.</td>
            </tr>
            <tr>
              <td>
                <code>activeColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>'#1D1D1D'</code>
              </td>
              <td>The color of the tab label and icon when active.</td>
            </tr>
            <tr>
              <td>
                <code>inactiveColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>'#424242'</code>
              </td>
              <td>The color of the tab label and icon when inactive.</td>
            </tr>
            <tr>
              <td>
                <code>iconColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>'#1D1D1D'</code>
              </td>
              <td>The color of the icon.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TabsPage;
