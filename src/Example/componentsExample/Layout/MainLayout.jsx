// Utils or Libraries
import React, { Suspense, useCallback } from "react";
import { ROUTE_CLIENT } from "../../Constant/routeConstant";
import { propsActions } from "../../Store/reducer/properties";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import style from "./MainLayout.module.scss";

// Components
import { Layout as LayoutAntd, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import Text from "antd/lib/typography/Text";
import DropdownLanguage from "../DropdownLanguage";
import { useLanguage } from "../../../Component";
import PageLoader from "../PageLoader";

const { Header, Content, Sider } = LayoutAntd;

const MainLayout = () => {
  let dispatch = useDispatch();
  const { language, changeLanguage } = useLanguage();
  const { mainColor } = useSelector((state) => state.properties);

  const generateMenuItems = (routes) => {
    return routes.map((route) => {
      if (route.children) {
        return {
          key: route.label,
          label: route.label,
          children: route.children.map((child) => ({
            key: child.key,
            label: <Link to={child.path}>{child.label}</Link>,
          })),
        };
      }

      return {
        key: route.key,
        label: <Link to={route.path}>{route.label}</Link>,
      };
    });
  };

  const debouncedSetColor = useCallback(
    debounce((color) => dispatch(propsActions.setColor(color)), 300),
    [],
  );

  return (
    <LayoutAntd>
      <Header
        className="site-layout-background"
        style={{
          position: "sticky",
          backgroundColor: "white",
          top: 0,
          zIndex: 888,
          width: "100%",
          boxShadow: "0px 9px 16px -3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text strong>NexComponent UI</Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <input
                style={{
                  border: "none",
                  width: 24,
                  height: 24,
                }}
                type="color"
                onInput={(e) => {
                  debouncedSetColor(e.target.value);
                }}
              />
              <Text style={{ marginRight: 20 }} strong>
                {mainColor || "#000000"}
              </Text>
              <DropdownLanguage />
            </div>
            <Text>Set Color</Text>
          </div>
        </div>
      </Header>
      <LayoutAntd>
        <Sider
          className={style.menu}
          width={180}
          style={{
            zIndex: 777,
            backgroundColor: "white",
            position: "fixed",
            insetInlineStart: 0,
            top: 65,
            overflowX: "hidden",
            overflowY: "auto",
            bottom: 0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["page_home"]}
            defaultOpenKeys={["page_home"]}
            items={generateMenuItems(ROUTE_CLIENT)}
            style={{ borderRight: "1px solid #f0f0f000" }}
          />
        </Sider>
        <LayoutAntd className="site-layout" style={{ marginLeft: 180 }}>
          <Content
            style={{
              borderRadius: 16,
              padding: 20,
              margin: "24px 16px",
              overflow: "initial",
              backgroundColor: "white",
              minHeight: "85vh",
            }}
          >
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </Content>
        </LayoutAntd>
      </LayoutAntd>
    </LayoutAntd>
  );
};

export default MainLayout;
