import { message } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import UploadIcon from "../../Asset/Icon/UploadIcon";
import DIALOG_V_2_1_2 from "../Dialog/Dialog";
import "./FileUploadCss.scss";
import { debounce } from "lodash";
import ErrorInformation from "../../Atomic/Error/ErrorInformation";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../config/i18nConfig";


const FILEUPLOAD_BASE = ({
    id,
    maxCount,
    sizeField,
    primaryColor,
    fileType,
    handleFileListChange,
    fileSize,
    messageErrorFileType,
    messageErrorFileSize,
    errorField,
    errorInformation,
    initialFileList,
    disabled,
    customRequest
}) => {
    const { t } = useTranslation();
    const [internalFileList, setInternalFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewTitle, setPreviewTitle] = useState(null);
    const [mediaUrl, setMediaUrl] = useState("");
    const [isVideo, setIsvideo] = useState("")

    const mainColors = "--main-color"
    const visibleComponent = "--visible-component"
    const borderColorCondition = "--border-color-condition"

    const handleCancelDialog = () => {
        setPreviewOpen(false)
    }

    useEffect(() => {
        setInternalFileList(initialFileList);
    }, [initialFileList]);

    //onChange sebelumnya
    // const onChangeFormFile = (info) => {
    //     setInternalFileList(prevFileList => {
    //         if (info.file.status === "done") {
    //             console.log("in onChange done",info )
    //             handleFileListChange(info.fileList); // Update parent state
    //         }
    //         else if (info.file.status === 'removed') {
    //             // File is removed
    //             console.log("in onChange removed", info )
    //             const removedFileUid = info.file.uid;
    //             console.log("removedFileUid", removedFileUid)
    //             setInternalFileList(prevFileList => {
    //                 const updatedFileList = prevFileList.filter(file => file.uid !== removedFileUid);
    //                 handleFileListChange(updatedFileList); // Update parent state
    //                 return updatedFileList;
    //             });
    //         }
    //         else{
    //             console.log("info file else", info)
    //             info.file.status === "error" ? console.log("ada error") : console.log("gaada") 
    //         }
    //         return info.fileList;

    //     });

    //     // if (info.file.status === 'done') {
    //     //     const reader = new FileReader();

    //     //     reader.onload = (e) => {

    //     //         const base64WithoutPrefix = e.target.result.split(',')[1];
    //     //         const fileNameWithExtension = info.file.name;
    //     //         const fileExtension = fileNameWithExtension.slice(((fileNameWithExtension.lastIndexOf(".") - 1) >>> 0) + 2);
    //     //         const fileNameWithoutExtension = fileNameWithExtension.replace(`.${fileExtension}`, '');

    //     //         // File is uploaded
    //     //         const file = {
    //     //             uid: info.file.uid,
    //     //             name: info.file.name,
    //     //             size: info.file.size,
    //     //             url: info.file.response ? info.file.response.url : '',
    //     //             file_name: fileNameWithoutExtension,
    //     //             type: `.${fileExtension}`,
    //     //             base_64: base64WithoutPrefix,
    //     //             originFileObj: info.file.originFileObj
    //     //         };
    //     //         setInternalFileList(prevFileList => {
    //     //             const updatedFileList = [...prevFileList, file];
    //     //             handleFileListChange(updatedFileList); // Update parent state
    //     //             return updatedFileList;
    //     //         });
    //     //     }
    //     //     reader.readAsDataURL(info.file.originFileObj);
    //     // 
    // };

    const onChangeFormFile = (info) => {
        setInternalFileList(prevFileList => {
            if (info.file.status === "done") {
                handleFileListChange(info.fileList); // Update parent state
            }
            else if (info.file.status === 'removed' || info.file.status === "error") {
                // File is removed
                const removedFileUid = info.file.uid;
                const updatedFileList = prevFileList.filter(file => file.uid !== removedFileUid);
                handleFileListChange(updatedFileList); // Update parent state
                return updatedFileList;
            }
            return info.fileList; // Return the updated file list in other cases
        });
    };


    const beforeUpload = (file) => {
        // Function to check if file type matches any in the fileType array
        const isFileTypeAllowed = (file) => {
            return fileType.includes(file.type);
        };
        if (!isFileTypeAllowed(file)) {
            messageErrorFileType(`You can only upload ${fileType.join(', ')} file!`)
            // message.error(`You can only upload ${fileType.join(', ')} file!`);
            return Dragger.LIST_IGNORE;
        }
        const isLt2M = file.size / 1024 / 1024 < fileSize;
        if (!isLt2M) {
            messageErrorFileSize(`File must smaller than ${fileSize}MB!`)
            // message.error('Image must smaller than 5MB!');
            return Dragger.LIST_IGNORE
        }
        return true;
    };

    //mas rofi existing
    // const customRequest = ({ file, onSuccess, onProgress, onError }) => {
    //     // const shouldUpload = beforeUpload(file);
    //     console.log("file", file);
    //     const isFileTypeAllowed = fileType.includes(file.type)
    //     const isFileSizeAllowed = file.size / 1024 / 1024 < fileSize
    //     if (!isFileSizeAllowed || !isFileTypeAllowed) {
    //         // If beforeUpload returns false, don't proceed with customRequest
    //         return onError();
    //     }
    //     // Simulate progressive loading progress
    //     let progress = 0;
    //     const simulateProgress = () => {
    //         if (progress <= 70) {
    //             progress += 30;
    //         } else if (progress > 70) {
    //             progress += 15;
    //         }
    //         console.log("progress", progress);

    //         onProgress({ percent: progress }, { loaded: progress, total: 100 });

    //         if (progress < 100) {
    //             setTimeout(simulateProgress, 500); // Adjust the delay here (currently set to 500 milliseconds)
    //         } else {
    //             setTimeout(() => {
    //                 onSuccess();
    //             }, 500);
    //         }
    //     };

    //     setTimeout(simulateProgress, 500); // Start the initial progress after a delay
    // }


    //handleCustomrrequest

    const customRequestHandler = ({ file, onSuccess, onError, onProgress }) => {
        // Logika hardcoded
        const isFileTypeAllowed = fileType.includes(file.type);
        const isFileSizeAllowed = file.size / 1024 / 1024 < fileSize;

        if (!isFileSizeAllowed || !isFileTypeAllowed) {
            return onError();
        }

        // Menggunakan customRequest yang diteruskan dari parent
        if (customRequest) {
            return customRequest({ file, onSuccess, onError, onProgress });
        }

        // Simulasi progres pengunggahan
        let progress = 0;
        const simulateProgress = () => {
            progress += 10; // Naikkan progres
            onProgress({ percent: progress }, { loaded: progress, total: 100 });
            if (progress < 100) {
                setTimeout(simulateProgress, 500); // Perbarui setiap 500 ms
            } else {
                setTimeout(() => {
                    onSuccess(file); // Panggil onSuccess saat selesai
                }, 500);
            }
        };
        simulateProgress(); // Mulai simulasi
    };

    // const handlePreview = async (file) => {
    //     if (file.type === 'video/mp4') {
    //         const fileObj = file.originFileObj;

    //         // Generate a URL for the file
    //         const videoUrl = URL.createObjectURL(fileObj);
    //         setIsvideo(true)
    //         setMediaUrl(videoUrl);
    //     } else {
    //         if (!file.url && !file.preview) {
    //             file.preview = await getBase64(file.originFileObj);
    //         }
    //         setMediaUrl(file.url || file.preview);
    //         setIsvideo(false)
    //     }

    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    //     setPreviewOpen(true);
    // };

    // const handlePreview = async (file) => {
    //     console.log("file", file);
    //     const isVideoLink = (url) => {
    //         return url && /\.(mp4|webm|ogg|mov)$/i.test(url);
    //     };

    //     if (file.type === ('video/mp4' || 'video/quicktime') || isVideoLink(file.url)) {
    //         const videoUrl = file.url || URL.createObjectURL(file.originFileObj);
    //         setIsvideo(true);
    //         setMediaUrl(videoUrl);
    //     } else {
    //         if (!file.url && !file.preview) {
    //             file.preview = await getBase64(file.originFileObj);
    //         }
    //         setMediaUrl(file.url || file.preview);
    //         setIsvideo(false);
    //     }

    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    //     setPreviewOpen(true);
    // };

    const handlePreview = async (file) => {
        const isVideoLink = (url) => /\.(mp4|webm|ogg|mov)$/i.test(url);

        const isVideoFileType = (type) =>
            type === 'video/mp4' || type === 'video/quicktime';

        let videoUrl = '';

        if (isVideoFileType(file.type) || isVideoLink(file.url)) {
            videoUrl = file.url || URL.createObjectURL(file.originFileObj);
            setIsvideo(true);
        } else {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            setIsvideo(false);
        }

        setMediaUrl(videoUrl || file.url || file.preview);

        setPreviewTitle(file.name || (file.url && file.url.substring(file.url.lastIndexOf('/') + 1)) || 'Untitled');

        setPreviewOpen(true);
    };



    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const getFileTypeDisplay = (fileType) => {
        let hasMatroska = false;

        return fileType.reduce((acc, type) => {
            if (type === "video/mp4") {
                acc.push("video/mp4");
            } else if ((type === "video/x-matroska" || type === "video/matroska") && !hasMatroska) {
                acc.push("video/mkv");
                hasMatroska = true;
            } else if (type === "video/quicktime") {
                acc.push("video/mov");
            } else if (type !== "video/x-matroska" && type !== "video/matroska") {
                acc.push(type);
            }
            return acc;
        }, []).join(', ');
    };

    return (
        <div
            style={{
                display: 'flex',
                // justifyContent: 'center'
                flexDirection: 'column'
            }}
            className={`customize-size-${sizeField}`}>
            <Dragger
                disabled={disabled}
                id={id}
                style={{
                    [mainColors]: primaryColor,
                    [visibleComponent]: internalFileList?.length >= maxCount ? "none" : "flex",
                    [borderColorCondition]: errorField ? "#ff4d4f" : "#DADCDE"
                }}
                className={`dragger-customize-${sizeField}`}
                progress={{
                    strokeColor: {
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    },
                    strokeWidth: 3,
                    format: percent => percent && `${parseFloat(percent.toFixed(2))}%`,
                }}
                listType="picture"
                multiple={false}
                maxCount={maxCount}
                beforeUpload={beforeUpload}
                onChange={onChangeFormFile}
                disabledClick={false}
                customRequest={customRequestHandler}
                onPreview={handlePreview}
                fileList={internalFileList}
            >
                <div>
                    <UploadIcon
                        color={primaryColor}
                        size={sizeField === "sm" ? 16 :
                            sizeField === "md" ? 20 :
                                sizeField === "lg" ? 24 :
                                    sizeField === "xl" ? 28 :
                                        36
                        }
                    />

                </div>
                <div className={`text-form-perubahan size-${sizeField}`}>
                    {t("COMMON:FILE_UPLOAD.DESCRIPTION")}
                </div>
                <div className={`text-upload-file-sub-title size-${sizeField}`}>
                    {getFileTypeDisplay(fileType)}
                </div>
            </Dragger>
            {errorInformation && errorField ? (
                <ErrorInformation text={errorInformation} size={sizeField} />
            ) : (
                <></>
            )}
            <DIALOG_V_2_1_2
                type="media"
                open={previewOpen}
                onOk={() => handleCancelDialog()}
                onCancel={() => handleCancelDialog()}
                size="md"
                onOkTitle="Yes"
                onCancelTitle="No"
                title={previewTitle}
                mainColor={primaryColor}
                alt={"image-popup.png"}
                mediaUrl={mediaUrl}
                isVideo={isVideo}
            />
        </div>
    )
}

