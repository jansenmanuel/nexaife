import React from 'react'
import { Row, Tag as TAG_V_2_0_2 } from '../../../Component'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import style from './TagPage.module.scss'
import { GREEN_COLOR } from '../../../Component/Constant/colorConstant';
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { IMPORT_DATA_TAG_EXAMPLE, TAG_DATA_EXAMPLE, USAGE_TAG_EXAMPLE } from '../../data/tagDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';
import { SIZES_DEFAULT } from '../../Constant/generalConstant';
import ApiPropsTable from '../../componentsExample/ApiPropsTable';
import { exampleApiCol } from '../../config';

const TagPage = () => {
  const color = useSelector((state) => state.properties.mainColor);
  const handleClose = () => {
    console.log('close');
  }

  return (
    <MainSection>
      <HeaderSection
        title={"Tag"}
        subtitle={"Tag used for marking and categorized"}
      />
      <ImportSection title='Import' code={IMPORT_DATA_TAG_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_TAG_EXAMPLE} />
      </Section>
      <Section title={"Sizes"}>
        <Row
          style={{
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size) => (
              <span key={size}>
                <TAG_V_2_0_2
                  id={`default${size}`}
                  title='Default'
                  size={size}
                />
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size) => (
              <span key={size}>
                <TAG_V_2_0_2
                  id={`default${size}`}
                  title='Default'
                  size={size}
                  iconLeft={<CheckOutlined/>}
                />
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size) => (
              <span key={size}>
                <TAG_V_2_0_2
                  id={`default${size}`}
                  title='Default'
                  size={size}
                  iconRight={<CloseOutlined/>}
                  closable={true}
                />
              </span>
            ))}
          </div>
        </Row>
        <Row
          style={{
            gap: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`disabled${size}`}
                title={`Disabled`}
                state={"disabled"}
                size={size}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`disabled${size}`}
                title={`Disabled`}
                state={"disabled"}
                size={size}
                iconLeft={<CheckOutlined/>}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`disabled${size}`}
                title={`Disabled`}
                state={"disabled"}
                size={size}
                iconRight={<CloseOutlined/>}
                closable={true}
              />
            ))}
          </div>
        </Row>
        <Row
          style={{
            gap: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`outlined${size}`}
                title={`Outlined`}
                state={"outlined"}
                size={size}
                fontColorProps={"red"}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`outlined${size}`}
                title={`Outlined`}
                state={"outlined"}
                size={size}
                iconLeft={<CheckOutlined/>}
                fontColorProps={"green"}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`outlined${size}`}
                title={`Outlined`}
                state={"outlined"}
                size={size}
                iconRight={<CloseOutlined/>}
                closable={true}
              />
            ))}
          </div>
        </Row>
        <Row
          style={{
            gap: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`colored${size}`}
                title={`Colored`}
                state={"Colored"}
                size={size}
                color={color}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`colored${size}`}
                title={`Colored`}
                state={"colored"}
                size={size}
                iconLeft={<CheckOutlined/>}
                color={color}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {SIZES_DEFAULT.map((size)=>(
              <TAG_V_2_0_2
                id={`colored${size}`}
                title={`Colored`}
                state={"colored"}
                size={size}
                iconRight={<CloseOutlined/>}
                closable={true}
                color={color}
                fontColorProps={"#F0F2F5"}
              />
            ))}
          </div>
          <div>
            *use the set color in the top right corner 
          </div>
        </Row>
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={TAG_DATA_EXAMPLE}/>
    </MainSection>
  )
}

export default TagPage

