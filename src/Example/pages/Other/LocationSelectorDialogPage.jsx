// Components
import { Button as ButtonV223, LocationSelectorDialog } from "../../../Component";

// Libs
import React, { useMemo, useState } from "react";
import { PROVINCES } from "../../Constant/generalConstant";
 import RegionSelectorPropsApi from "./RegionSelectorPropsApi";
import {isAnyChecked} from "../../../Component/Utils/LocationSelectorDialog/LocationSelectorUtils";

const LocationSelectorDialogPage = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([...PROVINCES]);
  const [activeKey, setActiveKey] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handlePanel = (panelKey, level) => {
    setActiveKey(panelKey);
  };

  const handleChangeCheck = (check) => {
    setItems((prevItems) => {
      const mergedItems = [...prevItems, ...check];

      const uniqueItemsMap = new Map(
        mergedItems.map((item) => [item.id, item]),
      );

      return Array.from(uniqueItemsMap.values());
    });
  };

  const handleOpenCloseDialog = () => {
    setOpen(!open);
    setActiveKey({});
  };

  const handleChangeSearch = (e) => {
    setSearchTerm(e);
  };

  const displayItems = useMemo(() => {
    return searchTerm
      ? [...items].filter((province) =>
          province.name.toLowerCase().includes(searchTerm),
        )
      : items;
  }, [items, searchTerm]);

  return (
    <div
      style={{
        padding: 20,
        textAlign: "left",
      }}
    >
      <h1>Region Select Picker</h1>
      <div
        style={{
          marginTop: 40,
        }}
      >
        <ButtonV223
          onClick={handleOpenCloseDialog}
          buttonType={"primary"}
          label="Show"
          size={"md"}
        />
      </div>
      <LocationSelectorDialog
        id={12}
        loading={false}
        open={open}
        items={displayItems}
        displayItems={items}
        activeKey={activeKey}
        inputValue={searchTerm}
        onClear={() => setSearchTerm("")}
        handleChangeCheck={handleChangeCheck}
        handlePanel={handlePanel}
        handleOpenCloseDialog={handleOpenCloseDialog}
        handleChangeSearch={handleChangeSearch}
        disableSubmit={!isAnyChecked(items)}
        onSubmit={() => console.log(items)}
      />
      <RegionSelectorPropsApi />
    </div>
  );
};

export default LocationSelectorDialogPage;