FILEUPLOAD_V_2_0_3.defaultProps = {
    id: "",
    sizeField: "sm",
    primaryColor: "black",
    fileType: ['image/jpeg', 'image/png'],
    fileSize: 20,
    messageErrorFileType: "",
    messageErrorFileSize: "",
    handleFileListChange: () => { },
    maxCount: 1,
    errorInformation: "",
    disabled: false,
    customRequest: null
}

export default function FILEUPLOAD_V_2_0_3(props){
    return (
        <I18nextProvider i18n={i18n}>
            <FILEUPLOAD_BASE {...props}/>
        </I18nextProvider>
    );
}



// this code below is to customize file preview
// itemRender={(originNode, file, fileList) => (
//     <div className="ant-upload-list-item ant-upload-list-item-done">
//         <div className="ant-upload-list-item-info">
//             <span>
//                 <img className="ant-upload-list-item-thumbnail" src={file.url}  />
//                 <a className="ant-upload-list-item-name" title={file.name} href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
//             </span>
//             <span className="ant-upload-list-item-card-actions">
//                 <DeleteOutlined onClick={() => this.handleRemoveFile(file.uid)} />
//             </span>
//         </div>
//         <span className="ant-upload-list-item-size">{this.formatFileSize(file.size)}</span>
//     </div>
// )}
// previewFile={this.previewFile}