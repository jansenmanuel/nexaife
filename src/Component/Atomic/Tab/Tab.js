import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { getSize, getSizeClass } from '../../Utils/Tab/TabUtils';
import style from './Tabs.module.scss';

const Tab = ({
    defaultActiveKey,
    items,
    size,
    showIcon,
    activeColor,
    inactiveColor,
    iconColor,
    id,
    onChange,
    ...props
}) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);
    const [indicatorColor, setIndicatorColor] = useState(activeColor);
    const { iconSize, gap, sizeClass } = getSize(size);
    const sizeContainerClass = getSizeClass(size);

    useEffect(() => {
        setIndicatorColor(activeColor);
        setActiveKey(defaultActiveKey);
    }, [activeColor, defaultActiveKey]);

    const onChangeActiveKey = (key) => {
        setActiveKey(key);
        if (onChange) onChange(key);
    };

    const customLabel = (key, label, Icon, isError) => {
        const isActive = activeKey === key;
    
        return (
            <span
                className={`${style.tabContent}`}
                style={{
                    color: isError && isActive ? 'red' : isActive ? activeColor : 'inherit',
                    gap: gap,
                }}
            >
                {showIcon && Icon && (
                    <div
                        style={{
                            width: iconSize,
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Icon
                            color={isError && isActive ? 'red' : isActive ? activeColor : iconColor}
                            size={iconSize}
                            style={{
                                color: isError && isActive ? 'red' : isActive ? activeColor : iconColor,
                                fontSize: iconSize,
                            }}
                        />
                    </div>
                )}
                <h1
                    className={sizeClass}
                    style={{
                        color: isError && isActive ? 'red' : isActive ? activeColor : inactiveColor,
                    }}
                >
                    {label}
                </h1>
            </span>
        );
    };

    // Determine if the active tab has an icon    

    // Determine if the active tab has an error
    const activeTabIsError = items.find(item => item.key === activeKey)?.isError;

    const dynamicStyles = {
        '--indicator-color': activeColor,
        '--indicator-border-width': size === 'sm' ? '1px' : '2px'
    };

    return (
        <div
            className={`${style.container} ${sizeContainerClass} ${
                activeTabIsError ? style.containerError : ''
            }`}
            id={id}
        >
            <Tabs
                defaultActiveKey={defaultActiveKey}
                activeKey={activeKey}
                onChange={onChangeActiveKey}
                indicatorColor={indicatorColor}
                style={dynamicStyles}
                {...props}
                items={items.map((item) => ({
                    ...item,
                    label: customLabel(item.key, item.label, item.icon, item.isError),
                    id: item.key,
                }))}
            />
        </div>
    );
};

export default Tab;

Tab.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.elementType,
            isError: PropTypes.bool,
        })
    ),
    size: PropTypes.string,
    showIcon: PropTypes.bool,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    iconColor: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
};

Tab.defaultProps = {
    items: [],
    size: 'md',
    showIcon: true,
    activeColor: '#1D1D1D',
    inactiveColor: '#424242',
    iconColor: '#1D1D1D',
    onChange: null,
};
