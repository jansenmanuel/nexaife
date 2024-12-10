import { Tag, Transfer } from 'antd';
import React, { useState } from 'react';
import "./TransferFiles.scss"
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../config/i18nConfig';

const TRANSFER_FILE_BASE = ({
  id,
  listData,
  targetKeys,
  handleChangeData,
  titleLeft,
  titleRight,
}) => {
  const { t } = useTranslation();
  const [countDataLeft, setCountDataLeft] = useState({
    selected: 0,
    totalCount: 0
  })
  const [countDataRight, setCountDataRight] = useState({
    selected: 0,
    totalCount: 0
  })

  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
  const handleChange = (newTargetKeys) => {
    function compareNumber(a, b) {
      return a - b
    }
    handleChangeData(newTargetKeys.sort(compareNumber));
  };
  const renderFooter = (_, { direction }) => {
    if (direction === 'left') {
      return (
        <div
          style={{
            height: '56px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 10px'
          }}
        >
          <p className='footer-transfer-list'>{t("COMMON:TRANSFER_FILE.CHOICES")}</p>
          <p className='footer-transfer-list'>{countDataLeft.selected} / {countDataLeft.totalCount} {t("COMMON:TRANSFER_FILE.SELECTED")}</p>
        </div>
      );
    }
    return (
      <div
        style={{
          height: '56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 10px'
        }}
      >
        <p className='footer-transfer-list'>{t("COMMON:TRANSFER_FILE.CHOICES")}</p>
        <p className='footer-transfer-list'>{countDataRight.selected} / {countDataRight.totalCount} {t("COMMON:TRANSFER_FILE.SELECTED")}</p>
      </div>
    );
  };
  const leftLabel = ({ selectedCount, totalCount }) => {
    if (selectedCount !== countDataLeft.selected || totalCount !== countDataLeft.totalCount) {
      setCountDataLeft({
        selected: selectedCount,
        totalCount: totalCount
      });
    }
    return (
      <p className='title-transfer-list'>{titleLeft || t("COMMON:TRANSFER_FILE.TITLE_LEFT")}</p>
    )
  }

  const rightLabel = ({ selectedCount, totalCount }) => {
    if (selectedCount !== countDataRight.selected || totalCount !== countDataRight.totalCount) {
      setCountDataRight({
        selected: selectedCount,
        totalCount: totalCount
      });
    }
    return (
      <p className='title-transfer-list'>{titleRight || t("COMMON:TRANSFER_FILE.TITLE_RIGHT")}</p>
    )
  }
  return (
    <Transfer
      dataSource={listData}
      render={(item) => item.title}
      listStyle={{
        width: '486px',
        height: '572px'
      }}
      showSearch
      filterOption={filterOption}
      onChange={handleChange}
      targetKeys={targetKeys}
      selectAllLabels={[leftLabel, rightLabel]}
      footer={renderFooter}
    // titles={[<Tag color="geekblue">I am on Left</Tag>, <Tag color="geekblue">I am on right</Tag>]}
    // selectAllLabels={[
    //   ({ selectedCount, totalCount }) => (
    //     <span>
    //       {selectedCount} of {totalCount}
    //       <Tag color="geekblue">left</Tag>
    //     </span>
    //   ), ({ selectedCount, totalCount }) => (
    //     <span>
    //       {selectedCount} of {totalCount}
    //       <Tag color="geekblue">right</Tag>
    //     </span>
    //   )
    // ]}
    // pagination
    />
  );
}

TransferFile.defaultProps = {
  listData: [],
  targetKeys: [],
  handleChangeData: () => { },
  // titleLeft: "Title Left",
  // titleRight: "Title Right"
}

export default function TransferFile(props){
  return (
    <I18nextProvider i18n={i18n}>
      <TRANSFER_FILE_BASE {...props}/>
    </I18nextProvider>
  );
};