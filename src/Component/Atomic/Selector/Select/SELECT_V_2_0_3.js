import React, { useCallback, useMemo, useRef, useState } from "react";
import style from "./select.module.scss";
import PropTypes from "prop-types";
import LIST_V_2_0_2 from "../../List/LIST_V_2_0_2";
import _ from "lodash";
import NcChevronDown from "../../../Asset/Icon/NcChevronDown";
import NcChevronUp from "../../../Asset/Icon/NcChevronUp";
import { Icon } from "../../../Asset/Icon";
import { getSizeIconSameSize } from "../../../Services/utils";
import useOutsideClick from "../../../Utils/useOutsideClick";
import ErrorInformation from "../../Error/ErrorInformation";

function SELECT_V_2_0_3({
  mainColors,
  size,
  value,
  option,
  handleChange,
  error,
  valid,
  ...props
}) {
  const optionsRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleOptionClick = (options) => {
    handleChange(options?.data);
    setIsOpen(false);
  };

  useOutsideClick(
    selectRef,
    props.disabled
      ? () => {}
      : (e) => {
          if (isOpen) {
            setIsOpen(false);
          }
        }
  );

  const handleSelectClick = () => {
    props?.disabled ? setIsOpen(false) : setIsOpen(!isOpen);
  };

  const isAtBottom = () => {
    if (!selectRef.current) return false;

    const selectBounds = selectRef.current.getBoundingClientRect();
    return window.innerHeight - selectBounds.bottom - 10 < selectBounds.height;
  };

  const getFontRight = () => {
    if (props?.disabled) {
      return style[`selectInput_DB_${_.startCase(size)}_V2_0_3`];
    } else if (value === null) {
      return style[`selectInput_PH_${_.startCase(size)}_V2_0_3`];
    } else {
      return style[`selectInput_ACT_${_.startCase(size)}_V2_0_3`];
    }
  };

  const mainColor = "--main-color-select";

  const getSearchValue = useCallback(
    (values) => {
      if (values && !_.isNil(values?.id)) {
        let find = _.find(option, (el) => el.id === values?.id);
        return find?.value;
      } else if (values && !_.isNil(values?.value)) {
        return values?.value;
      } else if (values) {
        let findById = _.findIndex(option, (el) => el.id == values);
        let findByValue = _.findIndex(option, (el) => el.value == values);
        if (findById !== -1) {
          return option[findById].value;
        } else if (findByValue !== -1) {
          return option[findByValue].value;
        } else {
          return values;
        }
      } else if (props.placeholder) {
        return props.placeholder;
      } else {
        return "Select Option";
      }
    },
    [value, option]
  );

  //   const getValue = useMemo(() => getSearchValue(value),[value,option])

  const getClassContainerSelect = () => {
    if (props.disabled) {
      return style[`containerSelectSize${_.startCase(size)}DisabledV2_0_3`];
    } else if (valid === false) {
      return style[`containerSelectSize${_.startCase(size)}ErrorV2_0_3`];
    } else {
      return style[`containerSelectSize${_.startCase(size)}V2_0_3`];
    }
  };

  const getGapSelect = () => {
    if (size.toLowerCase() === 'sm') {
        return '4px'
    } else if (size.toLowerCase() === 'md') {
        return '6px'
    } else if (size.toLowerCase() === 'lg') {
        return '8px'
    } else if (size.toLowerCase() === 'xl') {
        return '10px'
    } else if (size.toLowerCase() === 'xxl') {
        return '12px'
    } 
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={style[`LabelText${_.startCase(size)}`]}>
          {props?.phonenumber === false && <label>{props.textlabel}</label>}
        </div>
        <div
          onClick={() => {
            handleSelectClick();
          }}
          style={{
            [mainColor]: mainColors,
            width: props.width
          }}
          id={props.id}
          ref={selectRef}
          className={getClassContainerSelect()}
        >
          <div style={{ display: "flex", width: "100%", gap: getGapSelect(),alignItems:'center' }}>
            <div style={{flexGrow: 1}} className={getFontRight()}>{getSearchValue(value)}</div>
            <div>
              {isOpen ? (
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
            ref={optionsRef}
          >
            {isOpen &&
              _.map(option, (el, index) => (
                <LIST_V_2_0_2
                  key={index}
                  size={size}
                  isSelect={true}
                  id={el.id}
                  titleLabel={el.value}
                  onClickList={(evt) => handleOptionClick(evt)}
                />
              ))}
          </div>
        </div>
      </div>
      {valid === false && (
        <ErrorInformation size={size} text={props?.errormessage} />
      )}
    </>
  );
}

SELECT_V_2_0_3.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  valid: PropTypes.any,
  errormessage: PropTypes.string,
  value: PropTypes.any,
  option: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  mainColor:PropTypes.string,
  phonenumber: PropTypes.bool,
  id: PropTypes.string
};

SELECT_V_2_0_3.defaultProps = {
  size: "sm",
  disabled: false,
  valid: null,
  errormessage: "",
  value: null,
  handleChange: () => {},
  option: [],
  mainColor: "",
  phonenumber: false,
  id:''
};

export default SELECT_V_2_0_3;
