import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import Div from "../../Atomic/Container/Div/Div";
import Input from "../../Atomic/Input/Input/Input";
import ButtonV223 from "../../Atomic/Button/Button";
import {Divider} from "antd";
import style from "./InputButton.module.scss";
import useOutsideClick from "../../Utils/useOutsideClick";
import _ from "lodash";

const InputButton_V_2_2_3 = ({size, labelButton, mainColor, ...props}) => {
  const wrapperInputButton = useRef(null);
  const [clickedInput, setClickedInput] = useState(false);
  useOutsideClick(
    wrapperInputButton,
    props.disabled ? () => {
    } : (e) => setClickedInput(e)
  );
  const mainColors = "--main-color";
  return (
    <Div
      style={{[mainColors]: mainColor}}
      ref={wrapperInputButton}
      id={props.id}
      // className={clickedInput ? style[`parentInputButton${_.startCase(size)}Active`] :  style[`parentInputButton${_.startCase(size)}`]}
    >
      <Input
        width={props.width}
        mainColor={mainColor} size={size} onChange={(e) => console.log(e.target.value)} button={<ButtonV223
        className={style[`setCenter${_.startCase(size)}`]}
        size={size}
        label={labelButton}
        buttonType={"link"}
        inputbutton
      />}/>
      {/* <Div
        className={style[`childParentInput${_.startCase(size)}`]}
      > */}
      {/* Untuk Size Input */}
      {/* <Input size={size} className={style[`selectBorderNone${_.startCase(size)}`]} />
        <Divider style={{ height: "16px", margin: 0 }} type="vertical" />
        <ButtonV223
          className={style[`setCenter${_.startCase(size)}`]}
          size={size}
          label={labelButton}
          buttonType={"link"}
        />
      </Div> */}
    </Div>
  );
};

InputButton_V_2_2_3.defaultProps = {
  size: "sm",
  labelButton: "Button",
};

InputButton_V_2_2_3.propTypes = {};

export default InputButton_V_2_2_3;
