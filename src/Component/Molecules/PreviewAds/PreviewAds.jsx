import { Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import AdsVideoGroup from "../../Asset/Icon/AdsVideoGroup.png";
import ImageFooterAds from "../../Asset/Icon/ImageFooterAds.png";
import ImageHeaderAds from "../../Asset/Icon/ImageHeaderAds.png";
import ImageSkeleton from "../../Asset/Icon/imageSkeleton.png";
import "./PreviewAds.scss";
import { I18nextProvider, useTranslation } from "react-i18next";
import Div from "../../Atomic/Container/Div/Div";
import i18n from "../../config/i18nConfig";
import { set } from "lodash";


const PreviewAdsBase = ({
  id,
  primaryColor,
  previewType,
  fileList,
  customTitle,
}) => {
  // const mainColors = "--main-color"
  const { t } = useTranslation();
  const [internalFileList, setInternalFileList] = useState([]);
  const [videoFIle, setVideoFIle] = useState([]);
  const [singleVideoFile, setSingleVideoFile] = useState([]);
  const [doubleVideoFile, setDoubleVideoFile] = useState([]);
  const [carouselFile, setCarouselFile] = useState([]);


  useEffect(() => { 
    if (previewType === 'video') {
      if (fileList?.length > 0) {
        const videoPreview = fileList.map((fileItem) => {
          const fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }

          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setVideoFIle(videoPreview);
      } else {
        setVideoFIle([]);
      }
    } else if (previewType === 'singleVideo') {
      if (fileList?.length > 0) {
        const videoPreview = fileList.map((fileItem) => {
          const fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }

          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setSingleVideoFile(videoPreview);
      } else {
        setSingleVideoFile([]);
      }
    } else if (previewType === 'doubleVideo') {
      if (fileList?.length > 0) {
        const videoPreview = fileList.map((fileItem) => {
          const fileObj = fileItem.originFileObj;
          // Tambahkan pengecekan apakah ada link video
          if (fileItem.url && /\.(mp4|webm|ogg|mov)$/i.test(fileItem.url)) {
            return fileItem.url; // Jika ada link video, gunakan link tersebut
          }
          // Pengecekan jika fileObj valid (Blob atau File)
          if (fileObj instanceof Blob || fileObj instanceof File) {
            // Generate URL untuk file lokal
            return URL.createObjectURL(fileObj);
          } else {
            return null; // Handle invalid fileObj
          }
        }).filter(Boolean); // Filter untuk menghapus nilai `null` atau `undefined`

        setDoubleVideoFile(videoPreview);
      } else {
        setDoubleVideoFile([]);
      }
    }
    else if (previewType === 'carousel' || previewType === 'image') {
      if (fileList?.length > 0) {
        const previews = fileList.map((fileItem) => {
          const fileObj = fileItem.originFileObj;
          // Pengecekan jika fileObj valid (Blob atau File)
          if (!fileItem.url && !fileObj.preview) {
            return getBase64(fileObj)
              .then((base64) => {
                return base64; // Mengembalikan base64 dari setiap file
              })
              .catch((error) => {
                return null;
              });
          } else {
            return fileItem.url || fileObj.preview;
          }
        });
        // Tunggu semua promises selesai sebelum update state
        Promise.all(previews).then((result) => {
          setCarouselFile(result.filter(Boolean)); // Hanya simpan hasil yang valid
          setInternalFileList(result.filter(Boolean));
        });
      } else {
        setCarouselFile([]);
        setInternalFileList([]);
      }
    }
    else {
      if (fileList?.length > 0) {
        if (!fileList[0].url && !fileList[0].preview) {
          getBase64(fileList[0].originFileObj)
            .then((base64) => {
              fileList[0].preview = base64;
              setInternalFileList(fileList[0].preview);
            })
            .catch((error) => console.error('Error converting to base64:', error));
        } else {
          setInternalFileList(fileList[0].preview || fileList[0].url);
        }
      } else {
        setInternalFileList([]);
      }
    }
  }, [fileList]);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <div id={id} className="custom-preview-ads">
        <div className="header-preview-ads">
          <Image preview={false} src={ImageHeaderAds} />
        </div>
        <div className="body-preview">
          {previewType === 'image' ?
            <>
              <div className="body-image-middle">
                {/* <div className="body-image"> */}
                <div className="skeleton-image" >
                  <div className="skeleton-middle-image-top">
                    <Image preview={false} src={ImageSkeleton} />
                  </div>
                  <div className="skeleton-middle-image-top">
                    <Image preview={false} src={ImageSkeleton} />
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div
                className="body-carousel"
              >
                {/* if props is using carousel */}

                {internalFileList.length > 0 ? (
                  <Carousel arrows autoplay>
                    {internalFileList.map((file, index) => (
                      <div className="carousel-preview" key={index}>
                        {file ? (
                          <Image src={file} preview={false} />
                        ) : (
                          <b style={{ color: '#fff', fontWeight: '400' }}>
                            {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                          </b>
                        )}
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <Carousel arrows autoplay>
                    <div
                      className="carousel-preview-adj"
                    >
                      <b style={{ color: '#fff', fontWeight: '400' }}>
                        {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                      </b>
                    </div>
                    <div className="carousel-preview-adj">
                      <b style={{ color: '#fff', fontWeight: '400' }}>
                        {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                      </b>
                    </div>
                    <div className="carousel-preview-adj">
                      <b style={{
                        color: '#fff',
                        fontWeight: '400',
                      }}>
                        {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                      </b>
                    </div>
                  </Carousel>
                )}
              </div>

              <div className="body-sekeleton">
                <div className="skeleton-carousel" style={{ height: '100px' }}>
                  <div className="skeleton-middle-image-bottom">
                    <Image preview={false} src={ImageSkeleton} />
                  </div>
                  <div className="skeleton-middle-image-bottom">
                    <Image preview={false} src={ImageSkeleton} />
                  </div>
                </div>
              </div>
            </>
            :
            previewType === 'video' ?
              <>
                <div className="body-ads-middle">
                  {/* <div className="body-image"> */}
                  <div className="skeleton-image" >
                    <div className="skeleton-ads-top">
                      <Image preview={false} src={ImageSkeleton} />
                    </div>
                    <div className="skeleton-ads-top">
                      <Image preview={false} src={ImageSkeleton} />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div
                  className="body-ads-video-carousel"
                  style={{
                    // backgroundColor:"red",
                  }}
                >
                  {/* if props is using carousel */}
                  {/* middle body when video list > 1 */}
                  <div
                    className="ads-video-preview"
                    style={{
                      // backgroundColor:'grey'
                      border: "none",
                      display: 'flex',
                      gap: '6px',
                      marginLeft: "-30px",
                    }}
                  >
                    {
                      videoFIle.length === 3 || videoFIle.length < 1 ?
                        (() => {
                          const videoElements = [];
                          for (let index = 0; index < 3; index++) {

                            videoElements.push(
                              <div
                                key={videoFIle[index]}
                                className="video-preview"
                                style={{
                                  marginLeft: '0px',
                                }}
                              >
                                {
                                  videoFIle[index] ?
                                    <video style={{
                                      width: "100px",
                                      height: "200px",
                                      borderRadius: '8px',
                                    }} >
                                      <source src={videoFIle[index]} type={"video/mp4"} />
                                      <source src={videoFIle[index]} type={"video/quicktime"} />
                                    </video>
                                    :
                                    <div style={{
                                      alignItems: 'center',
                                      display: 'flex',
                                      width: "100px",
                                      height: "196px",
                                      borderRadius: '6px',
                                      backgroundColor: '#818181'
                                    }}><b style={{
                                      color: '#fff',
                                      fontWeight: '400'
                                    }}>
                                        {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                      </b>
                                    </div>
                                }
                              </div>
                            );
                          }
                          return videoElements;
                        })()
                        :
                        <div
                          className="skeleton-image"
                          style={{
                            height: "150px",
                            display: "flex",
                            gap: "20px",
                            marginLeft: "40px",
                          }}
                        >
                          {
                            videoFIle.length === 2 ?
                              (() => {
                                const videoElements = [];
                                for (let index = 0; index < 2; index++) {

                                  videoElements.push(
                                    <div
                                      key={doubleVideoFile[index]}
                                      className="border-skeleton-image"
                                    >
                                      {
                                        videoFIle[index] ?
                                          <video style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: '3px',
                                          }} >
                                            <source src={videoFIle[index]} type={"video/mp4"} />
                                            <source src={videoFIle[index]} type={"video/quicktime"} />
                                          </video>
                                          :
                                          <div style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: '3px',
                                            backgroundColor: '#a2a2a2' // Placeholder styling for empty slots
                                          }}><b style={{
                                            color: '#fff',
                                            fontWeight: '400'
                                          }}>
                                              {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                            </b></div>
                                      }
                                    </div>
                                  );
                                }
                                return videoElements;
                              })()
                              :
                              <div
                                className="skeleton-image"
                                style={{
                                  height: "150px",
                                  display: "flex",
                                  gap: "20px"
                                }}
                              >
                                <div className="border-skeleton-image">
                                  {videoFIle.length === 1 ?
                                    <video style={{
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: '3px',
                                    }} >
                                      <source src={videoFIle} type={"video/mp4"} />
                                      <source src={videoFIle} type={"video/quicktime"} />
                                    </video>
                                    :
                                    <div style={{
                                      alignItems: 'center',
                                      display: 'flex',
                                      height: "100%",
                                      borderRadius: '3px',
                                      backgroundColor: '#818181'
                                    }}><b style={{
                                      color: '#fff',
                                      fontWeight: '400'
                                    }}>
                                        {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                      </b>
                                    </div>
                                  }
                                </div>
                                <div className="border-skeleton-image">
                                  <Image preview={false} src={ImageSkeleton} />
                                </div>
                              </div>
                          }
                        </div>
                    }
                  </div>
                </div>
                <div className="body-sekeleton">
                  <div className="skeleton-carousel" style={{ height: '100px' }}>
                    <div className="skeleton-ads-bottom">
                      <Image preview={false} src={ImageSkeleton} />
                    </div>
                    <div className="skeleton-ads-bottom">
                      <Image preview={false} src={ImageSkeleton} />
                    </div>
                  </div>
                </div>
              </>
              :
              previewType === 'singleVideo' ?
                <>
                  <div className="body-ads-middle">
                    {/* <div className="body-image"> */}
                    <div className="skeleton-image" >
                      <div className="skeleton-ads-top">
                        <Image preview={false} src={ImageSkeleton} />
                      </div>
                      <div className="skeleton-ads-top">
                        <Image preview={false} src={ImageSkeleton} />
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="body-ads-video-carousel">
                    <div
                      className="skeleton-image"
                      style={{
                        height: "150px",
                        display: "flex",
                        gap: "20px"
                      }}
                    >
                      <div className="border-skeleton-image">
                        {singleVideoFile.length !== 0 ?
                          <video style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '3px',
                          }} >
                            <source src={singleVideoFile} type={"video/mp4"} />
                            <source src={singleVideoFile} type={"video/quicktime"} />
                          </video>
                          :
                          <div style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: "100%",
                            borderRadius: '3px',
                            backgroundColor: '#818181'
                          }}><b style={{
                            color: '#fff',
                            fontWeight: '400'
                          }}>
                              {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                            </b></div>
                        }
                      </div>
                      <div className="border-skeleton-image">
                        <Image preview={false} src={ImageSkeleton} />
                      </div>
                    </div>
                  </div>
                  <div className="body-sekeleton">
                    <div className="skeleton-carousel" style={{ height: '100px' }}>
                      <div className="skeleton-ads-bottom">
                        <Image preview={false} src={ImageSkeleton} />
                      </div>
                      <div className="skeleton-ads-bottom">
                        <Image preview={false} src={ImageSkeleton} />
                      </div>
                    </div>
                  </div>
                </>
                :
                previewType === 'doubleVideo' ?
                  <>
                    <div className="body-ads-middle">
                      {/* <div className="body-image"> */}
                      <div className="skeleton-image" >
                        <div className="skeleton-ads-top">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                        <div className="skeleton-ads-top">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="body-ads-video-carousel">
                      <div
                        className="skeleton-image"
                        style={{ height: "150px" }}
                      >
                        {
                          doubleVideoFile.length !== 0 ?
                            (() => {
                              const videoElements = [];
                              for (let index = 0; index < 2; index++) {

                                videoElements.push(
                                  <div
                                    key={doubleVideoFile[index]}
                                    className="border-skeleton-image"
                                  >
                                    {
                                      doubleVideoFile[index] ?
                                        <video style={{
                                          width: "100%",
                                          height: "100%",
                                          borderRadius: '3px',
                                        }} >
                                          <source src={doubleVideoFile[index]} type={"video/mp4"} />
                                          <source src={doubleVideoFile[index]} type={"video/quicktime"} />
                                        </video>
                                        :
                                        <div style={{
                                          alignItems: 'center',
                                          display: 'flex',
                                          width: "100%",
                                          height: "100%",
                                          borderRadius: '3px',
                                          backgroundColor: '#a2a2a2' // Placeholder styling for empty slots
                                        }}><b style={{
                                          color: '#fff',
                                          fontWeight: '400'
                                        }}>
                                            {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                          </b></div>
                                    }
                                  </div>
                                );
                              }
                              return videoElements;
                            })()
                            :
                            <>
                              <div className="border-skeleton-image">
                                <div style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: '3px',
                                  backgroundColor: '#818181' // Placeholder styling for empty slots
                                }}><b style={{
                                  color: '#fff',
                                  fontWeight: '400'
                                }}>
                                    {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                  </b>
                                </div>
                              </div>
                              <div className="border-skeleton-image">
                                <div style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: '3px',
                                  backgroundColor: '#818181' // Placeholder styling for empty slots
                                }}><b style={{
                                  color: '#fff',
                                  fontWeight: '400'
                                }}>
                                    {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                  </b>
                                </div>
                              </div>
                            </>
                        }
                      </div>
                    </div>
                    <div className="body-sekeleton">
                      <div className="skeleton-carousel" style={{ height: '100px' }}>
                        <div className="skeleton-ads-bottom">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                        <div className="skeleton-ads-bottom">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className="body-carousel-adj">
                      {previewType === 'carousel' && carouselFile.length > 0 ? (
                        <Carousel arrows autoplay>
                          {carouselFile.map((file, index) => (
                            <div className="carousel-preview" key={index}>
                              {file ? (
                                <Image src={file} preview={false} />
                              ) : (
                                <b style={{ color: '#fff', fontWeight: '400' }}>
                                  {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                                </b>
                              )}
                            </div>
                          ))}
                        </Carousel>
                      ) : (
                        <Carousel arrows autoplay>
                          <div
                            className="carousel-preview-adj"
                            style={{
                              // backgroundColor: 'red !important',

                            }}
                          >
                            <b style={{ color: '#fff', fontWeight: '400' }}>
                              {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                            </b>
                          </div>
                          <div className="carousel-preview-adj">
                            <b style={{ color: '#fff', fontWeight: '400' }}>
                              {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                            </b>
                          </div>
                          <div className="carousel-preview-adj">
                            <b style={{
                              color: '#fff',
                              fontWeight: '400',
                            }}>
                              {customTitle ? customTitle : t("COMMON:PREVIEW_ADS.TITLE_DEFAULT")}
                            </b>
                          </div>
                        </Carousel>
                      )}
                    </div>
                    <div className="body-image-video">
                      {/* <div className="body-image"> */}
                      <div
                        className="skeleton-image"
                        style={{
                          height: "150px",
                          display: "flex",
                          gap: "20px",
                          paddingLeft: "10px"
                        }}>
                        <div className="border-skeleton-image">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                        <div className="border-skeleton-image">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="body-sekeleton">
                      <div className="skeleton-carousel" style={{ height: '100px' }}>
                        <div className="border-skeleton-image-bottom">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                        <div className="border-skeleton-image-bottom">
                          <Image preview={false} src={ImageSkeleton} />
                        </div>
                      </div>
                    </div>
                  </>

          }
        </div>
        <div className="footer-preview">
          <Image preview={false} src={ImageFooterAds} />
        </div>
      </div>
    </div>
  )
}

PreviewAds.defaultProps = {
  id: "",
  sizeField: "sm",
  primaryColor: "black",
  previewType: ''
}

export default function PreviewAds(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <PreviewAdsBase {...props} />
    </I18nextProvider>
  );
}
