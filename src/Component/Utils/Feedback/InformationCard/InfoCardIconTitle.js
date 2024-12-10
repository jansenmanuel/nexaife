import React from "react";
import CheckCircle from "../../../Asset/Icon/CheckCircle";
import ClosedCircle from "../../../Asset/Icon/ClosedCircle";
import Warning from "../../../Asset/Icon/Warning";
import Information from "../../../Asset/Icon/Information";
import { useTranslation } from "react-i18next";

export const getInfoCardIconAndTitle = (state, t) => {
  // Convert state to lowercase to ensure case-insensitive matching
  const stateLower = state ? state.toLowerCase() : "";

  switch (stateLower) {
    case 'success':
      return { type: 'success', Icon: CheckCircle, title: t("COMMON:INFORMATION_CARD.TITLE_SUCCESS") };
    case 'warning':
      return { type: 'warning', Icon: Warning, title: t("COMMON:INFORMATION_CARD.TITLE_WARNING") };
    case 'information':
      return { type: 'info', Icon: Information, title: t("COMMON:INFORMATION_CARD.TITLE_INFO") };
    case 'error':
      return { type: 'error', Icon: ClosedCircle, title: t("COMMON:INFORMATION_CARD.TITLE_ERROR") };
    default:
      // Fallback case returns 'Information' for any unknown state
      return { type: 'info', Icon: Information, title: t("COMMON:INFORMATION_CARD.TITLE_INFO") };
  }
};