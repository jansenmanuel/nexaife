import React from 'react';
import { Divider as DIVIDER_V_2_0_1 } from '../../../Component';
import style from './DividerPage.module.scss'
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { DIVIDER_DATA_EXAMPLE, IMPORT_DATA_DIVIDER_EXAMPLE, USAGE_DIVIDER_EXAMPLE } from '../../data/dividerDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';
import ApiPropsTable from '../../componentsExample/ApiPropsTable';
import { exampleApiCol } from '../../config';

export default function DividerPage() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, finibus quis nisl sagittis, suscipit rutrum magna. In posuere mi nibh, id dapibus velit ultricies molestie. Quisque cursus dignissim dui, ac ornare lacus cursus et. Nulla vel dolor sed ex euismod tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet tortor sit amet lorem vehicula, sed laoreet augue imperdiet. Fusce maximus rhoncus aliquet. Sed nec nibh tristique, faucibus nulla vitae, vestibulum nulla. Nullam feugiat purus nec vulputate laoreet. Curabitur felis sem, consectetur non suscipit gravida, rhoncus vitae ligula. Ut non dui eu tellus semper fermentum non id urna. In quam mauris, lobortis a ullamcorper a, ornare sit amet quam.";

  return (
    <MainSection>
      <HeaderSection
        title={"Divider"}
        subtitle={"A divider line separates different content."}
      />
      <ImportSection code={IMPORT_DATA_DIVIDER_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_DIVIDER_EXAMPLE} />
      </Section>
      <Section title={"Sizes and Example"}>
        <div>
          <h2>small</h2>
          <DIVIDER_V_2_0_1 size="sm" />
        </div>
        <div>
          <h2>medium</h2>
          <DIVIDER_V_2_0_1 size="md" />
        </div>
        <div>
          <h2>large</h2>
          <DIVIDER_V_2_0_1 size="lg" />
        </div>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'start',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '10%' }}>
              <h3>Menu 1</h3>
            </div>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="lg" />
            </div>
          </div>
          <p style={{ textAlign: 'start' }}>{text}</p>
        </section>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'start',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '10%' }}>
              <h3>Menu 2</h3>
            </div>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="md" />
            </div>
          </div>
          <p style={{ textAlign: 'start' }}>{text}</p>
        </section>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'start',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '10%' }}>
              <h3>Menu 3</h3>
            </div>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="sm" />
            </div>
          </div>
          <p style={{ textAlign: 'start' }}>{text}</p>
        </section>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'end',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="lg" />
            </div>
            <div style={{ width: '10%' }}>
              <h3>Menu 1</h3>
            </div>
          </div>
          <p style={{ textAlign: 'end' }}>{text}</p>
        </section>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'end',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="md" />
            </div>
            <div style={{ width: '10%' }}>
              <h3>Menu 2</h3>
            </div>
          </div>
          <p style={{ textAlign: 'end' }}>{text}</p>
        </section>

        <section style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'end',
            justifyContent: 'space-between'
          }}>
            <div style={{ width: '90%' }}>
              <DIVIDER_V_2_0_1 size="sm" />
            </div>
            <div style={{ width: '10%' }}>
              <h3>Menu 3</h3>
            </div>
          </div>
          <p style={{ textAlign: 'end' }}>{text}</p>
        </section>
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={DIVIDER_DATA_EXAMPLE}/>

    </MainSection>
  );
}
