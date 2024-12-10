import React, { useRef, useEffect, useState } from "react";
import { Modal } from "antd";
import IconClose from "../../Asset/Icon/CloseIcon.js";
import EmptyIllustrationsImg from "../../Asset/Icon/EmptyIllustrations.png";
import styles from "./Dialog.module.scss";
import {
  getSize,
  getSizeClass,
  getSizeDetailContentClass,
} from "../../Utils/Dialog/DialogUtils.js";
import ButtonV223 from "../../Atomic/Button/Button.js";
import ButtonGroup from "../ButtonGroup/ButtonGroup.js";
import PropTypes from "prop-types";
import ImageUrlComponent from "../../Asset/Icon/ImageUrlDefault.png";
import SELECT_V_2_2_3 from "../../Atomic/Selector/Select/Select.js";
import TEXT_AREA_V_2_0_2 from "../../Atomic/Input/TextArea/TextArea.js";
import Input from "../../Atomic/Input/Input/Input.js";
import { selectOption } from "../../Services/utils.js";
import _ from "lodash";
import closeIcon from "../../Asset/Icon/CloseIcon.js";

const Dialog = ({
  id,
  isVideo,
  title,
  contentTitle,
  onOkTitle,
  onCancelTitle,
  message,
  type,
  size,
  open,
  onOk,
  onCancel,
  content,
  items,
  mediaUrl,
  alt,
  mainColor,
  mainBtnCancelColor,
  singleButton,
  onFuncClickCancel,
  onFuncClickOk,
  desc,
  onSubmit,
  children,
  footer,
    ilustrationImg,
  ...props
}) => {
  const { dialogSize, inputSize } = getSize(size);
  const sizeClass = getSizeClass(type, size);
  const sizeDetailContentClass = getSizeDetailContentClass(size);
  const videoRef = useRef(null);
  const [optionValue, setOptionValue] = useState([]);
  const [options, setOptions] = useState([]);

  const initialFormValues = items.reduce((values, item) => {
    values[item.name] = item.defaultValue || "";
    return values;
  }, {});

  const [formValues, setFormValues] = useState(initialFormValues);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
    validateForm(initialFormValues); // Validate form on open
  }, [open]);

  // const handleInputChange = (name, value) => {
  //     const newFormValues = {
  //         ...formValues,
  //         [name]: value
  //     };
  //     setFormValues(newFormValues);
  //     validateForm(newFormValues);
  // };

  const handleInputChange = (name, value) => {
    console.log(name, value);
    // Find the corresponding form item
    const formItem = items.find((item) => item.name === name);

    // If formItem exists and has an onChange handler, call it
    if (formItem && typeof formItem.onChange === "function") {
      formItem.onChange(value);
    }

    // Update form values
    const newFormValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(newFormValues);

    // Validate the form with the new values
    validateForm(newFormValues);
  };

  const handleSearch = (evt) => {
    let { value } = evt.target;
    let resultFind = _.filter(optionValue, (el) => {
      if (el.value.toLowerCase().includes(value.toLowerCase())) {
        return el.value;
      }
    });
    setOptions(selectOption([], resultFind, "value"));
  };

  const setValueOption = (itemOptions) => {
    const option = itemOptions;
    setOptionValue(option);
    setOptions(selectOption([], option, "value"));
  };

  useEffect(() => {
    items.forEach((item) => {
      if (item.inputType === "select") {
        setValueOption(item.options);
      }
    });
  }, [items]);

  const validateForm = (values) => {
    const isValid = items.every((item) => {
      if (item.required) {
        return values[item.name] !== "";
      }
      return true;
    });
    setIsFormValid(isValid);
  };

  const handleFormSubmit = () => {
    if (isFormValid) {
      onSubmit(formValues);
      setFormValues(initialFormValues);
    }
  };

  const defaultContent = (
    <div className={styles["default-content"]}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );

  // Custom footer
  const defaultFooter = (
    <div className={styles["default-footer"]}>
      {singleButton ? (
        <ButtonV223
          mainColor={mainColor}
          buttonType="primary"
          size="md"
          label={onOkTitle}
          onClick={onFuncClickOk || onOk}
          disabled={!isFormValid}
        />
      ) : (
        <ButtonGroup
          cancel={onCancelTitle}
          confirm={onOkTitle}
          mainColor={mainColor}
          secondaryColor={"#FFFFFF"}
          size={"md"}
          onConfirm={
            onFuncClickOk || (type === "form" ? handleFormSubmit : onOk)
          }
          onCancel={onFuncClickCancel || onCancel}
          disableConfirm={!isFormValid}
        />
      )}
    </div>
  );

  const ilustrationContent = (
    <div className={styles["ilustration-content"]}>
      <img src={ilustrationImg || EmptyIllustrationsImg} alt={"empty illustrations"} />
      <div className={styles["text-container"]}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
      <ButtonV223
        mainColor={mainColor}
        buttonType="primary"
        size="md"
        label={onOkTitle}
        onClick={onFuncClickOk || onOk}
      />
    </div>
  );

  const detailContentClass =
    size === "sm" ? "detail-content-body-item-sm" : "detail-content-body-item";

  let formContentClass;
  if (size === "sm") {
    formContentClass = "detail-content-body-item-sm";
  } else if (size === "md") {
    formContentClass = "detail-content-body-item-sm";
  } else {
    formContentClass = "detail-content-body-item";
  }

  const detailContent = (
    <div className={styles["detail-content-container"]}>
      <h1>{title}</h1>
      <div className={`${sizeDetailContentClass} ${styles["detail-content"]}`}>
        <div className={styles["detail-content-body"]}>
          <div className={styles[detailContentClass]}>
            {items.map((item, index) => (
              <div
                key={index}
                id={index}
                className={styles["detail-content-item"]}
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFormItem = (item) => {
    if (item.inputType === "select") {
      return (
        <SELECT_V_2_2_3
          onChange={(e) => handleInputChange(item.name, e)}
          option={options}
          errorMessage={item.errorMessage}
          textLabel={item.textLabel || item.title}
          size={"md"}
          isOptional={item.isOptional}
          value={formValues[item.name]}
          width={item.width || inputSize.width}
          search={true}
          name={item.name}
          handleSearch={(e) => handleSearch(e)}
        />
      );
    } else if (item.inputType === "input") {
      return (
        <Input
          width={inputSize.width}
          label={item.title}
          size="md"
          placeholder={item.placeholder}
          value={formValues[item.name]}
          onChange={(e) => handleInputChange(item.name, e)}
          disabled={item.disabled}
          pattern={item.pattern}
          maxLength={item.maxLength}
          required={item.required}
          type={item.type}
          defaultValue={item.defaultValue}
          onClick={props.onClick}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          checked={item.checked}
          name={item.name}
        />
      );
    } else if (item.inputType === "textarea") {
      return (
        <TEXT_AREA_V_2_0_2
          width={inputSize.width}
          placeholder={item.placeholder}
          size="lg"
        />
      );
    } else {
      return (
        <Input
          width={inputSize.width}
          label={item.title}
          size="md"
          placeholder={item.placeholder}
          value={formValues[item.name]}
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          disabled={item.disabled}
          pattern={item.pattern}
          maxLength={item.maxLength}
          required={item.required}
          type={item.type}
          defaultValue={item.defaultValue}
          onClick={props.onClick}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          checked={item.checked}
          name={item.name}
        />
      );
    }
    return null;
  };

  const FormContent = (
    <div className={styles["detail-content-container"]}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className={`${sizeDetailContentClass} ${styles["detail-content"]}`}>
        <div className={styles["detail-content-body"]}>
          <div className={styles[formContentClass]}>
            {items.map((item, index) => (
              <div
                key={index}
                id={index}
                className={styles["detail-content-item"]}
              >
                <h2>{item.title}</h2>
                {renderFormItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const dialogBodyClass =
    type === "media" ? "dialog-body-image" : "dialog-body";

  const imageContent = (
    <div className={styles["image-content"]}>
      {isVideo ? (
        <video controls ref={videoRef} key={mediaUrl}>
          <source src={mediaUrl} type={`video/mp4`}/>
          <source src={mediaUrl} type={`video/ogg`}/>
          <source src={mediaUrl} type={`video/avi`}/>
          <source src={mediaUrl} type={`video/mov`}/>
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={mediaUrl} alt={alt} />
      )}
      <div>
        <p>{title || alt}</p>
      </div>
    </div>
  );

  // Define getType inside the component
  const getType = (type) => {
    const typeLower = type.toLowerCase();

    switch (typeLower) {
      case "default":
        return {
          footerComponent: defaultFooter,
          contentType: defaultContent,
        };
      case "ilustration":
        return {
          footerComponent: null,
          contentType: ilustrationContent,
        };
      case "detail":
        return {
          footerComponent: defaultFooter,
          contentType: detailContent,
        };
      case "media":
        return {
          footerComponent: null,
          contentType: imageContent,
        };
      case "form":
        return {
          footerComponent: defaultFooter,
          contentType: FormContent,
        };
      default:
        return {
          footerComponent: null,
          contentType: defaultContent,
        };
    }
  };

  const { footerComponent, contentType } = getType(type);

  return (
    <Modal
      wrapClassName={`${styles.container} ${sizeClass}`}
      width={dialogSize}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      centered
      footer={footer || footerComponent}
      closeIcon={
        closeIcon || (
          <IconClose
            color="#424242"
            size={18}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "24px",
              right: "24px",
            }}
            onClick={onCancel}
            content={content}
          />
        )
      }
      {...props}
    >
      <div className={dialogBodyClass} id={id}>
        {content ? content : contentType}
        {children}
      </div>
    </Modal>
  );
};

Dialog.propTypes = {
  type: PropTypes.oneOf(["default", "ilustration", "detail", "media", "form"]),
  title: PropTypes.string,
  content: PropTypes.node,
  dialogSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  image: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          value: PropTypes.string,
        }),
      ),
    }),
  ),
  mediaUrl: PropTypes.string,
  message: PropTypes.string,
  contentTitle: PropTypes.string,
  onOkTitle: PropTypes.string,
  onCancelTitle: PropTypes.string,
  mainColor: PropTypes.string,
  alt: PropTypes.string,
  mainBtnCancelColor: PropTypes.string,
  singleButton: PropTypes.bool,
  isVideo: PropTypes.bool,
  onFuncClickCancel: PropTypes.func,
  onFuncClickOk: PropTypes.func,
  desc: PropTypes.string,
  onSubmit: PropTypes.func,
  footer: PropTypes.node,
};

Dialog.defaultProps = {
  type: "default",
  title: "",
  content: "",
  dialogSize: "md",
  image: "",
  onOk: () => {},
  items: [],
  mediaUrl: ImageUrlComponent,
  message: "",
  contentTitle: "",
  onOkTitle: "Ok",
  onCancelTitle: "Cancel",
  mainColor: "",
  alt: "",
  mainBtnCancelColor: "",
  singleButton: false,
  isVideo: false,
  onFuncClickCancel: null,
  onFuncClickOk: null,
  onSubmit: () => {},
  footer: null,
};

export default Dialog;
