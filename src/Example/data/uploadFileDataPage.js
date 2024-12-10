export const IMPORT_UPLOAD_FILE_EXAMPLE = `import { FileUpload_V_2_0_3 } from "nexcomponent-ui";`;
export const USAGE_UPLOAD_FILE_EXAMPLE = `
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
`;