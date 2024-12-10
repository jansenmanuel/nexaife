import React from "react";
import Title from "antd/lib/typography/Title";
import { MainSection } from "../../componentsExample/Section";
import Text from "antd/lib/typography/Text";
import {Button as ButtonV223 } from "../../../Component";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainSection>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ maxWidth: 190 }}>
          <Title>Sorry . . .</Title>
          <Text
            strong
            style={{
              color: "#b2b2b2",
            }}
          >
            We couldn't find the page your were looking for
          </Text>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ButtonV223
              buttonType={"primary"}
              label={"Back"}
              size={"sm"}
              onClick={() =>
                navigate("/", { replace: true, preventScrollReset: true })
              }
            />
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default NotFound;
