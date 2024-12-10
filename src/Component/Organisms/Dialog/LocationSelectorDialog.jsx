// Libs
import React, { useEffect, useMemo, useState } from "react";
import {
  locationMapperChecked,
  traverse,
} from "../../Utils/LocationSelectorDialog/LocationSelectorUtils";

// Components
import {Button as ButtonV223, Spinner, Tag as TAG_V_2_0_2 } from "../../index";
import { CloseOutlined } from "@ant-design/icons";
import CollapseLocation from "./components/CollapseLocation";
import InputSearch from "../../Molecules/SearchRecommendation/InputSearch";
import SelectorDialog from "./components/SelectorDialog";
import NcClose from "../../Asset/Icon/NcClose";
import PropTypes from "prop-types";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "../../config/i18nConfig";
import i18nConfig from "../../config/i18nConfig";

const LocationSelectorDialogBase = ({
  open = false,
  handleOpenCloseDialog,
  items,
  displayItems,
  handleChangeCheck,
  activeKey,
  handlePanel,
  handleChangeSearch,
  loading,
  titleDialog,
  choseLocationLabel,
  onSubmit,
  cancelLabel,
  submitLabel,
  inputValue,
  onClear,
  searchPlaceholder,
  disableSubmit,
  id
}) => {

  const [activePanels, setActivePanels] = useState(activeKey);
  const {t} = useTranslation()

  const chooseLocations = useMemo(
    () => locationMapperChecked(displayItems),
    [displayItems],
  );

  const compute = (checkboxId, status) => {
    const updated = traverse(items, checkboxId, status);
    handleChangeCheck(updated);
  };

  useEffect(() => {
    setActivePanels(activeKey);
  }, [activeKey]);

  return (
    <div id={id}>
      <SelectorDialog open={open} onCancel={handleOpenCloseDialog}>
        <div style={{ display: "flex", borderRadius: "inherit" }}>
          <div
            style={{
              width: 400,
              backgroundColor: "#FFF",
              borderTopLeftRadius: "inherit",
              borderBottomLeftRadius: "inherit",
            }}
          >
            <div style={{ padding: 14 }}>
              <h1>{titleDialog || t('COMMON:REGION_TITLE')}</h1>
              <div
                style={{ paddingRight: 10, marginBottom: 12, marginTop: 12 }}
              >
                <InputSearch
                  value={inputValue}
                  placeholder={searchPlaceholder || t('COMMON:SEARCH')}
                  width={"100%"}
                  onChange={handleChangeSearch}
                  size={"sm"}
                  onClear={onClear}
                />
              </div>
              <div
                style={{
                  height: 400,
                  overflowY: "auto",
                }}
              >
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Spinner />
                  </div>
                ) : (
                  <CollapseLocation
                    activePanels={activePanels}
                    setActivePanels={setActivePanels}
                    items={items}
                    compute={compute}
                    handlePanel={handlePanel}
                    activeKey={activeKey}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleOpenCloseDialog}
              >
                <NcClose />
              </div>
            </div>
            <div style={{ paddingTop: 24 }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12 }}>
                {choseLocationLabel || t('COMMON:REGION_CHOOSE')}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  height: "400px",
                  overflowY: "auto",
                  alignContent: "flex-start",
                  borderRadius: "8px",
                }}
              >
                {chooseLocations.map((option) => (
                  <TAG_V_2_0_2
                    key={option.id}
                    id={option.id}
                    iconRight={<CloseOutlined />}
                    title={option.name}
                    size={"xs"}
                    closable={true}
                    onClose={() => compute(option.id, 0)}
                  />
                ))}
              </div>
              <div
                style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}
              >
                <ButtonV223
                  buttonType={"secondary"}
                  secondaryColor={"white"}
                  label={cancelLabel || t('COMMON:CANCEL')}
                  size={"sm"}
                  onClick={handleOpenCloseDialog}
                />
                <ButtonV223
                  onClick={onSubmit}
                  buttonType={"primary"}
                  secondaryColor={"white"}
                  label={submitLabel || t('COMMON:APPLY')}
                  size={"sm"}
                  disabled={disableSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </SelectorDialog>
    </div>
  );
};


export default function LocationSelectorDialog(props) {
  return (
    <I18nextProvider i18n={i18nConfig}>
      <LocationSelectorDialogBase {...props} />
    </I18nextProvider>
  );
}

LocationSelectorDialog.defaultProps = {
  open: false,
  handleOpenCloseDialog: () => {},
  items: [],
  handleChangeCheck: () => {},
  activeKey: {},
  handlePanel: () => {},
  handleChangeSearch: () => {},
  loading: false,
  onSubmit: () => {},
  inputValue: "",
  onClear: () => {},
  id: null,
  disableSubmit: false
};

LocationSelectorDialog.propTypes = {
  open: PropTypes.bool,
  handleOpenCloseDialog: PropTypes.func,
  items: PropTypes.array,
  handleChangeCheck: PropTypes.func,
  activeKey: PropTypes.any,
  handlePanel: PropTypes.func,
  handleChangeSearch: PropTypes.func,
  loading: PropTypes.bool,
  titleDialog: PropTypes.string,
  choseLocationLabel: PropTypes.string,
  onSubmit: PropTypes.func,
  cancelLabel: PropTypes.string,
  submitLabel: PropTypes.string,
  inputValue: PropTypes.string,
  onClear: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  disableSubmit: PropTypes.bool
};