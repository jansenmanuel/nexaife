// TooltipService.js
import { Tooltip, Popover } from 'antd';

export const TooltipsGetType = (type) => {
    switch (type) {
        case 'table':
            return { component: Tooltip };
        case 'chart':
            return { component: Popover };
        case 'default':
            return { component: Popover };
        default:
            return null;
    }
};
