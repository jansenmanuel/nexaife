import { Input } from 'antd'
import React, { useRef } from 'react'
import './PrePostInput.scss';
import _ from "lodash";
import ErrorInformation from '../../Error/ErrorInformation';

const PrePostInput = ({
    id,
    disabledField,
    onChange,
    size,
    addonBefore,
    addonAfter,
    defaultValue,
    textLabel,
    isOptional,
    required,
    name,
    value,
    maxWidth,
    placeholder,
    onKeyPress,
    errorInformation,
    errorField
}) => {
    const wrapperInput = useRef(null)
    const widthSize = "--custom-size-fixed-value";
    const borderInputLeft = "--border-input-radius-left";
    const borderInputRight = "--border-input-radius-right";
    const borderColorCondition = "--border-color-condition";
    const borderColorLeft = "--border-color-left-condition"
    const borderColorRight = "--border-color-right-condition"

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div className={textLabel && `LabelText${_.startCase(size)}`}>
                {textLabel && <label>{textLabel}</label>}
                {isOptional && <label className={"optionalText"}>(Optional)</label>}
            </div>
            <div className='custom-field-input'>
                <Input
                    style={{
                        [widthSize]: maxWidth,
                        [borderInputLeft]: addonBefore ? 0 : "10px",
                        [borderInputRight]: addonAfter ? 0 : "10px",
                        [borderColorCondition]: errorField ? "#ff4d4f" : "#DADCDE",
                        [borderColorLeft]: errorField && !addonBefore ? "#ff4d4f" : "#DADCDE",
                        [borderColorRight]: errorField && !addonAfter ? "#ff4d4f" : "#DADCDE",

                    }}
                    name={name}
                    ref={wrapperInput}
                    id={id}
                    className={
                        // maxWidth? 'custom-size-fixed-value' :
                        'custom-size-'.concat(size)}
                    addonBefore={addonBefore}
                    addonAfter={addonAfter}
                    disabled={disabledField}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    required={required}
                    value={value}
                    placeholder={placeholder}
                    onKeyPress={onKeyPress}
                />
                {errorInformation && errorField ? (
                    <ErrorInformation text={errorInformation} size={size} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default PrePostInput

PrePostInput.defaultProps = {
    id: null,
    disabledField: false,
    onChange: () => { },
    size: "md",
    addonBefore: "www.",
    addonAfter: ".com",
    defaultValue: null,
    required: false
}