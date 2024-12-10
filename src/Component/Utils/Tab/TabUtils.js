import style from '../../Atomic/Tab/Tabs.module.scss';
import _ from 'lodash';

export const getSize = (size) => {
    const sizeLower = size.toLowerCase();
    let iconSize, gap;

    switch (sizeLower) {
        case 'sm':
            iconSize = '16.5px';
            gap = '4px';
            break;
        case 'md':
            iconSize = '19.5px';
            gap = '8px';
            break;
        case 'lg':
            iconSize = '24px';
            gap = '12px';
            break;
        default:
            iconSize = '19.5px';
            gap = '8px';
    }

    return {
        iconSize: iconSize,
        gap: gap,
        sizeClass: style[`Title${_.startCase(size)}`]
    };
};

export const getSizeClass = (size) => {
    return style[`tabsContainer${_.startCase(size)}`];
};
