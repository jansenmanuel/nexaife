import React from 'react';

declare const sizes : ["sm", "md", "lg"];
export type size = typeof sizes[number];

export interface LegendGroupProps {
    size?: size;
    items: {
        title: string;
        color?: string;
    }[];
}

declare const LegendGroup : React.FC<LegendGroupProps>;

export default LegendGroup