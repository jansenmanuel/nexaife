import React, { useState } from 'react'
import PreviewAds from '../../../Component/Molecules/PreviewAds/PreviewAds';
import { Table, Typography } from 'antd';
import { FileUpload as FileUpload_V_2_0_3 } from '../../../Component';
import { HeaderSection, ImportSection, MainSection, Section } from '../../componentsExample/Section';
import { IMPORT_PREVIEW_ADS_EXAMPLE, USAGE_PREVIEW_ADS_EXAMPLE } from '../../data/previewAdsDataPage';
import CodeBlock from '../../componentsExample/CodeBlock';

const PreviewAdsExample = () => {
  const [fileList, setFileList] = useState([]);
  const [fileListVideo, setFileListVideo] = useState([
    {
      "uid": "rT-uploaDDvideo",
      "name": "video (1).mp4",
      "size": 1678,
      "url": "https://gromart.blob.core.windows.net/gromatedisk/gromate/banner/carousel/staging/926b717fedc14489b7a68f9df256bf22_2.mp4",
      "file_name": "download (2)",
    }
  ]);
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
      desc: 'Props untuk id component',
      default: '-',
      type: 'string',
      example: '',
    },
    {
      key: '2',
      name: 'previewType',
      desc: 'Props untuk menentukan jenis preview  Ads',
      default: '',
      type: 'string',
      example: 'image, video, carousel',
    },
    {
      key: '3',
      name: 'fileList',
      desc: 'Props mengirimkan file gambar / video',
      default: '',
      type: 'array',
      example: '-',
    },
    {
      key: '4',
      name: 'customTitle',
      desc: 'Props mengirimkan title untuk gambar / video',
      default: '',
      type: 'string',
      example: '-',
    },
  ]
  const handleFileListChange = (newFileList) => {
    setFileList(newFileList);
  };
  const handleFileListChangeVideo = (newFileList) => {
    setFileListVideo(newFileList);
  };

  return (
    <MainSection>
      <HeaderSection title={"Preview Ads"} />
      <ImportSection code={IMPORT_PREVIEW_ADS_EXAMPLE} />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_PREVIEW_ADS_EXAMPLE} />
      </Section>
      <Section title={"Example"}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', margin: "20px 20px", justifyContent: 'left' }}>
            <FileUpload_V_2_0_3
              initialFileList={fileList}
              id={"tes123"}
              errorInformation={"error"}
              errorField={false}
              maxCount={3}
              sizeField={"sm"}
              // primaryColor={mainColor}
              handleFileListChange={handleFileListChange}
              fileType={['image/jpeg', 'image/png', 'video/mp4', 'video/quicktime']}
            // disabled={true}
            />
            upload image
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', margin: "20px 0", justifyContent: 'left' }}>
            <FileUpload_V_2_0_3
              initialFileList={fileListVideo}
              id={"tes123"}
              errorInformation={"error"}
              errorField={false}
              maxCount={3}
              sizeField={"sm"}
              // primaryColor={mainColor}
              handleFileListChange={handleFileListChangeVideo}
              fileType={['image/jpeg', 'image/png', 'video/mp4', 'video/quicktime']}
            />
            upload video ADS
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
          <div style={{
            padding: '3px'
          }}>
            <PreviewAds
              previewType={""}
              id={"tes preview"}
            />
            <Typography.Title >
              Default
            </Typography.Title>

          </div>
          <div style={{
            padding: '3px'
          }}>
            <PreviewAds
              previewType={"carousel"}
              id={"tes preview"}
              fileList={fileList}
              customTitle={"Custom Title"}
            />
            <Typography.Title >
              Carousel
            </Typography.Title>
          </div>
          <div style={{
            padding: '3px'
          }}>
            <PreviewAds
              previewType={"image"}
              id={"tes preview"}
              fileList={fileList}
              customTitle={"Custom Title"}
            />
            <Typography.Title >
              Image
            </Typography.Title>
          </div>
          <div style={{
            padding: '3px'
          }}>
            <PreviewAds
              previewType={"video"}
              id={"tes preview"}
              fileList={fileListVideo}
              customTitle={"Custom Title"}
            />
            <Typography.Title >
              Video
            </Typography.Title>
          </div>
        </div>
      </Section>
      <Section title={"Props"}>
        <Table
          columns={columns}
          dataSource={data}
        />
      </Section>
    </MainSection>
  );
}

export default PreviewAdsExample;