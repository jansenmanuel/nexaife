import React, { useMemo, useRef, useState } from "react";
import { Icon } from "../../../Asset/Icon";
import { getSizeIconSameSize } from "../../../Services/utils";
import ErrorInformation from "../../Error/ErrorInformation";
import style from "./MultipleSelect.module.scss";
import PropTypes from "prop-types";
import LIST_V_2_0_2 from "../../List/List";
import _ from "lodash";
import Tag from "../../Tag/Tag";
import { Input, useScrollBottom } from "../../../index";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18nConfig from "../../../config/i18nConfig";

const InputSearch = ({ placeholder, size, onChange, id }) => {
  return (
    <div
      id={id}
      style={{
        padding: "14px 10px",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
      }}
    >
      <Input
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        width={"100%"}
      />
    </div>
  );
};

function MultipleSelectBase({
  mainColors,
  size,
  handleChange,
  error,
  valid,
  count_data,
  selectedValues = [],
  options = [],
  onBottomScroll,
  handleSearch,
  placeholderSearch,
  maxWidthError,
  ...props
}) {
  const optionsRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState({
    open: false,
    isoptionclick: false,
  });
  const selectRef = useRef(null);

  const { t } = useTranslation();

  useScrollBottom(optionsRef, onBottomScroll, 30, isOpen.open);

  const isAllSelected = useMemo(
    () => selectedValues.length === count_data,
    [selectedValues, options, count_data],
  );

  const toggleDropdown = () => {
    setIsOpen((e) => {
      return {
        ...e,
        open: !e.open,
      };
    });
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      handleChange([]);
    } else {
      let selectedAllOptions = options.map((option) => option);
      handleChange([...selectedAllOptions]);
    }
  };

  const handleOptionChange = (opt) => {
    let { data } = opt;
    if (selectedValues.find((e) => e.id === data.id)) {
      const updatedValues = selectedValues.filter(
        (selectedValue) => selectedValue.id !== data.id,
      );
      const optionAllSelected = updatedValues.length === count_data;
      handleChange(updatedValues, optionAllSelected);
    } else {
      const updatedValues = [...selectedValues, data];
      const optionAllSelected = updatedValues.length === count_data;
      handleChange(updatedValues, optionAllSelected);
    }
  };

  const handleRemoveTag = (value) => {
    handleChange(
      selectedValues.filter((selectedValue) => selectedValue.id !== value.id),
    );
  };

  const isAtBottom = () => {
    if (!selectRef.current) return false;

    const selectBounds = selectRef.current.getBoundingClientRect();
    return window.innerHeight - selectBounds.bottom - 10 < selectBounds.height;
  };

  const getFontRight = () => {
    if (props?.disabled) {
      return style[`Multiple_Select_DB_${_.startCase(size)}_V2_0_3`];
    } else if (selectedValues === null || selectedValues.length === 0) {
      return style[`Multiple_Select_PH_${_.startCase(size)}_V2_0_3`];
    } else {
      return style[`Multiple_Select_ACT_${_.startCase(size)}_V2_0_3`];
    }
  };

  const mainColor = "--main-color-select";

  const renderValueInput = useMemo(() => {
    const { disabled, placeholder } = props;

    // If no values are selected, show the placeholder or a default value
    if (selectedValues.length === 0) {
      return placeholder || t("COMMON:MULTIPLE_SELECT.PLACEHOLDER");
    }

    // If "All" is selected, render the "All" tag
    if (isAllSelected) {
      return (
        <Tag
          closable={!disabled}
          onClose={() => handleSelectAllChange()}
          title="All"
          size={size}
        />
      );
    }

    // Render individual selected values as tags
    return selectedValues.map((el) => (
      <Tag
        key={el.id} // Add a unique key
        closable={!disabled}
        onClose={() => handleRemoveTag(el)}
        title={el.value}
        size={size}
      />
    ));
  }, [isAllSelected, selectedValues, props.disabled, props.placeholder, size]);

  const getClassContainerSelect = () => {
    if (props.disabled) {
      return style[`MultipleSelectSize${_.startCase(size)}Disabled`];
    } else if (valid === false) {
      return style[`MultipleSelectSize${_.startCase(size)}Error`];
    } else {
      return style[`MultipleSelectSize${_.startCase(size)}`];
    }
  };

  const getGapSelect = () => {
    if (size.toLowerCase() === "sm") {
      return "4px";
    } else if (size.toLowerCase() === "md") {
      return "6px";
    } else if (size.toLowerCase() === "lg") {
      return "8px";
    } else if (size.toLowerCase() === "xl") {
      return "10px";
    } else if (size.toLowerCase() === "xxl") {
      return "12px";
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {props.textLabel && (
          <div className={style[`LabelText${_.startCase(size)}`]}>
            <label>{props.textLabel}</label>
          </div>
        )}
        <div
          onClick={() => {
            toggleDropdown();
          }}
          style={{
            [mainColor]: mainColors,
          }}
          id={props.id}
          ref={selectRef}
          className={getClassContainerSelect()}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: getGapSelect(),
              alignItems: "center",
            }}
          >
            <div className={getFontRight()}>{renderValueInput}</div>
            <div>
              {isOpen?.open ? (
                <Icon.NcChevronUp
                  color={mainColors ? mainColors : "#818181"}
                  size={getSizeIconSameSize(size)}
                />
              ) : (
                <Icon.NcChevronDown
                  color={mainColors ? mainColors : "#818181"}
                  size={getSizeIconSameSize(size)}
                />
              )}
            </div>
          </div>
          <div
            className={style.containerOptions}
            style={{
              bottom: isAtBottom() ? "100%" : "auto",
              top: isAtBottom() ? "auto" : "100%",
            }}
            onClick={(e) => e.stopPropagation()} // prevent parent input dropdown triggered by children
            ref={optionsRef}
          >
            {isOpen?.open && (
              <div
                style={{
                  backgroundColor: "white",
                }}
                id={`dropdown-${props.id}`}
              >
                {handleSearch && (
                  <InputSearch
                    id={`${props.id}-input-search-mss`}
                    placeholder={placeholderSearch || t("COMMON:SEARCH")}
                    size={size}
                    onChange={handleSearch}
                  />
                )}
                {props.isAll && (
                  <LIST_V_2_0_2
                    key={0}
                    isCheckbox
                    size={size}
                    titleLabel={"All"}
                    isSelect={true}
                    onClickList={(evt) => handleSelectAllChange(evt)}
                    isCheckboxSelected={isAllSelected}
                    id={0}
                  />
                )}
                {_.map(options, (el, index) => (
                  <LIST_V_2_0_2
                    value={_.map(selectedValues, (el) => el.id)}
                    key={index}
                    isCheckbox
                    size={size}
                    isSelect={true}
                    id={el.id}
                    titleLabel={el.value}
                    onClickList={(evt) => handleOptionChange(evt)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {valid === false && (
        <ErrorInformation
          size={size}
          text={props?.errormessage}
          maxWidth={maxWidthError}
        />
      )}
    </>
  );
}

export default function MultipleSelect(props) {
  return (
    <I18nextProvider i18n={i18nConfig}>
      <MultipleSelectBase {...props} />
    </I18nextProvider>
  );
}

MultipleSelect.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  valid: PropTypes.any,
  errormessage: PropTypes.string,
  value: PropTypes.any,
  option: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  mainColor: PropTypes.string,
  id: PropTypes.string,
  textLabel: PropTypes.string,
  onBottomScroll: PropTypes.func,
  placeholderSearch: PropTypes.string,
  handleSearch: PropTypes.func,
  maxWidthError: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MultipleSelect.defaultProps = {
  size: "md",
  disabled: false,
  valid: null,
  errormessage: "",
  selectedValues: [],
  handleChange: () => {},
  onBottomScroll: () => {},
  options: [],
  mainColor: "",
  id: "",
  count_data: 2,
  textLabel: "",
  handleSearch: null,
};
