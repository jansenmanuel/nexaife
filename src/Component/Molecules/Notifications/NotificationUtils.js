import { Icon } from '../../Asset/Icon';

export const borderNotification = (type) => {
  let styles = "info";
  if (type === "SUCCESS") {
    styles = "success";
  } else if (type === "ERROR") {
    styles = "error";
  } else if (type === "WARNING") {
    styles = "warning";
  } else if (type === "INFO") {
    styles = "info";
  }
  return styles;
};
export const iconNotification = (type) => {
  let icons = Icon.NcInfo;
  if (type === "SUCCESS") {
    icons=  Icon.NcSuccess;
  } else if (type === "ERROR") {
    icons=  Icon.NcError;
  } else if (type === "WARNING") {
    icons = Icon.NcWarning;
  } else if (type === "INFO") {
    icons = Icon.NcInfo;
  }  
  return icons
};

export const messageNotification = (message) => {
  let messages = "Enter Your Message";
  if (message !== "") {
    messages=  message;
  } 
  return messages
};