import React, { useState } from "react";
import Dialog from "../../../Component/Molecules/Dialog/Dialog";
import style from "./DialogPage.module.scss";
import { useSelector } from "react-redux";
import { Button, Col} from "antd";
import _ from "lodash";
import Input from '../../../Component/Atomic/Input/Input/Input';

const DialogPage = () => {
  const mainColor = useSelector((state) => state.properties.mainColor);
  const [, setFormData] = useState({});
  const [mediaUrl, setMediaUrl] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
  const [dialogStates, setDialogStates] = useState({
    defaultSm: false,
    ilustrationSm: false,
    detailSm: false,
    imageSm: false,
    defaultMd: false,
    ilustrationMd: false,
    detailMd: false,
    imageMd: false,
    defaultLg: false,
    ilustrationLg: false,
    detailLg: false,
    imageLg: false,
    defaultXl: false,
    ilustrationXl: false,
    detailXl: false,
    imageXl: false,
    formXl: false,
    formSm: false,
    formMd: false,
    formLg: false,
    customSm: false
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    setDialogStates({ ...dialogStates, formXl: false, formSm: false, formMd: false, formLg: false });
    console.log("Form submitted with data:", data);
};

 
  const showDialog = (key) => {
    setDialogStates({ ...dialogStates, [key]: true });
  };

  const clickVideo = () => {
    setMediaUrl("https://gromart.blob.core.windows.net/gromatedisk/gromate/banner/carousel/staging/f53926aefcbe4abf9b0ed90f8d059442_1.mp4")
  }


  const handleCancel = (key) => {
    setDialogStates({ ...dialogStates, [key]: false });
  };


  const items = [
    { title: "No", description: "01" },
    { title: "Principal Name", description: "UNICARM" },
    { title: "Company Name", description: "CV Ramayana Angkasa" },
    { title: "Status", description: "A" },
    { title: "Company Title", description: "PT" },
    { title: "NPWP", description: "22993930193" },  
    { title: "Company Address", description: "Jl. Cempaka No. 5" },
    { title: "Company City", description: "Jakarta" },
    { title: "Company Postcode", description: "12345" },
    { title: "Company Phone", description: "12345678" },
    { title: "Company Fax", description: "12345678" },
    { title: "Company Email", description: "LpC5V@example.com" },
    { title: "Company Website", description: "www.unicarm.com" },
    { title: "Company Description", description: "PT. Ramayana Angkasa" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
    { title: "Company Logo", description: "www.unicarm.com" },
  ];


  const option = [
    { id: "1", value: "Apel" },
    { id: "2", value: "Jambu" },
    { id: "3", value: "Jeruk" },
    { id: "4", value: "Mangga" },
    { id: "5", value: "Durian" },
    { id: "6", value: "Anggur" },
    { id: "7", value: "Melon" },
    { id: "8", value: "Markisa" },
    { id: "9", value: "Semangka" },
    { id: "10", value: "Salak" },
    { id: "11", value: "Pisang" },
  ]

  const option2 = [
    { id: "9", value: "Semangka" },
    { id: "10", value: "Salak" },
    { id: "11", value: "Pisang" },
  ]

  const formItems = [
    {
      title: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      required: true,
      inputType: 'input',
      onChange: (e) => { console.log('Name changed:', e.target.value); },
  },
  {
      title: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      inputType: 'input',
  },
  {
      title:"option", 
      name: 'option',
      options: option,
      select: true,
      inputType: 'select',
      placeholder: 'Enter your name',
  }, 
  {
    title:"option", 
    name: 'option2',
    options: option2,
    select: true,
    inputType: 'select',
    placeholder: 'Enter your name',
}, 
];

  const handleFunction = () => {
    console.log("handleFunction");
  };

  const handleFunction2 = () => {
    console.log("handleFunction2");
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Dialog Default</h1>
        <div
          style={{
            padding: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <button
              onClick={() => showDialog("defaultSm")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog default SM
            </button>

            <Dialog 
              size={"sm"} 
              open={dialogStates.defaultSm} 
              onOk={() => handleCancel("defaultSm")}
              onCancel={() => handleCancel("defaultSm")}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Return
                </Button>,
                <Button key="submit" type="primary" >
                  Submit
                </Button>,
                <Button
                  key="link"
                  href="https://google.com"
                  type="primary"
                >
                  Search on Google
                </Button>,
              ]}
            >
              <h1 style={{fontSize: "5px"}}>lkasjdaksdj</h1>
            </Dialog>
          
            {/* <Dialog
              type="default"
              open={dialogStates.defaultSm}
              onOk={() => handleCancel("defaultSm")}
              onCancel={() => handleCancel("defaultSm")}
              size="sm"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              onFuncClickOk={() => handleFunction()}
              onFuncClickCancel={() => handleFunction2()}
              id="defaultSm"
            /> */}
          </div>

          <div>
            <button
              onClick={() => showDialog("defaultMd")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog default MD
            </button>
            <Dialog
              type="default"
              open={dialogStates.defaultMd}
              onOk={() => handleCancel("defaultMd")}
              onCancel={() => handleCancel("defaultMd")}
              size="md"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "defaultMd" }
            />
          </div>

          <div>
            <button
              onClick={() => showDialog("defaultLg")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog default LG
            </button>
            <Dialog
              type="default"
              open={dialogStates.defaultLg}
              onOk={() => handleCancel("defaultLg")}
              onCancel={() => handleCancel("defaultLg")}
              size="lg"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "defaultLg" }
            />
          </div>

          <div>
            <button
              onClick={() => showDialog("defaultXl")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog default XL
            </button>
            <Dialog
              type="default"
              open={dialogStates.defaultXl}
              onOk={() => handleCancel("defaultXl")}
              onCancel={() => handleCancel("defaultXl")}
              size="xl"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "defaultXl" }
            />
          </div>
        </div>
      </div>
      <div>
        <h1>Dialog Illustrations</h1>
        <div
          style={{
            padding: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <button
              onClick={() => showDialog("ilustrationSm")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog illustration SM
            </button>
            <Dialog
              type="ilustration"
              open={dialogStates.ilustrationSm}
              onOk={() => handleCancel("ilustrationSm")}
              onCancel={() => handleCancel("ilustrationSm")}
              size="sm"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "ilustrationSm" }
            />
          </div>

          <div>
            <button
              onClick={() => showDialog("ilustrationMd")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog illustration MD
            </button>
            <Dialog
              type="ilustration"
              open={dialogStates.ilustrationMd}
              onOk={() => handleCancel("ilustrationMd")}
              onCancel={() => handleCancel("ilustrationMd")}
              size="md"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              ilustrationImg={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606"}
              id={ "ilustrationMd" }
            />
          </div>

          <div>
            <button
              onClick={() => showDialog("ilustrationLg")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog illustration LG
            </button>
            <Dialog
              type="ilustration"
              open={dialogStates.ilustrationLg}
              onOk={() => handleCancel("ilustrationLg")}
              onCancel={() => handleCancel("ilustrationLg")}
              size="lg"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "ilustrationLg" }
            />
          </div>

          <div>
            <button
              onClick={() => showDialog("ilustrationXl")}
              style={{ width: "150px", height: "60px" }}
            >
              Open Dialog illustration XL
            </button>
            <Dialog
              type="ilustration"
              open={dialogStates.ilustrationXl}
              onOk={() => handleCancel("ilustrationXl")}
              onCancel={() => handleCancel("ilustrationXl")}
              size="xl"
              items={items}
              onOkTitle="Yes"
              onCancelTitle="No"
              title="Are you sure?"
              message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
              contentTitle="Content Title"
              mainColor={mainColor}
              id={ "ilustrationXl" }
            />
          </div>
        </div>
        <div>
          <h1>Dialog Media</h1>
          <div
            style={{
              padding: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <button
                  onClick={() => showDialog("imageSm")}
                  style={{width: "150px", height: "60px"}}
              >
                Open Dialog Media SM
              </button>
              {/* <button onClick={() => clickVideo()}>
                asdalksdlakjdad
              </button> */}
              <Dialog
                  type="media"
                  open={dialogStates.imageSm}
                  onOk={() => handleCancel("imageSm")}
                  onCancel={() => handleCancel("imageSm")}
                  size="sm"
                  items={items}
                  onOkTitle="Yes"
                  onCancelTitle="No"
                  title="Are you sure?"
                  message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
                  contentTitle="Content Title"
                  mainColor={mainColor}
                  alt={"image-popup.png"}
                  mediaUrl={"https://gromart.blob.core.windows.net/gromatedisk/gromate/staging/advertisement/video/379964406eec4ff68c3893f8ca5e572d.mov"}
                  id={"imageSm"}
                  isVideo={true}
              />
            </div>

            <div>
              <button onClick={() => showDialog("imageMd")} style={{width: "150px", height: "60px" }}>
                Open Dialog Media MD
              </button>
              <Dialog
                type="media"
                open={dialogStates.imageMd}
                onOk={() => handleCancel("imageMd")}
                onCancel={() => handleCancel("imageMd")}
                size="md"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
                contentTitle="Content Title"
                mainColor={mainColor}
                alt={"image-popup.png"}
                mediaUrl={"https://gromart.blob.core.windows.net/gromatedisk/gromate/staging/advertisement/video/379964406eec4ff68c3893f8ca5e572d.mov"}
                id={ "imageMd" }
                isVideo={true}
              />
            </div>

            <div>
              <button onClick={() => showDialog("imageLg")} style={{ width: "150px", height: "60px" }}>
                Open Dialog Media LG
              </button>
              <Dialog
                type="media"
                open={dialogStates.imageLg}
                onOk={() => handleCancel("imageLg")}
                onCancel={() => handleCancel("imageLg")}
                size="lg"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
                contentTitle="Content Title"
                mainColor={mainColor}
                alt={"image-popup.png"}
                mediaUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606"}
                // isVideo={true}
                id={ "imageLg" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("imageXl")} style={{ width: "150px", height: "60px" }}>
                Open Dialog Media XL
              </button>
              <Dialog
                type="media"
                open={dialogStates.imageXl}
                onOk={() => handleCancel("imageXl")}
                onCancel={() => handleCancel("imageXl")}
                size="xl"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                message="Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet."
                contentTitle="Content Title"
                mainColor={mainColor}
                alt={"image-popup.png"}
                id={ "imageXl" }
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Dialog Detail</h1>
          <div
            style={{
              padding: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <button
                onClick={() => showDialog("detailSm")}
                style={{ width: "150px", height: "60px" }}
              >
                Open Dialog detail SM
              </button>
              <Dialog
                type="detail"
                open={dialogStates.detailSm}
                onOk={() => handleCancel("detailSm")}
                onCancel={() => handleCancel("detailSm")}
                size="sm"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                id={ "detailSm" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("detailMd")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail MD
              </button>
              <Dialog
                type="detail"
                open={dialogStates.detailMd}
                onOk={() => handleCancel("detailMd")}
                onCancel={() => handleCancel("detailMd")}
                size="md"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                id={ "detailMd" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("detailLg")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail LG
              </button>
              <Dialog
                type="detail"
                open={dialogStates.detailLg}
                onOk={() => handleCancel("detailLg")}
                onCancel={() => handleCancel("detailLg")}
                size="lg"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                id={ "detailLg" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("detailXl")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail XL
              </button>
              <Dialog
                type="detail"
                open={dialogStates.detailXl}
                onOk={() => handleCancel("detailXl")}
                onCancel={() => handleCancel("detailXl")}
                size="xl"
                items={items}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                id={ "detailXl" }
              />
            </div>
        </div>

        {/* dialog form */}
        <div>
          <h1>Dialog Form</h1>
          <div
            style={{
              padding: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <button
                onClick={() => showDialog("formSm")}
                style={{ width: "150px", height: "60px" }}
              >
                Open Dialog detail SM
              </button>
              <Dialog
                type="form"
                open={dialogStates.formSm}
                onOk={() => handleCancel("formSm")}
                onCancel={() => handleCancel("formSm")}
                size="sm"
                items={formItems}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                onSubmit={handleFormSubmit}
                desc={'Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet.'}
                id={ "formSm" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("formMd")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail MD
              </button>
              <Dialog
                type="form"
                open={dialogStates.formMd}
                onOk={() => handleCancel("formMd")}
                onCancel={() => handleCancel("formMd")}
                size="md"
                items={formItems}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                onSubmit={handleFormSubmit}
                desc={'Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet.'}
                id={ "formMd" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("formLg")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail LG
              </button>
              <Dialog
                type="form"
                open={dialogStates.formLg}
                onOk={() => handleCancel("formLg")}
                onCancel={() => handleCancel("formLg")}
                size="lg"
                items={formItems}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                onSubmit={handleFormSubmit}
                desc={'Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet.'}
                id={ "formLg" }
              />
            </div>

            <div>
              <button onClick={() => showDialog("formXl")} style={{ width: "150px", height: "60px" }}>
                Open Dialog detail XL
              </button>
              <Dialog
                type="form"
                open={dialogStates.formXl}
                onOk={() => handleCancel("formXl")}
                onCancel={() => handleCancel("formXl")}
                size="xl"
                items={formItems}
                onOkTitle="Yes"
                onCancelTitle="No"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                onSubmit={handleFormSubmit}
                desc={'Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet.'}
                id={ "formXl" }
              />
            </div>
        </div>
        </div>


         {/* dialog Custom */}
         <div>
          <h1>Dialog Custom</h1>
          <div
            style={{
              padding: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <button
                onClick={() => showDialog("customSm")}
                style={{ width: "150px", height: "60px" }}
              >
                Open Dialog detail SM
              </button>
            <Dialog
                open={dialogStates.customSm}
                onCancel={() => handleCancel("customSm")}
                size="sm"
                title="Are you sure?"
                contentTitle="Content Title"
                mainColor={mainColor}
                desc={'Nam ultrices in lorem a ultricies. Duis molestie mauris ac nulla aliquet.'}
                id={ "dialogCustom" }
                footer={[
                  <Button key="back" onClick={() => handleCancel("customSm")}>
                    Return
                  </Button>,
                  <Button key="submit" type="primary" onClick={() => handleCancel("customSm")} >
                    Submit
                  </Button>,
                  <Button
                    key="link"
                    href="https://google.com"
                    type="primary"
                  >
                    Search on Google
                  </Button>,
                ]}
              >
                <Col style={{ display: "flex", alignItems: "center" }} width={2}>
                  <label>Select Md</label>
                </Col>
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  width="336px"
                />
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  width="336px"
                />
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  width="336px"
                />
              </Dialog>
            </div>

          </div>
        </div>
      </div>
      </div>
      <section className={style.section}>
      <h2>Props Explanation for Dialog</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td><code>oneOf(['default', 'illustration', 'detail', 'media'])</code></td>
            <td><code>'default'</code></td>
            <td>Specifies the dialog type, which influences layout and content.</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td><code>string</code></td>
            <td><code>''</code></td>
            <td>Title at the top of the dialog.</td>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td><code>node</code></td>
            <td><code>null</code></td>
            <td>Content of the dialog; can override default content types.</td>
          </tr>
          <tr>
            <td><code>dialogSize</code></td>
            <td><code>oneOf(['sm', 'md', 'lg', 'xl'])</code></td>
            <td><code>'md'</code></td>
            <td>The size of the dialog.</td>
          </tr> 
          <tr>
            <td><code>open</code></td>
            <td><code>bool</code></td>
            <td><code>false</code></td>
            <td>Controls the visibility of the dialog.</td>
          </tr>
          <tr>
            <td><code>onOk</code></td>
            <td><code>func</code></td>
            <td><code>'{() => {}}'</code></td>
            <td>Function to execute when the OK button is clicked.</td>
          </tr>
          <tr>
            <td><code>onCancel</code></td>
            <td><code>func</code></td>
            <td><code>'{() => {}}'</code></td>
            <td>Function to execute when the Cancel button is clicked or the dialog is closed.</td>
          </tr>
          <tr>
            <td><code>items</code></td>
            <td>
              <code>array</code>
            </td>
            <td><code>[title: string,
            description: string]</code></td>
            <td>List of items for the 'detail' dialog, each with a title and description.</td>
          </tr>
          <tr>
            <td><code>mediaUrl</code></td>
            <td><code>string</code></td>
            <td><code>ImageUrlComponent</code></td>
            <td>URL for an media to display in the 'media' type dialog.</td>
          </tr>
          <tr>
            <td><code>message</code></td>
            <td><code>string</code></td>
            <td><code>''</code></td>
            <td>Message to display in the dialog.</td>
          </tr>
          <tr>
            <td><code>onOkTitle</code></td>
            <td><code>string</code></td>
            <td><code>'Ok'</code></td>
            <td>Text for the OK button.</td>
          </tr>
          <tr>
            <td><code>onCancelTitle</code></td>
            <td><code>string</code></td>
            <td><code>'Cancel'</code></td>
            <td>Text for the Cancel button.</td>
          </tr>
          <tr>
            <td><code>singleButton</code></td>
            <td><code>bool</code></td>
            <td><code>false</code></td>
            <td>Controls whether the dialog has only one button.</td>
          </tr>
          <tr>
            <td><code>isVideo</code></td>
            <td><code>bool</code></td>
            <td><code>false</code></td>
            <td>Controls whether the dialog is a video.</td>
          </tr>
          <tr>
            <td>onFuncClickCancel</td>
            <td><code>func</code></td>
            <td><code>''</code></td>
            <td>Function to execute when the Cancel button is clicked.</td>
          </tr>
          <tr>
            <td>onFuncClickOk</td>
            <td><code>func</code></td>
            <td><code>''</code></td>
            <td>Function to execute when the OK button is clicked.</td>
          </tr>
          <tr>
            <td>footer</td>
            <td><code>ReactNode</code></td>
            <td><code>null</code></td>
            <td>Footer content</td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
  );
};

export default DialogPage;
