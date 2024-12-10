import React from 'react';

declare const size : ["sm", "md", "lg"];
export type sizes = typeof size[number];

interface TabProps {
    id : string | number,
    size : sizes,
    showIcon : boolean,
    activeColor : string,
    inactiveColor : string,
    iconColor : string,
    defaultActiveKey : string,
    onChange : (key : string) => void
}

declare const Tab: React.FC<TabProps>;

export default Tab