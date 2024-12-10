import React from "react";
import { Button, Dropdown } from "antd";
import {useLanguage} from "../../Component";

const items = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "id",
    label: "Indonesia",
  },
];

const DropdownLanguage = () => {
  const { language, changeLanguage } = useLanguage();

  const handleClick = ({ key }) => {
    changeLanguage(key);
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: handleClick,
      }}
      arrow
    >
      <Button
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: 8
        }}
      >
        {language}
      </Button>
    </Dropdown>
  );
};

export default DropdownLanguage;
