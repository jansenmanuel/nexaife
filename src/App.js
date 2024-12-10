// Utils or Libraries
import React, { useLayoutEffect, useRef } from "react";
import { Routes, useLocation } from "react-router-dom";
import clientRoutes from "./Example/Routes/clientRoutes";

import "./App.css";
import LanguageProvider from "./Component/providers/LanguageProvider";

const Wrapper = ({ children }) => {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
  const isMounted = useRef(true);

  useLayoutEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (prevPathname.current !== location.pathname) {
      if (isMounted.current) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
    prevPathname.current = location.pathname;
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <LanguageProvider defaultLanguage={"id"}>
      <Wrapper>
        <Routes>{clientRoutes()}</Routes>
      </Wrapper>
    </LanguageProvider>
  );
}

export default App;
