import React from "react";
import PropTypes from "prop-types";
import style from "./List.module.scss";
import _ from "lodash";
import CheckBoxv1 from "../Checkbox/Checkbox/Checkbox";
import NcArrowRight from "../../Asset/Icon/NcArrowRight";
import Toggle from "../Toggle/Toggle";
import {
  LIST_CHECKBOX,
  LIST_CHECKBOX_ONLY,
  LIST_DEFAULT,
  LIST_SELECT,
  LIST_TOGGLE,
  LIST_TOGGLE_ONLY,
} from "../../Constant/ListConstant";
import { useEffect } from "react";
import {Avatar as AVATAR_V_2_0_2} from "../../index";

const List = (
  {
    id,
    size,
    captionLabel,
    titleLabel,
    isCheckbox,
    prefixIcon,
    isToggle,
    detailLabel,
    onClickDetail,
    isSelect,
    mainColor,
    isCheckboxSelected,
    onClickList,
    value,
    onClickCheckbox,
    onClickToggle,
    card,
    className,
    styles,
    ...props
  },
) => {
  const getSizeArrow = () => {
    if (_.startCase(size) === "Sm") {
      return 16;
    } else if (_.startCase(size) === "Md") {
      return 20;
    } else if (_.startCase(size) === "Lg") {
      return 24;
    } else if (_.startCase(size) === "Xl") {
      return 28;
    } else if (_.startCase(size) === "Xxl") {
      return 40;
    }
  };

  const [checkValue, setCheckValue] = React.useState(false);

  useEffect(() => {
    if (isCheckbox) {
      let findValue = _.some(value, (el) => {
        return el === id;
      });
      if (findValue) {
        setCheckValue(true);
      } else {
        setCheckValue(false);
      }
    }
  }, [value, id]);

  const clickOption = () => {
    if (!isCheckbox && !isSelect && !isToggle) {
      defaultClickList();
    } else if (isCheckbox && isSelect) {
      ClickCheckbox();
    } else if (isCheckbox && !isSelect) {
      defaultClickList();
    } else if (isToggle) {
      ClickToggle();
    } else if (detailLabel !== undefined && !isSelect) {
      ClickDetail();
    } else if (isSelect) {
      ClickOptionSelect();
    }
  };

  const ClickCheckbox = () => {
    setCheckValue(!checkValue);
    onClickList({
      type: LIST_CHECKBOX,
      data: {
        id: id,
        value: titleLabel,
        checked: !checkValue,
      },
    });
  };

  const defaultClickList = () => {
    onClickList({
      type: LIST_DEFAULT,
      data: {
        value: value,
      },
    });
  };

  const ClickToggle = () => {
    onClickList({
      type: LIST_TOGGLE,
      data: {
        value: value,
      },
    });
  };

  const OnChangeToggle = (e) => {
    onClickToggle({
      type: LIST_TOGGLE_ONLY,
      value: e,
    });
  };

  const ClickDetail = () => {};

  const ClickOptionSelect = () => {
    onClickList({
      type: LIST_SELECT,
      data: {
        id: id,
        value: titleLabel,
      },
    });
  };

  const onClickCheckboxNotSelect = () => {
    onClickCheckbox({
      type: LIST_CHECKBOX_ONLY,
      data: {
        id: id,
      },
    });
  };

  const gapDoubleXl =
    (isCheckbox || prefixIcon) && size === "xxl"
      ? style[`containerList${_.startCase(size)}16`]
      : style[`containerList${_.startCase(size)}`];

  const cardContainer = card ? style.containerCard : ''
  const combinedClassName = `${gapDoubleXl} ${cardContainer} ${className ? className : ''}`.trim();

  const titleLabelClassName = `${style[`titleLabel${_.startCase(size)}`]} ${card ? style.titleLabelCard : ''}`.trim();
  const captionLabelClassName = `${style[`captionLabel${_.startCase(card ? 'lg' : size)}`]}`;


  return (
    <div
      id={id}
      onClick={isSelect ? clickOption : () => {}}
      className={gapDoubleXl}
      style={props.style}
    >
      {isCheckbox && (
        <CheckBoxv1
          id={id}
          onChange={
            isCheckbox && !isSelect ? onClickCheckboxNotSelect : undefined
          }
          color={mainColor}
          check={typeof isCheckboxSelected !== 'undefined' ? isCheckboxSelected : checkValue}
          size={size}
        />
      )}
      {prefixIcon}
      {card ? <AVATAR_V_2_0_2 /> : null}
      <div
        onClick={!isSelect ? clickOption : () => {}}
        className={style.containerMainTitle}
      >
        <div className={titleLabelClassName}>
          {titleLabel}
        </div>

        {captionLabel && (
          <div className={captionLabelClassName}>
            {captionLabel}
          </div>
        )}
      </div>
      {detailLabel && (
        <div
          onClick={onClickDetail}
          className={style[`detailLabel${_.startCase(size)}`]}
        >
          {detailLabel}
        </div>
      )}
      {isToggle && (
        <div>
          <Toggle
            onChange={(e) => {
              OnChangeToggle(e);
            }}
            label={null}
            checkColor={mainColor}
            size={_.lowerCase(size)}
          />
        </div>
      )}
      {!isSelect && (
        <div onClick={onClickDetail} className={style.containerIcon}>
          {<NcArrowRight size={getSizeArrow()} />}
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  size: PropTypes.string,
  titleLabel: PropTypes.string,
  captionLabel: PropTypes.string,
  isCheckbox: PropTypes.bool,
  prefixIcon: PropTypes.object,
  isToggle: PropTypes.bool,
  detailLabel: PropTypes.string,
  isSelect: PropTypes.bool,
  onClickDetail: PropTypes.func,
};

List.defaultProps = {
  size: "sm",
  titleLabel: "Title List",
  captionLabel: "",
  isCheckbox: false,
  prefixIcon: null,
  isToggle: false,
  isSelect: false,
  detailLabel: "",
  onClickDetail: () => {},
  onClickList: () => {},
  onClickToggle: () => {},
};

export default List;
