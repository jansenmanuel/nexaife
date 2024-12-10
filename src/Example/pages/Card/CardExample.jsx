import { Col, Modal, Row, Table } from 'antd';
import React, { useState } from 'react';
import Cardv2_1_2 from '../../../Component/Molecules/Card/Card';
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { CARD_COMPONENT_PROPS_DATA, IMPORT_CARD_EXAMPLE, USAGE_CARD_EXAMPLE } from '../../data/cardDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';
import ApiPropsTable from '../../componentsExample/ApiPropsTable';


const CardExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClickIcon = () => {
    setIsOpen(true)
  }
  const example = [
    {
      key: '1',
      label: (
        <a onClick={onClickIcon} >
          menu 1
        </a>

      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://nexsoft.co.id/">
          menu 2
        </a>
      ),
    },
  ]
  const columns = [
    {
      title: 'Props Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Default',
      dataIndex: 'default',
      key: 'default',
    },
    {
      title: 'Example',
      dataIndex: 'example',
      key: 'example',
    },
  ]
  const data = [
    {
      key: '1',
      name: 'id',
      desc: 'Props untuk memberikan ID komponen',
      default: '',
      type: 'string',
      example: '',
    },
    {
      key: '2',
      name: 'actionProps',
      desc: 'Props untuk menentukan action nya, apakah single action atau multi. value bisa di isi 1 atau 2 untuk multi action, dan juga gunakan -1 untuk menghilangkan iconnya',
      type: 'Int',
      default: '1',
      example: '1',
    },
    {
      key: '3',
      name: 'onClickProps',
      desc: 'Props untuk meng handle onClick function jika hanya memiliki single action',
      type: 'function',
      default: '',
      example: '',
    },
    {
      key: '7',
      name: 'optionDropdown',
      desc: 'props untuk memberikan list item action melalui pada Dropdown ',
      type: 'array of object',
      default: `[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 1
                        </a>
    
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 2
                        </a>
                    ),
                },
            ]`,
      example: `[
                {
                    key: '1',
                    label: (
                        <Button >
                            tes
                        </Button>
        
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            menu 2
                        </a>
                    ),
                },
            ]`
    },
    {
      key: '4',
      name: 'titileCard',
      desc: 'props untuk memberikan Nama Card ',
      type: 'String',
      default: 'Pt. Title Card',
      example: 'PT. Nestle'
    },
    {
      key: '5',
      name: 'roleName',
      desc: 'Props untuk memberikan nama role',
      type: 'String',
      default: 'Role Name Card',
      example: 'Administrator Nestle',
    },
    {
      key: '6',
      name: 'datagroupName',
      desc: 'Props untuk memberikan nama data group',
      type: 'String',
      default: 'Data group card',
      example: 'Data Group Nestle',
    },
  ]
  return (
    <MainSection>
      <HeaderSection title={"Card"} />
      <ImportSection code={IMPORT_CARD_EXAMPLE} />
      <Section
        title={"Usage"}
      >
        <CodeBlock code={USAGE_CARD_EXAMPLE} />
      </Section>
      <Section title={"Example"}>
        <Row
          style={{ backgroundColor: 'white' }}>
          <Col sm={12} style={{ padding: '20px' }}>
            <Cardv2_1_2
              onClickProps={onClickIcon}
              actionProps={2}
              titileCard="Pt Nestle"
              roleName="Admin"
              datagroupName="All access"
              optionDropdown={example}
            />
          </Col>
          <Col sm={12} style={{ padding: '20px' }}>
            <Cardv2_1_2 />
          </Col>
          <Col sm={12} style={{ padding: '20px' }}>
            <Cardv2_1_2
              actionProps={-1}
            />
          </Col>
          <Modal
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={() => setIsOpen(false)}
          >
          </Modal>
        </Row>
      </Section>
      <Section title={"Props"}>
        <Table
          columns={columns}
          dataSource={data}
        >
        </Table>
      </Section>
    </MainSection>
  );
}

export default CardExample;