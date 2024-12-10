import React, { useState } from 'react';

import DoubleMonth from './DoubleMonth/DoubleMonth';
import SingleMonth from './SingleMonth/SingleMonth';

export const dateNow = new Date();
const DatePickerRange = props => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [visibility, setVisibility] = useState(undefined);
  const handleVisibility = async evt => {
    if (visibility === undefined) {
      setVisibility(false);
    } else {
      setVisibility(undefined);
    }
  };
  const closeCalender = async evt => {
    // await evt.preventDefault();
    handleVisibility();
  };
  const doneClick = async evt => {
    // await evt.preventDefault();
    handleVisibility();
    const e = {
      target: {name: props.name, value: date, type: "date"},
    };
    props.onChange(e);
  };
  return (
    <>
      {props.showDoubleView ? (
        <DoubleMonth
        visibility={visibility}
        date={date}
        setDate={setDate}
        handleVisibility={handleVisibility}
        doneClick={doneClick}
        closeClick={closeCalender}
        inputDate={props.value}
        size={props.size}
        name={props.name}
        value={props.value}
        defaultValue={props.value}
        format={props.format}
        formatSelectDate={props.formatSelectDate}
        formatMonth={props.formatMonth}
        formatDay={props.formatDay}
        labelCancel={props.labelCancel}
        labelDone={props.labelDone}
        id={props.id}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        placeholder={props.placeholder}
        disabled={props.disabled}
        pattern={props.pattern}
        title={props.title}
        required={props.required}
        className={props.className}
        classInput={props.classInput}
        onChange={e => props.onChange(e)}
        />
      ) : (
        <SingleMonth
          visibility={visibility}
          date={date}
          setDate={setDate}
          handleVisibility={handleVisibility}
          doneClick={doneClick}
          closeClick={closeCalender}
          inputDate={props.value}
          size={props.size}
          name={props.name}
          value={props.value}
          defaultValue={props.value}
          format={props.format}
          formatSelectDate={props.formatSelectDate}
          formatMonth={props.formatMonth}
          formatDay={props.formatDay}
          labelCancel={props.labelCancel}
          labelDone={props.labelDone}
          id={props.id}
          onClick={props.onClick}
          onKeyUp={props.onKeyUp}
          placeholder={props.placeholder}
          disabled={props.disabled}
          pattern={props.pattern}
          title={props.title}
          required={props.required}
          className={props.className}
          classInput={props.classInput}
          onChange={e => props.onChange(e)}
        />
      )}
    </>
  );
};

export default DatePickerRange;
DatePickerRange.defaultProps = {
  value: "",
  labelCancel: "Cancel",
  labelDone: "Done",
};
