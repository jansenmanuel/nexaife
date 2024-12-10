import React, { useEffect, useState } from 'react';
import TransferFile from '../../../Component/Molecules/TransferFile/TransferFile';
import { Table, Typography } from 'antd';
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { IMPORT_TRANSFER_FILE_EXAMPLE, TRANSFER_FILE_PROPS_DATA, USAGE_TRANSFER_FILEL_EXAMPLE } from '../../data/transferListDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';
import ApiPropsTable from '../../componentsExample/ApiPropsTable';
import { exampleApiCol } from '../../config';
const TransferFileExample = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i,
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      };
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys([4, 5, 6, 7, 8, 19, 18, 0, 1, 3, 2]);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  return (
    <MainSection>
      <HeaderSection
        title={"Transfer List"}
      />
      <ImportSection
        code={IMPORT_TRANSFER_FILE_EXAMPLE}
      />
      <Section title={"Usage"}>
        <CodeBlock
          code={USAGE_TRANSFER_FILEL_EXAMPLE}
        />
      </Section>
      <Section title={"Example"}>
        <TransferFile
          listData={mockData}
          targetKeys={targetKeys}
          handleChangeData={handleChange}
          titleLeft={"Judul Kiri"}
        />
      </Section>
      <ApiPropsTable columns={exampleApiCol} dataSource={TRANSFER_FILE_PROPS_DATA}/>
    </MainSection>
  );
}

export default TransferFileExample;