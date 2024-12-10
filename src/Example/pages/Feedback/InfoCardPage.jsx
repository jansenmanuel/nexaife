import React from 'react'
import { InfoCard as INFOCARD_V_2_0_2 } from '../../../Component'
import style from './InfoCardPage.module.scss'
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section'
import { IMPORT_INFOCARD_EXAMPLE, INFOCARD_PROPS_DATA, USAGE_INFOCARD_EXAMPLE } from '../../data/infoCardDataPage'
import CodeBlock from '../../componentsExample/CodeBlock'
import ApiPropsTable from '../../componentsExample/ApiPropsTable'
import { exampleApiCol } from '../../config'

const InfoCardPage = () => {
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius vulputate eros, ut egestas ipsum imperdiet ut. Quisque facilisis auctor efficitur. Nulla facilisi. Cras vel accumsan est. Sed fermentum nisi nunc, ac euismod justo vulputate mollis. Phasellus aliquam urna sit amet nulla viverra fermentum. Vivamus aliquam varius mi at sollicitudin. Nunc a velit est. Vivamus tincidunt vitae justo id dictum. Vivamus quis arcu massa. Nam libero odio, finibus sed aliquam sit amet, egestas eu nunc. Praesent et sapien diam. Praesent imperdiet enim quis pellentesque ornare. Duis vitae arcu eget orci feugiat sodales. Aliquam sed pharetra tellus. Duis vitae sodales sem. Mauris accumsan pretium felis in suscipit."
  const desc230char = "Lorem ipsum sdolor sit amet, consectetur adipiscing elit. Duis lacinia luctus urna, eu efficitur ipsum venenatis in. Maecenas porttitor elit id erat venenatis, non varius mi aliquet. Nunc tristique vehicula nisi, id sodales nulla."
  const dest261char = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci lacus, eleifend sit amet varius nec, accumsan sed purus. Donec quis mi lorem. Donec sagittis lectus nec risus volutpat pulvinar. Integer laoreet pellentesque feugiat. Cras sit amet leo ex."
  const desc2brs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci lacus, eleifend sit amet varius nec, accumsan sed purus."

  return (
    <MainSection>
      <HeaderSection
        title={"Information Card"}
      />
      <ImportSection
        code={IMPORT_INFOCARD_EXAMPLE}
      />
      <Section
        title={"Usage"}
      >
        <CodeBlock
          code={USAGE_INFOCARD_EXAMPLE}
        />
      </Section>
      <Section
        title={"Types"}
      >
        <INFOCARD_V_2_0_2 id={"infocard1"} description={desc} closable={true} width={'300px'} />
        <INFOCARD_V_2_0_2 id={"infocard2"} state={'error'} description={desc} width={'50%'} />
        <INFOCARD_V_2_0_2 id={"infocard3"} description='This is a description' width={'850px'} />
        <INFOCARD_V_2_0_2 id={"infocard4"} description={desc} closable={false} state='warning' />
        <INFOCARD_V_2_0_2 id={"infocard5"} description={dest261char} closable={false} state='success' />
        <INFOCARD_V_2_0_2 id={"infocard6"} description={desc} closable={false} state='information' />
        <INFOCARD_V_2_0_2 id={"infocard7"} description={desc230char} closable={false} state='error' />
        <INFOCARD_V_2_0_2 id={"infocard8"} description={desc2brs} closable={false} state='warning' />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={INFOCARD_PROPS_DATA}/>
    </MainSection>
  )
}

export default InfoCardPage

