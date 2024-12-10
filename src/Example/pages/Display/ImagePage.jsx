import React from "react";
import { Image as IMAGE_V_2_0_1 } from "../../../Component";
import styled from "./ImagePage.module.css";
import { IMAGE_FALLBACK, IMAGE_URL } from "../../Constant/generalConstant";
import {
  HeaderSection,
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import {
  FALLBACK_IMAGE_EXAMPLE,
  IMPORT_IMAGE_EXAMPLE,
  PROPS_API_IMAGE,
  USAGE_IMAGE_EXAMPLE,
} from "../../data";
import { Card } from "antd";
import CodeBlock from "../../componentsExample/CodeBlock";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const ImagePage = () => {
  return (
    <MainSection>
      <HeaderSection
        title={"Image"}
        subtitle={"Iamge with aspect ratio component"}
      />
      <ImportSection code={IMPORT_IMAGE_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_IMAGE_EXAMPLE} />
      </Section>
      <Section title={"Aspect Ratio"}>
        <Card>
          <div className={styled.Container}>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="1:1"
                orientation="portrait"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 1:1 (portrait)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="2:1"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 2:1 (landscape)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="2:1"
                orientation="portrait"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 2:1 (portrait)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="3:2"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 3:2 (landscape)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="3:2"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 3:2 (landscape)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="4:3"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 4:3 (landscape)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="4:3"
                orientation="portrait"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 4:3 (portrait)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="5:3"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Placeholder"
              />
              <p>Aspect Ratio 5:3 (landscape)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="5:3"
                orientation="portrait"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 5:3 (portrait)</p>
            </div>
            <div>
              <IMAGE_V_2_0_1
                aspectRatio="5:4"
                orientation="landscape"
                src={IMAGE_URL}
                alt="Descriptive Text"
              />
              <p>Aspect Ratio 5:4 (landscape)</p>
            </div>
          </div>
        </Card>
        <CodeBlock code={USAGE_IMAGE_EXAMPLE} />
      </Section>
      <Section title={"Aspect Ratio"}>
        <Card>
          <div
            style={{
              width: "400px",
            }}
          >
            <IMAGE_V_2_0_1
              aspectRatio="5:3"
              orientation="landscape"
              src={""}
              fallback={IMAGE_FALLBACK}
              alt="Placeholder"
            />
          </div>
        </Card>
        <CodeBlock code={FALLBACK_IMAGE_EXAMPLE} />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={PROPS_API_IMAGE} />
    </MainSection>
  );
};

export default ImagePage;
