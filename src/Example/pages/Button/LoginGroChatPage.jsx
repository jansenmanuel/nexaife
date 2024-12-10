import React, { useState } from 'react'
import { BUTTON_LOGIN_GROCHAT_V_2_0_2, ButtonLoginGrochat as BUTTON_LOGIN_GROCHAT_V_2_0_3 } from '../../../Component'
import style from './LoginGroChatPage.module.scss'
import { useSelector } from 'react-redux';
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { BUTTON_LOGIN_GROCHAT_DATA_EXAMPLE, IMPORT_BUTTON_LOGIN_WITH_GROCHAT, USAGE_BUTTON_LOGIN_WITH_GROCHAT } from '../../data/buttonDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';
import { SIZES } from '../../Constant/generalConstant';
import ApiPropsTable from '../../componentsExample/ApiPropsTable';
import { exampleApiCol } from '../../config';

export default function LoginGroChatPage() {
  const [dataFromChild, setDataFromChild] = useState('');
  const mainColor = useSelector((state) => state.properties.mainColor)

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    alert(dataFromChild)
  }

  return (
    <MainSection>
      <HeaderSection
        title={"Login With GroChat"}
        subtitle={"Button Login with GroChat"}
      />
      <ImportSection
        code={IMPORT_BUTTON_LOGIN_WITH_GROCHAT}
      />
      <Section
        title={"Usage"}
      >
        <CodeBlock
          code={USAGE_BUTTON_LOGIN_WITH_GROCHAT}
        />
      </Section>
      <Section
        title={"Sizes"}
      >
        {["s", "m", "l", "xl"].map((size) => (
          <span key={size}>
            <BUTTON_LOGIN_GROCHAT_V_2_0_3
              size={size}
              onClick={handleDataFromChild}
              mainColor={mainColor}
            />
          </span>
        ))}
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={BUTTON_LOGIN_GROCHAT_DATA_EXAMPLE}/>
    </MainSection>
  )
}


