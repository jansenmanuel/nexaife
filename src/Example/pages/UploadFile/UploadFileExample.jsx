import { Table, Typography, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FileUpload as FileUpload_V_2_0_3 } from "../../../Component";
import { HeaderSection, ImportSection, MainSection, Section } from "../../componentsExample/Section";
import { IMPORT_UPLOAD_FILE_EXAMPLE, USAGE_UPLOAD_FILE_EXAMPLE } from "../../data/uploadFileDataPage";
import CodeBlock from "../../componentsExample/CodeBlock";
// import { createClient } from "@supabase/supabase-js";



const UploadFileExample = () => {
  const { mainColor } = useSelector((state) => state.properties)
  const [fileList, setFileList] = useState([]);

  // const supabase = createClient("https://rppaptffjuebaqpxvrgn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGFwdGZmanVlYmFxcHh2cmduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTY2ODY3MCwiZXhwIjoyMDQ1MjQ0NjcwfQ.Ttv3evJtss_8GfldW0ZjMOPMRKFY_GzRybyDwJuM-mA")

  // const customRequest = async ({ file, onSuccess, onError, onProgress }) => {
  //     const { data, error } = await supabase.storage
  //         .from('fileUploads') // Ganti dengan nama bucket Anda
  //         .upload(`uploads/${file.name}`, file, {
  //             cacheControl: '3600',
  //             upsert: false,
  //             onProgress: (progress) => {
  //                 const percent = (progress.bytesUploaded / progress.bytesTotal) * 100;
  //                 onProgress({ percent }, { loaded: progress.bytesUploaded, total: progress.bytesTotal });
  //                 console.log("on progress percent", percent);
  //             }
  //         });

  //     if (error) {
  //         console.error('Upload failed:', error);
  //         return onError(); // Panggil onError jika terjadi kesalahan
  //     }

  //     console.log('Upload successful:', data);
  //     onSuccess(data); // Panggil onSuccess jika upload berhasil
  // };

  //custom request fix
  const customRequest = async ({ file, onSuccess, onError, onProgress }) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    // Replace with your Supabase storage URL
    const uploadUrl = `https://rppaptffjuebaqpxvrgn.supabase.co/storage/v1/object/fileUploads/uploads/${file.name}`;

    xhr.open('POST', uploadUrl, true);
    xhr.setRequestHeader('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGFwdGZmanVlYmFxcHh2cmduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTY2ODY3MCwiZXhwIjoyMDQ1MjQ0NjcwfQ.Ttv3evJtss_8GfldW0ZjMOPMRKFY_GzRybyDwJuM-mA`);

    // Track the upload progress
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        onProgress({ percent: percentComplete }, { loaded: event.loaded, total: event.total });
        console.log('Upload progress:', percentComplete.toFixed(2) + '%');
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log('Upload successful:', response);
        onSuccess(response);
      } else {
        console.error('Upload failed:', xhr.responseText);
        onError(xhr.responseText);
      }
    };

    xhr.onerror = () => {
      console.error('Upload failed due to network error');
      onError();
    };

    xhr.send(formData);
  };



  const handleFileListChange = (newFileList) => {
    setFileList(newFileList);
  };

  const handleMessageError = (ThrownMessage) => {
    message.error(ThrownMessage)
  }

  const handleMessageFileType = (ThrownMessage) => {
    message.error(ThrownMessage)
  }

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
      name: 'sizeField',
      desc: 'Props untuk menentukan ukuran komponen',
      default: 'sm',
      type: 'string',
      example: '"sm" , "md", "lg", "xl", "xxl"',
    },
    {
      key: '2',
      name: 'primaryColor',
      desc: 'Props untuk merubah warna primary sesuai project',
      type: 'hexacode atau property warna',
      default: 'black',
      example: '#eee',
    },
    {
      key: '3',
      name: 'fileType',
      desc: 'Props untuk menentukan jenis file yang di support oleh field upload',
      type: 'array of string',
      default: '[`image/jpeg`, `image/png`]',
      example: '[`image/jpeg`, `.xlsx`]',
    },
    {
      key: '4',
      name: 'handleFileListChange',
      desc: 'props untuk melempar hasil upload file. masukan ke fucntion lokal untuk melakukan kelola file data ',
      type: 'function',
      default: '-',
      example: 'const handleFileListChange = (newFileList) => setFileList(newFileList)',
    },
    {
      key: '5',
      name: 'fileSize',
      desc: 'Props untuk menentukan ukuran maksimal file',
      type: 'int',
      default: '20 mb',
      example: '20',
    },
    {
      key: '6',
      name: 'messageErrorFileType',
      desc: 'Props untuk menerima lemparan error message terkait ekkstensi file',
      type: 'string',
      default: '-',
      example: 'const handleMessageError = (ThrownMessage) => {                message.error(ThrownMessage)            }',
    },
    {
      key: '7',
      name: 'messageErrorFileSize',
      desc: 'Props untuk menerima lemparan error message terkait ukuran file',
      type: 'string',
      default: '-',
      example: 'const handleMessageError = (ThrownMessage) => {                message.error(ThrownMessage)            }',
    },
    {
      key: '8',
      name: 'maxCount',
      desc: 'Props untuk membatasi jumlah file yang boleh di upload',
      type: 'int',
      default: '1',
      example: '2',
    },
    {
      key: '9',
      name: 'id',
      desc: "Props untuk id component",
      type: 'string',
      default: '""',
      example: "id-001"
    },
    {
      key: '10',
      name: 'errorField',
      desc: 'Props untuk menampilkan kondisi jika error, seperti required',
      type: 'boolean',
      default: 'false',
      example: "true"

    },
    {
      key: '11',
      name: 'errorInformation',
      desc: 'Props untuk menampilkan messsage jika error, seperti required',
      type: 'string',
      default: '',
      example: "ini error"

    },
    {
      key: '12',
      name: 'disabled',
      desc: 'Props untuk mengatur kondisi enabled atau disabled',
      type: 'boolean',
      default: 'false',
      example: "true"

    }
  ]
  return (
    <MainSection>
      <HeaderSection
        title={"Upload File"}
      />
      <ImportSection
        code={IMPORT_UPLOAD_FILE_EXAMPLE}
      />
      <Section title={"Usage"}>
        <CodeBlock code={USAGE_UPLOAD_FILE_EXAMPLE} />
      </Section>
      <Section title={"Example"}>
        <FileUpload_V_2_0_3
          initialFileList={fileList}
          id={"tes123"}
          errorInformation={"error"}
          errorField={true}
          maxCount={3}
          sizeField={"sm"}
          primaryColor={mainColor}
          handleFileListChange={handleFileListChange}
          fileType={['image/jpeg', 'image/png', 'video/mp4']}
          messageErrorFileSize={handleMessageError}
          messageErrorFileType={handleMessageFileType}
        />
        <FileUpload_V_2_0_3
          initialFileList={fileList}
          maxCount={3}
          sizeField={"md"}
          primaryColor={mainColor}
          handleFileListChange={handleFileListChange}
          fileSize={5}
          fileType={['image/jpeg', 'image/png', 'video/mp4']}
          messageErrorFileSize={handleMessageError}
          messageErrorFileType={handleMessageFileType}
        />
        <FileUpload_V_2_0_3
          maxCount={3}
          sizeField={"lg"}
          primaryColor={mainColor}
          handleFileListChange={handleFileListChange}
          fileSize={5}
          fileType={['image/jpeg', 'image/png', 'video/mp4']}
          messageErrorFileSize={handleMessageError}
          messageErrorFileType={handleMessageFileType}
        />
        <FileUpload_V_2_0_3
          errorField={true}
          maxCount={3}
          sizeField={"xxl"}
          primaryColor={mainColor}
          handleFileListChange={handleFileListChange}
          fileSize={5}
          fileType={['image/jpeg', 'image/png', 'video/mp4']}
          messageErrorFileSize={handleMessageError}
          messageErrorFileType={handleMessageFileType}
          customRequest={customRequest}
        />
        <FileUpload_V_2_0_3
          errorField={true}
          maxCount={1}
          sizeField={"xxl"}
          primaryColor={mainColor}
          handleFileListChange={handleFileListChange}
          fileSize={5}
          fileType={['image/jpeg', 'image/png', 'video/mp4', 'video/x-matroska', 'video/matroska', 'video/quicktime']}
          messageErrorFileSize={handleMessageError}
          messageErrorFileType={handleMessageFileType}
        />
      </Section>
      <Section title={"Props"}>
        <Table
          columns={columns}
          dataSource={data}
        />
      </Section>
    </MainSection>
  )
}

export default UploadFileExample;