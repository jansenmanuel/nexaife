import React from 'react';

declare const sizes : ["sm", "md", "lg"];
export type size = typeof sizes[number];

export interface LegendProps {
    id?: string | number;
    size?: size;
    color?: string;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

declare const Legend: React.FC<LegendProps>;

export default Legend