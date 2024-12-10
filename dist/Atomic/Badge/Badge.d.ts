import React from 'react';

declare const sizes : ["sm", "md", "lg", "xl", "xxl"];
declare const types : ["Pill", "Legend", "Icon"];
export type size = typeof sizes[number];
export type type = typeof types[number];

export interface BadgeProps {
    size?: size;
    type?: type;
    color?: string;
    content?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

declare const Badge: React.FC<BadgeProps>;

export default Badge;