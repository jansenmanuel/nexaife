import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import MainLayout from "../componentsExample/Layout/MainLayout";
import { ROUTE } from "../Constant/routesConstant";
import HomePage from "../pages/Home/HomePage";

// Lazy load pages
const ButtonPage = lazy(() => import("../pages/Button/ButtonPage"));
const IconPage = lazy(() => import("../pages/Button/IconPage"));
const LoginGroChatPage = lazy(() => import("../pages/Button/LoginGroChatPage"));
const ButtonGroupPage = lazy(() => import("../pages/Button/ButtonGroupPage"));
const TSLDatePicker = lazy(() => import("../pages/TSL/TSLDatePicker"));
const TSLCheckbox = lazy(() => import("../pages/TSL/TSLCheckbox"));
const TSLCheckboxGroup = lazy(() => import("../pages/TSL/TSLCheckboxGroup"));
const TSLPhoneNumberPage = lazy(
  () => import("../pages/TSL/TSLPhoneNumberPage"),
);
const TSLPasswordPage = lazy(() => import("../pages/TSL/TSLPasswordPage"));
const TslPage = lazy(() => import("../pages/TSL/TSLPage"));
const TSLSelect = lazy(() => import("../pages/TSL/TSLSelect"));
const SearchRecommendationPage = lazy(
  () => import("../pages/TSL/SearchRecommendationPage"),
);
const PinPage = lazy(() => import("../pages/Pin/PinPage"));
const TSLInputButtonPage = lazy(
  () => import("../pages/TSL/TSLInputButtonPage"),
);
const TSLRadio = lazy(() => import("../pages/TSL/TSLRadio"));
const TSLRadioGroup = lazy(() => import("../pages/TSL/TSLRadioGroup"));
const TSLMultipleSelectPage = lazy(
  () => import("../pages/TSL/TSLMultipleSelectPage"),
);
const ListPage = lazy(() => import("../pages/DataDisplay/ListPage"));
const RatePage = lazy(() => import("../pages/DataEntry/RatePage"));
const BreadCrumbPage = lazy(() => import("../pages/Navigation/BreadCrumbPage"));
const AlertPage = lazy(() => import("../pages/Feedback/AlertPage"));
const DialogPage = lazy(() => import("../pages/Feedback/DialogPage"));
const DividerPage = lazy(() => import("../pages/Layout/DividerPage"));
const LegendPage = lazy(() => import("../pages/Legends/LegendPage"));
const PrePostField = lazy(
  () => import("../pages/InputPrePostField/PrePostField"),
);
const TextAreaPage = lazy(() => import("../pages/Input/TextAreaPage"));
const TogglePage = lazy(() => import("../pages/TSL/TogglePage"));
const ToggleGroupPage = lazy(() => import("../pages/TSL/ToggleGroupPage"));
const InfoCardPage = lazy(() => import("../pages/Feedback/InfoCardPage"));
const TooltipsPage = lazy(() => import("../pages/DataDisplay/TooltipsPage"));
const AvatarPage = lazy(() => import("../pages/DataDisplay/AvatarPage"));
const AvatarGroupPage = lazy(
  () => import("../pages/DataDisplay/AvatarGroupPage"),
);
const TagPage = lazy(() => import("../pages/DataDisplay/TagPage"));
const TablePage = lazy(() => import("../pages/DataDisplay/TablePage"));
const StepsPage = lazy(() => import("../pages/Navigation/Steps/StepsPage"));
const BadgePage = lazy(() => import("../pages/DataDisplay/BadgePage"));
const SliderPage = lazy(() => import("../pages/Slider/SliderPage"));
const TabsPage = lazy(() => import("../pages/DataDisplay/Tabs/TabsPage"));
const UploadFileExample = lazy(
  () => import("../pages/UploadFile/UploadFileExample"),
);
const ProgressBarExample = lazy(
  () => import("../pages/Feedback/ProgressBar/ProgressBarExample"),
);
const HtmlAreaPage = lazy(() => import("../pages/HtmlArea/HtmlAreaPage"));
const ImagePage = lazy(() => import("../pages/Display/ImagePage"));
const VideoPage = lazy(() => import("../pages/Video/VideoPage"));
const ProgressTrackExample = lazy(
  () => import("../pages/ProgressTrack/ProgressTrackExample"),
);
const TransferFileExample = lazy(
  () => import("../pages/TransferFile/TransferFileExample"),
);
const CardExample = lazy(() => import("../pages/Card/CardExample"));
const TimePickerPage = lazy(() => import("../pages/DataEntry/TimePickerPage"));
const PreviewAdsExample = lazy(
  () => import("../pages/PreviewAds/PreviewAdsExample"),
);
const LocationSelectorDialogPage = lazy(
  () => import("../pages/Other/LocationSelectorDialogPage"),
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const routesConfig = [
  { path: ROUTE.PAGE_BUTTON, element: <ButtonPage /> },
  { path: ROUTE.PAGE_BUTTON_ICON, element: <IconPage /> },
  { path: ROUTE.PAGE_BUTTON_GROUP, element: <ButtonGroupPage /> },
  { path: ROUTE.PAGE_DATEPICKER, element: <TSLDatePicker /> },
  { path: ROUTE.PAGE_CHECKBOX, element: <TSLCheckbox /> },
  { path: ROUTE.PAGE_CHECKBOX_GROUP, element: <TSLCheckboxGroup /> },
  { path: ROUTE.PAGE_INPUT_PHONE_NUMBER, element: <TSLPhoneNumberPage /> },
  { path: ROUTE.PAGE_PASSWORD, element: <TSLPasswordPage /> },
  { path: ROUTE.PAGE_INPUT, element: <TslPage /> },
  { path: ROUTE.PAGE_SELECT, element: <TSLSelect /> },
  { path: ROUTE.PAGE_SEARCH, element: <SearchRecommendationPage /> },
  { path: ROUTE.PAGE_PIN, element: <PinPage /> },
  { path: ROUTE.PAGE_INPUT_BUTTON, element: <TSLInputButtonPage /> },
  { path: ROUTE.PAGE_RADIO, element: <TSLRadio /> },
  { path: ROUTE.PAGE_RADIO_GROUP, element: <TSLRadioGroup /> },
  { path: ROUTE.PAGE_MULTIPLE_SELECT, element: <TSLMultipleSelectPage /> },
  { path: ROUTE.PAGE_LIST, element: <ListPage /> },
  { path: ROUTE.PAGE_RATING, element: <RatePage /> },
  { path: ROUTE.PAGE_BREADCRUMB, element: <BreadCrumbPage /> },
  { path: ROUTE.PAGE_ALERT, element: <AlertPage /> },
  { path: ROUTE.PAGE_DIALOG, element: <DialogPage /> },
  { path: ROUTE.PAGE_DIVIDER, element: <DividerPage /> },
  { path: ROUTE.PAGE_BUTTON_LOGIN_GROCHAT, element: <LoginGroChatPage /> },
  { path: ROUTE.PAGE_LEGEND, element: <LegendPage /> },
  { path: ROUTE.PAGE_PREPOST_TAB, element: <PrePostField /> },
  { path: ROUTE.PAGE_TEXT_AREA, element: <TextAreaPage /> },
  { path: ROUTE.PAGE_TOGGLE, element: <TogglePage /> },
  { path: ROUTE.PAGE_TOGGLE_GROUP, element: <ToggleGroupPage /> },
  { path: ROUTE.PAGE_INFO_CARD, element: <InfoCardPage /> },
  { path: ROUTE.PAGE_TOOLTIPS, element: <TooltipsPage /> },
  { path: ROUTE.PAGE_AVATAR, element: <AvatarPage /> },
  { path: ROUTE.PAGE_AVATAR_GROUP, element: <AvatarGroupPage /> },
  { path: ROUTE.PAGE_TAG, element: <TagPage /> },
  { path: ROUTE.PAGE_TABLE, element: <TablePage /> },
  { path: ROUTE.PAGE_STEPS, element: <StepsPage /> },
  { path: ROUTE.PAGE_BADGE, element: <BadgePage /> },
  { path: ROUTE.PAGE_SLIDER, element: <SliderPage /> },
  { path: ROUTE.PAGE_TABS, element: <TabsPage /> },
  { path: ROUTE.PAGE_UPLOAD_FILE, element: <UploadFileExample /> },
  { path: ROUTE.PAGE_PROGRESS_BAR, element: <ProgressBarExample /> },
  { path: ROUTE.PAGE_HTML_AREA, element: <HtmlAreaPage /> },
  { path: ROUTE.PAGE_IMAGE, element: <ImagePage /> },
  { path: ROUTE.PAGE_VIDEO, element: <VideoPage /> },
  { path: ROUTE.PAGE_PROGRESS_TRACK, element: <ProgressTrackExample /> },
  { path: ROUTE.PAGE_TRANSFER_LIST, element: <TransferFileExample /> },
  { path: ROUTE.PAGE_CARD, element: <CardExample /> },
  { path: ROUTE.PAGE_TIMEPICKER, element: <TimePickerPage /> },
  { path: ROUTE.PAGE_PREVIEW_ADS, element: <PreviewAdsExample /> },
  { path: ROUTE.PAGE_REGION_SELECTS, element: <LocationSelectorDialogPage /> },
  { path: "*", element: <NotFound /> },
];

const ClientRoutes = () => {
  return (
    <Route path="/" element={<MainLayout />}>
      <Route path={ROUTE.INDEX} element={<HomePage />} />
      <Route path={ROUTE.PAGE_BUTTON} element={<ButtonPage />} />
      <Route path={ROUTE.PAGE_BUTTON_ICON} element={<IconPage />} />
      <Route path={ROUTE.PAGE_BUTTON_GROUP} element={<ButtonGroupPage />} />
      <Route path={ROUTE.PAGE_DATEPICKER} element={<TSLDatePicker />} />
      <Route path={ROUTE.PAGE_CHECKBOX} element={<TSLCheckbox />} />
      <Route path={ROUTE.PAGE_CHECKBOX_GROUP} element={<TSLCheckboxGroup />} />
      <Route
        path={ROUTE.PAGE_INPUT_PHONE_NUMBER}
        element={<TSLPhoneNumberPage />}
      />
      <Route path={ROUTE.PAGE_PASSWORD} element={<TSLPasswordPage />} />
      <Route path={ROUTE.PAGE_INPUT} element={<TslPage />} />
      <Route path={ROUTE.PAGE_SELECT} element={<TSLSelect />} />
      <Route path={ROUTE.PAGE_SEARCH} element={<SearchRecommendationPage />} />
      <Route path={ROUTE.PAGE_PIN} element={<PinPage />} />
      <Route path={ROUTE.PAGE_INPUT_BUTTON} element={<TSLInputButtonPage />} />
      <Route path={ROUTE.PAGE_RADIO} element={<TSLRadio />} />
      <Route path={ROUTE.PAGE_RADIO_GROUP} element={<TSLRadioGroup />} />
      <Route
        path={ROUTE.PAGE_MULTIPLE_SELECT}
        element={<TSLMultipleSelectPage />}
      />
      <Route path={ROUTE.PAGE_LIST} element={<ListPage />} />
      <Route path={ROUTE.PAGE_RATING} element={<RatePage />} />
      <Route path={ROUTE.PAGE_BREADCRUMB} element={<BreadCrumbPage />} />
      <Route path={ROUTE.PAGE_ALERT} element={<AlertPage />} />
      <Route path={ROUTE.PAGE_DIALOG} element={<DialogPage />} />
      <Route path={ROUTE.PAGE_DIVIDER} element={<DividerPage />} />
      <Route
        path={ROUTE.PAGE_BUTTON_LOGIN_GROCHAT}
        element={<LoginGroChatPage />}
      />
      <Route path={ROUTE.PAGE_ALERT} element={<AlertPage />} />
      <Route path={ROUTE.PAGE_LEGEND} element={<LegendPage />} />
      <Route path={ROUTE.PAGE_PREPOST_TAB} element={<PrePostField />} />
      <Route path={ROUTE.PAGE_TEXT_AREA} element={<TextAreaPage />} />
      <Route path={ROUTE.PAGE_TOGGLE} element={<TogglePage />} />
      <Route path={ROUTE.PAGE_TOGGLE_GROUP} element={<ToggleGroupPage />} />
      <Route path={ROUTE.PAGE_INFO_CARD} element={<InfoCardPage />} />
      <Route path={ROUTE.PAGE_TOOLTIPS} element={<TooltipsPage />} />
      <Route path={ROUTE.PAGE_AVATAR} element={<AvatarPage />} />
      <Route path={ROUTE.PAGE_AVATAR_GROUP} element={<AvatarGroupPage />} />
      <Route path={ROUTE.PAGE_TAG} element={<TagPage />} />
      <Route path={ROUTE.PAGE_TABLE} element={<TablePage />} />
      <Route path={ROUTE.PAGE_STEPS} element={<StepsPage />} />
      <Route path={ROUTE.PAGE_BADGE} element={<BadgePage />} />
      <Route path={ROUTE.PAGE_SLIDER} element={<SliderPage />} />
      <Route path={ROUTE.PAGE_BADGE} element={<BadgePage />} />
      <Route path={ROUTE.PAGE_TABS} element={<TabsPage />} />
      <Route path={ROUTE.PAGE_UPLOAD_FILE} element={<UploadFileExample />} />
      <Route path={ROUTE.PAGE_PROGRESS_BAR} element={<ProgressBarExample />} />
      <Route path={ROUTE.PAGE_HTML_AREA} element={<HtmlAreaPage />} />
      <Route path={ROUTE.PAGE_IMAGE} element={<ImagePage />} />
      <Route path={ROUTE.PAGE_VIDEO} element={<VideoPage />} />
      <Route
        path={ROUTE.PAGE_PROGRESS_TRACK}
        element={<ProgressTrackExample />}
      />
      <Route path={ROUTE.PAGE_LEGEND} element={<LegendPage />} />
      <Route
        path={ROUTE.PAGE_TRANSFER_LIST}
        element={<TransferFileExample />}
      />
      <Route path={ROUTE.PAGE_CARD} element={<CardExample />} />
      <Route path={ROUTE.PAGE_TIMEPICKER} element={<TimePickerPage />} />
      <Route path={ROUTE.PAGE_PREVIEW_ADS} element={<PreviewAdsExample />} />
      <Route
        path={ROUTE.PAGE_REGION_SELECTS}
        element={<LocationSelectorDialogPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
};

export default ClientRoutes;
