import React from "react";
import {Video as VIDEO_V_2_0_1 } from "../../../Component";
import styled from "./VideoPage.module.css";
import { VIDEO_SRC } from "../../Constant/generalConstant";
import {
  ImportSection,
  MainSection,
  Section,
} from "../../componentsExample/Section";
import HeaderPage from "../../componentsExample/HeaderPage";
import {
  IMPORT_VIDEO_EXAMPLE,
  OTHER_PROPS_EXAMPLE,
  PROPS_API_VIDEO,
  USAGE_VIDEO_EXAMPLE,
} from "../../data";
import CodeBlock from "../../componentsExample/CodeBlock";
import { Card } from "antd";
import ApiPropsTable from "../../componentsExample/ApiPropsTable";
import { exampleApiCol } from "../../config";

const VideoPage = () => {
  return (
    <MainSection>
      <HeaderPage title={"Video"} subtitle={"Video with aspect ratio"} />
      <ImportSection code={IMPORT_VIDEO_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_VIDEO_EXAMPLE} />
      </Section>
      <Section title={"Aspect Ratio"}>
        <Card>
          <div className={styled.Container}>
            <div>
              <VIDEO_V_2_0_1 src={VIDEO_SRC} />
              <p>Aspect Ratio default</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                aspectRatio="2:1"
                orientation={"landscape"}
                src={VIDEO_SRC}
              />
              <p>Aspect Ratio 2:1 (landscape)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                aspectRatio="2:1"
                orientation={"portrait"}
                src={VIDEO_SRC}
              />
              <p>Aspect Ratio 2:1 (portrait)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1 aspectRatio="16:9" src={VIDEO_SRC} />
              <p>Aspect Ratio 16:9 (landscape)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                aspectRatio="3:2"
                orientation={"portrait"}
                src={VIDEO_SRC}
              />
              <p>Aspect Ratio 3:2 (portrait)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1 aspectRatio="4:3" src={VIDEO_SRC} />
              <p>Aspect Ratio 4:3 (landscape)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                aspectRatio="4:3"
                orientation={"portrait"}
                src={VIDEO_SRC}
              />
              <p>Aspect Ratio 4:3 (portrait)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1 aspectRatio="5:3" src={VIDEO_SRC} />
              <p>Aspect Ratio 5:3 (landscape)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                aspectRatio="5:3"
                src={VIDEO_SRC}
                orientation={"portrait"}
              />
              <p>Aspect Ratio 5:3 (portrait)</p>
            </div>
            <div>
              <VIDEO_V_2_0_1 aspectRatio="5:4" src={VIDEO_SRC} />
              <p>Aspect Ratio 5:4 (landscape)</p>
            </div>
          </div>
        </Card>
        <CodeBlock code={USAGE_VIDEO_EXAMPLE} />
      </Section>
      <Section title={"Other props"}>
        <Card>
          <div className={styled.Container}>
            <div>
              <VIDEO_V_2_0_1 src={VIDEO_SRC} autoPlay={true} />
              <p>Autoplay true</p>
            </div>
            <div>
              <VIDEO_V_2_0_1
                src={VIDEO_SRC}
                poster={"https://placehold.co/600x400"}
              />
              <p>With Poster</p>
            </div>
            <div>
              <VIDEO_V_2_0_1 src={VIDEO_SRC}>
                <p>
                  Your browser doesn't support HTML5 video.{" "}
                  <a href="https://www.w3schools.com/html/mov_bbb.mp4">
                    Download the video
                  </a>{" "}
                  instead.
                </p>
              </VIDEO_V_2_0_1>
              <p>With fallback</p>
            </div>
          </div>
        </Card>
        <CodeBlock code={OTHER_PROPS_EXAMPLE} />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={PROPS_API_VIDEO} />
    </MainSection>
  );
};

export default VideoPage;
